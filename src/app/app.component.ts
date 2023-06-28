import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject_frontend';

  constructor(private loginPrd: AuthenticationService) {

  }

  public visualizeDashboard(){
    console.log(this.loginPrd.enableLogin());
    return this.loginPrd.enableLogin();
  }
}
