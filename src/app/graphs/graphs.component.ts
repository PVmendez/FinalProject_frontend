import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApexResponsive, ChartComponent } from "ng-apexcharts";
import { Engine } from 'src/app/interfaces/engine';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})

export class GraphsComponent implements OnChanges {
  public chartOptions!: ChartOptions;
  @Input()engine!: Engine;
  @Input()currentRoute!: string;

  constructor() {

  }

  ngOnChanges() {

    let total : number;
    total = this.engine.SAST + this.engine.SCA + this.engine.IaC;

    this.chartOptions = {
      series: [this.engine.SAST*100/total, this.engine.SCA*100/total, this.engine.IaC*100/total],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: true,
              label: "Total",
              formatter: function(w) {
                return total.toString();
              }
            }
          }
        }
      },
      labels: ["SAST", "SCA", "IaC"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}