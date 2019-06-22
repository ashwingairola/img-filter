import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-change',
  templateUrl: './btn-change.component.html',
  styleUrls: ['./btn-change.component.scss']
})
export class BtnChangeComponent implements OnInit {
  @Input() label: string;
  @Input() value: number;
  @Input() minValue?: number;
  @Input() maxValue?: number;
  @Input() change: number;
  @Input() unit?: string;

  @Output() valueChange: EventEmitter<number>;

  constructor() {
    this.valueChange = new EventEmitter();
  }

  ngOnInit() {}

  increaseValue() {
    if (this.maxValue !== undefined) {
      const result = this.value + this.change;
      this.value = result <= this.maxValue ? result : this.maxValue;
    } else {
      this.value += this.change;
    }
    this.valueChange.emit(this.value);
  }

  decreaseValue() {
    if (this.minValue !== undefined) {
      const result = this.value - this.change;
      this.value = result >= this.minValue ? result : this.minValue;
    } else {
      this.value -= this.change;
    }
    this.valueChange.emit(this.value);
  }
}
