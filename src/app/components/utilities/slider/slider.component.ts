import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

interface ISlider {
  src: string;
  alt: string;
  title: string;
  content: string;
  name: string;
}

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() sliders: ISlider[] = [];
  @Input() left = '';
  @Input() display = '';
  @Input() streamRoute: string = '';
  @Output() OnNext = new EventEmitter();
  @Output() OnBack = new EventEmitter();

  constructor(private router: Router) {}

  stream() {
    this.OnNext.emit();
  }

  previous() {
    this.OnBack.emit();
  }

  ngOnInit(): void {}
}
