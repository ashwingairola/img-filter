import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputComponent } from './components/file-input/file-input.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [FileInputComponent],
  imports: [CommonModule, ButtonModule],
  exports: [FileInputComponent]
})
export class FileInputModule {}
