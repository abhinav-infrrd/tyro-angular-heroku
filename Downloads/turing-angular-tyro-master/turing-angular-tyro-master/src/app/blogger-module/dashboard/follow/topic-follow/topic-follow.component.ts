import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/shared/services/topic.service';
import { Topic } from '../../../../shared/models/topic.model';


@Component({
  selector: 'app-topic-follow',
  templateUrl: './topic-follow.component.html',
  styleUrls: ['./topic-follow.component.css']
})
export class TopicFollowComponent implements OnInit {
  topics : Topic[];
  topicName : string;
  moreTopics : boolean = false;
  isFollowing : boolean = false;
  refresh  : any;

  constructor(private topicService : TopicService, private _el: ElementRef) { }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(
      res=>{
        this.topics = res;
        console.log(this.topics);
      }
    )
  }

  @HostListener('document:click', ['$event'])
  clickout(event: { target: any; }) {
    if(!this._el.nativeElement.contains(event.target)) {
      this.moreTopics = false;
    }
  }

  onSeeMore(){
    this.moreTopics = !this.moreTopics;
  }

  onFollowTopic(id: string)
  {
     this.topicService.onFollowTopic(id)
     .subscribe
     (res=>{
       console.log(res);
      }
      )
      this.ngOnInit();
      this.ngOnInit();
     
  }

  onUnfollowTopic(id: string)
  {
     this.topicService.onUnfollowTopic(id).subscribe
     (res=>{
       console.log(res)
     })
     this.ngOnInit();
     this.ngOnInit();
  }

}
