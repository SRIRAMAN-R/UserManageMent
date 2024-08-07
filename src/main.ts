import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginComponent } from './app/login/login.component';
import { NewuserComponent } from './app/newuser/newuser.component';
import { ForgetpasswordComponent } from './app/forgetpassword/forgetpassword.component';
import { AdminComponent } from './app/admin/admin.component';

const routes: Routes =[
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'newuser',component:NewuserComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'admin',component:AdminComponent},

];

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routes),
    provideHttpClient(),
  ]
});
