import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-per-view',
  templateUrl: './pay-per-view.component.html',
  styleUrls: ['./pay-per-view.component.scss'],
})
export class PayPerViewComponent implements OnInit {
  left = '5rem';
  display = 'none';
  streamRoute: string = '/stream';
  previousRoute: string = '/previous-video';

  sliders = [
    {
      src: '../../../assets/images/finalMatch.svg',
      alt: 'finalMatch',
      title: 'Final Match',
      content: 'Suntukan ng mga Sikat 2',
      name: 'June 22',
    },
    {
      src: '../../../assets/images/basketball.svg',
      alt: 'basketball',
      title: 'Johan VS. Coach Mav',
      content: 'Basketball of Youtubers',
      name: 'June 25',
    },
    {
      src: '../../../assets/images/rendon.svg',
      alt: 'rendon',
      title: 'Rendon VS. Wally',
      content: 'Suntukan Series',
      name: 'June 30',
    },
    {
      src: '../../../assets/images/pose.svg',
      alt: 'pose',
      title: 'Talbog Dance',
      content: 'Tony Flower ',
      name: 'July 1 ',
    },
  ];

  events = [
    {
      src: '../../../assets/images/cropMatch.svg',
      alt: 'cropMatch',
      title: 'Final Match-1',
      content: 'Final Match-1',
      name: '',
    },
    {
      src: '../../../assets/images/cropMatch.svg',
      alt: 'cropMatch',
      title: 'Final Match-2',
      content: 'Final Match-2',
      name: '',
    },
    {
      src: '../../../assets/images/cropMatch.svg',
      alt: 'cropMatch',
      title: 'Final Match-3',
      content: 'Final Match-3',
      name: '',
    },
    {
      src: '../../../assets/images/cropMatch.svg',
      alt: 'cropMatch',
      title: 'Final Match-4',
      content: 'Final Match-4',
      name: '',
    },
    {
      src: '../../../assets/images/cropMatch.svg',
      alt: 'cropMatch',
      title: 'Final Match-5',
      content: 'Final Match-5',
      name: '',
    },
    {
      src: '../../../assets/images/cropMatch.svg',
      alt: 'cropMatch',
      title: 'Final Match-6',
      content: 'Final Match-6',
      name: '',
    },
    {
      src: '../../../assets/images/cropMatch.svg',
      alt: 'cropMatch',
      title: 'Final Match-7',
      content: 'Final Match-7',
      name: '',
    },
  ];

  constructor(private router: Router) {}

  previous() {
    this.router.navigate([this.previousRoute]);
  }

  stream() {
    this.router.navigate([this.streamRoute]);
  }

  ngOnInit(): void {}
}
