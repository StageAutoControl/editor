import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DMXColorVariableListComponent} from './dmx-color-variable-list.component';

describe('DMXColorVariableListComponent', () => {
  let component: DMXColorVariableListComponent;
  let fixture: ComponentFixture<DMXColorVariableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DMXColorVariableListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXColorVariableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
