import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SetListDetailsComponent} from './set-list-details.component';

describe('SetListDetailsComponent', () => {
  let component: SetListDetailsComponent;
  let fixture: ComponentFixture<SetListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetListDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
