import { Injectable } from '@angular/core';
import { Products } from '../shared/products';
import { of } from 'rxjs';
import { delay , catchError} from 'rxjs/operators';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(baseURL + 'products')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
