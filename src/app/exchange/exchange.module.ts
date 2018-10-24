import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './exchange.component';
import { SharedModule } from '@app/shared';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [CommonModule, TranslateModule, ExchangeRoutingModule, SharedModule, MDBBootstrapModule.forRoot()],
  declarations: [ExchangeComponent]
})
export class ExchangeModule {}
