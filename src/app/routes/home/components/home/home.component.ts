import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Filter } from 'src/app/picfx/types/filter.types';
import { PicFX } from 'src/app/picfx/picfx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('imgCanvas', { static: false }) imgCanvas: ElementRef<
    HTMLCanvasElement
  >;
  canvasContext: CanvasRenderingContext2D;
  image: HTMLImageElement;
  picfx: PicFX;
  fileCtrl: FormControl;

  constructor() {
    this.fileCtrl = new FormControl();
  }

  ngOnInit() {
    this.fileCtrl.valueChanges.subscribe(value => {
      this.onFileSelect(value);
    });
  }

  ngAfterViewInit(): void {
    this.canvasContext = this.imgCanvas.nativeElement.getContext('2d');
    this.picfx = new PicFX(this.canvasContext);
  }

  onFileSelect(file: File) {
    console.log(file);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        this.image = new Image();
        this.image.src = reader.result as string;
        this.image.onload = () => {
          this.imgCanvas.nativeElement.width = this.image.width;
          this.imgCanvas.nativeElement.height = this.image.height;
          this.canvasContext.drawImage(
            this.image,
            0,
            0,
            this.image.width,
            this.image.height
          );
        };
      });
    } catch (error) {}
  }

  onFilterChange(filter: Filter, value: number) {
    this.picfx.applyImgFilter(this.image, filter, value);
    console.log(this.imgCanvas.nativeElement.getContext('2d').filter);
  }

  onReset() {
    this.picfx.resetImgFilters(this.image);
  }

  openFilterOptions() {}
}
