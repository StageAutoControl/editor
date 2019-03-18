import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSelectComponent } from './animation-select.component';

describe('AnimationSelectComponent', () => {
  let component: AnimationSelectComponent;
  let fixture: ComponentFixture<AnimationSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
