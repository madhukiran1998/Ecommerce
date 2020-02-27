import { AppRoutingModule } from './app-routing.module';

import { routes} from './routes';
import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http'; 


import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 

import { StoreComponent } from '../store/store.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CartComponent } from '../cart/cart.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import {AppComponent} from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';


import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
    TestBed.configureTestingModule({
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
    ],
      imports: [RouterTestingModule.withRoutes(routes),
        BrowserModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        HttpClientModule,
        MatButtonModule,
        MatFormFieldModule, 
        MatInputModule,
        MatCheckboxModule,
        BrowserModule,
        MatToolbarModule,
        MatDialogModule,
        FlexLayoutModule,
        MatListModule,
        AppRoutingModule,
        FormsModule,

      ],
      declarations: [
        StoreComponent,
        AboutComponent,
        ContactComponent,
        CartComponent,
        ProductDetailComponent,
        AppComponent,
        HeaderComponent,
        FooterComponent
      ]
    });


    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });

  it('navigate to "" redirects you to /store', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/store");
    });
  }));

  it('navigate to "cart" takes you to /cart', fakeAsync(() => {
    router.navigate(["/cart"]).then(() => {
      expect(location.path()).toBe("/cart");
    });
  }));

});