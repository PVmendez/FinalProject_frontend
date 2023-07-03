import { Injectable } from '@angular/core';
import { DayVulnerabilities } from '../interfaces/day-vulnerabilities';
import { LocalStorageService } from 'angular-web-storage';
import Api from '../helpers/api';

@Injectable({
  providedIn: 'root'
})
export class LastWeekService {

  jwtToken = '';
  constructor(private localStorage: LocalStorageService) {
    this.jwtToken = this.localStorage.get('token');
  }

  getThisWeekVulnerabilities() {
    const response = Api('/thisweek', 'GET', this.jwtToken);
    return response;
  }
}
