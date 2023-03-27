import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './modules/HomeUser/components/home/about/about.component';
import { ServicesComponent } from './modules/HomeUser/components/home/servicesHome/services.component';
import { HomepageComponent } from './modules/HomeUser/homepage.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'dashbord',
    loadChildren: () =>
      import('./module/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profiles/profiles.module').then((p) => p.ProfilesModule),
  },

  {
    path: '',
    // component:HomepageComponent
    loadChildren: () =>
      import('./modules/HomeUser/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'dashbord',
    loadChildren: () =>
      import('./module/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
