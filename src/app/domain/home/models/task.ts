import { Id } from './id';
import { ProjectId } from './projectid';

export interface Task extends Id, ProjectId {
  done: boolean;
  dueDate?: Date;
}
