import { Component, OnInit } from '@angular/core';
import { FiledService } from 'src/app/services/filed.service';
import { Field } from 'src/app/models/filed';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  now = new Date();
  weekDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  field = new Field();

  constructor(private fieldService: FiledService) { }

  ngOnInit() {
    this.initClock();
    this.getFiledData();
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
