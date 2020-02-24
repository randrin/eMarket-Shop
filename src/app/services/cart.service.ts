import { Injectable } from '@angular/core';
import { Cart } from 'app/models/cart';
import { Product } from 'app/models/product';
import { ProductItem } from 'app/models/ProductItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  currentCartName = "Cart 1";
  private caddies: Map<string, Cart> = new Map();

  constructor() {
    let cart = new Cart(this.currentCartName);
    this.caddies.set(this.currentCartName, cart);
   }

   public addProductToCart(product: Product) {
    let cart = this.caddies.get(this.currentCartName);
    let productItem: ProductItem = cart.items.get(product.id);
    if (productItem) {
      console.log('Before productItem.quantity .......: ', productItem.quantity);
      productItem.quantity += product.quantity;
      cart.items.set(product.id, productItem);
      console.log('After productItem.quantity .......: ', productItem.quantity);
    } else {
      productItem = new ProductItem();
      productItem.price = product.unitPriceNew;
      productItem.quantity = product.quantity;
      productItem.product = product;
      cart.items.set(product.id, productItem);
    }
   }

   getCurrentCart() : Cart {
     return this.caddies.get(this.currentCartName);
   }
}
