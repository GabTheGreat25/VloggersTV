import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
})
export class StreamComponent implements OnInit {
  icon: string = `../../../assets/images/icon.svg`;
  dot: string = `../../../assets/images/dot.svg`;
  avatar: string = `../../../assets/images/avatar.svg`;

  comments = [
    {
      src: '../../../assets/images/avatar.svg',
      alt: 'avatar',
      title: 'Gabriel Mendoza',
      content:
        'placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum',
    },
    {
      src: '../../../assets/images/avatar.svg',
      alt: 'avatar',
      title: 'Mark Joseph',
      content:
        'adipiscing bibendum est ultricies integer quis auctor elit sed vulputate',
    },
    {
      src: '../../../assets/images/avatar.svg',
      alt: 'avatar',
      title: 'John Doe',
      content:
        'placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum',
    },
    {
      src: '../../../assets/images/avatar.svg',
      alt: 'avatar',
      title: 'Warren',
      content: 'fringilla ut morbi tincidunt augue',
    },
    {
      src: '../../../assets/images/avatar.svg',
      alt: 'avatar',
      title: 'Jessica',
      content: 'fringilla ut morbi tincidunt augue',
    },
    {
      src: '../../../assets/images/avatar.svg',
      alt: 'avatar',
      title: 'Joshua',
      content: 'fringilla ut morbi tincidunt augue',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
