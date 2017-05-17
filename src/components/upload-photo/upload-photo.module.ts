import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadPhotoComponent } from './upload-photo';

@NgModule({
  declarations: [
    UploadPhotoComponent,
  ],
  imports: [
    IonicPageModule.forChild(UploadPhotoComponent),
  ],
  exports: [
    UploadPhotoComponent
  ]
})
export class UploadPhotoComponentModule {}
