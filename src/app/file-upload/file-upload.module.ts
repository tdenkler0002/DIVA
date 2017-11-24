import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FileUploadRoutingModule,
    FormsModule
  ],
  declarations: [
  ],
  providers: [
      {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => FileUploadComponent),
          multi: true
      }
  ]
})
export class FileUploadModule { }
