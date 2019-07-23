import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { OverlayService } from '../overlay/services/overlay.service';
import { OverlayModule } from '../overlay/overlay.module';

@NgModule({
  declarations: [BottomSheetComponent],
  imports: [CommonModule, OverlayModule],
  exports: [BottomSheetComponent],
  providers: [OverlayService]
})
export class BottomSheetModule {}
