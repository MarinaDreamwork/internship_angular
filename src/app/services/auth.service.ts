import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map, tap, Observable } from 'rxjs';
import { IUser } from './user.interface';

@Injectable()

export class AuthService {

  baseUrl: string = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private routes: Router) { }

  login(email: string, password: string, fio: string) {
    console.log('email:', email, 'password:', password, 'fio', fio);
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, { email, password, fio })
      .subscribe(res => {
        if (res.token) {
          console.log('res', res);
          localStorage.setItem('meetups_token', res.token);
          this.routes.navigate(['todo_list']);
        }
        return null;
      });
  }

  logout() {
    localStorage.removeItem('meetups_token');
    this.routes.navigate(['login']);
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public get token(): string | null {
    return localStorage.getItem('meetups_token');
  }

  public get user(): IUser | null {
    const token = this.token;
    if (token) {
      const user: IUser = this.parseJwt(token);
      return user;
    } else return null;
  }
}
