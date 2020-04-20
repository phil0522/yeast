import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BasicLayoutComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    BasicLayoutComponent,
  ]
})
export class LayoutsModule { }
