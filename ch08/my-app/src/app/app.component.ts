import {
  Component,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APP_SETTINGS } from './app.settings';
import { CopyrightDirective } from './copyright.directive';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductListComponent,
    CopyrightDirective,
    KeyLoggerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  settings = inject(APP_SETTINGS);
}
