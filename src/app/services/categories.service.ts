import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public categoriestUrl = window['baseUrl'] + '/emarketCategories';
  public subCategoriestUrl = window['baseUrl'] + '/emarketSubCategories';

  constructor(
    public router: Router, private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get(this.categoriestUrl);
  }

  getAllSousCategories(urlSubCategories) {
    return this.http.get(urlSubCategories);
  }

  getProductsBySubCategory(subCategory) {
    return this.http.get(subCategory);
  }

  getSubCategoriesByCategory(idCategory) {
    return this.http.get(this.categoriestUrl + '/' + idCategory + '/subCategories');
  }
}
