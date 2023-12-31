import { Component, OnChanges, OnInit } from '@angular/core';
import { Engine } from 'src/app/interfaces/engine';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-by-engine',
  templateUrl: './dashboard-by-engine.component.html',
  styleUrls: ['./dashboard-by-engine.component.css']
})
export class DashboardByEngineComponent implements OnInit, OnChanges {
  engines: Engine = {
    SAST: 0,
    SCA: 0,
    IaC: 0,
  };

  date: string = '';
  dataExists: boolean = true;

  constructor(private dashboardService: DashboardService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      this.date = params['filterByDate'];
      this.engines = await this.dashboardService.getEngines(params['filterByDate'])
  
      if (this.engines.SAST == 0 && this.engines.IaC == 0 && this.engines.SCA == 0 && !!this.date) {
        this.dataExists = false;
      } else {
        this.dataExists = true;
      };
    });
  }

  ngOnChanges() {
  }
}
