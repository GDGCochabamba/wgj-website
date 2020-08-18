import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommunitiesComponent } from './communities/communities.component';
import { OurGoalComponent } from './our-goal/our-goal.component';
import { PreviousEventsComponent } from './previous-events/previous-events.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        BannerComponent,
        AboutUsComponent,
        CommunitiesComponent,
        OurGoalComponent,
        PreviousEventsComponent,
        SocialNetworksComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
