import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/models/project';
import { ProjectView } from 'src/app/core/models/project-view';
import { Transaction } from 'src/app/core/models/transaction';
import { TransactionType } from 'src/app/core/models/transaction-type';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private rootUrl = `https://api-base-21.herokuapp.com/api/pub`;

  constructor(private http: HttpClient) {}

  getProject$(projectId: string): Observable<Project> {
    return this.http.get<Project>(`${this.rootUrl}/projects/${projectId}`);
  }
  getProjects$(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.rootUrl}/projects`);
  }
  getTransactions$(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`);
  }

  public composeProjectViews(
    projects: Project[],
    transactions: Transaction[]
  ): ProjectView[] {
    // throw new Error('Fake error para probar dependencias ocultas');
    return projects.map((project) =>
      this.composeProjectView(project, transactions)
    );
  }
  public filterTransactionsByProjectId(
    transactions: Transaction[],
    projectId: string
  ): Transaction[] {
    return transactions.filter(
      (transaction) => transaction.projectId === projectId
    );
  }

  public composeProjectView(
    project: Project,
    transactions: Transaction[]
  ): ProjectView {
    const projectView: ProjectView = { ...project };
    const projectTransactions = this.filterTransactionsByProjectId(
      transactions,
      projectView.id
    );
    this.processExpenses(projectTransactions, projectView);
    this.processIncomes(projectTransactions, projectView);
    projectView.profit =
      (projectView.totalIncomes || 0) - (projectView.totalExpenses || 0);
    projectView.balance = projectView.budget + projectView.profit;
    return projectView;
  }
  private processExpenses(
    transactions: Transaction[],
    projectView: ProjectView
  ): void {
    const expenses = transactions.filter(
      (transaction) => transaction.type === TransactionType.Expense
    );
    if (expenses.length > 0) {
      projectView.totalExpenses = expenses
        .map((expense) => expense.amount)
        .reduce((accumulator, current) => accumulator + current);
    } else {
      projectView.totalExpenses = 0;
    }
  }

  private processIncomes(
    transactions: Transaction[],
    projectView: ProjectView
  ): void {
    const incomes = transactions.filter(
      (transaction) => transaction.type === TransactionType.Incoming
    );
    if (incomes.length > 0) {
      projectView.totalIncomes = incomes
        .map((income) => income.amount)
        .reduce((accumulator, current) => accumulator + current);
    } else {
      projectView.totalIncomes = 0;
    }
  }
  postProject$(newProject: Project): Observable<Project> {
    return this.http.post<Project>(`${this.rootUrl}/projects/`, newProject);
  }
}
