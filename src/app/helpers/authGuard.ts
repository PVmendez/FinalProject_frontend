import { Injectable } from '@angular/core';
import { UrlTree, Router, CanActivate } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  canActivate(): boolean | UrlTree {
    const token = this.localStorage.get('token');
    const isAuthenticated = !!token;
    this.isAuthenticatedSubject.next(isAuthenticated);

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
