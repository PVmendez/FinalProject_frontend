import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardVulnerableProjectsComponent } from './pages/dashboard-vulnerable-projects/dashboard-vulnerable-projects.component';
import { DashboardByEngineComponent } from './pages/dashboard-by-engine/dashboard-by-engine.component';
import { DashboardByVulnerabilityComponent } from './pages/dashboard-by-vulnerability/dashboard-by-vulnerability.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard-vulnerable-projects',
    pathMatch: 'full'
  },
  {
    path: 'dashboard-vulnerable-projects',
    component: DashboardVulnerableProjectsComponent
  },
  {
    path: 'dashboard-by-engine',
    component: DashboardByEngineComponent
  },
  {
    path: 'dashboard-by-vulnerability',
    component: DashboardByVulnerabilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
