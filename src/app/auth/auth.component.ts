import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  @ViewChild('loginInput', { static: true }) loginInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  constructor(private authService: AuthService) { }

  onAuth() {
    const email = this.loginInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    const fio = '';
    this.authService.login(email, password, fio);
  }

}
