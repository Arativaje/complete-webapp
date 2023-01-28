import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from '../register/upload.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  registerForm: FormGroup;

  msg: any = "";
  id: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private uploadService: UploadService
    , private activatedRoute: ActivatedRoute) {


    this.id = this.activatedRoute.snapshot.params.id;
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      pwd: ["", Validators.required],
      userType: ["", Validators.required]

    });
    this.uploadService.getUserById(this.id).subscribe((user: any) => {
      this.registerForm.patchValue(user);
    });
  }


  register() {
    this.uploadService.updateUser(this.id,this.registerForm.value).subscribe((res: any) => {
      console.log(res);
      this.msg = "User updated Successfully";
    }, (err) => {
      console.log(err);
      this.msg = "User update Failed!";
    })
  }


}



