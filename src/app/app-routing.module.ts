import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashboardVulnerableProjectsComponent } from './pages/dashboard-vulnerable-projects/dashboard-vulnerable-projects.component';
import { DashboardByEngineComponent } from './pages/dashboard-by-engine/dashboard-by-engine.component';
import { DashboardByVulnerabilityComponent } from './pages/dashboard-by-vulnerability/dashboard-by-vulnerability.component';
import { LoginComponent } from './pages/login/login.component';
import { LastWeekComponent } from './pages/weekly-view/weekly-view.component';
import { AuthGuard } from './helpers/authGuard';
import { SignupComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SettingComponent } from './pages/settings/settings.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'lastWeek',
    component: LastWeekComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard-vulnerable-projects',
    component: DashboardVulnerableProjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard-by-engine',
    component: DashboardByEngineComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard-by-vulnerability',
    component: DashboardByVulnerabilityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingComponent,
     canActivate: [AuthGuard]
  },
  {
    path: 'calendar',
    component: CalendarPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
