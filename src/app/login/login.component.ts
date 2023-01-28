import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { UploadService } from '../register/upload.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg:any;
  loginForm:FormGroup;

  constructor( private fb:FormBuilder, private service:UploadService, private router:Router, 
    private appService:AppServiceService){

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

  login(){
    this.service.loginUser(this.loginForm.value).subscribe((res:any)=>{
      this.msg = res.msg;
      this.appService.setIsLogin(res);
      this.router.navigate(["/dashboard"]);
    },err=>{
      
      this.msg = err.error.msg;
    })
  }

 

  }

