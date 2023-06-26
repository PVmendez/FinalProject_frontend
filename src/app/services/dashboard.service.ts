import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  async getEngines() {
    const data = await fetch('http://localhost:3000/engines');
    const response = await data.json();
    return response;
  }

  async getMostVulnerableProjects() {
    const data = await fetch('http://localhost:3000/projects');
    const response = await data.json();
    return response;
  }

   async getVulnerabilities() {
     const data = await fetch('http://localhost:3000/vulnerabilities');
     const response = await data.json();
     return response;
   }
}
