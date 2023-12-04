import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrgyIdComponent } from './brgy-id.component';

describe('BrgyIdComponent', () => {
  let component: BrgyIdComponent;
  let fixture: ComponentFixture<BrgyIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrgyIdComponent]
    });
    fixture = TestBed.createComponent(BrgyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
