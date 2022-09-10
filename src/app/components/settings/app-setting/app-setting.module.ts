import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { AppSettingComponent } from './app-setting.component';

const routes: Routes = [
  {
    path: '',
    component: AppSettingComponent,
  },
];

@NgModule({
  declarations: [AppSettingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class AppSettingModule {}
