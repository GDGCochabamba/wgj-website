import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { RegisterButtonComponent } from './register-button/register-button.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent, RegisterButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
