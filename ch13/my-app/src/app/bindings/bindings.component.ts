import { Component, input, output } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [MatButton],
  selector: 'app-bindings',
  styleUrl: './bindings.component.css',
  templateUrl: './bindings.component.html',
})

export class BindingsComponent {
  title = input('');
  liked = output();
}
