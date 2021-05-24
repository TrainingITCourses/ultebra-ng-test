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

  public composeProjectViews(
    projects: Project[],
    transactions: Transaction[]
  ): ProjectView[] {
    return projects.map((project) =>
      this.composeProjectView(project, transactions)
    );
  }

  private composeProjectView(
    project: Project,
    transactions: Transaction[]
  ): ProjectView {
    const projectView: ProjectView = { ...project };
    const projectTransactions = transactions.filter(
      (transaction) => transaction.projectId === projectView.id
    );
    this.accumulateExpenses(projectTransactions, projectView);
    this.accumulateIncomes(projectTransactions, projectView);
    projectView.profit =
      (projectView.totalIncomes || 0) - (projectView.totalExpenses || 0);
    projectView.balance = projectView.budget + projectView.profit;
    return projectView;
  }

  private accumulateExpenses(
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

  private accumulateIncomes(
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
