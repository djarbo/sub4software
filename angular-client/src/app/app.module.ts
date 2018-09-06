import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CasesComponent } from './components/cases/cases.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CasesComponent,
    ReportsComponent,
    HomeComponent,
    SettingsComponent,
    CalendarComponent,
    PageNotFoundComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
