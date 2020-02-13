import { Component, OnInit, Inject } from '@angular/core';
import { Products } from '../shared/products';
import {PROD} from '../shared/product';
import { from } from 'rxjs';
import {ProductsService} from '../services/products.service'
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products: Products[];
  errMess: string;


  constructor(
    private productsservice :ProductsService,
    @Inject('baseURL') private baseURL
    ) { }



  ngOnInit() {
    this.productsservice.getProducts()
    .subscribe((product) => {
      console.log(product)
      this.products = product
    
    },
      errmess => this.errMess = <any>errmess);
  }


}
