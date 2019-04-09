import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LiveComponent} from './playground.component';

describe('LiveComponent', () => {
  let component: LiveComponent;
  let fixture: ComponentFixture<LiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LiveComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
