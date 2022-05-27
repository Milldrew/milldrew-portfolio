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

  constructor() {}

  ngOnInit(): void {}
}
