import { TestBed, ComponentFixture } from '@angular/core/testing';
import {baseURL} from '../shared/baseurl';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { CartService } from './cart.service';
import { empty } from 'rxjs';

describe('CartService', () => {

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

  let service: CartService;
  let httpTestingController: HttpTestingController;
    

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService]
  });
  // Returns a service with the MockBackend so we can test with dummy responses
  service = TestBed.get(CartService); 
  httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Items are empty',()=>{
      expect(service.getItems()).toEqual([]);
    })
  
    // it('get the the selected product',()=>{
    //   service.placeOrder().subscribe(data=>{
    //     expect(`${baseURL}orders`).toEqual([]);
    //   })
    //   const req= httpTestingController.expectOne(`${baseURL}orders`);
    //  req.flush(mockProducts);
    // });

});
