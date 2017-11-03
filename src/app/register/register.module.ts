import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule }   from '@angular/forms';


import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import { UserServiceService } from '../services/user-service.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RegisterRoutingModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    UserServiceService
  ]
})
export class RegisterModule { }
