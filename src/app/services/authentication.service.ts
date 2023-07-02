import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { LoginResponse } from '../interfaces/LoginResponse';
import Api from '../helpers/api';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isValid: boolean = false;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private messageService: MessagesService
  ) {}

  public async loginAuth(obj: any) {
    const response = await Api('/login', 'POST', '', obj);
    this.localStorage.set('token', response.token);
    this.router.navigateByUrl('/dashboard-vulnerable-projects');
    return response;
  }

  public async signUp(obj: any) {
    const response = await Api('/register', 'POST', '', obj);
    this.router.navigateByUrl('/login');

    return response;
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
