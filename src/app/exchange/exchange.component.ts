import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //makeCallToApi
  }

  activeSlide(newSlide: number): void {
    let oldSlide;
    if ((oldSlide === 3 && newSlide === 1) || (oldSlide === 1 && newSlide === 3)) {
      // makeCallToApi
    }
  }
}
