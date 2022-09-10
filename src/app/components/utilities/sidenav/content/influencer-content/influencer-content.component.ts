import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'influencer-content',
  templateUrl: './influencer-content.component.html',
  styleUrls: ['./influencer-content.component.scss'],
})
export class InfluencerContentComponent implements OnInit {
  @Input() tabs = [
    { name: 'Dashboard', icon: 'las la-window-restore', route: '/home' },
    { name: 'Channel', icon: 'las la-project-diagram', route: '/channel' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
