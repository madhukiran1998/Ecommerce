var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var CartService = /** @class */ (function () {
    function CartService() {
        this.items = [];
    }
    CartService.prototype.sum = function (key) {
        return this.items.reduce(function (a, b) { return a + (b[key] || 0); }, 0);
    };
    CartService.prototype.addtocart = function (product) {
        return this.items.push(product);
    };
    CartService.prototype.clearitems = function () {
        return this.items = [];
    };
    CartService.prototype.getItems = function () {
        return this.items;
    };
    CartService.prototype.addItems = function () {
        return this.sum('price');
    };
    CartService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());
export { CartService };
//# sourceMappingURL=cart.service.js.map