import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BaseApiUrl } from '../../../enviroments/env.dev';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  user = signal<any | null>(null);

  constructor(http: HttpClient) {
    super(http)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      this.user.set(JSON.parse(storedUser));
    }
    console.log(this.user());
  }

  login(user: any) {
    return this.http.post(`${BaseApiUrl}/auth/signin`, user);
  }

  signUp(user: any) {
    return this.http.post(`${BaseApiUrl}/auth/signup`, user);
  }

  forgetPassword(email: string) {
    return this.http.post(`${BaseApiUrl}/auth/forgotPassword`, email);
  }

  logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.user.set(null);
  }

  verifyCode(resetCode: string) {
    return this.http.post(`${BaseApiUrl}/auth/verifyResetCode`, resetCode);
  }

  resetPassword(mailAndNewPass: { email: string, newPassword: string }) {
    return this.http.put(`${BaseApiUrl}/auth/resetPassword`, mailAndNewPass);

  }
}
