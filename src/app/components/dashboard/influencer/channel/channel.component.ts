import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent implements OnInit {
  background = '#2E2E2E';
  videoImage = '../../../assets/images/videoImage.svg';
  greenGlobe = '../../../assets/images/greenGlobe.svg';
  redGlobe = '../../../assets/images/redGlobe.svg';
  constructor() {}

  ngOnInit(): void {}
}
