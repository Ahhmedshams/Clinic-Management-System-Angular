import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ProfilesRoutingModule } from '../profiles-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GetEmployeeComponent, UpdateEmployeeComponent],
  imports: [CommonModule, ProfilesRoutingModule, FormsModule],
  exports: [GetEmployeeComponent, UpdateEmployeeComponent],
})
export class EmployeeModule {}
