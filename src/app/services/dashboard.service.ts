import { Injectable } from '@angular/core';
import Api from '../helpers/api';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  jwtToken = '';

  constructor(private localStorage: LocalStorageService) { this.jwtToken = this.localStorage.get('token'); }

  async getEngines(filterByDate = null) {
    let uri = '/engines';

    if (filterByDate) { uri += `?filterByDate=${filterByDate}` }
  
    const response = Api(uri, 'GET', this.jwtToken);

    return response;
  }

  async getMostVulnerableProjects(filterByDate = null) {
    let uri = '/projects';

    if (filterByDate) { uri += `?filterByDate=${filterByDate}` }

    const response = Api(uri, 'GET', this.jwtToken);

    return response;
  }

  async getVulnerabilities(filterByDate = null) {
    let uri = '/vulnerabilities';

    if (filterByDate) { uri += `?filterByDate=${filterByDate}` }

    const response = Api(uri, 'GET', this.jwtToken);

    return response;
  }
}
