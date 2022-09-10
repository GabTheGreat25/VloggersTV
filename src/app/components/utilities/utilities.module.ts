import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderComponent } from './slider/slider.component';
import { NextDirective } from 'src/app/directives/next.directive';
import { BackDirective } from 'src/app/directives/back.directive';
import { PlayButtonComponent } from './play-button/play-button.component';
import { ClickOutsideDirective } from 'src/app/directives/click-outside.directive';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    CardComponent,
    CardWrapperComponent,
    CarouselComponent,
    SliderComponent,
    NextDirective,
    BackDirective,
    PlayButtonComponent,
    ClickOutsideDirective,
    PopUpComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [
    CardComponent,
    CardWrapperComponent,
    CarouselComponent,
    SliderComponent,
    NextDirective,
    BackDirective,
    PlayButtonComponent,
    ClickOutsideDirective,
    PopUpComponent,
  ],
})
export class UtilitiesModule {}
