import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlobalCommunityComponent } from './global-community.component';

describe('GlobalCommunityComponent', () => {
  let component: GlobalCommunityComponent;
  let fixture: ComponentFixture<GlobalCommunityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalCommunityComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
