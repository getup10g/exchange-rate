import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Output()
  activeSlide = new EventEmitter<{ index: number }>();
  constructor() {}
  ngOnInit() {}
}
