import {
  Component,
  OnInit,
  forwardRef,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true
    }
  ]
})
export class FileInputComponent implements ControlValueAccessor {
  private propagateChange: (file: File) => {};
  file: File;
  fileName: string;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef<
    HTMLInputElement
  >;

  constructor() {}

  writeValue(value: File) {
    if (value) {
      this.fileName = value.name;
    }
  }

  registerOnChange(fn: (file: File) => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  openFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelect(event: any) {
    console.log(event.target.files);
    this.file = event.target.files[0];
    this.propagateChange(this.file);
  }
}
