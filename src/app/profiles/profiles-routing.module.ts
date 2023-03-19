import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPatientComponent } from './patient/get-patient/get-patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';

const routes: Routes = [
  { path: 'patient/:id', component: GetPatientComponent },
  { path: 'patient/update/:id', component: UpdatePatientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesRoutingModule {}
