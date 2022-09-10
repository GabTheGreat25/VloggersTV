import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsComponent,
  },
];

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class AnalyticsModule {}
