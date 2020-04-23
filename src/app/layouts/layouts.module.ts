import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [
    BasicLayoutComponent,
  ],
  imports: [
    AppRoutingModule,
    WidgetsModule,
    CommonModule,
    PagesModule,
  ],
  exports: [
    BasicLayoutComponent,
  ]
})
export class LayoutsModule { }
