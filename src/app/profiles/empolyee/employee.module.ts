import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ProfilesRoutingModule } from '../profiles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GetEmployeeComponent, UpdateEmployeeComponent],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [GetEmployeeComponent, UpdateEmployeeComponent],
})
export class EmployeeModule {}
