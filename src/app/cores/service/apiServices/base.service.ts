import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiUrl } from '../../../enviroments/env.dev';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private endPoint = '';

  constructor(private http: HttpClient) { }

  // private get apiUrl(): string {
  //   return `${BaseApiUrl}/${this.endPoint}`;
  // }

  set endPointValue(ep: string) {
    this.endPoint = ep;
  }

  getAll() {
    return this.http.get(`${BaseApiUrl}${this.endPointValue}`);
  }
}
