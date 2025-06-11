import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthService } from '../auth.service';

@Component({
  imports: [MatButton],
  selector: 'app-auth',
  styleUrl: './auth.component.css',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(public authService: AuthService) {}

  login() {
    this.authService.login('david_r', '3478*#54').subscribe();
  }

  logout() {
    this.authService.logout();
  }
}
