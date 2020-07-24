import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: AllUsersComponent, resolve: {fetchUsers: UserService}}
];

@NgModule({
  declarations: [AllUsersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class UserModule { }
