import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appFileInput]'
})
export class FileInputDirective {
  @Output() fileSelect: EventEmitter<File>;

  constructor() {
    this.fileSelect = new EventEmitter<File>();
  }

  @HostListener('change', ['$event.target.files[0]'])
  onFileSelect(file: File) {
    console.log(file);
    this.fileSelect.emit(file);
  }
}
