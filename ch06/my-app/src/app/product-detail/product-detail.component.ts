import { CommonModule, CurrencyPipe, KeyValuePipe, LowerCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, KeyValuePipe, CurrencyPipe, LowerCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailComponent implements OnChanges, OnDestroy, OnInit {
  constructor(destroyRef: DestroyRef) {
    console.log('Product:', this.product());

    destroyRef.onDestroy(() => {
    });
  }

  product = input<Product>();

  added = output<Product>();

  addToCart() {
    this.added.emit(this.product()!);
  }

  get productTitle() {
    return this.product()!.title;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log('Old value', oldValue);
      console.log('New value', newValue);
    }
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    console.log('Product:', this.product());
  }
}
