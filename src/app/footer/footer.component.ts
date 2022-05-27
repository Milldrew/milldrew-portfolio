import { Component, OnInit } from '@angular/core';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  faGithub = faGithubAlt;
  faLinkedIn = faLinkedinIn;

  ngOnInit(): void {}
}
