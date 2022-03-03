import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule
  ]
})
export class UtilsModule { }
