import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../interfaces/user';
import { Notifications } from '../interfaces/notification';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user1: User = {
    id: '1',
    username: 'Username',
    email: 'prueba',
    full_name: 'Full Name',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
  };

  news: Notifications[] = [
    {
      user: this.user1,
      description: "gagagagagaga",
      date: '20-07-23'
    },
    {
      user: this.user1,
      description: "dfgfdfdgsdfgdsfgd",
      date: '20-07-23'
    }
  ];

  selectedSegment: string = 'segment1';

  selectSegment(segment: string) {
    this.selectedSegment = segment;
  }

  constructor(private authService: AuthenticationService, private profileService: ProfileService) {}

  async ngOnInit() {
    const user = await this.profileService.getUser();
    this.user1 = user;
  }

  public logOutUser(){
    this.authService.logout();
  }
}
