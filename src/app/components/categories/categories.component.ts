import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  data: Date = new Date();
  public categories;
  public subCategories;

  constructor(private categoriesServices: CategoriesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('this.activatedRoute', this.activatedRoute.snapshot.params.idCategory);
        const idCategory = this.activatedRoute.snapshot.params.idCategory;
        // this.categoryTitle = this.activatedRoute.snapshot.params.idCategory;
        // console.log(idProduct);
        this.getSubCategories(idCategory);
      }
    });

    this.categoriesServices.getAllCategories().subscribe(data => {
      this.categories = data;
    },
    err => {
      console.log('Error CategoriesService - getAllCategories: ', err);
    });
  }

  getSubCategories(idCategory) {
    this.categoriesServices.getSubCategoriesByCategory(idCategory).subscribe(data => {
      this.subCategories = data;
    },
    err => {
      console.log('Error CategoriesService - getSubCategoriesByCategory: ', err);
    });
  }

  getProducts(category) {
    console.log(category);
    const urlProduct = category._links.emarketProducts.href;
    console.log(urlProduct);
  }
}
