import { TranslateService } from '@ngx-translate/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { GoToTopService } from '../services/go-to-top.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent {
  translationObject: any = {};
  constructor(
    public translateService: TranslateService,
    public hostElement: ElementRef,
    public goToTop: GoToTopService,
    public window: Window
  ) {
    this.translateService.stream(['welcomeMessage']);
  }

  ngAfterContentInit() {
    this.goToTop.scrollToTop(window);
  }
}
