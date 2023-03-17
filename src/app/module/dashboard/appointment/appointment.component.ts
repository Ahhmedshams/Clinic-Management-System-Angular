import { Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
 appointment:Appointment[]=[];
 public dataSource!: MatTableDataSource<Appointment>;
 displayedColumns: string[] = ['id', 'name', 'Dr name', 'date','time'/*,'Scaned'*/,'action'];

 @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 constructor(public appointmentService:AppointmentService){}
 ngOnInit(){
  this.appointmentService.getAll().subscribe(data=>{
    this.appointment=data;
    this.dataSource = new MatTableDataSource(this.appointment);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
console.log(this.appointment)
  })
 }
 printData(){
  console.log(this.appointment);
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
