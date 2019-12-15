import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FertilizerSystemComponent } from './fertilizer-system/fertilizer-system.component';
import { PumpLineComponent } from './pump-line/pump-line.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'f', component: FertilizerSystemComponent },
  { path: 'l', component: PumpLineComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
