import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Post} from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService implements Resolve<Post[]> {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.getPosts();
  }

}
