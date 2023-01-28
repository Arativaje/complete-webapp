import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { UploadService } from '../register/upload.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userList: any=[];

  constructor(private authService:AppServiceService, private userService:UploadService, private router:Router){
      this.userService.getUsers().subscribe(list=>{
        this.userList = list;
      });
  }

  addNewUser(){
    this.router.navigate(["addUser"]);
  }
  editUser(id:any){
    this.router.navigate(["editUser/"+id]);
  }
  deleteUser(){}
}
