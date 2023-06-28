import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {};

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getUser("").then((user) => {
      this.user = user
    });
  }
}
