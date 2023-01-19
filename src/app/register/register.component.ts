import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm : FormGroup;
  myImage: string | ArrayBuffer | null=null;
  filedata: any;
  msg: any="";
constructor(private formBuilder: FormBuilder, private router:Router, private uploadService:UploadService){

  this.registerForm = this.formBuilder.group({
    name:["",Validators.required],
    email:["",Validators.required],
    pwd:["",Validators.required],
    // file:[""]
  })

}


register(){
  this.uploadService.registerUser(this.registerForm.value).subscribe((res:any)=>{
    console.log(res);
    this.msg="User Register Successfully";
  },(err)=>{
    console.log(err);
    this.msg="User Register Failed!";
  })
}



registerWithUploadPhoto(){
  let formData = new FormData();
  formData.append('photo', this.filedata);
  formData.append('data', this.registerForm.value);
  this.uploadService.registerUser(formData).subscribe(res=>{
    console.log(res);
  },(err)=>{
    console.log(err);
  })
  console.log(this.registerForm.value);
  // this.router.navigate(['login']);
}

changePhoto(event:any){
  var reader = new FileReader();
  this.filedata = event.target.files[0];
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (_event) => {
    this.myImage = reader.result; 
  }
  console.log(this.myImage);
}
}
