import { Injectable } from '@angular/core';
import Api from '../helpers/api';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  jwtToken = '';
  constructor(private localStorage: LocalStorageService) {
    this.jwtToken = this.localStorage.get('token');
  }

  async getEngines() {
    const response = await Api('/engines', 'GET', this.jwtToken);
    return response;
  }

  async getMostVulnerableProjects() {
    const response = await Api('/projects', 'GET', this.jwtToken);
    return response;
  }

  async getVulnerabilities() {
    const response = await Api('/vulnerabilities', 'GET', this.jwtToken);
    return response;
  }
}
