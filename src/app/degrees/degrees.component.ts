import { Component, ElementRef, OnInit } from '@angular/core';
import { GoToTopService } from '../services/go-to-top.service';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss'],
})
export class DegreesComponent {
  constructor(
    public hostElement: ElementRef,
    public window: Window,
    public goToTop: GoToTopService
  ) {}
  ngAfterContentInit() {
    this.goToTop.scrollToTop(window);
  }
}
