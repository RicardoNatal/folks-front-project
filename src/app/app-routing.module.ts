import { NotFoundComponent } from './utils/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
    import('./utils/utils.module').then((u) => u.UtilsModule),
  },
  {
    path: 'student',
    loadChildren: async () =>
    import('./features/student/student.module').then((s) => s.StudentModule),
  },
  {
    path: 'teacher',
    loadChildren: async () =>
    import('./features/teacher/teacher.module').then((t) => t.TeacherModule),
  },
  {
    path: 'classroom',
    loadChildren: async () =>
    import('./features/classroom/classroom.module').then((c) => c.ClassroomModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
