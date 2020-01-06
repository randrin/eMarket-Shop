import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Product } from 'app/models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productstUrl = window['baseUrl'] + '/products';

  constructor(
    public router: Router, private http: HttpClient) {
  }

  getProductDetails(urlProduct): Observable<Product> {
    return this.http.get<Product>(urlProduct);
  }
}
