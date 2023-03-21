import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidation } from '../custom/password.validation';
import { AuthServiceService } from '../services/auth-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent
 {

  get patientName(){
    return this.patientRegisterForm.get('name');  //تسهيل عشان الhtml 
  }
  get patientEmail(){
    return this.patientRegisterForm.get('email');  
  }
  get patientPassword(){
    return this.patientRegisterForm.get('password');  
  }
  get patientConfirmPassword(){
    return this.patientRegisterForm.get('confirmPassword');  
  }
  get patientPhone(){
    return this.patientRegisterForm.get('phone');  
  }
  get patientAge(){
    return this.patientRegisterForm.get('age');  
  }
  get patientCity(){
    return this.patientRegisterForm.get('city');  
  }
  get patientStreet(){
    return this.patientRegisterForm.get('street');  
  }
  get patientBuilding(){
    return this.patientRegisterForm.get('building');  
  }

  get doctorName(){
    return this.doctorRegisterForm.get('name');  //تسهيل عشان الhtml 
  }
  get doctorEmail(){
    return this.doctorRegisterForm.get('email');  
  }
  get doctorPassword(){
    return this.doctorRegisterForm.get('password');  
  }
  get doctorConfirmPassword(){
    return this.doctorRegisterForm.get('confirmPassword');  
  }
  get doctorPhone(){
    return this.doctorRegisterForm.get('phone');  
  }
  get doctorAge(){
    return this.doctorRegisterForm.get('age');  
  }
  get doctorCity(){
    return this.doctorRegisterForm.get('city');  
  }
  get doctorStreet(){
    return this.doctorRegisterForm.get('street');  
  }
  get doctorBuilding(){
    return this.doctorRegisterForm.get('building');  
  }

  get employeeName(){
    return this.employeeRegisterForm.get('name');  //تسهيل عشان الhtml 
  }
  get employeeEmail(){
    return this.employeeRegisterForm.get('email');  
  }
  get employeePassword(){
    return this.employeeRegisterForm.get('password');  
  }
  get employeeConfirmPassword(){
    return this.employeeRegisterForm.get('confirmPassword');  
  }
  get employeePhone(){
    return this.employeeRegisterForm.get('phone');  
  }
  get employeeAge(){
    return this.employeeRegisterForm.get('age');  
  }
  get employeeCity(){
    return this.employeeRegisterForm.get('city');  
  }
  get employeeStreet(){
    return this.employeeRegisterForm.get('street');  
  }
  get employeeBuilding(){
    return this.employeeRegisterForm.get('building');  
  }
  
  constructor(public fb:FormBuilder ,public authService:AuthServiceService,public router:Router,private _snackBar: MatSnackBar ){}
  patientRegisterForm!:FormGroup;
  doctorRegisterForm!:FormGroup;
  employeeRegisterForm!:FormGroup;
  ngOnInit()
  {
    //Patient
    this.patientRegisterForm= this.fb.group({
      name:['',[Validators.required,Validators.maxLength(50)]],
      email:['',Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]],
      age:[''],
      gender:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)]],
      address:this.fb.group({
        city:['',[Validators.required,Validators.maxLength(20)]],
        street:['',[Validators.maxLength(50)]],
        building:[''],
      })
      // typeOptions:[getCheckedRadio, [Validators.required]]
    },{validator:passwordValidation});

    //Doctor
    this.doctorRegisterForm= this.fb.group({
      name:['',[Validators.required,Validators.maxLength(50)]],
      email:['',Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]],
      speciality:['',[Validators.required]],
      yearsOfExperience:['',[Validators.required]],
      age:[''],
      gender:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)]],
      address:this.fb.group({
        city:['',[Validators.required,Validators.maxLength(20)]],
        street:['',[Validators.maxLength(50)]],
        building:[''],
      })
      // typeOptions:[getCheckedRadio, [Validators.required]]
    },{validator:passwordValidation});


  //Employee
    this.employeeRegisterForm= this.fb.group({
      name:['',[Validators.required,Validators.maxLength(50)]],
      email:['',Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]],
      // birth_date:[''],
      gender:[''],
      phone:['',[Validators.required,Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)]],
      address:this.fb.group({
        city:['',[Validators.required,Validators.maxLength(20)]],
        street:['',[Validators.maxLength(50)]],
        building:[''],
      })
      // typeOptions:[getCheckedRadio, [Validators.required]]
    },{validator:passwordValidation});
  }

  patientRegister()
  {
    // console.log(this.userRegisterForm.value)
    this.authService.ptRegister(this.patientRegisterForm.value).subscribe(data=>console.log(data));
  }
  doctorRegister()
  {
    //console.log(this.doctorRegisterForm.value)
     this.authService.dcRegister(this.doctorRegisterForm.value).subscribe(data=>console.log(data));
  }
  employeeRegister()
  {
    //console.log(this.employeeRegisterForm.value)
    this.authService.empRegister(this.employeeRegisterForm.value).subscribe(
      data=>console.log(data),

      err=>{
          this._snackBar.open(err.error.Error,"ok");
        }
     )
  }
 }
