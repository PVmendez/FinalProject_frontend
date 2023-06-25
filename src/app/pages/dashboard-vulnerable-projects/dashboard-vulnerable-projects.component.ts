import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { DashboardService } from 'src/app/services/dashboard.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-dashboard-vulnerable-projects',
  templateUrl: './dashboard-vulnerable-projects.component.html',
  styleUrls: ['./dashboard-vulnerable-projects.component.css']
})
export class DashboardVulnerableProjectsComponent {
  projectsArray:  Project[] = [];
  getColor = this.helper.getRiskColor;

  constructor(private dashboardService: DashboardService, private helper: HelperService) {}

  ngOnInit() {
    this.dashboardService.getMostVulnerableProjects().then((projectsArray) => {
      this.projectsArray = projectsArray
    });
  }
  }
