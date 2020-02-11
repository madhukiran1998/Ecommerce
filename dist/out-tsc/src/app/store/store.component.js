var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
var StoreComponent = /** @class */ (function () {
    function StoreComponent(productsservice, baseURL) {
        this.productsservice = productsservice;
        this.baseURL = baseURL;
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsservice.getProducts()
            .subscribe(function (product) { return _this.products = product; }, function (errmess) { return _this.errMess = errmess; });
    };
    StoreComponent = __decorate([
        Component({
            selector: 'app-store',
            templateUrl: './store.component.html',
            styleUrls: ['./store.component.scss']
        }),
        __param(1, Inject('baseURL')),
        __metadata("design:paramtypes", [ProductsService, Object])
    ], StoreComponent);
    return StoreComponent;
}());
export { StoreComponent };
//# sourceMappingURL=store.component.js.map