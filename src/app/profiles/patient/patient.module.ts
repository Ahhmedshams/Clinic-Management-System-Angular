import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPatientComponent } from './get-patient/get-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ProfilesRoutingModule } from '../profiles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [GetPatientComponent, UpdatePatientComponent],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [GetPatientComponent, UpdatePatientComponent],
})
export class PatientModule {}
