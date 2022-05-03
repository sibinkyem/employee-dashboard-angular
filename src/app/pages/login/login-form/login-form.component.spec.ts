import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form validity', () => {
    it('should check form validity fields are empty', () => {
      component.loginForm.controls['username'].setValue('')
      component.loginForm.controls['password'].setValue('');
      expect(component.loginForm.valid).toBeFalsy();
    });

    it('should be invalid if username empty or null', () => {
      const uName = component.loginForm.controls['username'];
      expect(uName.valid).toBeFalsy();

      uName.setValue('');
      expect(uName.hasError('required')).toBeTruthy();
    });

    it('should be invalid if password empty or null', () => {
      const pwd = component.loginForm.controls['password'];
      expect(pwd.valid).toBeFalsy();

      pwd.setValue('');
      expect(pwd.hasError('required')).toBeTruthy();
    });

    it('should be valid if all fields having value', () => {
      component.loginForm.controls['username'].setValue('fingent');
      component.loginForm.controls['password'].setValue('fingent');
      expect(component.loginForm.valid).toBeTruthy();
    });
  });
});
