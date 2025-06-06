import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../auth.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CurrencyPipe],
    providers: [
    { provide: ProductsService, useClass: ProductsService },
  ],
  selector: 'app-product-detail',
  styleUrl: './product-detail.component.css',
  templateUrl: './product-detail.component.html',
})

export class ProductDetailComponent implements OnDestroy, OnInit {
  added = output<Product>();
  
  deleted = output();

  id = input<string>();

  product$: Observable<Product> | undefined;

  constructor(
    private productService: ProductsService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  addToCart() {
  }

  changePrice(product: Product, price: string) {
    this.productService.updateProduct(product.id, Number(price)).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.product$ = this.productService.getProduct(Number(this.id()!));
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
