import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GuidelineComponent } from './guideline.component';
import { ColorsComponent } from './colors/colors.component';
import { ImagesComponent } from './images/images.component';
import { IconsComponent } from './icons/icons.component';
import { WritingComponent } from './writing/writing.component';
import { TypographyComponent } from './typography/typography.component';

const guidelineRoutes: Routes = [
  { path: 'guideline/colors',         component: ColorsComponent },
  { path: 'guideline/images',         component: ImagesComponent },
  { path: 'guideline/icons',          component: IconsComponent },
  { path: 'guideline/writing',        component: WritingComponent },
  { path: 'guideline/typography',     component: TypographyComponent },
  { path: 'guideline',               component: GuidelineComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(guidelineRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GuidelineRoutingModule { }
