import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponent, SearchBarComponent],
  exports: [NavigationComponent, SearchBarComponent]
})
export class CoreModule { }
