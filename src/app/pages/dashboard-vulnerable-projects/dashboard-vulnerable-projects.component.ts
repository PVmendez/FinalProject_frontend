import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard-vulnerable-projects',
  templateUrl: './dashboard-vulnerable-projects.component.html',
  styleUrls: ['./dashboard-vulnerable-projects.component.css']
})
export class DashboardVulnerableProjectsComponent {
  projectsArray: any[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getMostVulnerableProjects().then((projectsArray) => {
      this.projectsArray = projectsArray
    });
  }
  
  getRiskColor(riskLevel: string) {
      switch (riskLevel) {
        case 'High':
          return 'red';
        case 'Medium':
          return 'yellow';
        case 'Low':
          return 'green';
        default:
          return 'black'; // Color predeterminado si el valor no coincide con ninguna opción
      }
    }
    
  }
