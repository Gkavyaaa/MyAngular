import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm!: FormGroup;
    constructor(
      private LoginService:LoginService,
      private formBuilder: FormBuilder,
      private router: Router
    ) {
      this.initializeForm();
      this.loginForm.valueChanges.subscribe((res) => {
        console.log('value change event -->', res);
      })
    }
    initializeForm() {
      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: new FormControl('', [Validators.minLength(2), Validators.maxLength(8)])
      });
    }
    user:User=new User;
    userLogin(){
      console.log(this.user)
      this.LoginService.loginUser(this.user).subscribe((resultData: any) => {
        if (resultData.auth) {
          let isauth = (resultData.auth === 'true');
        if(isauth){
          localStorage.setItem('data',JSON.stringify(resultData));
          this.router.navigate(['dashboard']);
        } 
      } 
      });
  }
}
