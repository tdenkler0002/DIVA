import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RegisterRoutingModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
