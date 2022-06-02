import { Component } from '@angular/core';
import { GoToTopService } from '../services/go-to-top.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public window: Window, public goToTop: GoToTopService) {}
  ngAfterContentInit() {
    this.goToTop.scrollToTop(window);
  }
}
