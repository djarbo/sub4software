import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from '@app/tasks/tasks.component';
import { CasesComponent } from './cases/cases.component';
import { ReportsComponent } from '@app/reports/reports.component';
import { HomeComponent } from '@app/home/home.component';
import { SettingsComponent } from 'app/settings/settings.component';
import { CalendarComponent } from '@app/calendar/calendar.component';
import { PageNotFoundComponent } from '@app/shared/page-not-found/page-not-found.component';
import { DashboardComponent } from '@app/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'cases',
    component: CasesComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
