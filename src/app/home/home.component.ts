import { ScrollToHeaderService } from '../services/scroll-to-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public scrollService: ScrollToHeaderService) {}

  ngAfterViewInit() {
    this.scrollService.scrollToTop();
  }
}
