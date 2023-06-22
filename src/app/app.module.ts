import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardByVulnerabilityComponent } from './pages/dashboard-by-vulnerability/dashboard-by-vulnerability.component';
import { DashboardByEngineComponent } from './pages/dashboard-by-engine/dashboard-by-engine.component';
import { DashboardVulnerableProjectsComponent } from './pages/dashboard-vulnerable-projects/dashboard-vulnerable-projects.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    DashboardByVulnerabilityComponent,
    DashboardByEngineComponent,
    DashboardVulnerableProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
