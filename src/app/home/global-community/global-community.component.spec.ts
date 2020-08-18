import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCommunityComponent } from './global-community.component';

describe('GlobalCommunityComponent', () => {
  let component: GlobalCommunityComponent;
  let fixture: ComponentFixture<GlobalCommunityComponent>;

  beforeEach(async(() => {
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
