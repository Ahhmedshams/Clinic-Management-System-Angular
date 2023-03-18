import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Calendar } from '../models/calendar';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl = 'http://localhost:8080/doctors/'
  constructor(public http:HttpClient) {}

  getAll(){
    return this.http.get<Doctor[]>(this.baseUrl)
  }
  getPending(){
    return this.http.get<Doctor[]>('http://localhost:8080/doctors?status=pending')
  }
  getActive(){
    return this.http.get<Doctor[]>('http://localhost:8080/doctors?status=active')
  }
  getById(id:Number){
    return this.http.get<Doctor>(this.baseUrl+id)
  }
  deleteById(id:Number){
    return this.http.delete(this.baseUrl+id)
  }

  accept(id:Number,updatedValue:any){
    return this.http.patch(this.baseUrl+id,updatedValue)
  }
  edit(doctor:Doctor){
   return this.http.patch(this.baseUrl+doctor._id,doctor)
 }

 updateStatus(id:Number,status:any){
  return this.http.patch(this.baseUrl+id+"/status",status)
 }
 getDocCalender(id:Number){
  return this.http.get<Calendar[]>(this.baseUrl+id+"/calender")
 }
 getDocAppt(id:Number){
  return this.http.get<Appointment[]>(this.baseUrl+id+"/appointment")
 }
 
}
