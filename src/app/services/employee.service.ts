import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl = 'http://localhost:8080/employee/';
  constructor(public http: HttpClient) {}

  getAll() {
    return this.http.get<Employee[]>(this.baseUrl);
  }
  getById(id: Number) {
    return this.http.get<Employee>(this.baseUrl + id);
  }
  deleteById(id: Number) {
    return this.http.delete(this.baseUrl + id);
  }

  edit(emp: Employee) {
    return this.http.patch(this.baseUrl + emp._id, emp);
  }

  updateStatus(id: Number, status: any) {
    return this.http.patch(this.baseUrl + id + '/status', status);
  }
}
