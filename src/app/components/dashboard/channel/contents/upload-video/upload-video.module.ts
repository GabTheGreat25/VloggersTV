import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadVideoComponent } from './upload-video.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: UploadVideoComponent,
  },
];

@NgModule({
  declarations: [UploadVideoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class UploadVideoModule {}
