import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/services/products.service';
import { Router } from '@angular/router';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-products-disponible',
  templateUrl: './products-disponible.component.html',
  styleUrls: ['./products-disponible.component.scss']
})
export class ProductsDisponibleComponent  implements OnInit {

  public numberProductsAvailable = 0;
  public productsAvailable;

  constructor(private router: Router, private productsService: ProductsService) {}

  ngOnInit() {
    this.getProductsAvailable();
  }

  getProductsAvailable() {
    this.productsService.getProductsActivated().subscribe(products => {
      this.productsAvailable = products;
      this.numberProductsAvailable = this.productsAvailable._embedded.emarketProducts.length;
    },  err => {
      console.log('Error ProductsService - getProductsActivated: ', err);
    });
  }

  onGetProductDetails(product: Product) {
    const urlProduct = btoa(product._links.emarketProduct.href);
    this.router.navigateByUrl('product-details/' + urlProduct);
  }
}
