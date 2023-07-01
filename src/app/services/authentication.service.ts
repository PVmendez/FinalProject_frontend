import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  ) {}

  public async loginAuth(obj: any) {
    Api('/login', 'POST', '', obj).then((response: LoginResponse) => {
      try {
        this.localStorage.set('token', response.token);
        this.router.navigate(['/dashboard-vulnerable-projects']);
      } catch (error) {
        console.log(error);
      }
    });
  }

  public async signUp(obj: any) {
    try {
      const response = await Api('/register', 'POST', '', obj);
      console.log("Sign up successful:", response);
      return response
    } catch (error) {
      console.error("Error occurred during sign up:", error);
    }
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
