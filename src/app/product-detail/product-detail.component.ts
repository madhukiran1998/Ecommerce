import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROD } from '../shared/product';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.product = PROD[+params.get('productId')]; });
  }

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addtocart(product);
    }


}
