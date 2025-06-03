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
  
  id = input<number>();

  product$: Observable<Product> | undefined;

  constructor(private productService: ProductsService) { }

  addToCart() {
    this.product$?.subscribe(product => {
      this.added.emit(product);
    });
  }

  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id()!);
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    console.log('Product:', this.product$);
  }
}
