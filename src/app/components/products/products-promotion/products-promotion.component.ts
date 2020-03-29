import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'app/services/products.service';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-products-promotion',
  templateUrl: './products-promotion.component.html',
  styleUrls: ['./products-promotion.component.scss']
})
export class ProductsPromotionComponent implements OnInit {

  public numberProductsPromotion = 0;
  public productsPromotion;

  constructor(private router: Router, private productsService: ProductsService) {}

  ngOnInit() {
    this.getProductsPromotion();
  }

  getProductsPromotion() {
    this.productsService.getProductsPromotion().subscribe(products => {
      this.productsPromotion = products;
      this.numberProductsPromotion = this.productsPromotion._embedded.emarketProducts.length;
    },  err => {
      console.log('Error ProductsService - getProductsPromotion: ', err);
    });
  }

  onGetProductDetails(product: Product) {
    const urlProduct = btoa(product._links.emarketProduct.href);
    this.router.navigateByUrl('product-details/' + urlProduct);
  }
}
