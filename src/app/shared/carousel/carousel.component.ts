import { Component, EventEmitter, Output } from '@angular/core';

export enum MDBCarouselDirections {
  PREV = 'Prev',
  NEXT = 'Next'
}
export interface MDBCarousel {
  direction: MDBCarouselDirections.NEXT | MDBCarouselDirections.PREV;
  relatedTarget: Number;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Output()
  activeSlide = new EventEmitter<MDBCarousel>();
  emitSlideInfo(object: MDBCarousel) {
    this.activeSlide.emit(object);
  }
}
