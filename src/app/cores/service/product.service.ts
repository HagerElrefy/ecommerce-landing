import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  products: any;

  getAllProducts() {
    return this.http.get("https://fakestoreapi.com/products");
  }

}

