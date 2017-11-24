import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FileUploadModule} from '../file-upload/file-upload.module';
import { UserServiceService } from '../services/user-service.service';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FileUploadModule,
    RegisterRoutingModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent,
    FileUploadComponent
  ],
  providers: [
    UserServiceService
  ]
})
export class RegisterModule { }
