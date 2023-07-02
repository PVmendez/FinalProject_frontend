import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { Project } from '../interfaces/project';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: User = {
    id: '',
    username: '',
    email: '',
    full_name: '',
    password: '',
    photo: ''
  };
  projectsArray: Project[] = [];
  notifications: Project[] = [];
  userPhotoUrl: string = '';

  constructor(
    private authService: AuthenticationService,
    private profileService: ProfileService,
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.getData();
    const user = await this.profileService.getUser();
    this.user = user;
  }

  async getData() {
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

  public settingsRouter() {
    this.router.navigateByUrl('/settings');
  }
}
