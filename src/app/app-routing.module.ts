import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./domain/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'about', loadChildren: () => import('./domain/about/about.module').then(m => m.AboutModule) },
  { path: 'projects', loadChildren: () => import('./domain/projects/projects.module').then(m => m.ProjectsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
