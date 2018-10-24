import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as moment from 'moment';

export interface RatesResponse {
  date: string;
  rates: any;
  timestamp: string;
}

@Injectable()
export class ExchangeService {
  private resource = 'http://data.fixer.io/api/latest?access_key=a3f3eda268f9ca8c38d06dc5ce06ebd5';
  private params = '&symbols=GBP,USD,CHF';

  constructor(private httpClient: HttpClient) {}
  get(): Observable<any> {
    return this.httpClient.get(this.resource + this.params).pipe(
      map((body: any) => {
        return {
          date: body.date,
          rates: body.rates,
          timestamp: moment(body.timeStamp).format('HH:mm:ss')
        };
      }),
      catchError(() => of('Error, check Your connection'))
    );
  }
}
