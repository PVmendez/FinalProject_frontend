import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthenticationService } from '../services/authentication.service';
import { Notifications } from '../interfaces/notification';
import { DashboardService } from '../services/dashboard.service';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user1 = {
    id: '1',
    username: 'Username',
    email: 'prueba',
    full_name: 'Full Name',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
  };

  // notifications = [{"project_name":"ShopApp","risk_level":"High","date":"2023-07-01","levels":{"high":5,"medium":5}},{"project_name":"SocialApp","risk_level":"High","date":"2023-07-01","levels":{"high":15,"medium":1}},{"project_name":"Checkout","risk_level":"Medium","date":"2023-06-29","levels":{"high":2,"medium":4}},{"project_name":"UserBlogger","risk_level":"Medium","date":"2023-06-29","levels":{"high":3,"medium":7}},{"project_name":"EcommerceApp","risk_level":"Low","date":"2023-07-03","levels":{"high":2,"medium":6}},{"project_name":"MobileCommerce","risk_level":"Low","date":"2023-07-02","levels":{"high":1,"medium":0}}];

  projectsArray: Project[] = [];
  notifications: Project[] = [];

  constructor(private authService: AuthenticationService, private profileService: ProfileService, private dashboardService: DashboardService) { }

  async ngOnInit() {
    await this.getDatos();
    console.log(this.notifications);
    const user = await this.profileService.getUser();
    this.user1 = user;
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
