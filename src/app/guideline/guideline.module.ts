import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidelineRoutingModule } from './guideline-routing.module';

import { GuidelineComponent } from './guideline.component';
import { ColorsComponent } from './colors/colors.component';
import { ImagesComponent } from './images/images.component';
import { IconsComponent } from './icons/icons.component';
import { WritingComponent } from './writing/writing.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  imports: [
    CommonModule,
    GuidelineRoutingModule
  ],
  declarations: [
    GuidelineComponent,
    ColorsComponent,
    ImagesComponent,
    IconsComponent,
    WritingComponent,
    TypographyComponent
  ]
})
export class GuidelineModule { }
