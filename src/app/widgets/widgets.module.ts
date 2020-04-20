import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YeastIconComponent } from './yeast-icon/yeast-icon.component';



@NgModule({
  declarations: [YeastIconComponent],
  imports: [
    CommonModule
  ],
  exports: [
    YeastIconComponent
  ]
})
export class WidgetsModule { }
