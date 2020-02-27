import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponent } from './store.component';
import { RouterTestingModule} from '@angular/router/testing';
import { FlexLayoutModule} from '@angular/flex-layout';
import { baseURL } from '../shared/baseurl';
import { from,Observable,of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import {PROD} from '../shared/product';
import {Products} from '../shared/products';
import {ProductsService} from '../services/products.service';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(async(() => {

    const productServiceStub = {
      getProducts: function(): Observable<Products[]> {
        return of(PROD);
      }
    };

    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        MatGridListModule,
        RouterTestingModule.withRoutes([{ path: 'store', component: StoreComponent }])
      ],
      declarations: [ StoreComponent ],
      providers: [
        { provide: ProductsService, useValue: productServiceStub },
        { provide: 'baseURL', useValue: baseURL },
      ]
    })
    .compileComponents();
    
    const prodcutservice = TestBed.get(ProductsService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('dishes items should be 4', () => {
    expect(component.products.length).toBe(4);
    expect(component.products[1].name).toBe('ONE PLUS 6T');
    expect(component.products[3].featured).toBeFalsy();
  });

  it('should use products in the template', () => {
    fixture.detectChanges();

    let de:  DebugElement;
    let el:  HTMLElement;

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    
    expect(el.textContent).toContain(PROD[0].name.toUpperCase());

  });
});