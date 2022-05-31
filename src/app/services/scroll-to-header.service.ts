import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollToHeaderService {
  constructor(public window: Window) {}

  scrollToTop(hostElement: ElementRef) {
    const header = window.document.querySelector('h1');
    if (header) {
      header.scrollIntoView(true);
    }
    hostElement.nativeElement.scrollTo(0, 0);
    hostElement.nativeElement.scrollTop = 0;
  }
}
