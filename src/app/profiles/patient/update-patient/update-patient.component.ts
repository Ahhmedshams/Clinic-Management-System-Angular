import { Component } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css'],
})
export class UpdatePatientComponent {
  newPatient: Patient = new Patient(0, '', '', 0, '', 0, '');
  constructor(public patientService: PatientService) {
    this.patientService.getById(3).subscribe((data) => {
      this.newPatient = data;
    });
  }
  edit(patient: Patient) {
    this.patientService.edit(patient).subscribe();
  }
}
