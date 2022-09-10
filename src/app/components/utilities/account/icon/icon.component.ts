import { Component, Input, OnInit } from '@angular/core';

interface ILogo {
  src: string;
  alt: string;
}

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  images = [
    {
      imageSrc: '../../../assets/images/finalMatch.svg',
      imageAlt: 'finalMatch',
    },
    {
      imageSrc: '../../../assets/images/basketball.svg',
      imageAlt: 'basketball',
    },
    {
      imageSrc: '../../../assets/images/rendon.svg',
      imageAlt: 'rendon',
    },
    {
      imageSrc: '../../../assets/images/pose.svg',
      imageAlt: 'pose',
    },
  ];

  logos: ILogo[] = [
    {
      src: '../../../assets/images/twitter.svg',
      alt: 'twitter',
    },
    {
      src: '../../../assets/images/tiktok.svg',
      alt: 'tiktok',
    },
    {
      src: '../../../assets/images/facebook.svg',
      alt: 'facebook',
    },
    {
      src: '../../../assets/images/instagram.svg',
      alt: 'instagram',
    },
    {
      src: '../../../assets/images/youtube.svg',
      alt: 'youtube',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
