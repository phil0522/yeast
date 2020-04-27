import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YeastIconComponent } from './yeast-icon/yeast-icon.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PagesModule } from '../pages/pages.module';
import { OverlayTagComponent } from './overlay-tag/overlay-tag.component';


@NgModule({
  declarations: [YeastIconComponent, TagInputComponent, OverlayTagComponent],
  imports: [
    CommonModule,
    OverlayModule,
  ],
  exports: [
    YeastIconComponent,
    TagInputComponent,
  ]
})
export class WidgetsModule { }
