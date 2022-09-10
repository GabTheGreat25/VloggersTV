import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'channel-content',
  templateUrl: './channel-content.component.html',
  styleUrls: ['./channel-content.component.scss'],
})
export class ChannelContentComponent implements OnInit {
  @Input() tabs = [
    { name: 'Dashboard', icon: 'las la-window-restore', route: '/home' },
    { name: 'Contents', icon: 'las la-project-diagram', route: '/contents' },
    { name: 'Playlists', icon: 'las la-code-branch', route: 'playlist' },
    { name: 'Comments', icon: 'las la-laptop-code', route: 'comments' },
    { name: 'Analytics', icon: 'las la-tasks', route: 'analytics' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
