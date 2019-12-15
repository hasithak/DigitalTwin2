import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pump-line',
  templateUrl: './pump-line.component.html',
  styleUrls: ['./pump-line.component.scss']
})
export class PumpLineComponent implements OnInit {

  pumpLineStart = 0;
  pumpLineEnd = 200;

  fertInputStart = 10;
  fertLineHeight = 20;

  pumping = false;

  constructor() { }

  ngOnInit() {
  }

}
