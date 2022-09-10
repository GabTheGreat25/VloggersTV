import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBack]',
})
export class BackDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  backSlide() {
    var element = this.el.nativeElement.parentElement;
    var images = element.getElementsByClassName('match-wrapper');
    element.prepend(images[images.length - 1]);
  }
}
