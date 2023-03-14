import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',
  children:[
    { path: '', component:DashboardComponent},
    { path: 'main', component: MainComponent},
    //{ path: 'about', component: AboutComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
