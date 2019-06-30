import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [BottomSheetComponent],
  imports: [CommonModule],
  exports: [BottomSheetComponent]
})
export class BottomSheetModule {}
