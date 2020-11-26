import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './home-page/signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './home-page/login/login.component';
import { DashboardComponent } from './blogger-module/dashboard/dashboard.component';
import { CreatePostComponentComponent } from './blogger-module/create-post-component/create-post-component.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { FollowComponent } from './blogger-module/dashboard/follow/follow.component';
import { PeopleFollowComponent } from './blogger-module/dashboard/follow/people-follow/people-follow.component';
import { AuthGuard } from './core/auth.guard';

const appRoutes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
