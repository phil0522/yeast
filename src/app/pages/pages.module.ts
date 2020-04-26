import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [DashboardComponent, TagsComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class PagesModule { }
