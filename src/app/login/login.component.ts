import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {JwtHelperService}from '@auth0/angular-jwt';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  get email(){
    return this.userLogForm.get('email');  //تسهيل عشان الhtml 
  }
  get password(){
    return this.userLogForm.get('password'); 
  }
  constructor(public fb:FormBuilder ,public authService:AuthService,public router:Router,private _snackBar: MatSnackBar ){}

  userLogForm!:FormGroup;
  token:any;
  decodedToken:any;
  helper=new JwtHelperService();

  ngOnInit() {
    this.userLogForm= this.fb.group({
      email:['',Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)],
      password:['',[Validators.required]],
      // typeOptions:[getCheckedRadio, [Validators.required]]
    });
  }
  login(){
    // console.log(this.userLogForm.value);
    this.authService.login(this.userLogForm.value).subscribe(
      (data:any)=>
      {
        // console.log("-=-=---=-=-=-=-=---=-=--=-")
        // console.log(data.token);
        localStorage.setItem('token',data.token)
        this.decodedToken=this.helper.decodeToken(data.token)
        // console.log("agezy deocded token");
        // console.log(this.decodedToken);
        // this.router.navigateByUrl('/receptionist');
        localStorage.setItem('role', this.decodedToken.role);

        if (this.decodedToken.id) {
          localStorage.setItem('id', this.decodedToken.id);
          switch (this.decodedToken.role) {
            case "doctor":
              this.router.navigateByUrl(`/profile/doctor/${this.decodedToken.id}`);
              break;
            case "employee":
              this.router.navigateByUrl(`/profile/employee/${this.decodedToken.id}`);
              break;
            case "patient":
              this.router.navigateByUrl(`/profile/patient/${this.decodedToken.id}`);
              break;
            default:
              this.router.navigateByUrl(`/login`);
          }
        }else{
          this.router.navigateByUrl('/dashboard');
            }
      },
      err=>{
        // console.clear();
         this._snackBar.open("Your Email Or Password Incorrect","ok",{
          duration: 3000,
          verticalPosition: 'bottom',
         });
      }
      );
}
}
