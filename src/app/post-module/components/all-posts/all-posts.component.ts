import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent  {
  posts: Post[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      this.posts = value.fetchPosts;
    });
  }



}
