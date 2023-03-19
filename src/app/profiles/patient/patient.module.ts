import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPatientComponent } from './get-patient/get-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ProfilesRoutingModule } from '../profiles-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GetPatientComponent, UpdatePatientComponent],
  imports: [CommonModule, ProfilesRoutingModule, FormsModule],
  exports: [GetPatientComponent, UpdatePatientComponent],
})
export class PatientModule {}
