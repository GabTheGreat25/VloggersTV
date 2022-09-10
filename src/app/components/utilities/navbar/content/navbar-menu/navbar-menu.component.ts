import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuComponent implements OnInit {
  tabs = [
    { name: 'About Us', route: '' },
    { name: 'Pay-per-view(PPV)', route: '/pay-per-view' },
    { name: 'Contact Us', route: '' },
  ];
  profileIcon = `../../../assets/images/profile-icon.svg`;
  isHidden: boolean = false;
  uploadVideo: string = '';
  liveVideo: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onHide() {
    this.isHidden = !this.isHidden;
  }

  clickOutside() {
    this.isHidden = false;
  }

  onUpload() {
    this.router.navigate([this.uploadVideo]);
  }

  onLive() {
    this.router.navigate([this.liveVideo]);
  }
}
