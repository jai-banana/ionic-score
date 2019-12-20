import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorerPage } from './scorer.page';

describe('ScorerPage', () => {
  let component: ScorerPage;
  let fixture: ComponentFixture<ScorerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
