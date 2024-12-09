import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child10Component } from './child10.component';

describe('Child10Component', () => {
  let component: Child10Component;
  let fixture: ComponentFixture<Child10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
