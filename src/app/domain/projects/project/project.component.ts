import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/models/project';
import { ProjectsService } from '../projects.service';

@Component({
  templateUrl: './project.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  project$: Observable<Project> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProjectsService
  ) {}

  ngOnInit(): void {
    const projectId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.project$ = this.service.getProject$(projectId);
  }
}
