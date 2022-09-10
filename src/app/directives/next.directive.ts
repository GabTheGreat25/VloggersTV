import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]',
})
export class NextDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  nextSlide() {
    var element = this.el.nativeElement.parentElement;
    var images = element.getElementsByClassName('match-wrapper');

    element.append(images[0]);
  }
}
