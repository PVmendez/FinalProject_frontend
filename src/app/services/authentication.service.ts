import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { LoginResponse } from '../interfaces/LoginResponse';
import Api from '../helpers/api';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isValid: boolean = false;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
  ) { }

  public async loginAuth(obj: any) {
    return Api('/login', 'POST', '', obj).then((response: LoginResponse) => {
        this.localStorage.set('token', response.token);
        this.router.navigateByUrl('/dashboard-vulnerable-projects');
    });
  }

  public async signUp(obj: any) {
    return Api('/register', 'POST', '', obj).then((response: string) => {
      this.router.navigateByUrl('/login');
    });
  }

  public logout() {
    try {
      this.localStorage.remove('token');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  public enableLogin() {
    return this.isValid;
  }
}
