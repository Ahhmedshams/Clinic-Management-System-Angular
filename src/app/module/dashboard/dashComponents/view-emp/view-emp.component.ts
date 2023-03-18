import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Employee } from 'src/app/models/employee';
@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent {

  Emp?:Employee;
  constructor(public modalRef: MdbModalRef<ViewEmpComponent>, 
    ) {}
}


