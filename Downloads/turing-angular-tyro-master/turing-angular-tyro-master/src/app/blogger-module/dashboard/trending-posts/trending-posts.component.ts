import { Component, OnInit } from '@angular/core';
import { TrendingPostService } from 'src/app/shared/services/trending-post.service';

@Component({
  selector: 'app-trending-posts',
  templateUrl: './trending-posts.component.html',
  styleUrls: ['./trending-posts.component.css']
})
export class TrendingPostsComponent implements OnInit {
  isLoading : boolean = false;
  trendingPost: any;

  constructor(private trendService: TrendingPostService) {

  }

  ngOnInit(): void {
    this.isLoading = true;
    this.trendService.fetchTrend().subscribe(post => {
      this.isLoading = false;
      this.trendingPost = post;
      console.log(this.trendingPost);
    })

  }

}
