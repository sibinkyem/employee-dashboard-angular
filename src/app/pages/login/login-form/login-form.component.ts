import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Login } from 'src/app/core/interfaces';
import { LoggedInUserService } from 'src/app/core/services';
import { Message, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'emp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [MessageService],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  alertMessage!: Message[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoggedInUserService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z]*'),
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z]*'),
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  get username(): AbstractControl | null {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.clearMessages();

    const tempObj: Login = {
      username: this.username?.value,
      password: this.password?.value,
    };

    this.loading = true;
    this.loginService
      .login(tempObj)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/dashboard');
        },
        error: (error) => {
          this.addMessages('error', error.Error, 'invalid login');
          this.loading = false;
        },
      });
  }

  addMessages(severity: string, summary: string, detail: string): void {
    this.alertMessage.push({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  clearMessages(): void {
    this.alertMessage = [];
  }
}
