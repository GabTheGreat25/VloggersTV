import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-icons',
  templateUrl: './navbar-icons.component.html',
  styleUrls: ['./navbar-icons.component.scss'],
})
export class NavbarIconsComponent implements OnInit {
  profileIcon = `../../../assets/images/profile-icon.svg`;

  constructor() {}

  ngOnInit(): void {}
}
