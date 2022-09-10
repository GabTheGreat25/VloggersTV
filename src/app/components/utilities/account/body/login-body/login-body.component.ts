import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.scss'],
})
export class LoginBodyComponent implements OnInit {
  @Input() facebook: string = '';
  @Output() onEnter = new EventEmitter();
  @Output() onRegister = new EventEmitter();
  @Output() onSignin = new EventEmitter();

  enter() {
    this.onEnter.emit();
  }

  register() {
    this.onRegister.emit();
  }

  signInWithFB() {
    this.onSignin.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
