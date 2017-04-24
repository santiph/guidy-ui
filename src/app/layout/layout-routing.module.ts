import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { PrinciplesComponent } from './principles/principles.component';
import { TemplatesComponent } from './templates/templates.component';
import { StructureComponent } from './structure/structure.component';

const layoutRoutes: Routes = [
  { path: 'layout/principles',         component: PrinciplesComponent},
  { path: 'layout/templates',         component: TemplatesComponent},
  { path: 'layout/structure',          component: StructureComponent},
  { path: 'layout',                component: LayoutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(layoutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
