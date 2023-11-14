import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosiComponent } from './diagnosi.component';

describe('DiagnosiComponent', () => {
  let component: DiagnosiComponent;
  let fixture: ComponentFixture<DiagnosiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosiComponent]
    });
    fixture = TestBed.createComponent(DiagnosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
