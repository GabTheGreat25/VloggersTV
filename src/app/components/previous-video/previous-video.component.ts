import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-video',
  templateUrl: './previous-video.component.html',
  styleUrls: ['./previous-video.component.scss'],
})
export class PreviousVideoComponent implements OnInit {
  icon: string = `../../../assets/images/icon.svg`;
  avatar: string = `../../../assets/images/avatar.svg`;

  comments = [
    {
      src: '../../../assets/images/avatar.svg',
      alt: 'avatar',
      title: 'Gabriel Mendoza',
      content:
        'quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent',
    },
    {
      src: '../../../assets/images/avatar.svg',
      alt: 'avatar',
      title: 'Ryota Kise',
      content:
        'quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent',
    },
    {
      src: '../../../assets/images/avatar.svg',
      alt: 'avatar',
      title: 'Raymond Santiago',
      content:
        'quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent',
    },
    {
      src: '../../../assets/images/avatar.svg',
      alt: 'avatar',
      title: 'Kris Hemmings',
      content:
        'quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent',
    },
    {
      src: '../../../assets/images/avatar.svg',
      alt: 'avatar',
      title: 'John Doe',
      content:
        'quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
