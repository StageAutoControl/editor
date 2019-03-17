import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMXColorVariableDetailsComponent } from './dmx-color-variable-details.component';

describe('DMXColorVariableDetailsComponent', () => {
  let component: DMXColorVariableDetailsComponent;
  let fixture: ComponentFixture<DMXColorVariableDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMXColorVariableDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMXColorVariableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
