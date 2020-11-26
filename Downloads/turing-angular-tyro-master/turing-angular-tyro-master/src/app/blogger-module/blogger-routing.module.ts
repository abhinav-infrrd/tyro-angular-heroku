import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { AddTopicsComponent } from './create-post-component/add-topics/add-topics.component';
import { CreatePostComponentComponent } from './create-post-component/create-post-component.component';
import { NewPostComponent } from './create-post-component/new-post/new-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const secondaryRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'newPost', component: NewPostComponent, canActivate: [AuthGuard] },
    { path: 'newTags', component: AddTopicsComponent, canActivate: [AuthGuard] }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(secondaryRoutes)],
    exports: [RouterModule]
})
export class BloggerRoutingModule {

}
