import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { PrinciplesComponent } from './principles/principles.component';
import { TemplatesComponent } from './templates/templates.component';
import { StructureComponent } from './structure/structure.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    PrinciplesComponent,
    TemplatesComponent,
    StructureComponent
  ]
})
export class LayoutModule { }
