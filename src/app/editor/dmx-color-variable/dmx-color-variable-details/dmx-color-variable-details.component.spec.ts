import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmxColorVariableDetailsComponent } from './dmx-color-variable-details.component';

describe('DmxColorVariableDetailsComponent', () => {
  let component: DmxColorVariableDetailsComponent;
  let fixture: ComponentFixture<DmxColorVariableDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmxColorVariableDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmxColorVariableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
