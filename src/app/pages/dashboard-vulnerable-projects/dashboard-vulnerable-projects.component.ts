import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { DashboardService } from 'src/app/services/dashboard.service';
import { getRiskColor } from 'src/app/helpers/riskColor';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard-vulnerable-projects',
  templateUrl: './dashboard-vulnerable-projects.component.html',
  styleUrls: ['./dashboard-vulnerable-projects.component.css']
})

export class DashboardVulnerableProjectsComponent implements OnInit{
  projectsArray: Project[] = [];
  date: string = '';

  constructor(private dashboardService: DashboardService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      this.date = params['filterByDate']
      
      const projectsArray = await this.dashboardService.getMostVulnerableProjects(params['filterByDate'])
      this.projectsArray = projectsArray;
    });

  }

  getColor(risk: string) {
    return getRiskColor(risk);
  }
}
