import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {
  username: string='';
  password: string='';
  confirmPassword: string='';
  mailId: string='';
  role: string = 'Normal';

  constructor(private router: Router){}
  onSubmit(){
    console.log('Signup form submitted:',{
      username:this.username,
      password:this.password,
      confirmPassword:this.confirmPassword,
      mailId:this.mailId,
      role:this.role,
  });
  this.router.navigate(['/login']);
}
reset(){
  this.username ='';
  this.password ='';
  this.confirmPassword ='';
  this.mailId ='';
  this.role ='Normal';
}
}

