import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(private http: HttpClient, private router: Router) {}

  public async getUser (obj: any) {
      const data = await fetch('http://localhost:3000/user', obj);
      const response = await data.json();
      return response;
  }
}
