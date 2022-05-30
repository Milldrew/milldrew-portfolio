import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ccard',
  templateUrl: './ccard.component.html',
  styleUrls: ['./ccard.component.scss'],
})
export class CcardComponent implements OnInit {
  @Input()
  title: string = 'Certifications Title';
  @Input()
  subtitle: string = 'subtitle';
  @Input()
  content: string = 'content';
  @Input()
  websiteLink: string = '';
  @Input()
  imgSrc: string = '';

  constructor() {}

  ngOnInit(): void {}
}
