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
  errMess: string;


  constructor(
    private productsservice :ProductsService,
    @Inject('baseURL') private baseURL
    ) { }

  products: Products[];

  ngOnInit() {
    this.productsservice.getProducts()
    .subscribe(product => this.products = product,
      errmess => this.errMess = <any>errmess);
  }


}
