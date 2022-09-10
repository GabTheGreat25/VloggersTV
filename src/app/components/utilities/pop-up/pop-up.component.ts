import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  isShown: boolean = true;
  onHome = '/';

  close() {
    this.onClose.emit();
    this.router.navigate([this.onHome]);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
