import { Injectable } from '@angular/core';
import { Project } from './models/project';
import { ProjectView } from './models/project-view';
import { Task } from './models/task';
import { TasksView } from './models/tasksView';
import { Transaction } from './models/transaction';
import { TransactionType } from './models/transaction-type';
@Injectable({
  providedIn: 'root',
})
export class HomeLogicService {
  constructor() {}

  public composeTasksView(tasks: Task[]): TasksView {
    return {
      total: tasks.length,
      pending: tasks.filter((task) => !task.done).length,
    };
  }

  public filterTransactionsByProjectId(
    transactions: Transaction[],
    projectId: string
  ): Transaction[] {
    return transactions.filter(
      (transaction) => transaction.projectId === projectId
    );
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
}
