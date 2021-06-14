import { Id } from './id';
import { Status } from './status';

export interface Project extends Id {
  budget: number;
  status: Status;
  description?: string;
  start?: Date;
  end?: Date;
}
