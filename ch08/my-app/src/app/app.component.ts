import {
  Component,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APP_SETTINGS } from './app.settings';
import { AuthComponent } from './auth/auth.component';
import { CopyrightDirective } from './copyright.directive';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [
    AuthComponent,
    CopyrightDirective,
    KeyLoggerComponent,
    ProductListComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  settings = inject(APP_SETTINGS);
}
