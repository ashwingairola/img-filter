import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  removeOverlay() {
    // this.overlay.removeOverlay();
  }
}
