import {
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

@Component({
  selector: 'app-root',
  imports: [
    AuthComponent,
    CopyrightDirective,
    KeyLoggerComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  settings = inject(APP_SETTINGS);
}
