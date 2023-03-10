import { Component, ViewChild } from '@angular/core';

export interface Vegetable {
  name: string;
}

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexFill,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
};

export type ChartOptionsDos = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  vegetables: Vegetable[];

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: ChartOptions;

  @ViewChild('chartdos') chartDos: ChartComponent;
  public chartOptionsDos: ChartOptionsDos;

  constructor() {
    this.vegetables = [
      { name: 'apple' },
      { name: 'banana' },
      { name: 'strawberry' },
      { name: 'orange' },
      { name: 'kiwi' },
      { name: 'cherry' },
    ];

    this.chartOptions = {
      series: [
        {
          name: 'My-series',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      title: {
        text: 'Porcentaje de ventas de los últimos meses',
      },
      xaxis: {
        categories: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
        ],
      },
    };

    this.chartOptionsDos = {
      series: [67],
      chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: undefined,
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: '22px',
              color: undefined,
              formatter: function (val) {
                return val + '%';
              },
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      },
      stroke: {
        dashArray: 4,
      },      
      title: {
        text: 'Porcentaje de ventas de los últimos meses',
      },
      labels: ['Median Ratio'],
      
    };
  }
}
