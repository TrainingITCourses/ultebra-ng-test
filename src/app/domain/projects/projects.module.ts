import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  imports: [CommonModule, ProjectsRoutingModule, UiModule],
})
export class ProjectsModule {}
