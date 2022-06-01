import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { GoToTopService } from '../services/go-to-top.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isOpenFonts = false;
  isOpen = false;

  toggleFontMenu() {
    this.isOpenFonts = !this.isOpenFonts;
  }
  toggleThemeMenu() {
    this.isOpen = !this.isOpen;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  typography = 'Handwriting';
  @Output() private chooseTypography: EventEmitter<string>;
  @Output() private chooseTheme: EventEmitter<string>;
  constructor(
    public topService: GoToTopService,
    private breakpointObserver: BreakpointObserver,
    public window: Window
  ) {
    this.chooseTheme = new EventEmitter();
    this.chooseTypography = new EventEmitter();
  }
  chosenTheme(theme: string) {
    this.chooseTheme.emit(theme);
  }
  chosenTypography(typography: string) {
    this.typography = typography[0].toUpperCase() + typography.slice(1);
    this.chooseTypography.emit(typography);
  }
  ngAfterContentInit() {
    const topElement = window.document.querySelector('#top');
    this.topService.setTopElement(topElement);
  }
}
