import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FiledService } from 'src/app/services/filed.service';
import { Field } from 'src/app/models/filed';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('header', { static: false }) header: ElementRef;
  
  now = new Date();
  weekDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  field = new Field();
  headerHeight: number;
  constructor(private fieldService: FiledService) { }

  ngOnInit() {
    this.initClock();
    this.getFiledData();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setDimentions();
    }, 1000);
  }

  setDimentions() {
    this.headerHeight = this.header.nativeElement.offsetHeight;
    sessionStorage.setItem('headerHeight', this.headerHeight.toString());
  }

  initClock() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  getFiledData() {
    this.fieldService.getField('').subscribe(
      result => {
        this.field = result.field;
      },
      (error) => {

      }
    );
  }

}
