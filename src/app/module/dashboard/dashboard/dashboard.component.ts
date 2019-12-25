import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { viewClassName } from '@angular/compiler';


@Component({
  selector: 'app-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('leftPane', { static: false }) leftPane: ElementRef;
  @ViewChild('rightPane', { static: false }) rightPane: ElementRef;
  @ViewChild('waterPump', { static: false }) waterPump: ElementRef;
  @ViewChild('fertPump', { static: false }) fertPump: ElementRef;
  @ViewChild('fertPumpContainer', { static: false }) fertPumpContainer: ElementRef;
  @ViewChild('fieldBottomContent', { static: false }) fieldBottomContent: ElementRef;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;

  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  gaugeValues: any = {
    1: 100,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 50
  };

  leftPaneWidth: number;
  rightPaneWidth: number;
  waterPumpWidth: number;
  fertPumpHeight: number;
  waterPumpContainerHeight: number;
  fieldBottomContentWidth: number;

  showPumpLine = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setDimentions();

      setTimeout(() => {
        this.showPumpLine = true;
      }, 1000);
    }, 1000);
  }

  setDimentions(){
    this.leftPaneWidth = this.leftPane.nativeElement.offsetWidth;
    this.rightPaneWidth = this.rightPane.nativeElement.offsetWidth;
    this.waterPumpWidth = this.waterPump.nativeElement.offsetWidth;
    this.fertPumpHeight = this.fertPump.nativeElement.offsetHeight;

    this.waterPumpContainerHeight = this.fertPumpContainer.nativeElement.offsetHeight;
    this.fieldBottomContentWidth = this.fieldBottomContent.nativeElement.offsetWidth;
    
  }

}
