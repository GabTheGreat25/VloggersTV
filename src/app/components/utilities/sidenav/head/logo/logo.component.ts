import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  icon = `../../../assets/images/icon.svg`;
  constructor() {}

  ngOnInit(): void {}
}
