import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoaderComponent } from './loader/loader.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [CommonModule, MDBBootstrapModule.forRoot()],
  declarations: [LoaderComponent, CarouselComponent],
  exports: [LoaderComponent, CarouselComponent]
})
export class SharedModule {}
