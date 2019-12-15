import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeComponent } from '../components/gauge/gauge.component';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [
    GaugeComponent
  ],
  imports: [
    CommonModule,
    GoogleChartsModule
  ],
  exports: [
    GaugeComponent,
    GoogleChartsModule
  ]
})
export class AppCommonModule { }
