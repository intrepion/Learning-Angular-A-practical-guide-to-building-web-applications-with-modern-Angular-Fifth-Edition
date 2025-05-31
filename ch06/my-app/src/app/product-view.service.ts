import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { map, Observable } from 'rxjs';

@Injectable()

export class ProductViewService {
  private product: Product | undefined;

  constructor(private productService: ProductsService) {}

  getProduct(id: number): Observable<Product | undefined> {
    return this.productService.getProducts().pipe(
      map(products => {
        if (!this.product) {
          this.product = products.find(product => product.id === id);
        }
        return this.product;
      })
    );
  }
}
