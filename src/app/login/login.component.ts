import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;

  constructor( private fb:FormBuilder){

    this.loginForm = this.fb.group({
      username: ["", 
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3)
      ]
    ],
      password: ["",Validators.required]
    });
  }



 

  }

