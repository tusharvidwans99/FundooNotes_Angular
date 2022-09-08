import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router ,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../Services/authguardService/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  token:any;
  constructor(private Authguardservice: AuthguardServiceService, private router: Router) {}


  canActivate(): boolean{
    this.token=this.Authguardservice.gettoken();
    if (!this.token) {  
        console.log("Warning => User token Expired!! Please login first");
        this.router.navigateByUrl('/Login');  
        
    }  

    return this.Authguardservice.gettoken();
  }
  
}
