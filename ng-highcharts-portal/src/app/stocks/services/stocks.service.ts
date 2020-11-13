import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin} from 'rxjs';

@Injectable()
export class StocksService {

  constructor(private httpclient: HttpClient) {}

  getIntradayStockSeries(symbol: string): Observable<any[]> {
    return this.httpclient.get<any[]>(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=GZL6E1RBYAMWMFMX`);
    }
}
