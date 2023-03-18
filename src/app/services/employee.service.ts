import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'http://localhost:8080/employee/'
  constructor(public http:HttpClient) {}

  getAll(){
    return this.http.get<Employee[]>(this.baseUrl)
  }
  getPending(){
    return this.http.get<Employee[]>('http://localhost:8080/employee?status=pending')
  }

  getActive(){
    return this.http.get<Employee[]>('http://localhost:8080/employee?status=active')
  }
  
  getById(id:Number){
    return this.http.get<Employee>(this.baseUrl+id)
  }
  deleteById(id:Number){
    return this.http.delete(this.baseUrl+id)
  }

  edit(patient:Employee){
   return this.http.patch(this.baseUrl+patient._id,patient)
 }

 updateStatus(id:Number,status:any){
  return this.http.patch(this.baseUrl+id+"/status",status)
 }

}
