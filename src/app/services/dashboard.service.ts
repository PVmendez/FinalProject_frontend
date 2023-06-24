import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  arrayEngines = [
    {
      SAST: 2,
      SCA: 4,
      IaC: 10
    }
  ]

  // arrayVulnerabilidadesPruebita: Vulnerability[] = [
  //   {
  //     riskLevel: 'low',
  //     name: 'Vul1',
  //     total: 115
  //   },
  //   {
  //     riskLevel: 'high',
  //     name: 'Vul3',
  //     total: 95
  //   },
  //   {
  //     riskLevel: 'medium',
  //     name: 'Vul2',
  //     total: 102
  //   }
  // ]

  constructor() { }

  /*sortProjects(projects: Observable<any[]>): Observable<any[]> {
    return projects.pipe(
      map(projects => projects.sort(this.orderByRiskLevel))
    );
  }

  sortVulnerabilities(vulnerabilities$: Observable<any[]>): Observable<any[]> {
    return vulnerabilities$.pipe(
      map(vulnerabilities => vulnerabilities.sort(this.orderByRiskLevel))
    );
  }

  orderByRiskLevel(a: { risk_level: string }, b: { risk_level: string }): number {
    const order: { [key: string]: number } = { high: 1, medium: 2, low: 3 };
    return order[a.risk_level] - order[b.risk_level];
  }*/

  getEngines() {
    return this.arrayEngines;
  }

  async getMostVulnerableProjects() {
    const data = await fetch('http://localhost:3000/projects');
    const response = await data.json();
    return response;
  }

  /* async getVulnerabilities() {
     const data = await fetch('http://localhost:3000/vulnerableprojects');
     const response = await data.json();
     return response;
   }*/
}
