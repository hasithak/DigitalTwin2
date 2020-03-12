import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-fertilizer-system',
  templateUrl: './fertilizer-system.component.html',
  styleUrls: ['./fertilizer-system.component.scss']
})
export class FertilizerSystemComponent implements OnInit, AfterViewInit {

  viewWidth: number;
  viewHeight: number;

  outputPumpY: number;
  outputPumpX: number;
  outputPumpHeight: number;

  fertTankWidth: number;
  fertTankHeight: number;

  fertTankDistance: number;

  fertTankStartX: number;
  fertTankStartY: number;

  fertMixtureStartX: number;
  fertMixtureStartY: number;

  fertMixtureWidth: number;
  fertMixtureHeight: number;

  fertMixtureTofertTankDistance: number;

  svg = document.getElementById('canvas');

  outputPumpLine: any;
  pumpLineWidth: number;

  @Input() fertLevels: string;
  @Input() fertPumpStatuses: string;

  fertLevelsArray: Array<number>;
  fertPumpStatusesArray: Array<number>;

  fertPumpLines = [];

  @ViewChild('waterContainer', { static: false }) waterContainer: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.fertPumpStatuses);
    
    this.fertLevelsArray = this.fertLevels.split(',').map(Number);
    this.fertPumpStatusesArray = this.fertPumpStatuses.split(',').map(Number);
  }

  ngAfterViewInit(): void {
    this.svg = document.getElementById('canvas');
    this.getViewDimentions();
    this.initializeValues();
    this.drawPumpView();
    this.pumpFertilizers();
  }

  initializeValues() {
    this.viewWidth = 1200;

    this.outputPumpY = 0;
    this.outputPumpX = this.viewWidth / 2;
    this.outputPumpHeight = 0;

    this.fertTankWidth = this.viewWidth / 8;
    this.fertTankHeight = 160;

    this.fertTankDistance = this.viewWidth / 8;;

    this.fertTankStartX = 0;

    this.fertMixtureStartX = this.fertTankStartX + this.fertTankWidth;
    this.fertMixtureStartY = this.outputPumpY + this.outputPumpHeight;

    this.fertMixtureWidth = 3.5 * (this.fertTankWidth + this.fertTankDistance);
    this.fertMixtureHeight = 60;

    this.pumpLineWidth = this.fertMixtureHeight / 5;

    this.fertMixtureTofertTankDistance = 30;
    this.fertTankStartY = this.outputPumpY + this.outputPumpHeight + this.fertMixtureHeight + this.fertMixtureTofertTankDistance;
  }

  getViewDimentions() {
    this.viewWidth = this.waterContainer.nativeElement.offsetWidth;
    this.viewHeight = this.waterContainer.nativeElement.offsetHeight;
    sessionStorage.setItem('waterContainerHeight', this.viewHeight.toString());
  }

  drawPumpView() {
    for (let i = 0; i < 4; i++) {
      this.drawFertilizerTank(this.fertTankStartX + (i * (this.fertTankDistance + this.fertTankWidth))
        , this.fertTankStartY, this.fertTankWidth, this.fertTankHeight, i);
    }

    this.drawfertMixture(this.fertMixtureStartX, this.fertMixtureStartY,
      this.fertMixtureWidth, this.fertMixtureHeight);

    this.drawPumpLines();
  }

  drawFertilizerTank(x: number, y: number, width: number, height: number, index: number) {
    const newElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newElement.setAttribute('width', width.toString());
    newElement.setAttribute('height', height.toString());
    newElement.setAttribute('x', x.toString());
    newElement.setAttribute('y', y.toString());

    const newElement1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    newElement1.setAttribute('width', (width).toString());
    newElement1.setAttribute('height', (height).toString());
    newElement1.setAttribute('x', '0');
    newElement1.setAttribute('y', '0');
    newElement1.style.stroke = '#fff';
    newElement1.style.strokeWidth = '3px';
    newElement1.style.fill = '#4d4a45';
    newElement.append(newElement1);



    const pertLevel = this.fertLevelsArray[index];
    const pertLevelPercentage = (200 / 100) * pertLevel;
    const numOfLevelBars = pertLevelPercentage / (this.pumpLineWidth * 2)

    for (let i = 0; i < numOfLevelBars; i++) {
      const fertLevelBar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

      fertLevelBar.setAttribute('width', (width - 8).toString());
      fertLevelBar.setAttribute('height', this.pumpLineWidth.toString());
      fertLevelBar.setAttribute('x', '4');
      fertLevelBar.setAttribute('y', (height - (i * this.pumpLineWidth * 2) - this.pumpLineWidth * 2).toString());
      fertLevelBar.style.fill = '#ff0000';
      newElement.append(fertLevelBar);
    }

    this.svg.appendChild(newElement);
  }

  drawfertMixture(x: number, y: number, width: number, height: number) {
    const newElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newElement.setAttribute('width', width.toString());
    newElement.setAttribute('height', height.toString());
    newElement.setAttribute('x', x.toString());
    newElement.setAttribute('y', y.toString());

    const newElement1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    newElement1.setAttribute('width', width.toString());
    newElement1.setAttribute('height', height.toString());
    newElement1.setAttribute('x', '0');
    newElement1.setAttribute('y', '0');
    newElement1.style.stroke = '#fff';
    newElement1.style.strokeWidth = '4px';
    newElement1.style.fill = 'orange';
    newElement.append(newElement1);

    this.svg.appendChild(newElement);
  }

  drawPumpLines() {
    this.outputPumpLine = `M${this.outputPumpX},${this.outputPumpY} ${this.outputPumpX},${this.outputPumpY + this.outputPumpHeight}`;
    const outputPumpLine = this.drawPumpLine(this.outputPumpLine, this.pumpLineWidth, 'cornflowerblue')
    this.svg.appendChild(outputPumpLine);

    const pumpLineStartY = this.fertTankStartY + this.fertTankHeight - this.fertTankHeight / 10;

    for (let i = 0; i < 5; i++) {
      const pumpLineStartX = this.fertTankStartX + (i * (this.fertTankDistance + this.fertTankWidth)) + this.fertTankWidth;

      const pumpLineTurnX = this.fertTankStartX + (i * (this.fertTankDistance + this.fertTankWidth)) +
        (this.fertTankDistance / 2 + this.fertTankWidth);

      const line = `M${pumpLineStartX},${pumpLineStartY} ${pumpLineTurnX},${pumpLineStartY}  
      ${pumpLineTurnX},${this.fertTankStartY - this.fertMixtureTofertTankDistance}`;

      this.fertPumpLines.push(line);

      const pumpLine = this.drawPumpLine(line, this.pumpLineWidth, 'cornflowerblue')
      this.svg.appendChild(pumpLine);
    }
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
    let pumping = false;
    for (let i = 0; i < this.fertPumpStatusesArray.length; i++) {
      const status = this.fertPumpStatusesArray[i];
      pumping = (status === 1 || pumping) ? true : false;
      if (status === 1) {
        const pumpPath = this.drawPumpLine(this.fertPumpLines[i], 0, 'none');
        this.pumpFertilizer(i, pumpPath, status);
      }
    }
  }

  pumpFertilizer(index: number, pumpPath: any, status: number) {
    if (status === 1) {
      const curveLength = pumpPath.getTotalLength();
      const numOfPoints = curveLength / 30;

      let counter = 0;
      const dropSize = (this.pumpLineWidth - 4).toString();
      for (let i = 0; i < numOfPoints; i++) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', dropSize);
        rect.setAttribute('height', dropSize);
        rect.setAttribute('class', 'drop_' + index);
        rect.style.fill = 'blue';
        this.svg.appendChild(rect);
        counter += 50;
      }

      let shift = 0;
      const drops = document.getElementsByClassName('drop_' + index);

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
        }, 100);
      }

      requestAnimationFrame(moveDrops);

    }
  }

}
