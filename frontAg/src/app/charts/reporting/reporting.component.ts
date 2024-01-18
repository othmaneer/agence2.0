import { Component, ViewChild } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive,
  ApexAxisChartSeries,
  //ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
 } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
};
@Component({
  selector: 'app-chart',
  templateUrl: './reporting.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22] as ApexNonAxisChartSeries, // Ensure it's not undefined
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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
