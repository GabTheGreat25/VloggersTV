import { Component, Input, OnInit } from '@angular/core';

interface IComment {
  src: string;
  alt: string;
  title: string;
  content: string;
}

@Component({
  selector: 'comment-body',
  templateUrl: './comment-body.component.html',
  styleUrls: ['./comment-body.component.scss'],
})
export class CommentBodyComponent implements OnInit {
  @Input() dot: string = '';
  @Input() avatar: string = '';
  @Input() comments: IComment[] = [];

  constructor() {}

  ngOnInit(): void {}
}
