import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Status } from 'src/app/core/models/status';
import { ProjectsService } from '../projects.service';

@Component({
  templateUrl: './new.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe],
})
export class NewComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dp: DatePipe,
    private service: ProjectsService
  ) {
    this.form = this.fb.group({
      id: '',
      title: '',
      start: this.dp.transform(new Date(), 'yyyy-MM-dd'),
      end: '',
      budget: 0,
      description: '',
      status: Status.InProgress,
    });
  }

  ngOnInit(): void {}

  onSaveClick() {
    const newProject = { ...this.form.value };
    newProject.id = this.slugify(newProject.title);
    this.service
      .postProject$(newProject)
      .subscribe({ next: () => this.form.reset() });
  }

  slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-');
  }
}
