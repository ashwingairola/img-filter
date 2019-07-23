import {
  Injectable,
  ComponentFactoryResolver,
  Type,
  Component
} from '@angular/core';
import { BottomSheetModule } from '../bottom-sheet.module';

@Injectable({
  providedIn: BottomSheetModule
})
export class BottomSheetService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  open(component: Type<Component>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
  }
}
