import {Component, OnInit, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog) { }

  canActivate(
    route: ActivatedRouteSnapshot
  ): boolean {
    if (this.authService.loggedIn()) {
      if (route.url.length > 0) {
        let menu = route.url[0].path;
        alert(menu);
        if ((menu == 'doctors' || menu == 'patients' || menu == 'employees' || menu == 'dashboard'|| menu == 'medicine') && (this.authService.getRole() == "admin")) {
          return true;
        }
        else if(menu =="profile")
        {
          let menu2=route.url[1].path
           if ((menu2 == 'doctor') && (this.authService.getRole() == "doctor")) {
            return true;
          }
          else if ((menu2 == 'patient') && (this.authService.getRole() == "patient")) {
            return true;
          } else if ((menu2 == 'employee') && (this.authService.getRole() == "employee")) {
            return true;
          }
          else{
            this.router.navigate(['']);
          this.dialog.open(UpdateDialogComponent, {
            data: {
              message: `You Don't Have Access!`,
            },
          });
          return false;
          }
        }else {
          this.router.navigate(['']);
          // alert("ssssssss")
          this.dialog.open(UpdateDialogComponent, {
            data: {
              message: `You Don't Have Access!`,
            },
          });
          return false;
        }
      } else {
        return true
      }
    }
    else {
      this.router.navigateByUrl('/login')
      return false;
}
}

}
