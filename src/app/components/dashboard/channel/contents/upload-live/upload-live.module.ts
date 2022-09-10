import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../../utilities/utilities.module';
import { UploadLiveComponent } from './upload-live.component';

const routes: Routes = [
  {
    path: '',
    component: UploadLiveComponent,
  },
];

@NgModule({
  declarations: [UploadLiveComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class UploadLiveModule {}
