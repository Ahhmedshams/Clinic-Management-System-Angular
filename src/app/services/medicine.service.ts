import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  baseUrl = 'http://localhost:8080/medicines/'
  constructor(public http:HttpClient) {}

  getAll(){
    return this.http.get<Medicine[]>(this.baseUrl)
  }
  add(medicine:Medicine){
    return this.http.post<Medicine>(this.baseUrl,medicine);
     // this.department.push(new Department(dep._id,dep.name,dep.location))
   }
  getById(id:Number){
    return this.http.get<Medicine>(this.baseUrl+id)
  }
  deleteById(id:Number){
    console.log(id+"delete")
    return this.http.delete(this.baseUrl+id)
  }

  edit(medicine:any){
   return this.http.patch(this.baseUrl+medicine._id,medicine)
 }


}
