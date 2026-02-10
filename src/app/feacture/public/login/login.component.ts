import { Component } from '@angular/core';
import { SecurityService } from '../../../core/services/security.service';
import { UserLoginRequest } from '../../../core/models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userLogin : UserLoginRequest = {
    email:"halima@gmail.com",
    password:""
  };

  constructor(private securityService: SecurityService, private router : Router ) { }
  

  onLogin(){

    //alert("Login attemptes" + JSON.stringify(this.userLogin));


    const LoginResult=this.securityService.login(this.userLogin);
    console.log("Login avec email:", this.userLogin);
    if(LoginResult!=null){
     this.router.navigate(['/private/dashbord']);
    }else{
      console.log("Login échoué: Email ou mot de passe incorrect");
    }
  }

}
