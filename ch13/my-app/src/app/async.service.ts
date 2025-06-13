import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

const items = ['Microphone', 'Keyboard'];

@Injectable({
  providedIn: 'root'
})

export class AsyncService {
  getItems(): Observable<string[]> {
    return of(items).pipe(delay(500));
  }
}
