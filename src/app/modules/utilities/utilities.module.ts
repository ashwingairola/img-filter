import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputDirective } from './directives/file-input.directive';

@NgModule({
  declarations: [FileInputDirective],
  imports: [
    CommonModule
  ]
})
export class UtilitiesModule { }
