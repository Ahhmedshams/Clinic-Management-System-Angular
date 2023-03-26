import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPatientComponent } from './patient/get-patient/get-patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { GetEmployeeComponent } from './empolyee/get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './empolyee/update-employee/update-employee.component';
import { GetDoctorComponent } from './doctor/get-doctor/get-doctor.component';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
import { AppointmentComponent } from './patient/appointment/appointment.component';
import { DocAppointmentComponent } from './doctor/appointment/appointment.component';
import { CalenderComponent } from './doctor/calender/calender.component';

const routes: Routes = [
  { path: 'patient/:id', component: GetPatientComponent },
  { path: 'patient/update/:id', component: UpdatePatientComponent },
  { path: 'patient/appointment/:id', component: AppointmentComponent },

  { path: 'employee/:id', component: GetEmployeeComponent },
  { path: 'employee/update/:id', component: UpdateEmployeeComponent },
  { path: 'doctor/:id', component: GetDoctorComponent },
  { path: 'doctor/update/:id', component: UpdateDoctorComponent },
  { path: 'doctor/appointment/:id', component: DocAppointmentComponent },
  { path: 'doctor/calender/:id', component: CalenderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesRoutingModule {}
