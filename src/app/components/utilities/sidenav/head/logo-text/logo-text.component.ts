import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'logo-text',
  templateUrl: './logo-text.component.html',
  styleUrls: ['./logo-text.component.scss'],
})
export class LogoTextComponent implements OnInit {
  @Input() content: string = '';
  circleAvatar = `../../../assets/images/circle-avatar.svg`;
  constructor() {}

  ngOnInit(): void {}
}
