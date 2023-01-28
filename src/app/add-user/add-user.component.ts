import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadService } from '../register/upload.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  registerForm : FormGroup;

  msg: any="";
constructor(private formBuilder: FormBuilder, private router:Router, private uploadService:UploadService){

  this.registerForm = this.formBuilder.group({
    name:["",Validators.required],
    email:["",Validators.required],
    pwd:["",Validators.required],
    userType:["",Validators.required]
 
  })

}


register(){
  this.uploadService.registerUser(this.registerForm.value).subscribe((res:any)=>{
    console.log(res);
    this.msg="User saved Successfully";
  },(err)=>{
    console.log(err);
    this.msg="User save Failed!";
  })
}
}
