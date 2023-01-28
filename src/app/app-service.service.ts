import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  checkIsLogin(){
    let status = localStorage.getItem("isLogin");
    return status && status=="true";
  }

  getToken(){
    return localStorage.getItem('token');
  }

  setIsLogin(data:any){
    localStorage.setItem("isLogin",data.status);
    localStorage.setItem("token",data.token);
  }
}
