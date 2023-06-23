import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';
import { Vulnerability } from '../interfaces/vulnerability';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  arrayProjectosPruebita: Project[] = [
    {
      riskLevel: 'medium',
      name: 'App1',
      high: 50,
      medium: 20,
      date: new Date('2023-06-23')
    },
    {
      riskLevel: 'high',
      name: 'App2',
      high: 100,
      medium: 25,
      date: new Date('2023-06-23')
    }
  ]

  arrayVulnerabilidadesPruebita: Vulnerability[] = [
    {
      riskLevel: 'low',
      name: 'Vul1',
      total: 115
    },
    {
      riskLevel: 'high',
      name: 'Vul3',
      total: 95
    },
    {
      riskLevel: 'medium',
      name: 'Vul2',
      total: 102
    }
  ]

  constructor(/*private http: HttpClient*/) {  }

  sortProjects(projects$: Observable<Project[]>): Observable<Project[]> {
    return projects$.pipe(
      map(projects => projects.sort(this.orderByRiskLevel))
    );
  }

  sortVulnerabilities(vulnerabilities$: Observable<Vulnerability[]>): Observable<Vulnerability[]> {
    return vulnerabilities$.pipe(
      map(vulnerabilities => vulnerabilities.sort(this.orderByRiskLevel))
    );
  }

  orderByRiskLevel(a: { riskLevel: string }, b: { riskLevel: string }): number {
    const order: { [key: string]: number } = { high: 1, medium: 2, low: 3 };
    return order[a.riskLevel] - order[b.riskLevel];
  }

  getSAST() {
    return 1;
    // return this.http.get<number>('link al back');
  }

  getSCA() {
    return 2;
    // return this.http.get<number>('link al back');
  }

  getIaC() {
    return 3;
    // return this.http.get<number>('link al back');
  }

  getMostVulnerableProjects() {
    return this.sortProjects(of(this.arrayProjectosPruebita)/*this.http.get<Project[]>('link')*/)
    //return this.arrayProjectosPruebita.sort(this.orderByRiskLevel);
    //return sortedProjects;
  }

  getVulnerabilities() {
    return this.sortVulnerabilities(of(this.arrayVulnerabilidadesPruebita))
    //return this.arrayVulnerabilidadesPruebita.sort(this.orderByRiskLevel);
  }
}