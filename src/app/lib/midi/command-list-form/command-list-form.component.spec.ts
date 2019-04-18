import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommandListFormComponent} from './command-list-form.component';

describe('CommandListFormComponent', () => {
  let component: CommandListFormComponent;
  let fixture: ComponentFixture<CommandListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommandListFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
