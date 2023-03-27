import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  baseUrl = 'http://localhost:8080/appointment/';
  constructor(public http: HttpClient) {}

  getAll() {
    return this.http.get<Appointment[]>(this.baseUrl);
  }
  getById(id: Number) {
    return this.http.get<Appointment>(this.baseUrl + id);
  }
  deleteById(id: Number) {
    return this.http.delete(this.baseUrl + id);
  }
  edit(id: Number, data: any) {
    return this.http.patch(this.baseUrl + id, data);
  }

  post(patientID:Number,data:any){
    return this.http.post(`http://localhost:8080/patient/${patientID}/appointment`,data)
  }


}
