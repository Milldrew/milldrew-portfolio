import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollToHeaderService } from '../services/scroll-to-header.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent {
  constructor(
    public scrollService: ScrollToHeaderService,
    public hostElement: ElementRef
  ) {}

  ngAfterViewInit(): void {
    this.scrollService.scrollToTop(this.hostElement);
  }
}
