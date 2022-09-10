import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
})
export class PlayButtonComponent implements OnInit {
  @Output() OnNext = new EventEmitter();
  @Output() OnBack = new EventEmitter();

  next() {
    this.OnNext.emit();
  }

  back() {
    this.OnBack.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
