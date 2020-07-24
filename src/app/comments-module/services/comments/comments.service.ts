import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../../models/Comment';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentsService implements Resolve<Comment[]>{

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    return this.getComments();
  }
}
