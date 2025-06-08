import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CurrencyPipe, FormsModule],
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

  price: number | undefined;

  product$: Observable<Product> | undefined;

  constructor(
    private productService: ProductsService,
    public authService: AuthService,
    private router: Router,
  ) { }

  addToCart() {
  }

  changePrice(product: Product) {
    this.productService.updateProduct(
      product.id,
      this.price!
    ).subscribe(() => this.router.navigate(['/products']));
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
