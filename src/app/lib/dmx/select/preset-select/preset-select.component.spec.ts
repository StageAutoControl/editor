import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PresetSelectComponent} from './preset-select.component';

describe('PresetSelectComponent', () => {
  let component: PresetSelectComponent;
  let fixture: ComponentFixture<PresetSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PresetSelectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
