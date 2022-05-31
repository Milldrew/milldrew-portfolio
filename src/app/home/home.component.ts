import { ScrollToHeaderService } from '../services/scroll-to-header.service';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public scrollService: ScrollToHeaderService,
    private hostElement: ElementRef
  ) {}

  ngAfterViewInit() {
    this.scrollService.scrollToTop(this.hostElement);
  }
}
