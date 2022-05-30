import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ccard',
  templateUrl: './ccard.component.html',
  styleUrls: ['./ccard.component.scss'],
})
export class CcardComponent implements OnInit {
  @Input()
  title: string = 'Project Title';
  @Input()
  subtitle: string = 'subtitle';
  @Input()
  content: string = 'content';
  @Input()
  codeLink: string = '';
  @Input()
  liveApp: string = '';
  @Input()
  imgSrc: string = '';

  constructor() {}

  ngOnInit(): void {}
}
