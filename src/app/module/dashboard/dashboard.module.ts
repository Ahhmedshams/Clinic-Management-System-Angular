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
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';


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
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    NgToastModule,
    NgConfirmModule
  ]
})
export class DashboardModule { }
