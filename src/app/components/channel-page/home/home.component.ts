import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bannerImage = `../../../assets/images/banner-image.svg`;
  finalMatch = `../../../assets/images/finalMatch.svg`;
  circleIcon = `../../../assets/images/circle-icon.svg`;
  streamRoute: string = '/stream';

  @Input() tabs = [
    { name: 'Home', route: '/home' },
    { name: 'Video', route: '/video' },
    { name: 'Playlist', route: '/playlist' },
  ];

  rows = [
    {
      sliders: [
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
      ],
    },
    {
      sliders: [
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
      ],
    },
  ];

  constructor(private router: Router) {}

  stream() {
    this.router.navigate([this.streamRoute]);
  }

  ngOnInit(): void {}
}
