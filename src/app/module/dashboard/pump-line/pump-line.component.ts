import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-pump-line',
  templateUrl: './pump-line.component.html',
  styleUrls: ['./pump-line.component.scss']
})
export class PumpLineComponent implements OnInit, AfterViewInit {

  @ViewChild('pumpLIneContainer', { static: false }) waterContainer: ElementRef;
  svg = document.getElementById('pump-line-canvas');

  pumpLineStart = 0;
  pumpLineEnd = 200;

  @Input() fertInputStart;
  @Input() fertLineHeight;

  pumpLineWidth = 15;

  pumping = true;
  fertilizing = true;


  viewWidth: number;
  viewHeight: number;
  mainPump: string;
  fertPump: string;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.svg = document.getElementById('pump-line-canvas');
    this.getViewDimentions();
    this.drawPumpView();
    this.pumpFertilizers();
  }

  getViewDimentions() {
    this.viewWidth = this.waterContainer.nativeElement.offsetWidth;
    this.viewHeight = this.waterContainer.nativeElement.offsetHeight;

    console.log('this.fertLineHeight', this.fertLineHeight);
    
  }

  drawPumpView() {
    this.mainPump = `M${0},${this.pumpLineWidth / 2} ${this.viewWidth},${this.pumpLineWidth / 2}`;
    const outputPumpLine = this.drawPumpLine(this.mainPump, this.pumpLineWidth, 'cornflowerblue');
    this.svg.appendChild(outputPumpLine);

    const outputPumpLineIn = this.drawPumpLine(this.mainPump, this.pumpLineWidth - 10, 'red');
    this.svg.appendChild(outputPumpLineIn);

    this.fertPump = `M${this.fertInputStart},${this.fertLineHeight} 
    ${this.fertInputStart},${this.pumpLineWidth - (this.pumpLineWidth - (this.pumpLineWidth - 10)) / 2}`;
    const fertPumpLine = this.drawPumpLine(this.fertPump, this.pumpLineWidth, 'cornflowerblue');
    this.svg.appendChild(fertPumpLine);


    const fertPumpLineIn = this.drawPumpLine(this.fertPump, this.pumpLineWidth - 10, 'red');
    this.svg.appendChild(fertPumpLineIn);

  }

  drawPumpLine(path: string, width: number, fill: string): SVGPathElement {
    const newElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    newElement.setAttribute('d', path);
    newElement.style.stroke = fill;
    newElement.style.fill = 'none';
    newElement.style.strokeWidth = width.toString();
    this.svg.appendChild(newElement);

    return newElement;
  }

  pumpFertilizers() {
    if (this.pumping) {
      const pumpPath = this.drawPumpLine(this.mainPump, 0, 'none');
      this.pumpFertilizer(1, pumpPath);
    }

    if (this.fertilizing) {
      const fertPump = this.drawPumpLine(this.fertPump, 0, 'none');
      this.pumpFertilizer(2, fertPump);
    }

  }

  pumpFertilizer(index: number, pumpPath: any) {
    const curveLength = pumpPath.getTotalLength();
    const numOfPoints = curveLength / 30;

    let counter = 0;
    const dropSize = (this.pumpLineWidth - 2).toString();
    for (let i = 0; i < numOfPoints; i++) {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('width', dropSize);
      rect.setAttribute('height', dropSize);
      rect.setAttribute('class', 'drop' + index);
      rect.style.fill = 'yellow';
      this.svg.appendChild(rect);
      counter += 50;
    }

    let shift = 0;
    const drops = document.getElementsByClassName('drop' + index);

    function moveDrops() {

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const dropWidth = Number.parseInt(drop.getAttribute('width'), 10);
        drop.setAttribute('transform', 'translate(' + (pumpPath.getPointAtLength(i * 30 + shift).x - dropWidth / 2) + ',' +
          (pumpPath.getPointAtLength(i * 30 + shift).y - dropWidth / 2) + ')');
      }

      shift += 10;
      if (shift === 30) {
        shift = 0;
      }

      setTimeout(() => {
        requestAnimationFrame(moveDrops);
      }, 200);
    }

    requestAnimationFrame(moveDrops);


  }

}
