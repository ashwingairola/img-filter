import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnChangeComponent } from './components/btn-change/btn-change.component';

@NgModule({
  declarations: [BtnChangeComponent],
  imports: [CommonModule],
  exports: [BtnChangeComponent]
})
export class FilterControlModule {}
