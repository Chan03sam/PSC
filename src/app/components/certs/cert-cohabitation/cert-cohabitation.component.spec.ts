import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertCohabitationComponent } from './cert-cohabitation.component';

describe('CertCohabitationComponent', () => {
  let component: CertCohabitationComponent;
  let fixture: ComponentFixture<CertCohabitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertCohabitationComponent]
    });
    fixture = TestBed.createComponent(CertCohabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
