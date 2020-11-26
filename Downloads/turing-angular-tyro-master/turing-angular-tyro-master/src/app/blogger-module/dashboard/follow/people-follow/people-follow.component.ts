import { HostListener } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { People } from 'src/app/shared/models/people.model';
import { PeopleService } from 'src/app/shared/services/people.service';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-people-follow',
  templateUrl: './people-follow.component.html',
  styleUrls: ['./people-follow.component.css']
})
export class PeopleFollowComponent implements OnInit {

  imageUrl : string = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
  people : People[];
  morePeople: boolean = false;

  constructor(private peopleService : PeopleService, private _el : ElementRef) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(
      res=>{
        this.people = res;
        console.log(this.people);
  })
  }

  @HostListener('document:click', ['$event'])
  clickout(event: { target: any; }) {
    if(!this._el.nativeElement.contains(event.target)) {
      this.morePeople = false;
    }
  }

  onSeeMore(){
    this.morePeople = true;
  }

  onFollow(id: string)
  {
     this.peopleService.onFollow(id).subscribe();
      this.ngOnInit();
      this.ngOnInit();
     
  }

  onUnfollow(id: string)
  {
     this.peopleService.onUnfollow(id).subscribe();
     this.ngOnInit();
     this.ngOnInit();
  }

}
