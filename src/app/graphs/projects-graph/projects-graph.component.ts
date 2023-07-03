import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any[];
};

@Component({
  selector: 'app-projects-graph',
  templateUrl: './projects-graph.component.html',
  styleUrls: ['./projects-graph.component.css'],
})
export class ProjectsGraphComponent implements OnInit, OnChanges {
  public chartOptions!: ChartOptions;
  @Input() projects!: Project[];

  constructor() {}

  highProjects: number = 0;
  mediumProjects: number = 0;
  lowProjects: number = 0;

  calculatetotals() {
    for (let index = 0; index < this.projects.length; index++) {
      if (this.projects[index].risk_level === 'High') {
        this.highProjects += 1;
      } else if (this.projects[index].risk_level === 'Medium') {
        this.mediumProjects += 1;
      } else if (this.projects[index].risk_level === 'Low') {
        this.lowProjects += 1;
      }
    }
  }

  ngOnInit() {
    this.chartOptions = {
      colors: ['#E73520', '#F6FA70', '#00B961'],
      series: [],
      chart: {
        height: 300,
        animations: {
          enabled: true,
        },
        type: 'donut',
      },
      labels: ['High Risk', 'Medium Risk', 'Low Risk'],
      responsive: [
        {
          breakpoint: 200,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
  ngOnChanges() {
    this.calculatetotals();

    this.chartOptions = {
      ...this.chartOptions,
      ...{
        series: [this.highProjects, this.mediumProjects, this.lowProjects],
      },
    };
  }
}
