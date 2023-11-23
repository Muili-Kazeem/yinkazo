import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompssaComponent } from './compssa.component';

describe('CompssaComponent', () => {
  let component: CompssaComponent;
  let fixture: ComponentFixture<CompssaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompssaComponent]
    });
    fixture = TestBed.createComponent(CompssaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
