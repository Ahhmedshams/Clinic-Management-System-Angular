import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  public dataSource!: MatTableDataSource<Appointment>;
  appointments: Appointment[] = [];
  displayedColumns: string[] = ['Doctor Name', 'Date', 'Time', 'Clinic'];
  id: Number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public appoinmentService: AppointmentService,
    public router: Router,
    public activatedRouter: ActivatedRoute,
    public patientService: PatientService
  ) {}

  ngOnInit() {
    this.activatedRouter.params.subscribe((i) => {
      this.id = i['id'];
    });
    this.patientService.getPatientAppt(this.id).subscribe((res) => {
      this.appointments = res?.data;
      this.dataSource = new MatTableDataSource(this.appointments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
