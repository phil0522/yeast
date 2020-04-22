import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';



@NgModule({
  declarations: [DashboardComponent, BasicLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
