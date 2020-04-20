import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    BasicLayoutComponent,
    SidebarComponent,
  ],
  imports: [
    AppRoutingModule,
    WidgetsModule,
    CommonModule
  ],
  exports: [
    BasicLayoutComponent,
  ]
})
export class LayoutsModule { }
