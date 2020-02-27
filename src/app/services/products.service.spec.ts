import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { fakeAsync, tick } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { ProductsService } from './products.service';
import {baseURL} from '../shared/baseurl';

describe('ProductsService', () => {

  const mockProducts = [
    {
      id: '0',
      name: 'ONE PLUS 6',
      image: '/assets/images/6.jpeg',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: 24999,
      description: 'Slate Gray 6GB RAM + 64GB memory',
      details:[]
      },
    {
      id: '1',
      name: 'ONE PLUS 6T',
      image: '/assets/images/6t.jpeg',
      category: 'appetizer',
      featured: false,
      label: '',
      price: 34999,
      description: 'Midnight Black, 8GB RAM, 128GB Storage',
      details:[]
    },
  ];

  let productID :0;
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
    
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
  });

  // Returns a service with the MockBackend so we can test with dummy responses
  service = TestBed.get(ProductsService); 
  httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {

    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('Data Length must match the mock data base which is 2',()=>{
    service.getProducts().subscribe(data =>{
      expect(data.length).toEqual(2);
    })
    const req= httpTestingController.expectOne(baseURL + 'products');
    expect(req.request.method).toEqual('GET')
    req.flush(mockProducts);
   });

   it('gThe name of the second element in mock data must match',()=>{
     service.getProduct(productID).subscribe(data=>{
       expect(data[productID].name).toEqual('ONE PLUS 6T');
     })
         const req= httpTestingController.expectOne(baseURL + 'products/'+ productID);
    req.flush(mockProducts);
   });

});