import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthGuard } from './helpers/authGuard';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'FinalProject_frontend';
  isAuthenticated: boolean = false;
  showMenu: boolean = false;
  private authSubscription: Subscription = Subscription.EMPTY;

  constructor(private authGuard: AuthGuard) { }

  ngOnInit(): void {
    this.authSubscription = this.authGuard.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      this.showMenu = this.isAuthenticated;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
