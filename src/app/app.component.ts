import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from './app-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'webapps';
  isLogin : any;

  constructor(private appServiceService:AppServiceService, private router:Router){
    this.isLogin = this.appServiceService.checkIsLogin();
  }
  ngOnInit(): void {
    this.isLogin = this.appServiceService.checkIsLogin();
  }

  logout(){
    this.appServiceService.setIsLogin(false);
    this.router.navigate(["/login"]);
  }

}
