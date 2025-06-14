import { Directive, input, numberAttribute } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { priceMaximumValidator } from './price-maximum.validator';

@Directive({
  selector: '[appPriceMaximum]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PriceMaximumDirective,
      multi: true
    }
  ]
})
export class PriceMaximumDirective {
  appPriceMaximum = input(undefined, {
    alias: 'threshold',
    transform: numberAttribute
  });

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.appPriceMaximum
      ? priceMaximumValidator(this.appPriceMaximum()!)(control)
      : null;
  }
}
