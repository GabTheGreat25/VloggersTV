import { Component, Input, OnInit } from '@angular/core';

interface IComment {
  src: string;
  alt: string;
  title: string;
  content: string;
}

@Component({
  selector: 'comment-content',
  templateUrl: './comment-content.component.html',
  styleUrls: ['./comment-content.component.scss'],
})
export class CommentContentComponent implements OnInit {
  @Input() avatar: string = '';
  @Input() comments: IComment[] = [];

  constructor() {}

  ngOnInit(): void {}
}
