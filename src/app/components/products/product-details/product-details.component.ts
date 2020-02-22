import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'app/services/products.service';
import { Product } from 'app/models/product';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public currentProduct: Product;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownList1 = [];
  dropdownQuantity = [];
  selectedItems1 = [];
  selectedQuantity = [];
  dropdownSettings1 = {};

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit() {
    this.initValueSelectDropdown();
    const urlProduct = atob(this.activatedRoute.snapshot.params.idProduct);
    console.log("urlProduct", urlProduct);
    this.productsService.getProductDetails(urlProduct).subscribe(data => {
      this.currentProduct = data;
      console.log('this.currentProduct: ', this.currentProduct.id);
    }, err => {
      console.log('Error ProductsService - getProductDetails: ', err);
    });
  }

  initValueSelectDropdown() {
    this.dropdownList = [
      {"id":1,"itemName":"Roman"},
      {"id":2,"itemName":"Paris"},
      {"id":3,"itemName":"Bucharest"},
      {"id":4,"itemName":"Rome"},
      {"id":5,"itemName":"New York"},
      {"id":6,"itemName":"Miami"},
      {"id":7,"itemName":"Piatra Neamt"},
      {"id":8,"itemName":"Paris"},
      {"id":9,"itemName":"Bucharest"},
      {"id":10,"itemName":"Rome"},
      {"id":11,"itemName":"New York"},
      {"id":12,"itemName":"Miami"},
      {"id":13,"itemName":"Piatra Neamt"}
    ];
this.selectedItems = [
    ];
this.dropdownSettings = {
          singleSelection: false,
          text:"Multiple Select",
          selectAllText:'Select All',
          unSelectAllText:'UnSelect All',
          enableSearchFilter: true,
          classes:""
        };

this.dropdownList1 = [
      {"id":1,"itemName":"Roman"},
      {"id":2,"itemName":"Paris"},
      {"id":3,"itemName":"Bucharest"},
      {"id":4,"itemName":"Rome"},
      {"id":5,"itemName":"New York"},
      {"id":6,"itemName":"Miami"},
      {"id":7,"itemName":"Piatra Neamt"},
      {"id":8,"itemName":"Paris"},
      {"id":9,"itemName":"Bucharest"},
      {"id":10,"itemName":"Rome"},
      {"id":11,"itemName":"New York"},
      {"id":12,"itemName":"Miami"},
      {"id":13,"itemName":"Piatra Neamt"}
    ];
    this.dropdownQuantity = [
      {"id": 1, "quantity": "1"},
      {"id": 2, "quantity": "2"},
      {"id": 3, "quantity": "3"},
      {"id": 4, "quantity": "4"},
      {"id": 5, "quantity": "5"},
      {"id": 6, "quantity": "6"},
      {"id": 7, "quantity": "7"},
      {"id": 8, "quantity": "8"},
      {"id": 9, "quantity": "9"},
      {"id": 10, "quantity": "10"}
    ];
this.selectedItems1 = [];
this.selectedQuantity = [];
this.dropdownSettings1 = {
          singleSelection: true,
          text: "Single Select",
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          enableSearchFilter: true,
          classes: ""
        };
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
      console.log(items);
  }
  onDeSelectAll(items: any) {
      console.log(items);
  }

  AddProductToCart(product: Product) {
    console.log('Product to cart: ', product);
    this.cartService.addProductToCart(this.currentProduct);
  }
}
