import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  animations: [trigger]
})
export class BottomSheetComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
