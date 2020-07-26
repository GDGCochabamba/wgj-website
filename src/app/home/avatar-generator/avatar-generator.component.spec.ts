import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarGeneratorComponent } from './avatar-generator.component';
import { SafeHtmlPipe } from '../../shared/safe-html.pipe.ts';

describe('AvatarGeneratorComponent', () => {
  let component: AvatarGeneratorComponent;
  let fixture: ComponentFixture<AvatarGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarGeneratorComponent, SafeHtmlPipe ],
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
