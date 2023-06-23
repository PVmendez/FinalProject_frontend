import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard-vulnerable-projects',
  templateUrl: './dashboard-vulnerable-projects.component.html',
  styleUrls: ['./dashboard-vulnerable-projects.component.css']
})
export class DashboardVulnerableProjectsComponent {
  projectsArray: Project[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getMostVulnerableProjects().subscribe(projects => {
      this.projectsArray = projects;
    });
  }
  
  getRiskColor(riskLevel: string) {
      switch (riskLevel) {
        case 'high':
          return 'red';
        case 'medium':
          return 'yellow';
        case 'low':
          return 'green';
        default:
          return 'black'; // Color predeterminado si el valor no coincide con ninguna opción
      }
    }
    
  }
