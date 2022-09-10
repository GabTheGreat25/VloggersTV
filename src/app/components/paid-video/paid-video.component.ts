import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid-video',
  templateUrl: './paid-video.component.html',
  styleUrls: ['./paid-video.component.scss'],
})
export class PaidVideoComponent implements OnInit {
  paidVideo = `../../../assets/images/paid-video.svg`;
  constructor() {}

  ngOnInit(): void {}
}
