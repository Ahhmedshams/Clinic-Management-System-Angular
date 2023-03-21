import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService :AuthServiceService,private router:Router){}
  canActivate(
    route:ActivatedRouteSnapshot
  ):boolean{
    if(this.authService.loggedIn()){
      if(route.url.length>0){
        let menu=route.url[0].path;
        if((menu=='receptionist'||menu=='patient'||menu=='admin')&&(this.authService.getRole()=="admin")){
          return true;
        }else if((menu=='receptionist')&&(this.authService.getRole()=="employee")){
          return true;
        }
        else if((menu=='patient')&&(this.authService.getRole()=="patient")){
          return true;
        }else{
          this.router.navigate(['']);
          alert("you dont have access");
          return false;
        }
      }else{
        return true
      }
    }
    else {
      this.router.navigateByUrl('/login')
      return false
    }
  }
  
}
