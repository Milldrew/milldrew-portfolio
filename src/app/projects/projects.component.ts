import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GoToTopService } from '../services/go-to-top.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(public scrollTop: GoToTopService, public window: Window) {}

  ngAfterContentInit() {
    this.scrollTop.scrollToTop(this.window);
  }
}
