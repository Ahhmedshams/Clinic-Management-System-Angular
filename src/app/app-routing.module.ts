import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gaurds/auth.guard';
import { LoginComponent } from './login/login.component';
import { AllRegisterComponent } from './all-register/all-register.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  { path: "register", component:AllRegisterComponent},
  { path: "login", component: LoginComponent},
  {path:"",redirectTo:"register",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
