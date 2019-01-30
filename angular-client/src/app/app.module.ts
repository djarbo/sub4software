import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from '@app/calendar/calendar.component';
import { CasesComponent } from '@app/cases/cases.component';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { HomeComponent } from '@app/home/home.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';
import { ReportsComponent } from '@app/reports/reports.component';
import { SettingsComponent } from '@app/settings/settings.component';
import { SidebarComponent } from '@app/shared/sidebar/sidebar.component';
import { TasksComponent } from '@app/tasks/tasks.component';
import { PageNotFoundComponent } from '@app/shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CasesComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    ReportsComponent,
    SettingsComponent,
    SidebarComponent,
    TasksComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
