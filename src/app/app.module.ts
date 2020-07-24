import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {UserModule} from './user-module/user.module';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'all-users', loadChildren: () => import('./user-module/user.module').then(m => m.UserModule),
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
