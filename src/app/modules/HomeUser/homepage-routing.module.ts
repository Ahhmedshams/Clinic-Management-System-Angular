import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/home/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { PrescriptionListComponent } from './components/prescription/prescription-list/prescription-list.component';
import { ServicesComponent } from './components/home/servicesHome/services.component';
import { HomepageComponent } from './homepage.component';
// import { DoctorsComponent } from './components/findDoctors/doctors.component';
import {  findDoctorsComponent } from './components/findDoctors/findDoctors.component';

const routes: Routes = [
  {
    path: '',
  component: HomepageComponent,
    children: [
  {path:"Home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"services",component:ServicesComponent},
  {path:"Home/find_doctors",component:findDoctorsComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {path:"**",component:NotFoundComponent},
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
