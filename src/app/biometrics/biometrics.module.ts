import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BiometricsRoutingModule } from './biometrics-routing.module';
import { BiometricsComponent } from './biometrics.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    BiometricsRoutingModule
  ],
  declarations: [
    BiometricsComponent
  ]
})
export class BiometricsModule { }
