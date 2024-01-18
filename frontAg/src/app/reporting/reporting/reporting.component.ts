
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexFill,
  ApexTooltip,
  ApexGrid
 } from 'ng-apexcharts';
import { ClientService } from 'src/service/client/client.service';
import { FactureService } from 'src/service/facture/facture.service';
import { ReservationService } from 'src/service/reservation/reservation.service';

 export type ChartOptions = {
  series: number[] | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
};

export type ChartOptions2 = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart| any;
  dataLabels: ApexDataLabels| any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis| any;
  fill: ApexFill | any;
  tooltip: ApexTooltip |  any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
};
export type ChartOptions3 = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart| any;
  dataLabels: ApexDataLabels| any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis| any;
  fill: ApexFill | any;
  tooltip: ApexTooltip |  any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
};

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

export type ChartOptions4 = {
  series: ApexAxisChartSeries |any;
  chart: ApexChart |any;
  dataLabels: ApexDataLabels|any;
  plotOptions: ApexPlotOptions|any;
  yaxis: ApexYAxis|any;
  xaxis: ApexXAxis|any;
  grid: ApexGrid|any;
  colors: string[]|any;
  legend: ApexLegend|any;
};


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions2>;
  public chartOptions3: Partial<ChartOptions3>;
  public chartOptions4: Partial<ChartOptions4>;




  constructor(private router: Router, private location: Location,
    private clientService : ClientService,
    private reservationService: ReservationService,
    private factureService: FactureService) {
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

    this.chartOptions2 = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val: string) {
            return "$ " + val + " thousands";
          }
        }
      }
    };

    this.chartOptions3 = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val: string) {
            return "$ " + val + " thousands";
          }
        }
      }
    };

    this.chartOptions4 = {
      series: [
        {
          name: "distibuted",
          data: [21, 22, 10, 28, 16, 21, 13, 30]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          // click: function(chart, w, e) {
          //   // console.log(chart, w, e)
          // }
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
          ["Payée"],
          ["Confirmée"],
          ["Non payée"],
          ["Annulée"],
 
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
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }
   nbClient : number | any;
  totalBrut : number | any;
  totalNet : number | any;
  nbPayee : number | any;
  nbNonPayee : number | any;
  resStatus :  any;
  chiffreMois: any[] = []; 

  chiffreMoisNet: any[] = []; 

  resType: any[] = []; 




  ngOnInit(): void {
    this.totalClient();
    console.log("nb clt: ", this.nbClient)
    this.totalFacturenet();
    console.log("nb brut: ", this.addSpacesToNumber(this.totalBrut) )

    this.totalFacturebrut();
    this.totalpayee();
    this.totalNpayee();
    this.resParStatus();
    this.chiffreDaffParMois();
    this.chiffreDaffParMoisNet();
    this.nbResParType();
  }

  totalClient()
  {
    this.clientService.totalClient().subscribe(
      (data : any) => {

        this.nbClient= data;
      }
    );
  }

  totalFacturebrut()
  {
    this.factureService.totalBrut().subscribe(
      (data : any) => {

        this.totalBrut=this.addSpacesToNumber(data);
      }
    );
  }

  totalFacturenet()
  {
    this.factureService.totalNet().subscribe(
      (data : any) => {

        this.totalNet= this.addSpacesToNumber(data);
      }
    );
  }

  totalpayee()
  {
    this.reservationService.totalPaye().subscribe(
      (data : any) => {

        this.nbPayee= data;
      }
    );
  }

  totalNpayee()
  {
    this.reservationService.totalNonPaye().subscribe(
      (data : any) => {

        this.nbNonPayee= data;
      }
    );
  }


  
  resParStatus() {
    this.reservationService.nbReservationParStatus().subscribe(
      (data: any) => {
        this.resStatus = data;
  
        // Extract the counts and labels from the API response
        const counts = this.resStatus.map((item: any) => item[1]);
        const labels = this.resStatus.map((item: any) => item[0]);
  
        // Update the chart series and labels
        this.chartOptions.series = counts;
        this.chartOptions.labels = labels;
  
        // Trigger change detection to update the chart
        this.chartOptions = { ...this.chartOptions };
      }
    );
  }


  chiffreDaffParMois() {
    this.reservationService.chifrreParMois().subscribe(
      (data: any) => {
        this.chiffreMois = data;
        console.log("chiffre: ", this.chiffreMois)
  
        // Sort the data based on months
        this.chiffreMois.sort((a: any, b: any) => {
          const monthOrder = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
  
          return monthOrder.indexOf(a[0]) - monthOrder.indexOf(b[0]);
        });
  
        // Extract data for chart2
        const categories = this.chiffreMois.map((item: any) => item[0]);
        const seriesData = this.chiffreMois.map((item: any) => item[1]);
  
        // Update the chart2 series and categories
        this.chartOptions2.series = [
          {
            name: "Chiffre d'affaires",
            data: seriesData
          }
        ];
  
        this.chartOptions2.xaxis.categories = categories;
  
        // Trigger change detection to update the chart
        this.chartOptions2 = { ...this.chartOptions2 };
      }
    );
  }

  //  chiffreDaffParMoisNet() {
  //     this.reservationService.chifrreParMoisNet().subscribe(
  //       (data: any) => {
  //         this.chiffreMoisNet = data;
  //         console.log("chiffre net: ", this.chiffreMoisNet)
    
       
  //       }
  //     );
  //   }

  chiffreDaffParMoisNet() {
    this.reservationService.chifrreParMoisNet().subscribe(
      (data: any) => {
        this.chiffreMoisNet = data;
  
        console.log("chiffre: ", this.chiffreMoisNet)
  
        // Sort the data based on months
        this.chiffreMoisNet.sort((a: any, b: any) => {
          const monthOrder = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
  
          return monthOrder.indexOf(a[0]) - monthOrder.indexOf(b[0]);
        });
  
        // Extract data for chart2
        const categories = this.chiffreMoisNet.map((item: any) => item[0]);
        const seriesData = this.chiffreMoisNet.map((item: any) => item[1]);
  
        // Update the chart2 series and categories
        this.chartOptions3.series = [
          {
            name: "Chiffre d'affaires",
            data: seriesData
          }
        ];
  
        this.chartOptions3.xaxis.categories = categories;
  
        // Trigger change detection to update the chart
        this.chartOptions3 = { ...this.chartOptions3 };
      }
      
    );
  }
  
  nbResParType() {
      this.reservationService.nbResType().subscribe(
        (data: any) => {
        //  this.resType = data;
         // console.log("nb res par type: ", this.resType)

         const types = data.map((item: any) => item[0]);
         const counts = data.map((item: any) => item[1]);
   
         // Update the chart series and categories
         this.chartOptions4.series = [
           {
             name: "Reservations",
             data: counts
           }
         ];
   
         this.chartOptions4.xaxis.categories = types;
   
         // Trigger change detection to update the chart
         this.chartOptions4 = { ...this.chartOptions4 };
        }
      );
    }

  
  
  main()
  {
    this.router.navigate(['/main']);
  }

  reporting() {
    this.location.replaceState(this.router.url);
    location.reload();
  }

  addSpacesToNumber(value: number | any): string {
    if (value || value === 0) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    return '';
  }
}
