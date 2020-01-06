import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'app/services/products.service';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public currentProduct: Product;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    const urlProduct = atob(this.activatedRoute.snapshot.params.idProduct);
    console.log("urlProduct", urlProduct);
    this.productsService.getProductDetails(urlProduct).subscribe(data => {
      this.currentProduct = data;
    }, err => {
      console.log('Error ProductsService - getProductDetails: ', err);
    });
  }

}
