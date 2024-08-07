import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='';
  password:string='';
  constructor(private router: Router  ){}
  onSubmit(){
    console.log('Login form submitted:', {username: this.username,password: this.password});
    this.router.navigate(['/admin'])
  }
reset(){
  this.username ='';
  this.password='';
}
newUser(){
  this.router.navigate(['/newuser']);
}
forgetPassword(){
  this.router.navigate(['/forgetpassword']);
}
}
