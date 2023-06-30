import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardByVulnerabilityComponent } from './pages/dashboard-by-vulnerability/dashboard-by-vulnerability.component';
import { DashboardByEngineComponent } from './pages/dashboard-by-engine/dashboard-by-engine.component';
import { DashboardVulnerableProjectsComponent } from './pages/dashboard-vulnerable-projects/dashboard-vulnerable-projects.component';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GraphsComponent } from './graphs/graphs.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { VulnerabilityGraphComponent } from './vulnerability-graph/vulnerability-graph.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectsGraphComponent } from './projects-graph/projects-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardByVulnerabilityComponent,
    DashboardByEngineComponent,
    DashboardVulnerableProjectsComponent,
    DashboardComponent,
    LoginComponent,
    FormComponent,
    MenuComponent,
    GraphsComponent,
    VulnerabilityGraphComponent,
    UserProfileComponent,
    ProjectsGraphComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
