import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CategoriesService } from 'app/services/categories.service';

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

  constructor(private categoriesService: CategoriesService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // console.log(activatedRoute.snapshot.params.idProduct);
        const idProduct = atob(this.activatedRoute.snapshot.params.idProduct);
        this.categoryTitle = this.activatedRoute.snapshot.params.idCategory;
        // console.log(idProduct);
        this.getProductsById(idProduct);
      }
    });
  }

  getProductsById(idProduct) {
    this.categoriesService.getAllProducts(idProduct).subscribe(data => {
      this.products = data;
    }, err => {
      console.log('Error CategoriesService - getAllProducts: ', err);
    });
  }
}
