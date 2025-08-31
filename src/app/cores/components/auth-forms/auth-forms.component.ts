import { Component } from '@angular/core';
import { AuthFormsToggleService } from '../../service/auth-forms-toggle.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationMessages } from '../../../interfaces/validation-messages';
import { UserService } from '../../service/apiServices/user.service';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { TimerService } from '../../service/timer.service';


function validatePass(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password') as FormControl | null;
    const confirmPass = group.get('confirmPass') as FormControl | null;

    if (!password || !confirmPass) {
      return null;
    }

    if (password.value !== confirmPass.value) {
      confirmPass.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      if (confirmPass.hasError('passwordMismatch')) {
        confirmPass.setErrors(null);
      }
      return null;
    }
  };
}

@Component({
  selector: 'app-auth-forms',
  imports: [ReactiveFormsModule, CommonModule, Toast],
  templateUrl: './auth-forms.component.html',
  styleUrl: './auth-forms.component.scss'
})
export class AuthFormsComponent {
  // forms validations variables declartions
  signUpValidation!: FormGroup;
  loginValidation!: FormGroup;
  ForgetPasswordValidation!: FormGroup;
  verifyCodeValidation!: FormGroup;
  resetPasswordValidation!: FormGroup;

  // variable to select which form to display 
  formToShow: 'login' | 'sginup' | 'forgetpass' | 'verifycode' | 'setpass' = "login";

  // validations error messages 
  validationMessages: ValidationMessages = {
    firstName: {
      required: "First name is required",
      pattern: "First name must contain only letters",
      minlength: "First name must be at least 2 characters",
      maxlength: "First name cannot exceed 15 characters"
    },
    lastName: {
      required: "Last name is required",
      pattern: "Last name must contain only letters",
      minlength: "Last name must be at least 2 characters",
      maxlength: "Last name cannot exceed 15 characters"
    },
    phone: {
      required: "Phone is required",
      pattern: "Phone must start with (+20) 10, 11, 12, or 15 and be 11 digits"
    },
    email: {
      required: "Email is required",
      email: "Invalid email format"
    },
    password: {
      required: "Password is required",
      pattern: "Password must be at least 8 characters and include: one uppercase letter, one lowercase letter, one number, and one special character."

    },
    confirmPass: {
      required: "Confirm password is required",
      passwordMismatch: "Passwords do not match",
      pattern: "Password must be at least 8 characters and include: one uppercase letter, one lowercase letter, one number, and one special character."

    }
  };

  constructor(private authFormHidden: AuthFormsToggleService, private fb: FormBuilder, private auth: UserService, private messageService: MessageService, private timerService: TimerService) { }

  ngOnInit() {
    this.initSignUpForm();
    this.initLogInForm();
    this.initForgetPasswordForm();
    this.initVerifyCodeForm();
    this.initResetPasswordForm();
    // console.log(this.timeLeft);
  }

