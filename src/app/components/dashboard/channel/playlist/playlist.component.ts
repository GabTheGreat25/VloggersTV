import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  upload = `../../../assets/images/upload.svg`;
  goLive = `../../../assets/images/goLive.svg`;
  videoImage = '../../../assets/images/videoImage.svg';
  greenGlobe = '../../../assets/images/greenGlobe.svg';
  redGlobe = '../../../assets/images/redGlobe.svg';
  pencil = '../../../assets/images/pencil.svg';
  play = '../../../assets/images/play.svg';
  constructor() {}

  ngOnInit(): void {}
}
