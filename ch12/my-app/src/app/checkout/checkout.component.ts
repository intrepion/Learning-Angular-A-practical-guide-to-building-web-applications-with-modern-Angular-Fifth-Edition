import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  imports: [MatButton, MatDialogModule],
  selector: 'app-checkout',
  styleUrl: './checkout.component.css',
  templateUrl: './checkout.component.html',
})

export class CheckoutComponent {

}
