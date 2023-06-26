import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { DashboardService } from 'src/app/services/dashboard.service';
import { getRiskColor } from 'src/app/helpers/riskColor';

@Component({
  selector: 'app-dashboard-vulnerable-projects',
  templateUrl: './dashboard-vulnerable-projects.component.html',
  styleUrls: ['./dashboard-vulnerable-projects.component.css']
})
export class DashboardVulnerableProjectsComponent {
  projectsArray: Project[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getMostVulnerableProjects().then((projectsArray) => {
      this.projectsArray = projectsArray
    });
  }

  getColor(risk: string) {
    return getRiskColor(risk);
  }
}
