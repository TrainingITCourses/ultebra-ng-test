import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './models/project';
import { Task } from './models/task';
import { Transaction } from './models/transaction';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  private rootUrl = `https://api-base-21.herokuapp.com/api/pub`;

  constructor(private httpClient: HttpClient) {}

  getProjects$(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.rootUrl}/projects`);
  }
  getTasks$(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.rootUrl}/tasks`);
  }
  getTransactions$(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.rootUrl}/transactions`);
  }
}
