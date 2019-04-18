import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SceneSelectComponent} from './scene-select.component';

describe('SceneSelectComponent', () => {
  let component: SceneSelectComponent;
  let fixture: ComponentFixture<SceneSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SceneSelectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
