import { Component, OnInit } from '@angular/core';
import { RecentPostsService } from 'src/app/shared/services/recent-posts.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {
  imageUrl : string = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";

  recentPosts: any;

  constructor(private recentPostsServ: RecentPostsService) { }

  ngOnInit(): void {
    this.recentPostsServ.fetchRecent()
      .subscribe(posts => {    
        this.recentPosts = posts;
        console.log(this.recentPosts);
      });
  }
}
