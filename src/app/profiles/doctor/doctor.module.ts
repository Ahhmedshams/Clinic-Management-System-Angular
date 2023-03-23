import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesRoutingModule } from '../profiles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GetDoctorComponent } from './get-doctor/get-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';

@NgModule({
  declarations: [GetDoctorComponent, UpdateDoctorComponent],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [GetDoctorComponent, UpdateDoctorComponent],
})
export class DoctorModule {}
