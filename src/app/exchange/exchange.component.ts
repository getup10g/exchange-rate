import { Component, OnInit } from '@angular/core';
import { ExchangeService, RatesResponse } from '@app/exchange/exchange.service';
import { finalize } from 'rxjs/operators';
import { MDBCarousel, MDBCarouselDirections } from '@app/shared/carousel/carousel.component';
import { toNumbers } from '@angular/compiler-cli/src/diagnostics/typescript_version';

export interface RateItem {
  name: String;
  value: number;
}

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  isLoading: boolean = true;
  response: RatesResponse;
  numberOfSlides = 3;
  gbpEur: RateItem = { name: 'GBP/EUR', value: 1.2 };
  chfUsd: RateItem = { name: 'CHF/USD', value: 1.1 };
  usdGbp: RateItem = { name: 'USD/GBP', value: 0.88 };
  time: String;
  constructor(private exchangeServie: ExchangeService) {}

  ngOnInit() {
    this.getData();
  }

  activeSlide(newSlide: MDBCarousel): void {
    if (
      (newSlide.relatedTarget === this.numberOfSlides - 1 && newSlide.direction === MDBCarouselDirections.PREV) ||
      (newSlide.relatedTarget === 0 && newSlide.direction === MDBCarouselDirections.NEXT)
    ) {
      this.getData();
    }
  }
  getData(): void {
    this.exchangeServie
      .get()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: RatesResponse) => {
        this.response = data;
        this.calcRates(this.response);
      });
  }
  calcRates(data: RatesResponse) {
    this.gbpEur.value = Number((1 / data.rates.GBP).toFixed(2));
    this.chfUsd.value = Number((data.rates.CHF / data.rates.USD).toFixed(2));
    this.usdGbp.value = Number((data.rates.USD / data.rates.GBP).toFixed(2));
    this.time = data.timestamp;
  }
}
