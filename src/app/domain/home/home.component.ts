import { ChangeDetectionStrategy, Component } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ProjectView } from '../../core/models/project-view';
import { TasksView } from '../../core/models/tasksView';
import { HomeDataService } from './home.data.service';
import { HomeLogicService } from './home.logic.service';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public data$: Observable<{
    projectsViews: ProjectView[];
    tasksView: TasksView;
  }>;

  constructor(private data: HomeDataService, private logic: HomeLogicService) {
    this.data$ = forkJoin({
      projects: this.data.getProjects$(),
      transactions: this.data.getTransactions$(),
      tasks: this.data.getTasks$(),
    }).pipe(
      map((data) => {
        return {
          projectsViews: this.logic.composeProjectViews(
            data.projects,
            data.transactions
          ),
          tasksView: this.logic.composeTasksView(data.tasks),
        };
      })
    );
  }
}
