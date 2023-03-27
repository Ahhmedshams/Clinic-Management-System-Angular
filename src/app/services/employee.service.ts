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
  getPending() {
    return this.http.get<Employee[]>(
      'http://localhost:8080/employee?status=pending'
    );
  }
  getBlocked() {
    return this.http.get<Employee[]>(
      'http://localhost:8080/employee?status=blocked'
    );
  }
  getById(id: Number) {
    return this.http.get<Employee>(this.baseUrl + id);
  }
}
