import { Component } from '@angular/core';
import { AuthFormsToggleService } from '../../service/auth-forms-toggle.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationMessages } from '../../../interfaces/validation-messages';
import { UserService } from '../../service/apiServices/user.service';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';


function validatePass(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password') as FormControl | null;
    const confirmPass = group.get('confirmPass') as FormControl | null;

    if (!password || !confirmPass) {
      return null; // controls not ready yet
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
  signUpValidation!: FormGroup;
  loginValidation!: FormGroup;
  ForgetPasswordValidation!: FormGroup;
  constructor(private authFormHidden: AuthFormsToggleService, private fb: FormBuilder, private auth: UserService, private messageService: MessageService) { }
  hideAuthForms() {
    this.authFormHidden.hide()
  }
  ngOnInit() {
    this.initSignUpForm();
    this.initLogInForm();
    this.initForgetPasswordForm();
  }
  defualtDisabled(e: any) {
    e.stopPropagation();
  }

  initSignUpForm() {
    this.signUpValidation = this.fb.group({
      firstName: new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z]/), Validators.minLength(2), Validators.maxLength(15)]),
      lastName: new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z]/), Validators.minLength(2), Validators.maxLength(15)]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^(\+20)(10|11|12|15)[0-9]{8}$/)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      rePassword: new FormControl("", [Validators.required],
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



  formToShow: 'login' | 'sginup' | 'forgetpass' | 'verifycode' | 'setpass' = "login";


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
      pattern: "Phone must start with 010, 011, 012, or 015 and be 11 digits"
    },
    email: {
      required: "Email is required",
      email: "Invalid email format"
    },
    password: {
      required: "Password is required"
    },
    rePassword: {
      required: "Confirm password is required",
      passwordMismatch: "Passwords do not match"
    }
  };



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

  login(form: FormGroup) {
    if (form.invalid) {
      // this.messageService.add({ severity: 'error', summary: 'Invalid Data', detail: 'All Fields Are Required And In Correct Format', life: 2000 });
      return
    };
    // console.log(form.value)

    this.auth.login(form.value).subscribe({
      next: (res: any) => {
        // console.log('Login success:', res);
        localStorage.setItem("user", JSON.stringify(res));
        form.reset();
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

  handleForgetPassword(form: FormGroup) {
    if (form.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Invalid Data', detail: 'Form Field is Required And In Correct Format', life: 2000 });
      return
    };
    this.auth.forgetPassword(form.value).subscribe({
      next: (res: any) => {
        this.formToShow = 'verifycode';
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
  handleVerifyCode() {
    this.formToShow = 'setpass'

  }
  resendCode() {
  }
  resetPassword() {
  }


}


