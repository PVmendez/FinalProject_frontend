import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard-vulnerable-projects',
  templateUrl: './dashboard-vulnerable-projects.component.html',
  styleUrls: ['./dashboard-vulnerable-projects.component.css']
})
export class DashboardVulnerableProjectsComponent {
  valorVariable: string = 'medium';


  constructor(private dashboardService: DashboardService) {}

  projects = this.dashboardService.getMostVulnerableProjects();

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
