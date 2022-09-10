import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: ChannelComponent,
  },
];

@NgModule({
  declarations: [ChannelComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class ChannelModule {}
