import { Component, NgModule } from '@angular/core';
import { SecurityService } from '../../../core/services/security.service';
import { UserLoginRequest } from '../../../core/models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userLogin : UserLoginRequest = {
    email:"",
    password:""
  };

  errorMessage : string = ""; 

  constructor(private securityService: SecurityService, private router : Router ) { }
  

  onLogin(formCtrl:NgForm):void{

    //alert("Login attemptes" + JSON.stringify(this.userLogin));

    if(formCtrl.invalid){
      this.errorMessage = "Veuillez remplir correctement le formulaire.";
      return;
    }


    const LoginResult=this.securityService.login(this.userLogin);
    console.log("Login avec email:", this.userLogin);
    if(LoginResult!=null){
     this.router.navigate(['/private/dashbord']);
    }else{
      console.log("Login échoué: Email ou mot de passe incorrect");
    }
  }

  isFieldInvalid(fieldName:string,formCtrl:NgForm):boolean{
    const fieldCtrl = formCtrl?.controls[fieldName];
    return !!(fieldCtrl && fieldCtrl.invalid && (fieldCtrl.dirty || fieldCtrl.touched));
  }

}
