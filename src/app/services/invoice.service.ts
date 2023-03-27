import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  baseUrl = 'http://localhost:8080/invoice/';

  constructor(public http: HttpClient) {}
  getAll() {
    return this.http.get<Invoice[]>(this.baseUrl);
  }
}
