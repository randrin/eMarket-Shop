import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CategoriesService } from 'app/services/categories.service';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  doubleSlider = [1000, 5000];
  focus;

  data: Date = new Date();
  public products;
  public categoryTitle;
  public numberProductsByCategory = 0;
  public isCategoryTitle = false;

  constructor(private categoriesService: CategoriesService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const subCategory = atob(this.activatedRoute.snapshot.params.idProduct);
        this.categoryTitle = this.activatedRoute.snapshot.params.idSubCategory;
        this.getProductsBySubCategory(subCategory);
      }
    });
  }

  getProductsBySubCategory(subCategory) {
    this.categoriesService.getProductsBySubCategory(subCategory).subscribe(data => {
      this.products = data;
      this.numberProductsByCategory = this.products._embedded.products.length;
    }, err => {
      console.log('Error CategoriesService - getProductsBySubCategory: ', err);
    });
  }

  onGetProductDetails(product: Product) {
    this.isCategoryTitle = true;
    const urlProduct = btoa(product._links.product.href);
    this.router.navigateByUrl('product-details/' + urlProduct);
  }
}
