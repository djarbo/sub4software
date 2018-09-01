import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { CasesComponent } from './components/cases/cases.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
  }
  ,
  {
    path: 'reports',
    component: CalendarComponent
  }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes)