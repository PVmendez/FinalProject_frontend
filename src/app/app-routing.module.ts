import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashboardVulnerableProjectsComponent } from './pages/dashboard-vulnerable-projects/dashboard-vulnerable-projects.component';
import { DashboardByEngineComponent } from './pages/dashboard-by-engine/dashboard-by-engine.component';
import { DashboardByVulnerabilityComponent } from './pages/dashboard-by-vulnerability/dashboard-by-vulnerability.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/authGuard';
import { SignupComponent } from './signup/signup.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
