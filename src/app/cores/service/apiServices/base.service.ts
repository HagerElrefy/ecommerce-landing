import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiUrl } from '../../../enviroments/env.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private endPoint = '';

  constructor(protected http: HttpClient) { }

  // private get apiUrl(): string {
  //   return `${BaseApiUrl}/${this.endPoint}`;
  // }

  set endPointValue(ep: string) {
    this.endPoint = ep;
  }
  get endPointValue() {
    return this.endPoint;
  }

  getAll(): Observable<any> {
    return this.http.get(`${BaseApiUrl}/${this.endPointValue}`);
  }
  add(requestBody: any): Observable<any> {
    return this.http.post(`${BaseApiUrl}/${this.endPointValue}`, requestBody)
  }

  editValue(id: any, requestBody: any): Observable<any> {
    return this.http.patch(`${BaseApiUrl}/${this.endPoint}/${id}`, requestBody)
  }

  editFull(requestBody: any): Observable<any> {
    return this.http.put(`${BaseApiUrl}/${this.endPoint}`, requestBody)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${BaseApiUrl}/${this.endPoint}/${id}`)
  }
  getById(id: any): Observable<any> {
    return this.http.get(`${BaseApiUrl}/${this.endPoint}/${id}`)
  }
}
