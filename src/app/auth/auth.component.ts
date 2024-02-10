import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isPasswordVisible= false;
  email='';
  password=''; 
  isFormValid=false;
  
  onSubmitClicked(){
    console.log(this.email);
  }
}
