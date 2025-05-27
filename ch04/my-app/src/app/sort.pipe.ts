import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Product[], ...args: unknown[]): Product[] {
    if (value) {
      return value.sort((a: Product, b: Product) => {
        if (a.title < b.title) {
          return -1;
        } else if (b.title < a.title) {
          return 1;
        }

        return 0;
      });
    }

    return [];
  }

}
