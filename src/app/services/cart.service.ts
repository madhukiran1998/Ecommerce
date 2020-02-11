import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Products } from '../shared/products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  items= []

  sum(key) {
    return this.items.reduce((a, b) => a + (b[key] || 0), 0);
  }
  

  addtocart(product){
    return this.items.push(product);
  }

  clearitems(){
    return this.items=[];
  }

  getItems(){
    return this.items;
  }

  addItems(){
  return this.sum('price');
  }


}
