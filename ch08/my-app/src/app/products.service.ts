import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { APP_SETTINGS } from './app.settings';
import { Product } from './product';

@Injectable()

export class ProductsService {
  private productsUrl = inject(APP_SETTINGS).apiUrl + '/products';

  private products: Product[] = [];

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    return of(product!);
  }

  getProducts(): Observable<Product[]> {
    const options = new HttpParams()
      .set('limit', 10)
      .set('page', 1);

    return this.http.get<Product[]>(this.productsUrl, {
      params: options
    }).pipe(map(products => {
      this.products = products;
      return products;
      }));
  }
}
