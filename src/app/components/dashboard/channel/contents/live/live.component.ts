import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
})
export class LiveComponent implements OnInit {
  videoImage = '../../../assets/images/videoImage.svg';
  greenGlobe = '../../../assets/images/greenGlobe.svg';
  @Input() tabs = [
    { name: 'Video', route: '/video' },
    { name: 'Live', route: '/live' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
