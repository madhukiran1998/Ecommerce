var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROD } from '../shared/product';
import { CartService } from '../services/cart.service';
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, cartService) {
        this.route = route;
        this.cartService = cartService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) { _this.product = PROD[+params.get('productId')]; });
    };
    ProductDetailComponent.prototype.addToCart = function (product) {
        window.alert('Your product has been added to the cart!');
        this.cartService.addtocart(product);
    };
    ProductDetailComponent = __decorate([
        Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            CartService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
export { ProductDetailComponent };
//# sourceMappingURL=product-detail.component.js.map