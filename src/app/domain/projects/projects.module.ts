import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { NewComponent } from './new/new.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent, NewComponent],
  imports: [CommonModule, ProjectsRoutingModule, UiModule, ReactiveFormsModule],
})
export class ProjectsModule {}
