import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public categoriestUrl = window['baseUrl'] + '/categories';

  constructor(
    public router: Router, private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get(this.categoriestUrl);
  }

  getProductsByCategory(idCategory) {
    return this.http.get(idCategory);
  }
}
