import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadsComponent } from './downloads.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../utilities/utilities.module';
import { NavbarModule } from '../utilities/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: DownloadsComponent,
  },
];

@NgModule({
  declarations: [DownloadsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    NavbarModule,
  ],
})
export class DownloadsModule {}
