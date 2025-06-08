import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, of, Subscription, switchMap } from 'rxjs';
import { FavoritesComponent } from '../favorites/favorites.component';
import { Product } from '../product';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ProductsService } from '../products.service';
import { SortPipe } from '../sort.pipe';

@Component({
  imports: [
    CommonModule,
    FavoritesComponent,
    ProductViewComponent,
    RouterLink,
    SortPipe,
  ],
  providers: [
    { provide: ProductsService, useClass: ProductsService },
  ],
  selector: 'app-product-list',
  styleUrl: './product-list.component.css',
  templateUrl: './product-list.component.html',
})

export class ProductListComponent implements AfterViewInit, OnDestroy, OnInit {
  products = toSignal(inject(ProductsService).getProducts(), {
    initialValue: []
  });

  products$: Observable<Product[]> | undefined;

  private productsSub: Subscription | undefined;

  selectedProduct: Product | undefined;

  constructor(private productService: ProductsService, private route: ActivatedRoute) {}

  private getProducts() {
    this.products$ = this.route.data.pipe(
      switchMap(data => of(data['products']))
    );
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }

  onAdded(product: Product) {
    alert(`${product.title} added to the cart!`);
  }
}
