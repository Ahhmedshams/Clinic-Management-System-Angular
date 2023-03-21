import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ReciptionestProfileComponent } from './reciptionest/reciptionest-dashboard/reciptionest-profile.component';
import { RegisterationComponent } from './registeration/registeration.component';

const routes: Routes = [
   {path:"",component:LoginComponent},
  // {path:"",component:ReciptionestProfileComponent},
  { path: "receptionist", component: ReciptionestProfileComponent},
  { path: "register", component: RegisterationComponent},
  { path: "login", component: LoginComponent},
  {path:"",redirectTo:"register",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
