import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncService } from '../async.service';

@Component({
  imports: [AsyncPipe],
  selector: 'app-async',
  styleUrl: './async.component.css',
  templateUrl: './async.component.html',
})
export class AsyncComponent implements OnInit {
  items$: Observable<string[]> | undefined;

  constructor(private asyncService: AsyncService) {}

  ngOnInit(): void {
    this.items$ = this.asyncService.getItems();
  }
}
