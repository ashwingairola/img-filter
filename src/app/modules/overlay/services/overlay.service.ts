import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  ComponentFactory,
  EmbeddedViewRef
} from '@angular/core';
import { OverlayComponent } from '../components/overlay/overlay.component';
import { OverlayModule } from '../overlay.module';

@Injectable({
  providedIn: OverlayModule
})
export class OverlayService {
  private overlayRef: ComponentRef<OverlayComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  renderOverlay() {
    const componentFactory: ComponentFactory<
      OverlayComponent
    > = this.componentFactoryResolver.resolveComponentFactory(OverlayComponent);

    const componentRef: ComponentRef<
      OverlayComponent
    > = componentFactory.create(this.injector);

    const el: HTMLElement = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    this.appRef.attachView(componentRef.hostView);
    document.body.appendChild(el);

    this.overlayRef = componentRef;
  }

  removeOverlay() {
    this.appRef.detachView(this.overlayRef.hostView);
    this.overlayRef.destroy();
  }
}
