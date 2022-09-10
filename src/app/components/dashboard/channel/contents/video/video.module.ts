import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: VideoComponent,
  },
];

@NgModule({
  declarations: [VideoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class VideoModule {}
