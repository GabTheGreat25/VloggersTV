import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  background = '#2E2E2E';
  wallet = `../../../assets/images/wallet.svg`;
  money = `../../../assets/images/money.svg`;
  person = `../../../assets/images/person.svg`;
  streamRoute: string = '/stream';

  sliders = [
    {
      src: '../../../assets/images/finalMatch.svg',
      alt: 'finalMatch',
      title: 'Final Match',
      content: 'Suntukan ng mga Sikat 2',
      name: 'Top 1',
    },
    {
      src: '../../../assets/images/basketball.svg',
      alt: 'basketball',
      title: 'Johan VS. Coach Mav',
      content: 'Basketball of Youtubers',
      name: 'Top 2',
    },
    {
      src: '../../../assets/images/rendon.svg',
      alt: 'rendon',
      title: 'Rendon VS. Wally',
      content: 'Suntukan Series',
      name: 'Top 3',
    },
    {
      src: '../../../assets/images/pose.svg',
      alt: 'pose',
      title: 'Talbog Dance',
      content: 'Tony Flower ',
      name: 'Top 4',
    },
  ];

  stream() {
    this.router.navigate([this.streamRoute]);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
