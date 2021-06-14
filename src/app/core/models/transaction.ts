import { Id } from './id';
import { ProjectId } from './projectid';
import { TransactionType } from './transaction-type';

export interface Transaction extends Id, ProjectId {
  type: TransactionType;
  amount: number;
  date?: Date;
}
