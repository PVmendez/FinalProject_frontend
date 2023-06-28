import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { LoginResponse } from '../interfaces/LoginResponse';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private isValid: boolean = false;

  constructor(private http: HttpClient, private router: Router, private localStorage: LocalStorageService) {}
  
  public loginAuth(obj: any) {
    this.http.post<LoginResponse>('http://localhost:3000/login', obj).subscribe({
      next: (res) => {
        this.localStorage.set('token', res.token);
        this.isValid = true;
        this.router.navigate(['/dashboard-vulnerable-projects']);
      },
      error: (error) => {
        if(error.status == 404){
          alert("Usuario no encontrado");
        }
        console.error(error);
      },
    });
  }

  public enableLogin() {
    return this.isValid;
  }
}
