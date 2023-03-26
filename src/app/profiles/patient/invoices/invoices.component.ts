import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/models/invoice';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent implements OnInit {
  public dataSource!: MatTableDataSource<Invoice>;
  invoices: Invoice[] = [];
  displayedColumns: string[] = ['Payment Type', 'Doctor Name', 'Date', 'Time'];
  id: Number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
