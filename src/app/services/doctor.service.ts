import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Calendar } from '../models/calendar';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  baseUrl = 'http://localhost:8080/doctors/';
  constructor(public http: HttpClient) {}

  getAll() {
    return this.http.get<Doctor[]>(this.baseUrl);
  }
  getById(id: Number) {
    return this.http.get<Doctor>(this.baseUrl + id);
  }
  deleteById(id: Number) {
    return this.http.delete(this.baseUrl + id);
  }

  edit(doctor: Doctor, id: Number) {
    return this.http.patch(this.baseUrl + id, doctor);
  }

  updateStatus(id: Number, status: any) {
    return this.http.patch(this.baseUrl + id + '/status', status);
  }
  getDocCalender(id: Number) {
    return this.http.get<Calendar[]>(this.baseUrl + id + '/calender');
  }
  getDocAppt(id: Number) {
    return this.http.get<Appointment[]>(this.baseUrl + id + '/appointment');
  }
}
