import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { BiometricsComponent  } from './biometrics.component';

const routes: Routes = Route.withShell([
  { path: 'biometrics', component: BiometricsComponent, data: { title: extract('Biometrics') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BiometricsRoutingModule { }
