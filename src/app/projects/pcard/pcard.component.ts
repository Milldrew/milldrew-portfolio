import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcard',
  templateUrl: './pcard.component.html',
  styleUrls: ['./pcard.component.scss'],
})
export class PcardComponent implements OnInit {
  @Input()
  title: string = 'Project Title';
  @Input()
  subtitle: string = 'subtitle';
  @Input()
  content: string = 'content';
  @Input()
  moreContent: string = '';
  @Input()
  serverCodeLink: string = '';
  @Input()
  uiCodeLink: string = '';
  @Input()
  codeLink: string = '';
  @Input()
  liveApp: string = '';
  @Input()
  imgSrc: string = '';
  @Input()
  isPaused: boolean = true;
  cardCoverColor: string = '';

  constructor() {}

  ngOnInit(): void {
    this.cardCoverColor = this.isPaused ? '#FF000088' : '#000000';
  }
}
