import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommunitiesComponent } from './communities/communities.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { OurGoalComponent } from './our-goal/our-goal.component';
import { PreviousEventsComponent } from './previous-events/previous-events.component';
import { GlobalCommunityComponent } from './global-community/global-community.component';
import { AvatarGeneratorComponent } from './avatar-generator/avatar-generator.component';
import { AttributeSelectorComponent } from './avatar-generator/attribute-selector/attribute-selector.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { SharedModule } from '../shared/shared.module';

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
        SponsorsComponent,
        OurGoalComponent,
        PreviousEventsComponent,
        GlobalCommunityComponent,
        AvatarGeneratorComponent,
        AttributeSelectorComponent,
        SocialNetworksComponent,
      ],
      imports: [FormsModule, SharedModule],
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
