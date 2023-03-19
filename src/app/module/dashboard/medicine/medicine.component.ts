import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent {
// @Input() active=true;
medicine:Medicine[]=[];
medicineArchive:Medicine[]=[];
public  dataSource!: MatTableDataSource<Medicine>;
public  dataSource2!: MatTableDataSource<Medicine>;
displayedColumns: string[] = ['id', 'drugName', 'dosage', 'price','quantity','exp_date','action'];

@ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;

 constructor(public medicineService:MedicineService, public router:Router) {}
 ngOnInit(){
  //

    this.medicineService.getAll().subscribe(data=>{
      this.medicine=data;
      this.dataSource = new MatTableDataSource(this.medicine);
      this.dataSource.paginator = this.paginator;
      // console.log(this.medicine)
    })

}
  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
archiveFunc(){
  console.log("")
  this.router.navigateByUrl('/archive')
  this.dataSource2.sort = this.sort;
    this.medicineService.getArchive().subscribe(data=>{
      this.medicineArchive=data;
      this.dataSource2 = new MatTableDataSource(this.medicineArchive);
      this.dataSource2.paginator = this.paginator;
      this.dataSource2.sort = this.sort;
      console.log(this.medicine)
    })
}
}
