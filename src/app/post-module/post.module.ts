import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {PostsService} from './services/posts/posts.service';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: AllPostsComponent, resolve: {fetchPosts: PostsService}}

];

@NgModule({
  declarations: [AllPostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [PostsService]
})
export class PostModule { }
