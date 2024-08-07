import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
const token = localStorage.getItem('token');
const username = localStorage.getItem('username');
let headers = req.headers;
if(token){
  headers = headers.set('Authorization', 'Bearer ${token}');
}
if(username){
  headers = headers.set('username', username);
}
const cloned = req.clone({headers});
return next.handle(cloned);
 }
   
 }

