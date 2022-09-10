import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  background = '#2E2E2E';
  upload = `../../../assets/images/upload.svg`;
  goLive = `../../../assets/images/goLive.svg`;
  video = `../../../assets/images/video.svg`;
  person = `../../../assets/images/person.svg`;

  constructor() {}

  ngOnInit(): void {}
}
