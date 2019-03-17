import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmxColorVariableListComponent } from './dmx-color-variable-list.component';

describe('DmxColorVariableListComponent', () => {
  let component: DmxColorVariableListComponent;
  let fixture: ComponentFixture<DmxColorVariableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmxColorVariableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmxColorVariableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
