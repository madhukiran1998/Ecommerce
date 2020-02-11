import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  sums;

  constructor( private cartService: CartService) { 
    this.items = this.cartService.getItems();
    this.sums=this.cartService.addItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearitems();
    }
  
    ngOnInit() {
      this.items = this.cartService.getItems();
    }
  
    cleark(){
      this.items= this.cartService.clearitems();
    }



}
