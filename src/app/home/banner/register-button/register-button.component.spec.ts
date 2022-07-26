import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegisterButtonComponent } from './register-button.component';

describe('RegisterButtonComponent', () => {
  let component: RegisterButtonComponent;
  let fixture: ComponentFixture<RegisterButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterButtonComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
