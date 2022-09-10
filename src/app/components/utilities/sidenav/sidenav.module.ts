import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './head/logo/logo.component';
import { AdminContentComponent } from './content/admin-content/admin-content.component';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';
import { UtilitiesModule } from '../utilities.module';
import { ChannelContentComponent } from './content/channel-content/channel-content.component';
import { InfluencerContentComponent } from './content/influencer-content/influencer-content.component';
import { LogoTextComponent } from './head/logo-text/logo-text.component';

@NgModule({
  declarations: [
    SidenavComponent,
    LogoTextComponent,
    LogoComponent,
    ChannelContentComponent,
    InfluencerContentComponent,
    AdminContentComponent,
  ],
  imports: [CommonModule, RouterModule, UtilitiesModule],
  exports: [
    SidenavComponent,
    LogoTextComponent,
    LogoComponent,
    ChannelContentComponent,
    InfluencerContentComponent,
    AdminContentComponent,
  ],
})
export class SidenavModule {}
