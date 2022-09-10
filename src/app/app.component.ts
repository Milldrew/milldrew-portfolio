import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'milldrew-portfolio';
  constructor(
    public router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public translateService: TranslateService
  ) {
    translateService.addLangs(['en', 'es', 'chinese']);
    translateService.setDefaultLang('en');
    translateService.stream('welcomeMessage').subscribe(console.log);
  }
  currentTheme: string = 'deep-purple-amber';
  currentFont: string = 'handwriting';
  changeLanguage(language: string) {
    console.log(`change language: ${language}`);
    this.translateService.use(language);
  }
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
  hrefToTop: string = '#top';
  currentUrlPath: string = '/milldrew-portfolio';
  ngDoCheck() {
    let path = this.router.url.replace(/#.*/, '');

    if (this.currentUrlPath !== path) {
      this.currentUrlPath = path;
      this.hrefToTop = `/milldrew-portfolio${path}#top`;
    }
  }
}
