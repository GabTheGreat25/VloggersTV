import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() background: string = '';
  logo = `../../../assets/images/logo.svg`;
  route: string = `/`;

  constructor(private router: Router) {}
  home() {
    this.router.navigate([this.route]);
  }
  ngOnInit(): void {}
}
