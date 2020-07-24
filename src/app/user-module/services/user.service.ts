import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService  implements Resolve<User[]>{

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
    return this.getAllUsers();
  }
}
