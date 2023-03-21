import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPatientComponent } from './patient/get-patient/get-patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { GetEmployeeComponent } from './empolyee/get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './empolyee/update-employee/update-employee.component';

const routes: Routes = [
  { path: 'patient/:id', component: GetPatientComponent },
  { path: 'patient/update/:id', component: UpdatePatientComponent },
  { path: 'employee/:id', component: GetEmployeeComponent },
  { path: 'employee/update/:id', component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesRoutingModule {}
