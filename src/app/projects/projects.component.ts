import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { GoToTopService } from '../services/go-to-top.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  translationObject: any = {};
  public header: string = '';
  constructor(
    public scrollTop: GoToTopService,
    public window: Window,
    public tranlsateService: TranslateService
  ) {
    tranlsateService
      .stream([
        'robotTitle',
        'todoTitle',
        'onsaveTitle',
        'mineTitle',
        'libTitle',
      ])
      .subscribe((translations) => {
        console.log(translations);
        this.translationObject = translations;
      });
  }

  ngAfterContentInit() {
    this.scrollTop.scrollToTop(this.window);
  }
}
