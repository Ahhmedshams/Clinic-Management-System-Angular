import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DividerModule } from 'primeng/divider';
import { HomeComponent } from './components/home/home.component';
import { RatingModule } from 'primeng/rating';
import { ListboxModule } from 'primeng/listbox';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    DashboardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    DividerModule,
    RatingModule,
    FormsModule ,
    ListboxModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
