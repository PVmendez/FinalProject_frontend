import { Injectable } from '@angular/core';
import { DayVulnerabilities } from '../interfaces/day-vulnerabilities';

@Injectable({
  providedIn: 'root'
})
export class LastWeekService {

  testArray: DayVulnerabilities[] = [
    {day: "Monday",total: 42},
    {day: "Tuesday", total: 25},
    {day: "Wednesday", total: 13},
    {day: "Thursday", total: 50},
    {day: "Friday", total: 66},
    {day: "Saturday", total: 1},
    {day: "Sunday", total: 0}
  ]

  constructor() { }

  getLastWeekVulnerabilities() {
    return this.testArray;
  }
}
