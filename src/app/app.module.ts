import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardByVulnerabilityComponent } from './pages/dashboard-by-vulnerability/dashboard-by-vulnerability.component';
import { DashboardByEngineComponent } from './pages/dashboard-by-engine/dashboard-by-engine.component';
import { DashboardVulnerableProjectsComponent } from './pages/dashboard-vulnerable-projects/dashboard-vulnerable-projects.component';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './forms/login-form/login-form.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GraphsComponent } from './graphs/engine-graphs/engine-graphs.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { VulnerabilityGraphComponent } from './graphs/vulnerability-graph/vulnerability-graph.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupformComponent } from './forms/signupform/signupform.component';
import { LastWeekComponent } from './pages/weekly-view/weekly-view.component';
import { ProjectsGraphComponent } from './graphs/projects-graph/projects-graph.component';
import { LastWeekGraphComponent } from './graphs/weekly-view-graph/weekly-view-graph.component';
import { SettingComponent } from './pages/settings/settings.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

@NgModule({
  declarations: [
    CalendarPageComponent,
    AppComponent,
    DashboardByVulnerabilityComponent,
    DashboardByEngineComponent,
    DashboardVulnerableProjectsComponent,
    DashboardComponent,
    LoginComponent,
    FormComponent,
    MenuComponent,
    UserProfileComponent,
    SignupComponent,
    SignupformComponent,
    LastWeekComponent,
    GraphsComponent,
    VulnerabilityGraphComponent,
    UserProfileComponent,
    ProjectsGraphComponent,
    LastWeekGraphComponent,
    SettingComponent,
    CalendarComponent
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
