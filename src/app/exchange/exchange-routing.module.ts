import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ExchangeComponent } from '@app/exchange/exchange.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'exchange', component: ExchangeComponent, data: { title: extract('Exchange rate') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExchangeRoutingModule {}
