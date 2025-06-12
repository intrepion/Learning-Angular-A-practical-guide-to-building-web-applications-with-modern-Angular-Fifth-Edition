import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatMiniFabButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { Observable, of, Subscription, switchMap } from 'rxjs';
import { FavoritesComponent } from '../favorites/favorites.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { SortPipe } from '../sort.pipe';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  imports: [
    AsyncPipe,
    CommonModule,
    CurrencyPipe,
    FavoritesComponent,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatCardModule,
    MatIcon,
    MatMiniFabButton,
    MatTableModule,
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
  columnNames = ['title', 'price'];

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
