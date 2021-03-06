import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppCommonModule } from 'src/app/common/app-common/app-common.module';
import { GaugeModule } from 'angular-gauge';
import { FertilizerSystemComponent } from './fertilizer-system/fertilizer-system.component';
import { MatIconModule } from '@angular/material/icon';
import { ChartsModule } from 'ng2-charts';
import { PumpLineComponent } from './pump-line/pump-line.component';

@NgModule({
  declarations: [DashboardComponent, FertilizerSystemComponent, PumpLineComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppCommonModule,
    GaugeModule,
    MatIconModule,
    ChartsModule
  ]
})
export class DashboardModule { }
