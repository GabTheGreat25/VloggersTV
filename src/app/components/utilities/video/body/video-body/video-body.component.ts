import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'video-body',
  templateUrl: './video-body.component.html',
  styleUrls: ['./video-body.component.scss'],
})
export class VideoBodyComponent implements OnInit {
  @Input() icon: string = '';
  path = 'joey.m3u8';

  constructor() {}

  ngOnInit(): void {}
}
