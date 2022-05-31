import { Component, OnInit } from '@angular/core';
import { ScrollToHeaderService } from '../services/scroll-to-header.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent implements OnInit {
  constructor(public scrollService: ScrollToHeaderService) {}

  ngOnInit(): void {
    this.scrollService.scrollToTop();
  }
}
