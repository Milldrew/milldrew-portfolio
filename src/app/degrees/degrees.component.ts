import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollToHeaderService } from '../services/scroll-to-header.service';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss'],
})
export class DegreesComponent {
  constructor(
    public scrollService: ScrollToHeaderService,
    public hostElement: ElementRef
  ) {}

  ngAfterViewInit() {
    this.scrollService.scrollToTop(this.hostElement);
  }
}
