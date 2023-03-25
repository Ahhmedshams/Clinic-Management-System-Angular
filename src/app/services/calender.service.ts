import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calendar } from '../models/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  baseUrl = 'http://localhost:8080/calender/'
  constructor(public http:HttpClient) {}

  getAll(){
    return this.http.get<Calendar[]>(this.baseUrl)
  }
  getById(id:Number){
    return this.http.get<Calendar>(this.baseUrl+id)
  }
  deleteById(id:Number){
    return this.http.delete(this.baseUrl+id)
  }

}
