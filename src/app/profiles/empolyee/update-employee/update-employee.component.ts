import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  newEmp: Employee = new Employee(0, '', new Date(), '', 0, 0, '', '', '');
  constructor(
    public empService: EmployeeService,
    public activatedRouter: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((i) => {
      this.empService.getById(i['id']).subscribe((data) => {
        data.status == 'active'
          ? (this.newEmp = data)
          : this.router.navigateByUrl('');
      });
    });
  }
  edit(emp: Employee) {
    const url = `/profile/employee/${this.newEmp._id}`;

    this.empService.edit(emp).subscribe();
    this.router.navigateByUrl(url);
  }
  cancel() {
    const url = `/profile/employee/${this.newEmp._id}`;
    this.router.navigateByUrl(url);
  }
}
