import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Api from '../helpers/api';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  jwtToken = '';
  constructor(private http: HttpClient, private router: Router, private localStorage: LocalStorageService) {
    this.jwtToken = this.localStorage.get('token');
  }

  async getUser() {
    const response = Api('/user', 'GET', this.jwtToken);
    return response;
  }

  async updateUser(obj: any) {
    const response = Api('/update', 'PATCH', this.jwtToken, obj);
    return response;
  }
}
