import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Receptionest } from '../models/receptionest';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  baseUrl = 'http://localhost:8080/employee/';

  uReseptionest=new Receptionest(0,"",new Date(""),new Date(""),"",0,"","",{city:"",street:"",building:0});

  constructor(public http: HttpClient,private router:Router,public authService:AuthServiceService) { }

  getReceptionestById(id:number) {
     let token:any=this.authService.getToken();
     console.log("amr token");
     console.log(token)
    return this.http.get<Receptionest>(this.baseUrl+id)
  }
  updateReceptionestById() {
    return this.http.put(this.baseUrl + this.uReseptionest._id, this.uReseptionest)
   
  }
  // prepareUpdate(id:number){
  //   this.getReceptionestById(id).subscribe(data=>{
  //     this.uReseptionest = data;
  //   })
  // }
}
