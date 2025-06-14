import {
  AfterViewInit,
  Component,
  inject,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatBadge } from '@angular/material/badge';
import {
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { APP_SETTINGS } from './app.settings';
import { AuthComponent } from './auth/auth.component';
import { CartService } from './cart.service';
import { CopyrightDirective } from './copyright.directive';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

@Component({
  selector: 'app-root',
  imports: [
    AuthComponent,
    CopyrightDirective,
    KeyLoggerComponent,
    MatBadge,
    MatButton,
    MatToolbar,
    MatToolbarRow,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements AfterViewInit {
  cartService = inject(CartService);

  settings = inject(APP_SETTINGS);

  title = '';

  ngAfterViewInit(): void {
    this.title = this.settings.title;
  }
}
