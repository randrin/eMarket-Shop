import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private categoriestUrl = window['baseUrl'] + '/categories';
  constructor(
    public router: Router, private http: Http) {
  }
}
