import { AfterViewInit, Component, DestroyRef, inject, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ProductViewComponent } from '../product-view/product-view.component';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe, FavoritesComponent, ProductViewComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [
    { provide: ProductsService, useClass: ProductsService },
  ],
})

export class ProductListComponent implements AfterViewInit, OnDestroy, OnInit {
  private destroyRef = inject(DestroyRef);

  productDetail = viewChild(ProductDetailComponent);

  products: Product[] = [];

  private productService = inject(ProductsService);

  private productsSub: Subscription | undefined;

  selectedProduct: Product | undefined = this.products[0];

  private getProducts() {
    this.productsSub = this.productService.getProducts().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(products => {
      this.products = products;
    });
  }

  ngAfterViewInit(): void {
    console.log(this.productDetail()!.product());
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onAdded(product: Product) {
    alert(`${product.title} added to the cart!`);
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }
}
