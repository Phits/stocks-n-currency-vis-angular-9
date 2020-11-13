import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IntradayRealtimeStocksComponent } from './intraday-realtime-stocks/intraday-realtime-stocks.component';
import { StocksService } from './services/stocks.service';

import { StocksRoutingModule } from './stocks-routing.module';

@NgModule({
  declarations: [IntradayRealtimeStocksComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    HttpClientModule,
    FormsModule,
    StocksRoutingModule,
  ],
  providers: [StocksService]
})
export class StocksModule { }
