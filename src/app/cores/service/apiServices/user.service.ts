import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BaseApiUrl } from '../../../enviroments/env.dev';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem("user");
    this.user = storedUser ? JSON.parse(storedUser) : undefined;
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


}
