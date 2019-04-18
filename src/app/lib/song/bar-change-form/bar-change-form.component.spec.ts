import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BarChangeFormComponent} from './bar-change-form.component';

describe('BarChangeFormComponent', () => {
  let component: BarChangeFormComponent;
  let fixture: ComponentFixture<BarChangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarChangeFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
