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

  constructor(private categoriesService: CategoriesService, private router: Router, private activatedRoute: ActivatedRoute) { 
  
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(activatedRoute.snapshot.params.idProduct);
        let idProduct = atob(activatedRoute.snapshot.params.idProduct);
        console.log(idProduct);
        this.getProductsById(idProduct);
      }
    });
  }

  ngOnInit() {
      // var body = document.getElementsByTagName('body')[0];
      // body.classList.add('ecommerce-page');
      // var navbar = document.getElementsByTagName('nav')[0];
      // navbar.classList.add('navbar-transparent');
  }
  // ngOnDestroy(){
  //     var body = document.getElementsByTagName('body')[0];
  //     body.classList.remove('ecommerce-page');
  //     var navbar = document.getElementsByTagName('nav')[0];
  //     navbar.classList.remove('navbar-transparent');
  // }

  getProductsById(idProduct) {
    this.categoriesService.getAllProducts(idProduct).subscribe(data => {
      this.products = data;
    }, err => {
      console.log('Error CategoriesService - getAllProducts: ', err);
    });
  }
}
