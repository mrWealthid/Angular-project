import { Routes } from '@angular/router';
import { Error404Component } from './404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

export const appRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  { path: '404', component: Error404Component },

  //default path
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
