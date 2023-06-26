import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private isValid: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  public loginAuth(obj: any) {
    this.http.post('http://localhost:3000/login', obj).subscribe({
      next: (response) => {
        console.log(response);
        this.isValid = true;
        this.router.navigate(['/dashboard']);
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
