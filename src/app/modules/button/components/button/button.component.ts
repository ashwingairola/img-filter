import { Component, OnInit, ElementRef } from '@angular/core';

const BUTTON_HOST_ATTRIBUTES = ['app-button', 'app-round-button'];

@Component({
  selector: 'button[app-button], button[app-round-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  readonly isNormalButton = this._hasHostAttribute('app-button');
  readonly isRoundButton = this._hasHostAttribute('app-round-button');

  constructor(private _elementRef: ElementRef) {
    BUTTON_HOST_ATTRIBUTES.forEach(attribute => {
      if (this._hasHostAttribute(attribute)) {
        (this._getHostElement() as HTMLElement).classList.add(attribute);
      }
    });
  }

  ngOnInit() {}

  private _hasHostAttribute(...attributes: string[]): boolean {
    return attributes.some(attribute =>
      this._elementRef.nativeElement.hasAttribute(attribute)
    );
  }

  private _getHostElement() {
    return this._elementRef.nativeElement;
  }
}
