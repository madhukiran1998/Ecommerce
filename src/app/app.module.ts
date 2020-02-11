import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import {ProductsService} from '../app/services/products.service';


import { StoreComponent } from './store/store.component';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    ProductDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    FlexLayoutModule,
    MatListModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    ProductsService,
    {provide: 'baseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
