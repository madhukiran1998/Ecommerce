import { TestBed,async,inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { ProductsService } from "./products.service";
import  {baseURL} from "../shared/baseurl";

describe('ProcessHTTPMsgService', () => {
  beforeEach(() => {TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
  })
});

  it('should be created', () => {
    const service: ProcessHTTPMsgService = TestBed.get(ProcessHTTPMsgService);
    expect(service).toBeTruthy();
  });

  it(`should log an error to the console on error on get()`, async(inject([ProductsService, HttpTestingController],
    (apiService: ProductsService, httpMock: HttpTestingController) => {

      let http = TestBed.get(HttpTestingController);
      let response: any;
      let errResponse: any;

      const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
      const data = '400';

      apiService.getProducts().subscribe(res => response = res, err => errResponse = err);

      http.expectOne(baseURL + 'products').flush(data, mockErrorResponse);
      expect(errResponse).toContain(data);

    })));
});
