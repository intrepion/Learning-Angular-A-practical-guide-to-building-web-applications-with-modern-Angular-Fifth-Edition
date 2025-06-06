import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { checkoutGuard } from './checkout.guard';

export const routes: Routes = [
  {
    component: ProductCreateComponent,
    path: 'products/new',
  },
  {
    component: ProductDetailComponent,
    path: 'products/:id',
  },
  {
    component: ProductListComponent,
    path: 'products',
  },
  {
    canActivate: [authGuard],
    canDeactivate: [checkoutGuard],
    component: CartComponent,
    path: 'cart',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
