import { Component, ElementRef, OnInit } from '@angular/core';
import { GoToTopService } from '../services/go-to-top.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent {
  constructor(
    public hostElement: ElementRef,
    public goToTop: GoToTopService,
    public window: Window
  ) {}

  ngAfterContentInit() {
    this.goToTop.scrollToTop(window);
  }
}
