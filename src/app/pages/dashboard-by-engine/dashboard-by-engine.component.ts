import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard-by-engine',
  templateUrl: './dashboard-by-engine.component.html',
  styleUrls: ['./dashboard-by-engine.component.css']
})
export class DashboardByEngineComponent {

  constructor(private dashboardService: DashboardService) {}

  engines = this.dashboardService.getEngines();
}
