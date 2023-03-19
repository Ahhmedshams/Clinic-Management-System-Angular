import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css'],
})
export class UpdatePatientComponent {
  newPatient: Patient = new Patient(0, '', '', 0, '', 0, '');
  constructor(
    public patientService: PatientService,
    public activatedRouter: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((i) => {
      this.patientService.getById(i['id']).subscribe((data) => {
        this.newPatient = data;
      });
    });
  }
  edit(patient: Patient) {
    const url = `/profile/patient/${this.newPatient._id}`;

    this.patientService.edit(patient).subscribe();
    this.router.navigateByUrl(url);
  }
  cancel() {
    const url = `/profile/patient/${this.newPatient._id}`;
    this.router.navigateByUrl(url);
  }
}
