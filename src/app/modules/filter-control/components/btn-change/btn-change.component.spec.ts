import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnChangeComponent } from './btn-change.component';

describe('BtnChangeComponent', () => {
  let component: BtnChangeComponent;
  let fixture: ComponentFixture<BtnChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
