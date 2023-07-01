import { Component } from '@angular/core';
import { LastWeekService } from 'src/app/services/last-week.service';

@Component({
  selector: 'app-last-week',
  templateUrl: './last-week.component.html',
  styleUrls: ['./last-week.component.css']
})
export class LastWeekComponent {
  lastWeekVulnerabilities = this.lastWeekService.getLastWeekVulnerabilities();

  constructor(private lastWeekService: LastWeekService) {}

}
