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
  getArchive(){
    return this.http.get<Medicine[]>(this.baseUrl+"archive")
  }
  getById(id:Number){
    return this.http.get<Medicine>(this.baseUrl+id)
  }
  deleteById(id:Number){
    return this.http.delete(this.baseUrl+id)
  }

  edit(patient:Medicine){
   return this.http.patch(this.baseUrl+patient._id,patient)
 }


}
