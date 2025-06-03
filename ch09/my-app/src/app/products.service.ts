import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { APP_SETTINGS } from './app.settings';
import { Product } from './product';

@Injectable()

export class ProductsService {
  private productsUrl = inject(APP_SETTINGS).apiUrl + '/products';

  private products: Product[] = [];

  constructor(private http: HttpClient) { }

  addProduct(newProduct: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, newProduct).pipe(
      map(product => {
        this.products.push(product);
        return product;
      })
    );
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.productsUrl}/${id}`).pipe(
      tap(() => {
        const index = this.products.findIndex(p => p.id === id);
        this.products.splice(index, 1);
      })
    );
  }

  getProduct(id: number): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    return of(product!);
  }

  getProducts(): Observable<Product[]> {
    const options = {
      params: new HttpParams()
        .set('limit', 10)
        .set('page', 1),
      headers: new HttpHeaders({ Authorization: 'myToken' })
    };

    return this.http.get<Product[]>(this.productsUrl, options)
      .pipe(map(products => {
        this.products = products;
        return products;
      }));
  }

  updateProduct(id: number, price: number): Observable<Product> {
    return this.http.patch<Product>(`${this.productsUrl}/${id}`, {
      price
    }).pipe(
      map(product => {
        const index = this.products.findIndex(p => p.id === id);
        this.products[index].price = price;
        return product;
      })
    );
  }
}
