import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GoToTopService } from '../services/go-to-top.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public window: Window,
    public goToTop: GoToTopService,
    public translateService: TranslateService
  ) {}
  ngAfterContentInit() {
    this.goToTop.scrollToTop(window);
  }
}
