import { ResolveFn } from '@angular/router';

export const productsResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
