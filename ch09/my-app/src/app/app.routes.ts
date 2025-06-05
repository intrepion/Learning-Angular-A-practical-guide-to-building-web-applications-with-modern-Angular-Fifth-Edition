import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: 'products/new', component: ProductCreateComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
];
