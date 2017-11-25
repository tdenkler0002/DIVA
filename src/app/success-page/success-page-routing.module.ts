import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { SuccessPageComponent } from './success-page.component';

const routes: Routes = Route.withShell([
  { path: 'success', component: SuccessPageComponent, data: { title: extract('Success') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SuccessPageRoutingModule { }
