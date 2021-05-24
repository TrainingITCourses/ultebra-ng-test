import { Project } from './project';
import { Task } from './task';
import { Transaction } from './transaction';

export interface ProjectView extends Project {
  tasks?: Task[];
  transactions?: Transaction[];
  totalExpenses?: number;
  totalIncomes?: number;
  profit?: number;
  balance?: number;
}
