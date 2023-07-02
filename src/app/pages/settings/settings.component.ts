import { Router } from '@angular/router';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingComponent {
  user = {
    id: '1',
    username: 'Username',
    email: 'prueba',
    full_name: 'Full Name',
    password: 'password',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
  };
  showPassword: boolean = false;
  myForm: FormGroup;
  selectedFile: File | undefined;
  selectedFileDataUrl: string | null = null;

  constructor(
    private profileService: ProfileService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.myForm = new FormGroup({
      name: new FormControl(this.user.full_name),
      username: new FormControl(this.user.username),
      password: new FormControl(this.user.password),
    });
    this.selectedFile = undefined;
  }

  async ngOnInit() {
    const user = await this.profileService.getUser();
    this.user = user;

    this.cdr.detectChanges();
  }

  async saveChanges() {
    const updatedUser = {
      full_name: this.myForm.controls['name'].value,
      username: this.myForm.controls['username'].value,
      password: this.myForm.controls['password'].value,
      photo: this.selectedFileDataUrl,
    };
    const response = await this.profileService.updateUser(updatedUser);

    this.router.navigateByUrl('/user-profile')
    return response;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;

    const reader = new FileReader();
    reader.onload = () => {
      this.selectedFileDataUrl = reader.result as string;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(this.selectedFile);
  }
}
