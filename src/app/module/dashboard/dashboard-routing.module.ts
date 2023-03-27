import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppointmentComponent } from './appointment/appointment.component';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { ReportComponent } from './report/report.component';

// const routes: Routes = [
//   {path:'',
//   children:[

//     //{ path: 'about', component: AboutComponent}
// ]}
// ];
const routes : Routes = [
  { path: '', component:DashboardComponent , children:[
    { path: 'main', component: MainComponent },
    { path: 'report', component: ReportComponent },
    {path:"medicines",loadChildren:()=>import('./medicine/medicine.module').then(m=>m.MedicineModule)},
    { path: 'appointment', loadChildren:()=>import('./appointment/appointment.module').then(m=>m.AppointmentModule)} ,

  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
