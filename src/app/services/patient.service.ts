import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http' ;
import { Patient } from '../models/patient';
import { Appointment } from '../models/appointment';
// import { Appointment } from '../models/appointment';
 
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUrl = 'http://localhost:8080/patient/'
  constructor(public http:HttpClient) {
    this.http.get<Patient>(this.baseUrl).subscribe(data=>{
      console.log("data")
    })
  }

  getAll(){
    return this.http.get<Patient[]>(this.baseUrl)
  }
  getById(id:Number){
    return this.http.get<Patient>(this.baseUrl+id)
  }
  deleteById(id:Number){
    return this.http.delete(this.baseUrl+id)
  }

  edit(patient:Patient){
   return this.http.patch(this.baseUrl+patient._id,patient)
 }

 updateStatus(id:Number,status:any){
  return this.http.patch(this.baseUrl+id+"/status",status)
 }

 getPatientAppt(id:Number){
  return this.http.get<Appointment[]>(this.baseUrl+id+"/appointment")
 }

}
