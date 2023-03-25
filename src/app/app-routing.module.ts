import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/HomeUser/components/home/about/about.component';
import { HomeComponent } from './modules/HomeUser/components/home/home.component';
import { ServicesComponent } from './modules/HomeUser/components/home/servicesHome/services.component';
import { HomepageComponent } from './modules/HomeUser/homepage.component';

const routes: Routes = [

  {
    path: '',
  // component:HomepageComponent
    loadChildren: () =>
      import('./modules/HomeUser/homepage.module').then((m) => m.HomepageModule),
  
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
