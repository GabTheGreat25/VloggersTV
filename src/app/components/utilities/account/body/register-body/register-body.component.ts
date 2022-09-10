import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'register-body',
  templateUrl: './register-body.component.html',
  styleUrls: ['./register-body.component.scss'],
})
export class RegisterBodyComponent implements OnInit {
  @Output() onLogin = new EventEmitter();

  login() {
    this.onLogin.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
