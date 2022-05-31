import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollToHeaderService {
  constructor(public window: Window) {}

  scrollToTop() {
    const header = window.document.querySelector('h1');
    if (header) {
      header.scrollIntoView();
    }
  }
}
