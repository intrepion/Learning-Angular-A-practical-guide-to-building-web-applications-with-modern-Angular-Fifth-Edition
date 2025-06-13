import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-bindings',
  styleUrl: './bindings.component.css',
  templateUrl: './bindings.component.html',
})

export class BindingsComponent {
  title = input('');
  liked = output();
}
