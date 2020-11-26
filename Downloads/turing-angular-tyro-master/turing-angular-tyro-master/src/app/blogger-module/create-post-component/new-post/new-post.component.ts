import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../../shared/models/post.model';
import { Router } from '@angular/router';
import { NewPostService } from '../../../shared/services/new-post.service';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  newPost: FormGroup;

  constructor(private router: Router, private newPostService: NewPostService) {
  }

  ngOnInit(): void {
    this.newPost = new FormGroup({
      'heading': new FormControl(null, Validators.required),
      'blog': new FormControl(null, Validators.required)
    });
    this.newPost.get('heading').setValue(localStorage.getItem('heading'));
    this.newPost.get('blog').setValue(localStorage.getItem('blog'));
  }

  addPost() {
    if (!this.newPost.valid) {
      return;
    }
    this.router.navigate(['/newTags']);
    console.log(this.newPost);
    const heading = this.newPost.get('heading').value;
    const blog = this.newPost.get('blog').value;
    this.newPostService.addPost(heading, blog);
    localStorage.setItem('heading',heading);
    localStorage.setItem('blog',blog);
  }
}
