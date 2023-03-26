import { Component, OnChanges, OnInit,AfterViewInit} from '@angular/core';
import { Calendar } from 'src/app/models/calendar';
import { Doctor } from 'src/app/models/doctor';
import { CalenderService } from 'src/app/services/calender.service';
import { DoctorService } from 'src/app/services/doctor.service';
import * as moment from 'moment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PopupComponent } from '../components/popup/popup.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent  implements OnInit  , AfterViewInit{
  modalRef: MdbModalRef<PopupComponent> | null = null;

  schedule =new Array<Schedule>({name:"Show" , code:""} );
  TMRSchedule =new Array<Schedule>({name:"Show" , code:""} );
  doctorID:Number = 1
  value:Number = 4;
  today:boolean = false;
  tomorrow:boolean= false;
  TodaySelect!:Schedule;
  TMRSelect!:Schedule;
  doctor:Doctor = new Doctor(1,"","","",1,"","",1,1);
  calender!:Calendar;
  constructor(
    private doctorService:DoctorService,
    private calenderService:CalenderService,
    private appointmentService:AppointmentService,
    public modalService:MdbModalService,

  ){}

  ngOnInit(): void {
    
    this.doctorService.getById(this.doctorID).subscribe((data)=>{
      this.doctor = data;
    })
    this.initTodayCal()
    this.initTMRCal()
    

  }

  initTodayCal():void{
    this.calenderService.getTodayCalender(this.doctorID).subscribe((data)=>{
      if(data[0]){
        this.calender = data[0];
        this.schedule.pop()
        this.calender.schedule.forEach(element => {
         this.schedule.push({ name: element, code: element })
        }); 
      }else{
        this.schedule[0].name="Not Avalible"
      }
       
    })
  }

  initTMRCal():void{
    this.calenderService.getTMRCal(this.doctorID).subscribe((data)=>{
      if(data[0]){
        this.calender = data[0];
      this.calender.schedule.forEach(element => {
       this.TMRSchedule.push({ name: element, code: element })
      });
      }else{
        console.log("empty")
        this.TMRSchedule[0].name="Not Avalible"
      }
         
    })
  }
  

  ngAfterViewInit(): void {
    console.log("cc")
  }
 
  excBookToday(){
    let todayDate = new Date();
    let dayFormat =  moment(todayDate).format("yyyy-MM-DD");
    let data =  {
      doctor:this.doctorID,
      date:dayFormat,
      startAt:this.TodaySelect.code
    }

    this.appointmentService.post(1,data).subscribe(res=>{
      console.log(res)
    })
  }

  bookToDay(){
   let messege =`Are You wont to book Today Appointment At ${this.TodaySelect.code} `
    this.modalRef = this.modalService.open(PopupComponent, {
      modalClass: 'modal-dialog-centered',
      data:{messege}
    });
    this.modalRef.onClose.subscribe((messege?)=>{
      if(messege){
        this.excBookToday()
      }
    })
    
  }



  excBookTMR(){
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 1)
    let dayFormat =  moment(todayDate).format("yyyy-MM-DD");
    console.log(dayFormat)
    let data =  {
      doctor:this.doctorID,
      date:dayFormat,
      startAt:this.TMRSelect.code
    }

    this.appointmentService.post(1,data).subscribe(res=>{
      console.log(res)
    })
  }
  bookToTMR(){
    let messege =`Are You wont to book Tomoorrow Appointment At ${this.TMRSelect.code} `
    this.modalRef = this.modalService.open(PopupComponent, {
      modalClass: 'modal-dialog-centered',
      data:{messege}
    });
    this.modalRef.onClose.subscribe((messege?)=>{
      if(messege){
        this.excBookToday()
      }
    })
  }
}




interface Schedule {
    name: String,
    code: String
}

