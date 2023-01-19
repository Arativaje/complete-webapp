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
}
