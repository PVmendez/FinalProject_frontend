import { Injectable } from '@angular/core';
import { DayVulnerabilities } from '../interfaces/day-vulnerabilities';
import { LocalStorageService } from 'angular-web-storage';
import Api from '../helpers/api';

@Injectable({
  providedIn: 'root'
})
export class LastWeekService {

  // testArray: DayVulnerabilities[] = [
  //   {day: "Monday",total: 42},
  //   {day: "Tuesday", total: 25},
  //   {day: "Wednesday", total: 13},
  //   {day: "Thursday", total: 50},
  //   {day: "Friday", total: 66},
  //   {day: "Saturday", total: 1},
  //   {day: "Sunday", total: 0}
  // ]

    jwtToken = '';
  constructor(private localStorage: LocalStorageService) {
    this.jwtToken = this.localStorage.get('token');
  }

  getThisWeekVulnerabilities() {
    const response = Api('/thisweek', 'GET', this.jwtToken);
    return response;
  }
}
