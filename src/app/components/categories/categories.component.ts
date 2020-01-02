import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  data: Date = new Date();
  public categories;
  constructor(private categoriesServices: CategoriesService, private router: Router) { }

  ngOnInit() {
    this.categoriesServices.getAllCategories().subscribe(data => {
      this.categories = data;
    },
    err => {
      console.log('Error CategoriesService - getAllCategories: ', err);
    });
  }

  getProducts(category) {
    console.log(category);
    let urlProduct = category._links.products.href;
    console.log(urlProduct);
    // this.router.navigateByUrl('/products/' + urlProduct);
  }
}
