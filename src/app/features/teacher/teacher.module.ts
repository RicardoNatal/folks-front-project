import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, TeacherRoutingModule],
})
export class TeacherModule {}
