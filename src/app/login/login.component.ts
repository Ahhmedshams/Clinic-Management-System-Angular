import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import {JwtHelperService}from '@auth0/angular-jwt'
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
    return this.userLogForm.get('password');  //تسهيل عشان الhtml 
  }

  
  userLogForm!:FormGroup;

  
  radioList = [
    { name: 'Doctor', value: 'doctor', checked: false },
    { name: 'Receptionist', value: 'employee', checked: false },
    { name: 'Patient', value: 'patient', checked: false },
  ];


  ngOnInit() {
    // Setting default selection in FormControl
    // let getCheckedRadio = null;
    // this.radioList.forEach((o) => {
    //   if (o.checked) getCheckedRadio = o.value;
    // });

    
    this.userLogForm= this.fb.group({
      email:['',Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)],
      password:['',[Validators.required]],
      // typeOptions:[getCheckedRadio, [Validators.required]]
    });
  }
  constructor(public fb:FormBuilder ,public authService:AuthServiceService,public router:Router,private _snackBar: MatSnackBar ){}

  token:any;
  decodedToken:any;
  helper=new JwtHelperService();
  login(){
    console.log(this.userLogForm.value);
    this.authService.login(this.userLogForm.value).subscribe(
      (data:any)=>
      {
        console.log("-=-=---=-=-=-=-=---=-=--=-")
        console.log(data.token),
        localStorage.setItem('token',data.token)
        this.decodedToken=this.helper.decodeToken(data.token)
        console.log("amrr deocded token");
        console.log(this.decodedToken);
        this.router.navigateByUrl('/receptionist');
      },
      err=>console.log(err)
      );


      // this.authService.login(this.userLogForm.value).subscribe((_token)=>{
      //   this.token=_token;
      //   this.decodedToken=this.helper.decodeToken(this.token.token);
      //   if(this.token){
      //     if(this.decodedToken.id){
      //       localStorage.setItem('id',this.decodedToken.id)
      //       localStorage.setItem('role',this.decodedToken.role)
      //       if(this.decodedToken.role=="employee")
      //       this.router.navigateByUrl('/receptionist/'+this.decodedToken.id)
      //       else if(this.decodedToken.role=="doctor")
      //       this.router.navigateByUrl('/doctor'+this.decodedToken.id)
      //       else this.router.navigateByUrl('/patient'+this.decodedToken.id)
      //     }
      //     else{
      //       this.router.navigateByUrl('/receptionist')
      //       localStorage.setItem('role',this.decodedToken.role)
      //     }
      //   }else{
      //     alert('invalid Credentials');
      //   }
      // },err=>{
      //   console.clear();
      //   this._snackBar.open("Your Email Or Password Incorrect","ok");
    //    }
    //   )
      
         
    // }


  }
}


