import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { FileUploadComponent } from './file-upload.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';


const routes: Routes = Route.withShell([
  { path: 'file-upload', component: FileUploadComponent, data: { title: extract('FileUpload') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],
  providers: []
})
export class FileUploadRoutingModule { }
