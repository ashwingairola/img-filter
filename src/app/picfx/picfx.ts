'use strict';

import { Filter } from './types/filter.types';

export class PicFX {
  canvasContext: CanvasRenderingContext2D;
  filterString: string;
  filtersMap: Map<Filter, string>;

  constructor(canvasContext: CanvasRenderingContext2D) {
    this.canvasContext = canvasContext;
    this.filterString = '';
    this.filtersMap = new Map<Filter, string>();
  }

  applyImgFilter(
    image: CanvasImageSource,
    filter: Filter,
    value: number,
    dx?: number,
    dy?: number
  ) {
    let finalValue: string;

    switch (filter) {
      case 'brightness':
      case 'contrast':
      case 'saturate':
      case 'grayscale':
      case 'invert':
      case 'sepia':
        finalValue = `${value}%`;
        break;
    }

    this.filtersMap.set(filter, finalValue);
    this.refreshFilters();
    this.drawImg(image, dx, dy);
  }

  resetImgFilters(image: CanvasImageSource) {
    this.filtersMap.clear();
    this.refreshFilters();
    this.drawImg(image);
  }

  private drawImg(image: CanvasImageSource, dx?: number, dy?: number) {
    this.canvasContext.filter = this.filterString;
    this.canvasContext.drawImage(image, dx ? dx : 0, dy ? dy : 0);
  }

  private refreshFilters() {
    this.filterString = '';
    this.filtersMap.forEach((value, filter) => {
      this.filterString += `${filter}(${value}) `;
    });
    this.filterString.trim();
  }
}
