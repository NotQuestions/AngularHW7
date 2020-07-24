import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CommentsService} from './services/comments/comments.service';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '', component: AllCommentsComponent, resolve:{fetchComments: CommentsService}
}];

@NgModule({
  declarations: [AllCommentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [CommentsService]
})
export class CommentsModule {
}
