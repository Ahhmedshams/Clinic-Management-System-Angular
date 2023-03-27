import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {NgConfirmService} from 'ng-confirm-box';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-list-medicine',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
  providers:[MedicineService]
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

 constructor(public medicineService:MedicineService,
  private confirmService: NgConfirmService,
   public router:Router) {}
 ngOnInit(){
  //

    this.medicineService.getAll().subscribe(data=>{
      // data.filter(p =>p.archive==true);
      // console.log(data.filter(p =>p.archive==true));
      this.medicine=data.filter(p =>p.archive==false );
      this.medicineArchive=data.filter(p =>p.archive==true);
      this.dataSource = new MatTableDataSource(this.medicine);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource2 = new MatTableDataSource(this.medicineArchive);
      this.dataSource2.paginator = this.paginator;
      this.dataSource2.sort = this.sort;
    })

    }


  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
  applyFilter2(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource2.filter = filterValue.trim().toLowerCase();

  if (this.dataSource2.paginator) {
    this.dataSource2.paginator.firstPage();
  }
}
delete(id:number){
  this.confirmService.showConfirm("Are you sure want to delete this medicine?",
     () => {
      this.medicineService.deleteById(id).subscribe(data=>{console.log(data+"delete")})
    },
    () => {
      //yor logic if No clicked
    })
  if(confirm('Are you sure want to delete this medicine?')){

    this.medicineService.deleteById(id).subscribe(()=>{

    let stdIndex=this.medicine.findIndex(obj=>obj._id==id);
    this.medicineArchive.push( this.medicine.splice(stdIndex,1)[0]);
    this.dataSource = new MatTableDataSource(this.medicine);
    this.dataSource2 = new MatTableDataSource(this.medicineArchive);
  })
    this.router.navigateByUrl('/medicines');
  }
  }
  edit(id:number){
    this.router.navigateByUrl('/medicines/edit/'+id)

  }
  openModel(){
  let modelDiv=document.getElementById('myModal');
  if(modelDiv!=null){
    modelDiv.style.display= 'block';
  }
  }
  closeModel(){
  let modelDiv=document.getElementById('myModal');
  if(modelDiv!=null){
    modelDiv.style.display= 'none';
  }
  }
}
