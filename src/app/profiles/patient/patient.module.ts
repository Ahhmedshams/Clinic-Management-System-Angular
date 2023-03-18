import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPatientComponent } from './get-patient/get-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

@NgModule({
  declarations: [GetPatientComponent, UpdatePatientComponent],
  imports: [CommonModule],
  exports: [GetPatientComponent, UpdatePatientComponent],
})
export class PatientModule {}
