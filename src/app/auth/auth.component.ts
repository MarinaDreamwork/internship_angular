import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  @ViewChild('loginInput', { static: true }) loginInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  onAuth() {
    console.log('login:', this.loginInput.nativeElement.value);
    console.log('password:', this.passwordInput.nativeElement.value);
  }

}
