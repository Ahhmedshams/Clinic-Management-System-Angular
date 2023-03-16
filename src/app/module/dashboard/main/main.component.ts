import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup/public-api';


import { Appointment } from 'src/app/models/appointment';
import { Calendar } from 'src/app/models/calendar';
import { Doctor } from 'src/app/models/doctor';
import { Employee } from 'src/app/models/employee';
import { Medicine } from 'src/app/models/medicine';
import { Patient } from 'src/app/models/patient';
import { AppointmentService } from 'src/app/services/appointment.service';
import { CalenderService } from 'src/app/services/calender.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { MedicineService } from 'src/app/services/medicine.service';
import { PatientService } from 'src/app/services/patient.service';
import {NgConfirmService} from 'ng-confirm-box'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements  OnInit {

  
  public dataSource!: MatTableDataSource<Doctor>;
  doctor:Doctor[]=[];
  displayedColumns: string[] = ['id', 'name', 'gender', 'email','phone','status','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public doctorService:DoctorService,
  //  private toastService:NgToastService
  private confirmService: NgConfirmService 
  ){}

  ngOnInit(){
    this.doctorService.getAll().subscribe(data=>{
      this.doctor = data;
      this.dataSource = new MatTableDataSource(this.doctor);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  print(){
    console.log(this.doctor)
  }
 

  Block(id: number) {
    this.confirmService.showConfirm("Are you sure want  to block this user?",
     () => {
      this.doctorService.updateStatus(id,{status:"blocked"}).subscribe(data=>{})
    },
    () => {
      //yor logic if No clicked
    })
  }

  accept(id:Number)
  {
    this.doctorService.updateStatus(id,{status:"active"}).subscribe(data=>
      this.doctorService.getAll().subscribe(data=>{
        this.doctor = data;}))
  }
}
