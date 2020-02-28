import { TestBed, ComponentFixture } from '@angular/core/testing';
import {baseURL} from '../shared/baseurl';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { CartService } from './cart.service';
import { empty } from 'rxjs';

describe('CartService', () => {
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

  it('returned data must match the observable',()=>{
    const orders = [
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
    service.placeOrder()
      .subscribe(orders => {
        expect(orders[0].name).toEqual('ONE PLUS 6');
      });
      const req = httpTestingController.expectOne(`${baseURL}orders`);

      expect(req.request.method).toEqual('POST');
  
      req.flush(orders);
  })
});
