import { Component } from '@angular/core';
import { Engine } from 'src/app/interfaces/engine';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard-by-engine',
  templateUrl: './dashboard-by-engine.component.html',
  styleUrls: ['./dashboard-by-engine.component.css']
})
export class DashboardByEngineComponent {
  engines: Engine[] = []

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getEngines().then((enginesArray) => {
      this.engines = enginesArray
    });
  }
}
