import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: LiveComponent,
  },
];

@NgModule({
  declarations: [LiveComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class LiveModule {}
