import { Component, OnInit } from '@angular/core';
import { ScrollToHeaderService } from '../services/scroll-to-header.service';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss'],
})
export class DegreesComponent {
  constructor(public scrollService: ScrollToHeaderService) {}

  ngAfterViewInit() {
    this.scrollService.scrollToTop();
  }
}
