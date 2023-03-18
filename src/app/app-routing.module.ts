import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch:'full' },
  {path:'dashbord',loadChildren:()=>import("./module/dashboard/dashboard.module").then(m=>m.DashboardModule)}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