  // forms validation initialization
  initSignUpForm() {
    this.signUpValidation = this.fb.group({
      firstName: new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z]/), Validators.minLength(2), Validators.maxLength(15)]),
      lastName: new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z]/), Validators.minLength(2), Validators.maxLength(15)]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^(\+20)(10|11|12|15)[0-9]{8}$/)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
      confirmPass: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)],
      )
    }, { validators: validatePass() })
  }

  initLogInForm() {
    this.loginValidation = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }

  initForgetPasswordForm() {
    this.ForgetPasswordValidation = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
    })

  }

  initVerifyCodeForm() {
    this.verifyCodeValidation = this.fb.group({
      resetCode: new FormControl("", [Validators.required]),

    })

  }

  initResetPasswordForm() {
    this.resetPasswordValidation = this.fb.group({
      password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
      confirmPass: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)])
    }, { validators: validatePass() })

  }

  // hide pop up auth forms
  hideAuthForms() {
    this.authFormHidden.hide()
  }

  // prevent default when use forms 
  defualtDisabled(e: any) {
    e.stopPropagation();
  }


  // navigate between auth forms
  showForgetPassForm(e: any) {
    e.preventDefault();
    this.formToShow = 'forgetpass';
  }
  showSignUpForm(e: any) {
    e.preventDefault();
    this.formToShow = 'sginup';
  }
  showLogInForm(e: any) {
    e.preventDefault();
    this.formToShow = 'login';
  }

  // get error message for any entry in forms
  getErrorMessage(form: FormGroup, controlName: string) {
    const control = form.get(controlName);
    if (control?.touched && control?.errors) {
      const errors = control.errors;
      const messages = this.validationMessages[controlName];
      const firstErrorKey = Object.keys(errors)[0];
      return messages[firstErrorKey];
    }
    return null;
  }

  // methods handle all auth requests 
  login(form: FormGroup) {
    if (form.invalid) {
      return
    };

    this.auth.login(form.value).subscribe({
      next: (res: any) => {
        console.log('Login success:', res);
        localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("token", JSON.stringify(res.token));
        this.auth.user.set(JSON.stringify(res.user)); form.reset();
        this.messageService.add({ severity: 'success', summary: 'Login success', detail: 'Welcome Back :)', life: 1000 });
        this.authFormHidden.hide();

      },
      error: (err) => {
        console.error('Login failed:', err.error.error);
        this.messageService.add({ severity: 'error', summary: 'Login failed', detail: err.error.error, life: 2000 });

      }
    });
  }

  signUp(form: FormGroup) {
    if (form.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Invalid Data', detail: 'All Fields Are Required And In Correct Format', life: 2000 });

      return
    };
    this.auth.signUp({ ...form.value, gender: "male" }).subscribe({
      next: (res: any) => {
        console.log('registered success:', res);
        localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("token", JSON.stringify(res.token));
        this.auth.user.set(JSON.stringify(res.user));
        form.reset();
        this.messageService.add({ severity: 'success', summary: 'registered success', detail: 'Welcome to Rose :)', life: 1000 });
        this.authFormHidden.hide();
      },
      error: (err) => {
        console.error('registered failed:', err);
        this.messageService.add({ severity: 'error', summary: 'registered failed', detail: err.error.error, life: 2000 });
      }
    });
  }

  handleVerifyCodeRequest(form: FormGroup, callback: (success: boolean) => void) {
    console.log('form value', form)
    this.auth.forgetPassword(form.value).subscribe({
      next: (res: any) => {
        this.messageService.add({
          severity: 'info',
          summary: 'Check Mail',
          detail: 'OTP sent to your email. Please check your inbox.',
          life: 2000
        });
        callback(true);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.message,
          life: 2000
        });
        console.log(err);
        callback(false);
      }
    });
  }

  handleForgetPassword(form: FormGroup) {
    if (form.invalid) {
      return
    };

    this.handleVerifyCodeRequest(form, (success) => {
      if (success) {
        this.formToShow = 'verifycode';
      }
    })
  }


  // timeLeft: number = 0;
  // private interval: any;
  // private endTime!: number;
  // Timer() {
  //   this.endTime = Date.now() + 30 * 1000;

  //   this.interval = setInterval(() => {
  //     const now = Date.now();
  //     const diff = this.endTime - now;
  //     if (diff > 0) {
  //       this.timeLeft = Math.floor(diff / 1000);
  //     } else {
  //       this.timeLeft = 0;
  //       clearInterval(this.interval);
  //     }
  //   }, 1000);
  // }
  get timeLeft() {
    return this.timerService.timeLeft();
  }

  resendCode(form: FormGroup) {
    this.handleVerifyCodeRequest(form, (success) => {
      if (success) {
        this.timerService.start(30);
      }
    });
  }



  handleVerifyCode(form: FormGroup) {
    if (form.invalid) {
      return
    }
    this.auth.verifyCode(form.value).subscribe({
      next: (res) => {
        this.formToShow = 'setpass';
      },
      error: (err) => {
        console.log(err.error.error)
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.error, life: 2000 });
      }
    })

  }


  resetPassword(form: FormGroup) {
    if (form.invalid) {
      return
    }
    this.auth.resetPassword({ ...this.ForgetPasswordValidation.value, newPassword: form.value.password }).subscribe(
      {
        next: (res: any) => {
          this.messageService.add({ severity: 'success', summary: 'Reset Password', detail: "Password Reset Successfully", life: 2000 });
          localStorage.setItem("token", JSON.stringify(res.token));
          this.formToShow = 'login';
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Reset Password Failed', detail: err.error, life: 2000 });

          console.log(err);
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.timerService.stop();
  }
}


