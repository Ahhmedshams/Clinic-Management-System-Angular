import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { Doctor } from 'src/app/models/doctor';

import { DoctorService } from 'src/app/services/doctor.service';

import {NgConfirmService} from 'ng-confirm-box';
import { ViewDoctorComponent } from '../view-doctor/view-doctor.component';
@Component({
  selector: 'app-active-doc',
  templateUrl: './active-doc.component.html',
  styleUrls: ['./active-doc.component.css']
})
export class ActiveDocComponent {
  modalRef: MdbModalRef<ViewDoctorComponent> | null = null;

  public dataSource!: MatTableDataSource<Doctor>;
  doctor:Doctor[]=[];
  displayedColumns: string[] = ['id', 'name', 'gender', 'email','phone','status','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public doctorService:DoctorService,
  private confirmService: NgConfirmService,
  public dialog: MatDialog,
  public modalService:MdbModalService,

  ){}

  ngOnInit(){
    this.doctorService.getActive().subscribe(data=>{
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


  openView(doctor:any){
    this.modalRef = this.modalService.open(ViewDoctorComponent, {
      modalClass: ' modal-dialog-centered',
      data: {
        doctor,
      },
    });
        
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
}
