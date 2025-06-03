import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailComponent implements OnChanges, OnDestroy, OnInit {
  added = output<Product>();
  
  deleted = output();

  id = input<number>();

  product$: Observable<Product> | undefined;

  constructor(private productService: ProductsService, public authService: AuthService) { }

  addToCart() {
    this.product$?.subscribe(product => {
      this.added.emit(product);
    });
  }

  changePrice(product: Product, price: string) {
    this.productService.updateProduct(product.id, Number(price)).subscribe();
  }

  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id()!);
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    console.log('Product:', this.product$);
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }
}
