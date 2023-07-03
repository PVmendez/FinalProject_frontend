import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { DashboardService } from 'src/app/services/dashboard.service';
import { getRiskColor } from 'src/app/helpers/riskColor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-vulnerable-projects',
  templateUrl: './dashboard-vulnerable-projects.component.html',
  styleUrls: ['./dashboard-vulnerable-projects.component.css']
})

export class DashboardVulnerableProjectsComponent implements OnInit {
  projectsArray: Project[] = [];
  date: string = '';
  dataExists: boolean = true;

  constructor(private dashboardService: DashboardService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      this.date = params['filterByDate'];
      this.projectsArray = await this.dashboardService.getMostVulnerableProjects(params['filterByDate']);

      if (this.projectsArray.length == 0 && !!this.date) {
        this.dataExists = false;
      } else {
        this.dataExists = true;
      };
    });
  }

  getColor(risk: string) {
    return getRiskColor(risk);
  }
}
