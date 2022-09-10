import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfluencerComponent } from './influencer.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: InfluencerComponent,
  },
];

@NgModule({
  declarations: [InfluencerComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class InfluencerModule {}
