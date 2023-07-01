import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupformComponent } from './signupform.component';

describe('SignupformComponent', () => {
  let component: SignupformComponent;
  let fixture: ComponentFixture<SignupformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupformComponent]
    });
    fixture = TestBed.createComponent(SignupformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
