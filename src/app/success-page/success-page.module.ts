import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SuccessPageRoutingModule } from './success-page-routing.module';
import { SuccessPageComponent } from './success-page.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SuccessPageRoutingModule,
  ],
  declarations: [
    SuccessPageComponent,
  ],
  exports: [

  ]
})
export class SuccessPageModule { }
