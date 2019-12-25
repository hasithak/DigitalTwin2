import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'dash', loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule) },
{ path: 'DigitalTwin2', redirectTo: '/dash', pathMatch: 'full' },
{ path: '', redirectTo: '/dash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
