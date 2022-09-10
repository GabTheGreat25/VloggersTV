import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  bannerImage = `../../../assets/images/banner-image.svg`;
  circleIcon = `../../../assets/images/circle-icon.svg`;
  paidVideo = `../../../assets/images/paid-video.svg`;

  @Input() tabs = [
    { name: 'Home', route: '/home' },
    { name: 'Video', route: '/video' },
    { name: 'Playlist', route: '/playlist' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
