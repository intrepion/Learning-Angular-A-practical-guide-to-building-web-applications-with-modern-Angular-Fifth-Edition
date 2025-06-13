import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-spy',
  styleUrl: './spy.component.css',
  templateUrl: './spy.component.html',
})

export class SpyComponent {
  caption = '';

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('My Angular app');
    this.caption = this.title.getTitle();
  }
}
