import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROD } from '../shared/product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productSvc:ProductsService
  ) { }
  

  ngOnInit() {
    this.route.paramMap.subscribe(params => { 
      // this.productSvc.getProduct(+params.get('productId')).subscribe(res=>{
      //   this.product = res[0];
      // })
      console.log(params)
      // this.product = PROD[+params.get('productId')]; 
    });
  }


  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addtocart(product);
    }


}
