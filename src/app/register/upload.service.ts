import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { 

  }

  uploadProfile(body:any){        
    return this.http.post("backend/upload",body,);
  }

  registerUser(body:any){        
    return this.http.post("backend/register",body,);
  }

  loginUser(body:any){
    return this.http.post("backend/login",body);
  }

  getUsers(){
    return this.http.get("backend/users");
  }

  getUserById(id:any){
      return this.http.get("backend/user/"+id)
  }

  updateUser(id:any,body:any){
    return this.http.put("backend/user/"+id,body);
  }
}
