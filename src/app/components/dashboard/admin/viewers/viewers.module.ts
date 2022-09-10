import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewersComponent } from './viewers.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: ViewersComponent,
  },
];

@NgModule({
  declarations: [ViewersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class ViewersModule {}
