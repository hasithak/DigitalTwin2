import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  chart1 = {
    type: 'Gauge',
    data: [
      ['Power', 50]
    ],
    options: {
      greenFrom: 0,
      greenTo: 75,
      redFrom: 90,
      redTo: 100,
      yellowFrom: 75,
      yellowTo: 90,
      minorTicks: 5,
      backgroundColor: '#262626',
      redColor: '#f00',
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
