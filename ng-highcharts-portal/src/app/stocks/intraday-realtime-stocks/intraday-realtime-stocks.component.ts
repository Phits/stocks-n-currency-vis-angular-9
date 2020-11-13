import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

import { StocksService } from '../services/stocks.service';
import { formatChartData } from '../../utilities/global-functions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'intraday-realtime-stocks',
  templateUrl: './intraday-realtime-stocks.component.html',
  styleUrls: ['./intraday-realtime-stocks.component.css']
})
export class IntradayRealtimeStocksComponent implements OnInit {

  constructor(private stocksService: StocksService) { }
  Highcharts = Highcharts;
  type = 'stockChart';
  intradayStocks: any[];
  options = {
    title: {
      text: 'Intraday Stocks of MSFT'
    },
    rangeSelector: {
      selected: 4
    },
    legend: {
      enabled: true
    },
    plotOptions: {
      series: {
        showInLegend: true
      }
    },
    series: [
      {
        id: 'MSFT',
        name: 'MSFT Software',
        data: null
      }
    ]
  };

  ngOnInit(): void {
    this.stocksService.getIntradayStockSeries('MSFT').subscribe(
      stocksData => {
          this.intradayStocks = formatChartData(stocksData['Time Series (5min)']
          );
          this.options.series[0].data = this.intradayStocks;
      }
    );
  }

}
