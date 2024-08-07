import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {

  mailId: string ='';

  constructor(private router: Router){}
  onSubmit(){
    console.log('Forget password request:', {mailId: this.mailId});
    this.router.navigate(['/login'])
  }
}
