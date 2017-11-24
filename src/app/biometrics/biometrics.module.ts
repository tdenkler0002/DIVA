import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { BiometricsRoutingModule } from './biometrics-routing.module';
import { BiometricsComponent } from './biometrics.component';
import { FileUploadModule} from '../file-upload/file-upload.module';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    BiometricsRoutingModule,
    FileUploadModule,
    FormsModule
  ],
  declarations: [
    BiometricsComponent
  ]
})
export class BiometricsModule { }
