import { Component, OnInit } from '@angular/core';
import { Week } from 'src/app/interfaces/week';
import { LastWeekService } from 'src/app/services/last-week.service';

@Component({
  selector: 'app-last-week',
  templateUrl: './last-week.component.html',
  styleUrls: ['./last-week.component.css']
})
export class LastWeekComponent implements OnInit{
  weekArray: Week = {};
  weekDays: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  constructor(private lastWeekService: LastWeekService) {}

  ngOnInit() {
    this.getDatos();
  }

  async getDatos() {
    this.weekArray = await this.lastWeekService.getThisWeekVulnerabilities();
    return this.weekArray;
  }
}
