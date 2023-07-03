import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Engine } from 'src/app/interfaces/engine';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexResponsive,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-graphs',
  templateUrl: './engine-graphs.component.html',
  styleUrls: ['./engine-graphs.component.css'],
})
export class GraphsComponent implements OnInit, OnChanges {
  public chartOptions!: ChartOptions;
  @Input() engine!: Engine;

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      series: [],
      chart: {
        height: 300,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: false,
              label: 'Total',
            },
          },
        },
      },
      labels: ['SAST', 'SCA', 'IaC'],
      responsive: [
        {
          breakpoint: 200,
          options: {
            chart: {
              width: 80,
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
    let total: number;
    total = this.engine.SAST + this.engine.SCA + this.engine.IaC;

    this.chartOptions = {
      ...this.chartOptions,
      ...{
        series: [
          (this.engine.SAST * 100) / total,
          (this.engine.SCA * 100) / total,
          (this.engine.IaC * 100) / total,
        ],
      },
    };
  }
}
