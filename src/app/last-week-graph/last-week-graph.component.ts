import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { LastWeekService } from '../services/last-week.service';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";
import { Week } from '../interfaces/week';

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-last-week-graph',
  templateUrl: './last-week-graph.component.html',
  styleUrls: ['./last-week-graph.component.css']
})
export class LastWeekGraphComponent implements OnInit {
  public chartOptions!: ChartOptions;
  @Input() weekArray!: Week;
  
  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: "distibuted",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function(chart, w, e) {
          }
        }
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["Monday"],
          ["Tuesday"],
          ["Wednesday"],
          ["Thursday"],
          ["Friday"],
          ["Saturday"],
          ["Sunday"],
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a"
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }

  ngOnChanges() {
    const numericValues = this.getSeries();
    
    this.chartOptions = {
      ...this.chartOptions,
      ...{
        series: [
          {
            data: numericValues,
          }
        ]
      },
    };
  }

  getSeries(){
    let numericSeries = [];
    numericSeries = Object.keys(this.weekArray).map(day => this.weekArray[day]);
    return numericSeries;
  }
}
