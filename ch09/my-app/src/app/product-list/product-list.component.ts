import { AfterViewInit, Component, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FavoritesComponent } from '../favorites/favorites.component';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ProductsService } from '../products.service';
import { SortPipe } from '../sort.pipe';

@Component({
  imports: [
    FavoritesComponent,
    ProductDetailComponent,
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
  productDetail = viewChild(ProductDetailComponent);

  products = toSignal(inject(ProductsService).getProducts(), {
    initialValue: []
  });

  products$: Observable<Product[]> | undefined;

  private productService = inject(ProductsService);

  private productsSub: Subscription | undefined;

  selectedProduct: Product | undefined;

  private getProducts() {
    this.products$ = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    console.log(this.productDetail()!.product$);
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
