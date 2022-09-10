import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.scss'],
})
export class AdminContentComponent implements OnInit {
  @Input() tabs = [
    { name: 'Dashboard', icon: 'las la-window-restore', route: '/home' },
    { name: 'User', icon: 'las la-project-diagram', route: '/user' },
    { name: 'Influencer', icon: 'las la-code-branch', route: 'influencer' },
    { name: 'Viewers', icon: 'las la-laptop-code', route: 'viewers' },
    { name: 'Content', icon: 'las la-tasks', route: 'content' },
    { name: 'Analytics', icon: 'las la-network-wired', route: 'analytics' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
