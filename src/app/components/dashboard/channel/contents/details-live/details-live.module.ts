import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsLiveComponent } from './details-live.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: DetailsLiveComponent,
  },
];

@NgModule({
  declarations: [DetailsLiveComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class DetailsLiveModule {}
