import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Products } from '../shared/products';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { baseURL } from "../shared/baseurl";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = []
  constructor(private http: HttpClient) { }

  sum(key) {
    return this.items.reduce((a, b) => a + (b[key] || 0), 0);
  }


  addtocart(product) {
    return this.items.push(product);
  }

  clearitems() {
    return this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItems() {
    return this.sum('price');
  }

  placeOrder() {
    return this.http.post(`${baseURL}orders`, { order: this.items })
  }

}
