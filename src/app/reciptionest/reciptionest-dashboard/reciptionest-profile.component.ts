import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Receptionest } from 'src/app/models/receptionest';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ReceptionistService } from 'src/app/services/receptionist.service';

@Component({
  selector: 'app-reciptionest-profile',
  templateUrl: './reciptionest-profile.component.html',
  styleUrls: ['./reciptionest-profile.component.css']
})
export class ReciptionestProfileComponent implements OnInit {
  
reseptionest=new Receptionest(0,"",new Date(""),new Date(""),"",0,"","",{city:"",street:"",building:0});
id=1;
employees:Receptionest[]=[];
helper=new JwtHelperService();
decodedToken:any;
  ngOnInit()
  {
    let token=JSON.stringify(this.authService.getToken());
    this.decodedToken=this.helper.decodeToken(token)
    console.log("====ID=====")
    console.log(this.decodedToken.id)

    this.reciptionestService.getReceptionestById(this.decodedToken.id).subscribe(
      data=>{
        console.log("=======================");
        console.log(data);
        this.reseptionest=data;
      },
      err=>{ if(err instanceof HttpErrorResponse){
        if(err.status===401)
          this.router.navigateByUrl('/login')
      }
    })
    // this.getAll()
  }
  constructor(public reciptionestService:ReceptionistService,public authService:AuthServiceService, public activateRouter: ActivatedRoute, public router: Router,public http:HttpClient){

  }

  getAll(){
    return this.http.get<Receptionest[]>("http://localhost:8080/employee").subscribe(data=>{
    console.log(data);  
    this.employees=data})
  }

}
