import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreviousEventsComponent } from './previous-events.component';

describe('PreviousEventsComponent', () => {
  let component: PreviousEventsComponent;
  let fixture: ComponentFixture<PreviousEventsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousEventsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
