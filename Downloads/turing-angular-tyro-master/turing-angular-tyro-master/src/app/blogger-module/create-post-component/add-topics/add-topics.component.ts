
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TopicService } from 'src/app/shared/services/topic.service';
import { Post } from 'src/app/shared/models/post.model';
import { NewPostService } from 'src/app/shared/services/new-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-topics',
  templateUrl: './add-topics.component.html',
  styleUrls: ['./add-topics.component.css']
})
export class AddTopicsComponent implements OnInit {

  error: string = null;
  blogTitle: string;
  blogContent: string;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  topicCtrl = new FormControl();
  filteredchosenTopics: Observable<string[]>;
  chosenTopics: string[] = [];
  chosenTopicIds: string[] = [];
  allTopicsNames: string[] = [];
  allTopics = [];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    private location: Location,
    private topicServ: TopicService,
    private postServ: NewPostService,
    private router: Router) {
    this.filteredchosenTopics = this.topicCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allTopicsNames.slice()));
  }

  ngOnInit(): void {
    this.topicServ.getTopics().subscribe(topics => {
      this.allTopics = topics;
      topics.forEach(element => {
        this.allTopicsNames.push(element.topicName);
      });
      this.chosenTopics.push(this.allTopicsNames[0]);
    })
    this.blogContent = this.postServ.post.blog;
    this.blogTitle = this.postServ.post.title;

    if (!this.blogContent || !this.blogTitle) {
      this.router.navigate(['/newPost']);
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    let value = event.value;
    this.error = null;

    // Add our topic
    if ((value || '').trim()) {
      if (!this.allTopicsNames.includes(value)) {
        this.error = value + " is not present in the list.";
      }
      value = "";
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.topicCtrl.setValue(null);
  }


  remove(fruit: string): void {
    const index = this.chosenTopics.indexOf(fruit);

    if (index >= 0) {
      this.chosenTopics.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {


    this.error = null;
    if (this.chosenTopics.length < 5) {
      if (this.chosenTopics.includes(event.option.viewValue)) {
        this.error = event.option.viewValue + " is already selected."
      }
      else {
        this.chosenTopics.push(event.option.viewValue.trim());
      }
    }
    else {
      this.error = "Limit reached! You cannot add more.";
    }

    this.topicCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTopicsNames.filter(topic => topic.toLowerCase().indexOf(filterValue) === 0);
  }

  onCancel() {
    this.location.back();
  }

  getTopicId(selectedTopics: string[]) {
    this.chosenTopics.forEach(element => {
      var index = this.allTopics.findIndex(x => x.topicName === element);
      this.chosenTopicIds.push(this.allTopics[index]._id);
    });
  }

  publish() {
    this.getTopicId(this.chosenTopics);
    this.postServ.sendNewPost(this.blogTitle, this.chosenTopicIds, this.blogContent).subscribe(responseData => {
      //console.log(responseData);
      this.router.navigate(['/dashboard']);
      localStorage.removeItem('blog');
      localStorage.removeItem('heading');
    });
  }
}

