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
import { DocAppointmentComponent } from './appointment/appointment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TableModule } from 'primeng/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ButtonModule } from 'primeng/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import { MatTabsModule } from '@angular/material/tabs';
import { CalenderComponent } from './calender/calender.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    GetDoctorComponent,
    UpdateDoctorComponent,
    DocAppointmentComponent,
    CalenderComponent,
  ],
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
    TableModule,
    ButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    NgToastModule,
    NgConfirmModule,
    MatTabsModule,
    MatSelectModule,
  ],
  exports: [GetDoctorComponent, UpdateDoctorComponent],
})
export class DoctorModule {}
