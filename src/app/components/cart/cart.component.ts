import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public tableData3;
  public shoppingCart;
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getProductsCart();
    this.tableData3 = {
      headerRow: [ '', '', 'Product', 'Color', 'Size', 'Price', 'QTY', 'Unit Price'],
      dataRows: [
          ['saint-laurent.jpg', '	Suede Biker Jacket', 'by Saint Laurent', 'Black', 'M', '3390', '1', '3390'],
          ['balmain.jpg', '	Jersey T-Shirt',  'by Balmain', 'Black', 'M', '499', '2', '998'],
          ['prada.jpg', 'Slim-Fit Swim Short', 'by Prada', 'Red', 'M', '200', '1', '200']
      ]
  };
  }

  getTotal2() {
    var total = 0;
    for( var i = 0; i < this.tableData3.dataRows.length; i++ ){
        var integer = parseInt(this.tableData3.dataRows[i][7])
        total += integer;
    }
    return total;
};

getProductsCart() {
  this.shoppingCart = this.cartService.getCurrentCart().items.values();
}
}
