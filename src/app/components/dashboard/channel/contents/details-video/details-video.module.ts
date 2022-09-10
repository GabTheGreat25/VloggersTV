import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsVideoComponent } from './details-video.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: DetailsVideoComponent,
  },
];
@NgModule({
  declarations: [DetailsVideoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class DetailsVideoModule {}
