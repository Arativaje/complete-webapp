import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AppServiceService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        
        const isLoggedIn = this.authService.checkIsLogin();
        const token = this.authService.getToken();
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: { Authorization: `${token}` }
            });
        }else{
            console.log("Skipping login and registration request");
        }

        return next.handle(request);
    }
}