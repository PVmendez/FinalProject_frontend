import { Component, OnInit } from '@angular/core';
import { getWeekColor } from 'src/app/helpers/getColors';
import { Week } from 'src/app/interfaces/week';
import { LastWeekService } from 'src/app/services/weekly-view.service';

@Component({
  selector: 'app-last-week',
  templateUrl: './weekly-view.component.html',
  styleUrls: ['./weekly-view.component.css']
})
export class LastWeekComponent implements OnInit{
  weekArray: Week = {};
  weekDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private lastWeekService: LastWeekService) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.weekArray = await this.lastWeekService.getThisWeekVulnerabilities();
    return this.weekArray;
  }

  getWeekColor(day: string) {
    return getWeekColor(day);
  }
}
