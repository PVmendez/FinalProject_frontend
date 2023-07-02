import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthenticationService } from '../services/authentication.service';
import { Notifications } from '../interfaces/notification';
import { DashboardService } from '../services/dashboard.service';
import { Project } from '../interfaces/project';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user: User = {
    id: '',
    username: '',
    email: '',
    full_name: '',
    photo: ''
  };
  projectsArray: Project[] = [];
  notifications: Project[] = [];

  constructor(private authService: AuthenticationService, private profileService: ProfileService, private dashboardService: DashboardService) { }

  async ngOnInit() {
    await this.getDatos();
    const user = await this.profileService.getUser();
    this.user = user;
  }

  async getDatos() {
    const projectsArray = await this.dashboardService.getMostVulnerableProjects()
    this.projectsArray = projectsArray;
    this.projectsArray.forEach(project => {
      if ((project.risk_level === "High" && project.levels.high >= 10) || (project.risk_level === "Medium" && project.levels.medium >= 6)) {    
        this.notifications.push(project);
      }
    });
  }

  public logOutUser() {
    this.authService.logout();
  }
}
