import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FileUploadRoutingModule,
    FormsModule
  ],
  declarations: [
    FileUploadComponent,
  ],
  providers: [
      {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => FileUploadComponent),
          multi: true
      },
      UserServiceService
  ],
  exports: [
    FileUploadComponent
  ]
})
export class FileUploadModule { }
