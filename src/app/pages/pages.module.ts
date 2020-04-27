import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  declarations: [DashboardComponent, TagsComponent],
  imports: [
    CommonModule,
    RouterModule,
    WidgetsModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class PagesModule { }
