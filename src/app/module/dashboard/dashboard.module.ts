import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { ReportComponent } from './report/report.component';
import { PendingComponent } from './pending/pending.component'


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    BodyComponent,
    SidenavComponent,
    ReportComponent,
    PendingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
