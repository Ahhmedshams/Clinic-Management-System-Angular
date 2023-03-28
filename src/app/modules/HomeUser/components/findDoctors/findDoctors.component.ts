import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-findDoctors',
  templateUrl: './findDoctors.component.html',
  styleUrls: ['./findDoctors.component.css']
})


export class findDoctorsComponent {
public doctors :any
public allSpeciality :any

constructor(public doctorService:DoctorService){}
  ngOnInit(){
    this.doctorService.getAll().subscribe(data=>{
 this.allSpeciality= [...new Set(data.map(ele=> ele.speciality ))]
        
      
      this.doctors=data;
    })
  }

  changeSearch(e:any){
    if(e.target.value){this.doctorService.getAll().subscribe(data=>{this.doctors= data.filter(ele=>
      data[ele.name.search(e.target.value[0]?.toUpperCase()+e.target.value.slice(1,)) ]
    
      
      )})} 
    else{this.doctorService.getAll().subscribe(data=>{  this.doctors=data;})}
  }




  filterBySpeciality(speciality:any){
    this.doctorService.getAll().subscribe(data=>{   this.doctors=data.filter(ele=>ele.speciality==speciality)}) }
}
