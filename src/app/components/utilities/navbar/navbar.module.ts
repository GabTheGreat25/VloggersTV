import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMenuComponent } from './content/navbar-menu/navbar-menu.component';
import { NavbarButtonComponent } from './content/navbar-button/navbar-button.component';
import { RouterModule } from '@angular/router';
import { UtilitiesModule } from '../utilities.module';
import { NavbarComponent } from './navbar.component';
import { NavbarIconsComponent } from './content/navbar-icons/navbar-icons.component';

@NgModule({
  declarations: [NavbarComponent, NavbarMenuComponent, NavbarButtonComponent, NavbarIconsComponent],
  imports: [CommonModule, RouterModule, UtilitiesModule],
  exports: [NavbarComponent, NavbarMenuComponent, NavbarButtonComponent, NavbarIconsComponent],
})
export class NavbarModule {}
