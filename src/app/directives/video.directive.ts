import {
  AfterViewInit,
  ElementRef,
  OnDestroy,
  Directive,
  Input,
} from '@angular/core';
import Hls from 'hls.js';
import { environment as env } from 'src/environments/environment';

@Directive({
  selector: '[hls]',
})
export class VideoDirective implements AfterViewInit, OnDestroy {
  @Input() path: string = '';
  hls = new Hls();

  constructor(private live: ElementRef<HTMLVideoElement>) {}

  ngAfterViewInit() {
    this.hls.loadSource(`${env.HLS_URL}` + this.path);
    this.hls.attachMedia(this.live.nativeElement);
    this.live.nativeElement.play();
  }

  ngOnDestroy(): void {
    this.hls.destroy();
  }
}
