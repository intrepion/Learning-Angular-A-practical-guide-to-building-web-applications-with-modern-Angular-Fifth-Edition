import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {

  transform(value: Product[], args: keyof Product = 'price'): Product[] {
    if (value) {
      return value.sort((a: Product, b: Product) => {
        if (a[args] < b[args]) {
          return -1;
        } else if (b[args] < a[args]) {
          return 1;
        }

        return 0;
      });
    }

    return [];
  }

}
