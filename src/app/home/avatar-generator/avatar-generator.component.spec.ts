import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarGeneratorComponent } from './avatar-generator.component';
import { SharedModule } from '../../shared/shared.module';

describe('AvatarGeneratorComponent', () => {
  let component: AvatarGeneratorComponent;
  let fixture: ComponentFixture<AvatarGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarGeneratorComponent],
      imports: [SharedModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
