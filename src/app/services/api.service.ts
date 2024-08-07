import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApoService{
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient){}

    login(username: string, password: string): Observable<any>{
        return this.http.post('${this.apiUrl}/user/login',{username,password});
    }
    createUser(user: any): Observable<any>{
        return this.http.post('${this.apiUrl}/user',user);
    }
    forgetPassword(email: string) :Observable<any>{
        return this.http.post('${this.apiUrl}/user/forgetpassword',email,{
            headers: { 'Content-Type': 'application/json'}
        });
    }

}