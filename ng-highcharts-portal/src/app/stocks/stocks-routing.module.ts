import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntradayRealtimeStocksComponent } from './intraday-realtime-stocks/intraday-realtime-stocks.component';


const stockRoutes: Routes = [
  {
    path: 'intraday',
    component: IntradayRealtimeStocksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(stockRoutes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
