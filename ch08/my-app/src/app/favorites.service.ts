import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from './product';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService extends ProductsService {

  constructor() {
    super(inject(HttpClient));
  }

  override getProducts(): Observable<Product[]> {
    return super.getProducts().pipe(
      map(products => products.slice(1, 3))
    );
  }
}
