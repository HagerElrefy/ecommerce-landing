import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from '../../../enviroments/env.dev';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  products: any;

  getAllProducts() {
    return this.http.get(`${BaseUrl}products`);
  }

}

