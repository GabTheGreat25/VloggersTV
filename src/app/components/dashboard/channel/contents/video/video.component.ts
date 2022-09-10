import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  videoImage = '../../../assets/images/videoImage.svg';
  greenGlobe = '../../../assets/images/greenGlobe.svg';
  redGlobe = '../../../assets/images/redGlobe.svg';
  @Input() tabs = [
    { name: 'Video', route: '/video' },
    { name: 'Live', route: '/live' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
