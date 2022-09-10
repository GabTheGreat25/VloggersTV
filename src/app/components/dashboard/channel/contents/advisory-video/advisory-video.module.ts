import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvisoryVideoComponent } from './advisory-video.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: AdvisoryVideoComponent,
  },
];

@NgModule({
  declarations: [AdvisoryVideoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class AdvisoryVideoModule {}
