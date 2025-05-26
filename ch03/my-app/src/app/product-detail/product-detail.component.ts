import { ChangeDetectionStrategy, Component, DestroyRef, input, OnDestroy, OnInit, output } from '@angular/core';
import { Product } from '../product'; 

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailComponent implements OnDestroy, OnInit {
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

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    console.log('Product:', this.product());
  }
}
