import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isOpen = true;

  toggleThemeMenu() {
    this.isOpen = !this.isOpen;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  @Output() private chooseTheme: EventEmitter<string>;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.chooseTheme = new EventEmitter();
  }
  chosenTheme(theme: string) {
    this.chooseTheme.emit(theme);
  }
}
