import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecentPostsComponent } from './dashboard/recent-posts/recent-posts.component';
import { TrendingPostsComponent } from './dashboard/trending-posts/trending-posts.component';
import { PeopleFollowComponent } from './dashboard/follow/people-follow/people-follow.component';
import { TopicFollowComponent } from './dashboard/follow/topic-follow/topic-follow.component';
import { FollowComponent } from './dashboard/follow/follow.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { MatDividerModule } from '@angular/material/divider';
import { CreatePostComponentComponent } from './create-post-component/create-post-component.component';
import { AddTopicsComponent } from './create-post-component/add-topics/add-topics.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NewPostComponent } from './create-post-component/new-post/new-post.component';
import { BloggerRoutingModule } from './blogger-routing.module';
import { NewPostService } from '../shared/services/new-post.service';
import { DateAgoPipe } from '../shared/pipes/date-ago.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    DashboardComponent,
    RecentPostsComponent,
    TrendingPostsComponent,
    PeopleFollowComponent,
    TopicFollowComponent,
    FollowComponent,
    HeaderComponent,
    CreatePostComponentComponent,
    AddTopicsComponent,
    NewPostComponent,
    DateAgoPipe
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatRippleModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BloggerRoutingModule,
    MatTooltipModule
  ],
  providers: [NewPostService]
})

export class BloggerModuleModule { }
