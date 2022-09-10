import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-option',
  templateUrl: './payment-option.component.html',
  styleUrls: ['./payment-option.component.scss'],
})
export class PaymentOptionComponent implements OnInit {
  Gcash = `../../../assets/images/Gcash.svg`;
  DragonPay = `../../../assets/images/Dragonpay.svg`;
  onHome = '/';
  isOpen: boolean = false;

  constructor(private router: Router) {}

  home() {
    this.router.navigate([this.onHome]);
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  ngOnInit(): void {}
}
