import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user = {
    id: '1',
    username: 'Username',
    email: 'prueba',
    full_name: 'Full Name',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
  };
  userPhotoUrl: string = '';

  selectedSegment: string = 'segment1';

  selectSegment(segment: string) {
    this.selectedSegment = segment;
  }

  constructor(
    private authService: AuthenticationService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  async ngOnInit() {
    const user = await this.profileService.getUser();
    this.user = user;
  }

  public logOutUser() {
    this.authService.logout();
  }

  public settingsRouter() {
    this.router.navigateByUrl('/settings');
  }
}
