import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { AppCommonModule } from './common/app-common/app-common.module';
import { GaugeModule } from 'angular-gauge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    GaugeModule.forRoot(),
    BrowserAnimationsModule,
    ChartsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
