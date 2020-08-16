import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGoalComponent } from './our-goal.component';

describe('OurGoalComponent', () => {
  let component: OurGoalComponent;
  let fixture: ComponentFixture<OurGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OurGoalComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
