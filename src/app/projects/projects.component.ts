import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ScrollToHeaderService } from '../services/scroll-to-header.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(
    public scrollService: ScrollToHeaderService,
    public hostElement: ElementRef
  ) {}

  ngAfterViewInit() {
    this.scrollService.scrollToTop(this.hostElement);
  }
}
