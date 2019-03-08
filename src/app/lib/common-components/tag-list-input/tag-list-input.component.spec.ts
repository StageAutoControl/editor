import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListInputComponent } from './tag-list-input.component';

describe('TagListInputComponent', () => {
  let component: TagListInputComponent;
  let fixture: ComponentFixture<TagListInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagListInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
