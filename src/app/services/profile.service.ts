import { Injectable } from '@angular/core';
import Api from '../helpers/api';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  jwtToken = '';
  constructor(private localStorage: LocalStorageService) {
    this.jwtToken = this.localStorage.get('token');
  }

  async getUser() {
    const response = Api('/user', 'GET', this.jwtToken);
    return response;
  }
}
