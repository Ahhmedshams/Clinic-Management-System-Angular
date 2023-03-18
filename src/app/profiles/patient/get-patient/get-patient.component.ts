import { Component } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-get-patient',
  templateUrl: './get-patient.component.html',
  styleUrls: ['./get-patient.component.css'],
})
export class GetPatientComponent {
  patientObj: Patient = new Patient(0, '', '', 0, '', 0, '');
  constructor(public patientService: PatientService) {
    this.patientService.getById(3).subscribe((data) => {
      this.patientObj = data;
    });
  }
}
