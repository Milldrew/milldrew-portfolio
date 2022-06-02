import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoToTopService {
  constructor() {}
  scrollToTop(window: Window) {
    const topElement = window.document.querySelector('#top');
    if (topElement) {
      topElement.scrollIntoView();
    }
  }
}
