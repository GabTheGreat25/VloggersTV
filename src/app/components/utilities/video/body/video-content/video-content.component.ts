import { Component, Input, OnInit } from '@angular/core';

interface IComment {
  src: string;
  alt: string;
  title: string;
  content: string;
}

@Component({
  selector: 'video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss'],
})
export class VideoContentComponent implements OnInit {
  @Input() icon: string = '';
  @Input() dot: string = '';
  @Input() avatar: string = '';
  @Input() comments: IComment[] = [];
  path = 'joey.m3u8';
  constructor() {}

  ngOnInit(): void {}
}
