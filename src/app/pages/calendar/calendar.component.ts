import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
  selectedDate!: string;

  constructor(private router: Router) {  }

  redirectToDashboard() {
    const date = new Date(this.selectedDate);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const dateString = `${year}-${month}-${day}`;

    const queryParams = { filterByDate: dateString };

    this.router.navigate(['/dashboard-vulnerable-projects'], { queryParams });
  }
}
