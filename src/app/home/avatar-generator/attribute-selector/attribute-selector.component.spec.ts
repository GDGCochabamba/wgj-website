import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AttributeSelectorComponent } from './attribute-selector.component';
import { SharedModule } from '../../../shared/shared.module';

describe('AttributeSelectorComponent', () => {
  let component: AttributeSelectorComponent;
  let fixture: ComponentFixture<AttributeSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AttributeSelectorComponent],
      imports: [FormsModule, SharedModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
