import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDmxInputComponent } from './reactive-dmx-input.component';

describe('ReactiveDmxInputComponent', () => {
  let component: ReactiveDmxInputComponent;
  let fixture: ComponentFixture<ReactiveDmxInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDmxInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDmxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
