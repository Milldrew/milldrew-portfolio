import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollToHeaderService {
  constructor(public window: Window) {}

  scrollToTop(hostElement: ElementRef) {
    hostElement.nativeElement.scrollTo(0, 0);
  }
}
