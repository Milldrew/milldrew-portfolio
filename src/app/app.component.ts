import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'milldrew-portfolio';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  ngOnInit() {
    this.renderer.setAttribute(this.document.body, 'class', 'purple-green');
    console.log('hello');
  }
  changeTheme(theme: string) {
    this.renderer.setAttribute(this.document.body, 'class', theme);
  }
}
