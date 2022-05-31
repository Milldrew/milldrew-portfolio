import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'milldrew-portfolio';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  currentTheme: string = 'deep-purple-amber';
  currentFont: string = 'handwriting';
  changeFont(font: string) {
    this.currentFont = font;
    const classes = `${this.currentTheme}  ${this.currentFont}`;
    this.renderer.setAttribute(this.document.body, 'class', classes);
  }
  changeTheme(theme: string) {
    this.currentTheme = theme;
    const classes = `${this.currentTheme}  ${this.currentFont}`;
    this.renderer.setAttribute(this.document.body, 'class', classes);
  }
}
