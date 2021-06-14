import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ProjectView } from 'src/app/core/models/project-view';
import { Transaction } from 'src/app/core/models/transaction';
import { Project } from '../../core/models/project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'ab-projects',
  templateUrl: './projects.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  projectViews: ProjectView[] = [];
  loaded = false;
  private projects: Project[] = [];
  private transactions: Transaction[] = [];

  private onProjectsLoaded = {
    next: (projectsData: Project[]) => {
      this.projects = projectsData;
      this.service.getTransactions$().subscribe(this.onTransactionsLoaded);
    },
  };

  private onTransactionsLoaded = {
    next: (transactionsData: Transaction[]) => {
      this.transactions = transactionsData;
      this.setViedData();
    },
  };

  constructor(
    private service: ProjectsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.service.getProjects$().subscribe(this.onProjectsLoaded);
  }

  private setViedData(): void {
    this.projectViews = this.service.composeProjectViews(
      this.projects,
      this.transactions
    );
    this.loaded = true;
    this.cdr.markForCheck();
  }
}
