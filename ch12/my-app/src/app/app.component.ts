import {
  AfterViewInit,
  Component,
  inject,
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { APP_SETTINGS } from './app.settings';
import { AuthComponent } from './auth/auth.component';
import { CopyrightDirective } from './copyright.directive';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { MatButton } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [
    AuthComponent,
    CopyrightDirective,
    KeyLoggerComponent,
    MatButton,
    MatToolbar,
    MatToolbarRow,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements AfterViewInit {
  settings = inject(APP_SETTINGS);

  title = '';

  ngAfterViewInit(): void {
    this.title = this.settings.title;
  }
}
