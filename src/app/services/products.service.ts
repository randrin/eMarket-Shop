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

  private productsUrl = window['baseUrl'] + '/emarketProducts';
  private productsPromotionUrl = window['baseUrl'] + '/emarketProducts/search/productsPromotion';
  private productsActivatedUrl = window['baseUrl'] + '/emarketProducts/search/productsActivated';

  constructor(
    public router: Router, private http: HttpClient) {
  }

  getProductDetails(urlProduct): Observable<Product> {
    return this.http.get<Product>(urlProduct);
  }

  getProductsActivated() {
    return this.http.get(this.productsActivatedUrl);
  }

  getProductsPromotion() {
    return this.http.get(this.productsPromotionUrl);
  }
}
