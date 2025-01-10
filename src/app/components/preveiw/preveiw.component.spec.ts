import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreveiwComponent } from './preveiw.component';

describe('PreveiwComponent', () => {
  let component: PreveiwComponent;
  let fixture: ComponentFixture<PreveiwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreveiwComponent]
    });
    fixture = TestBed.createComponent(PreveiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
