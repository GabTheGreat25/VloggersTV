import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  finalMatch = `../../../assets/images/finalMatch.svg`;
  basketball = `../../../assets/images/basketball.svg`;
  rendon = `../../../assets/images/rendon.svg`;
  downloadRoute: string = '/downloads';
  streamRoute: string = '/stream';

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

  images = [
    {
      imageSrc: '../../../assets/images/banner-image.svg',
      imageAlt: 'banner-image',
    },
    {
      imageSrc: '../../../assets/images/banner-image.svg',
      imageAlt: 'banner-image',
    },
    {
      imageSrc: '../../../assets/images/banner-image.svg',
      imageAlt: 'banner-image',
    },
    {
      imageSrc: '../../../assets/images/banner-image.svg',
      imageAlt: 'banner-image',
    },
  ];

  constructor(private router: Router) {}

  download() {
    this.router.navigate([this.downloadRoute]);
  }
  stream() {
    this.router.navigate([this.streamRoute]);
  }

  ngOnInit(): void {}
}
