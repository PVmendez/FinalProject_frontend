import { Component, OnInit } from '@angular/core';
import { Engine } from 'src/app/interfaces/engine';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard-by-engine',
  templateUrl: './dashboard-by-engine.component.html',
  styleUrls: ['./dashboard-by-engine.component.css']
})
export class DashboardByEngineComponent implements OnInit {
  engines: Engine = {
    SAST: 0,
    SCA: 0,
    IaC: 0,
  };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getEngines().then((enginesArray: Engine) => {
      this.engines = enginesArray;
    });
  }
}
