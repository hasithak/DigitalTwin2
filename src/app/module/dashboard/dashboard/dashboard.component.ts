import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Schedule } from 'src/app/models/schedule';
import { Weather } from 'src/app/models/weather';
import { Sensors } from 'src/app/models/sensors';
import { FiledService } from 'src/app/services/filed.service';
import { Field } from 'src/app/models/filed';
import { Power } from 'src/app/models/power';


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
  @ViewChild('waterPumpRow', { static: false }) waterPumpRow: ElementRef;
  @ViewChild('fertPump', { static: false }) fertPump: ElementRef;
  @ViewChild('fertPumpContainer', { static: false }) fertPumpContainer: ElementRef;
  @ViewChild('fieldBottomContent', { static: false }) fieldBottomContent: ElementRef;

  public pertPieCharOptions: ChartOptions = {
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

  public pieChartColors = [
    {
      backgroundColor: ['#f8ff2b', '#f821ff', '#0dff39', '#ff841f'],
    },
  ];

  leftPaneWidth: number;
  rightPaneWidth: number;
  waterPumpWidth: number;
  fertPumpHeight: number;
  waterPumpContainerHeight: number;
  fieldBottomContentWidth: number;
  waterPumpOffsetHeight: number;
  headerHeight: number;
  waterContainerHeight: number;
  showPumpLine = false;


  field = new Field();
  schedule = new Schedule();
  weather = new Weather();
  sensors = new Sensors();
  power = new Power();

  constructor(private fieldService: FiledService) { }

  ngOnInit() {
    this.getFieldDataRepeatedly();
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.setDimentions();

      setTimeout(() => {
        this.showPumpLine = true;
      }, 1000);
    }, 1000);
  }

  getFieldDataRepeatedly() {
    setInterval(() => {
      this.getFiledData();
    }, 2000);
  }

  getFiledData() {
    this.fieldService.getField('').subscribe(
      result => {
        this.field = result.field;
        this.schedule = result.schedule;
        this.weather = result.weather;
        this.sensors = result.sensors;
        this.power = result.power;
      },
      (error) => {

      }
    );
  }

  setDimentions() {
    this.leftPaneWidth = this.leftPane.nativeElement.offsetWidth;
    this.rightPaneWidth = this.rightPane.nativeElement.offsetWidth;
    this.waterPumpWidth = this.waterPump.nativeElement.offsetWidth;
    this.waterPumpOffsetHeight = this.waterPumpRow.nativeElement.offsetTop;
    this.fertPumpHeight = this.fertPump.nativeElement.offsetHeight;

    this.waterPumpContainerHeight = this.fertPumpContainer.nativeElement.offsetHeight;
    this.fieldBottomContentWidth = this.fieldBottomContent.nativeElement.offsetWidth;
    this.headerHeight = parseInt(sessionStorage.getItem('headerHeight'), 10);
    this.waterContainerHeight = parseInt(sessionStorage.getItem('waterContainerHeight'), 10);
  }

  getFertFlowRates() {
    const nFlowing = this.sensors.NRate > 0 ? '1' : '0';
    const pFlowing = this.sensors.PRate > 0 ? '1' : '0';
    const kFlowing = this.sensors.KRate > 0 ? '1' : '0';
    const yFlowing = this.sensors.YRate > 0 ? '1' : '0';

    return `${nFlowing},${pFlowing},${kFlowing},${yFlowing}`;
  }

}
