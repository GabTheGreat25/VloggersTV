import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviousVideoComponent } from './previous-video.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../utilities/utilities.module';
import { VideoModule } from '../utilities/video/video.module';
import { NavbarModule } from '../utilities/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: PreviousVideoComponent,
  },
];

@NgModule({
  declarations: [PreviousVideoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    VideoModule,
    NavbarModule,
  ],
})
export class PreviousVideoModule {}
