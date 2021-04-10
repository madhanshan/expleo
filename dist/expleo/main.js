(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/prasadatchuta/Desktop/codeRun/madhan/expleo/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GXoX":
/*!***************************************************************!*\
  !*** ./src/app/market/product-view/product-view.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function() { return ProductViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "R7Hv");



class ProductViewComponent {
    constructor(route, router, dataService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.productId = '';
        this.productViewDetails = {};
    }
    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = routeParams.get('productId');
        this.productId = productIdFromRoute;
        this.dataService.getProductView(this.productId).subscribe((responseBody) => {
            console.log(responseBody);
            if (responseBody) {
                this.productViewDetails = responseBody;
            }
        });
    }
    goBackPage(e) {
        this.router.navigate(['/market']);
    }
}
ProductViewComponent.ɵfac = function ProductViewComponent_Factory(t) { return new (t || ProductViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ProductViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductViewComponent, selectors: [["app-product-view"]], decls: 13, vars: 4, consts: [[3, "innerHTML"], [1, "center"], [1, "btn", "btn-primary", "btn-sm", "mt-3", 3, "click"]], template: function ProductViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductViewComponent_Template_a_click_11_listener($event) { return ctx.goBackPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.productViewDetails.hashing_algorithm, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productViewDetails.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.productViewDetails.description == null ? null : ctx.productViewDetails.description.en, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DataService {
    //https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = "https://api.coingecko.com/api/v3/coins/";
        this.REST_API_Market = "markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    }
    handleError(error) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
    }
    sendGetRequest() {
        return this.httpClient.get(this.baseURL + this.REST_API_Market).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getProductView(id) {
        return this.httpClient.get(this.baseURL + id + '?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'expleo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "mainContainer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".mainContainer[_ngcontent-%COMP%] {\n    margin: 0 5%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQ29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgNSVcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _market_market_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./market/market.component */ "d7X1");
/* harmony import */ var _market_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market/product-view/product-view.component */ "GXoX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _market_market_component__WEBPACK_IMPORTED_MODULE_4__["MarketComponent"],
        _market_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_5__["ProductViewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "d7X1":
/*!********************************************!*\
  !*** ./src/app/market/market.component.ts ***!
  \********************************************/
/*! exports provided: MarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketComponent", function() { return MarketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/productView", a1]; };
function MarketComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "$60,796.39");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "0.3%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "4.4%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2.7%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "8.3%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "$56,298,381,656");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 18,678,556 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 21 Million ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "$1,135,588,831,249");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r3 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "", product_r2.name, " (", product_r2.symbol, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, product_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r2.symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.symbol);
} }
function MarketComponent_a_42_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketComponent_a_42_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showmore($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MarketComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.allProducts = [];
        this.pageNumber = 0;
        this.totalRecordstoShow = 10;
        this.showmorehide = true;
    }
    ngOnInit() {
        this.dataService.sendGetRequest().subscribe((responseBody) => {
            console.log(responseBody);
            if (responseBody) {
                this.allProducts = responseBody;
                this.products = responseBody.slice(0, this.totalRecordstoShow);
            }
        });
    }
    showmore(e) {
        e.preventDefault();
        this.pageNumber = this.pageNumber + 1;
        const nextSetRecords = this.allProducts.slice(this.pageNumber * this.totalRecordstoShow, (this.pageNumber * this.totalRecordstoShow) + 10);
        //nextSetRecords.forEach()
        for (var nextSetRecord of nextSetRecords) {
            this.products.push(nextSetRecord);
        }
        if (this.products.length === this.allProducts.length) {
            this.showmorehide = false;
        }
    }
    ngOnDestroy() {
        // Unsubscribe from the subject
        //this.dataService.unsubscribe();
    }
}
MarketComponent.ɵfac = function MarketComponent_Factory(t) { return new (t || MarketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
MarketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarketComponent, selectors: [["app-market"]], decls: 45, vars: 2, consts: [[1, "coingecko-table", "table-responsive", 2, "font-family", "'Droid Sans Mono',Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace"], ["id", "gecko-table-all", "data-sort-by", "", 1, "table", "table-scrollable", "text-sm", "text-lg-normal"], [1, "table-number"], [1, "text-left"], [1, "d-none", "d-lg-inline"], ["title", "translation missing: en.coins.th.symbol", 1, "translation_missing"], [1, "text-right", "price"], ["id", "chart-price-sort", "href", "#"], [1, "change1h", "text-right"], ["id", "chart-change1h-sort", "href", "#"], [1, "change24h", "text-right"], ["id", "chart-change24h-sort", "href", "/en/coins/all?sort_by=change24h"], [1, "change7d", "text-right"], ["id", "chart-change24h-sort", "href", "/en/coins/all?sort_by=change7d"], [1, "change30d", "text-right"], ["id", "chart-change24h-sort", "href", "/en/coins/all?sort_by=change30d"], [1, "lit", "text-right"], ["id", "chart-total-volume-sort", "href", "/en/coins/all?sort_by=total_volume"], [1, "supply", "text-right"], ["id", "chart-circulating-supply-sort", "href", "/en/coins/all?sort_by=circulating_supply"], ["id", "chart-total-supply-sort", "href", "/en/coins/all?sort_by=total_supply"], [1, "cap", "text-right"], ["id", "chart-marketcap-sort", "data-html", "true", "data-toggle", "tooltip", "data-placement", "top", "data-title", "Current Total Supply * Price", "href", "/en/coins/all", "data-original-title", "", "title", ""], ["data-target", "all-coins.tablebody"], [4, "ngFor", "ngForOf"], [1, "center"], ["class", "btn btn-primary btn-sm mt-3", "style", "", "href", "#", 3, "click", 4, "ngIf"], ["data-target", "all-coins.loading", 1, "py-3", 2, "display", "none"], [2, "width", "20%"], [1, "d-flex"], [1, "coin-icon", "mr-2", "center", "flex-column"], [3, "alt", "src"], [3, "routerLink"], [1, "d-none", "d-lg-block", "font-bold"], [1, "d-lg-none", "font-bold"], [1, "d-none", "d-lg-inline", "font-normal", "text-3xs", "mt-1"], [1, "td-price", "price", "text-right", "px-0", "pl-2"], ["data-target", "currency.currencyLink", "href", "https://www.coingecko.com/en/coins/bitcoin/usd"], ["data-price-btc", "1.0", "data-coin-id", "1", "data-coin-symbol", "btc", "data-target", "price.price", "data-price-previous", "60796.393", 1, "no-wrap"], [1, "td-change1h", "change1h", "text-right", "stat-percent", "px-0", "pl-2"], ["data-json", "{\"aed\":0.29420787052876535,\"ars\":0.29420787052866126,\"aud\":0.29420787052867137,\"bch\":-0.3801552465587891,\"bdt\":0.29420787052874137,\"bhd\":0.2942078705285979,\"bmd\":0.29420787052868347,\"bnb\":-1.5574035405307163,\"brl\":0.29420787052854774,\"btc\":0,\"cad\":0.29420787052871417,\"chf\":0.2942078705287286,\"clp\":0.29420787052878866,\"cny\":0.2942078705286694,\"czk\":0.2942078705286004,\"dkk\":0.29420787052876335,\"dot\":0.12072368875252713,\"eos\":1.012561244674886,\"eth\":0.7938064632776434,\"eur\":0.29420787052870206,\"gbp\":0.29420787052847186,\"hkd\":0.2942078705286505,\"huf\":0.2942078705290411,\"idr\":0.2942078705287259,\"ils\":0.29420787052894615,\"inr\":0.29420787052884834,\"jpy\":0.29420787052865893,\"krw\":0.2942078705286135,\"kwd\":0.2942078705287999,\"lkr\":0.29420787052832015,\"ltc\":0.48543009729529274,\"mmk\":0.294207870528645,\"mxn\":0.29420787052838826,\"myr\":0.29420787052873354,\"ngn\":0.29420787052839575,\"nok\":0.29420787052866476,\"nzd\":0.2942078705286489,\"php\":0.29420787052861835,\"pkr\":0.2942078705287013,\"pln\":0.29420787052874303,\"rub\":0.2942078705287284,\"sar\":0.2942078705289802,\"sek\":0.29420787052862807,\"sgd\":0.2942078705286299,\"thb\":0.29421105927920976,\"try\":0.2942078705287646,\"twd\":0.2942078705287118,\"uah\":0.2942078705292027,\"usd\":0.29420787052868347,\"vef\":0.2942078705285892,\"vnd\":0.294207870528608,\"xag\":0.2942078705288503,\"xau\":0.29420787052870523,\"xdr\":0.2942078705287703,\"xlm\":1.4373170656040954,\"xrp\":0.1864852616479397,\"yfi\":0.8758964848681029,\"zar\":0.2942078705286041,\"bits\":-0.22686471999902252,\"link\":0.13312387426383443,\"sats\":-0.22686471999902763}", "data-coin-id", "1", "data-up-class", "text-green", "data-down-class", "text-danger", "data-24h", "false", "data-target", "percent-change.percent", 1, "text-green"], [1, "td-change24h", "change24h", "text-right", "stat-percent", "px-0", "pl-2"], ["data-json", "{\"aed\":4.412022678011565,\"ars\":4.473920584838834,\"aud\":4.3684812096298735,\"bch\":1.8738079456759766,\"bdt\":4.6869404425149845,\"bhd\":4.401640146146769,\"bmd\":4.412164812150686,\"bnb\":-8.442096064654208,\"brl\":6.535064635545732,\"btc\":0,\"cad\":3.933293258405299,\"chf\":4.334060233372354,\"clp\":4.766057391688294,\"cny\":4.399419575516892,\"czk\":5.121561731950789,\"dkk\":4.376855300044297,\"dot\":2.152742835023328,\"eos\":5.195256826311901,\"eth\":0.25522330405925414,\"eur\":4.389306202709428,\"gbp\":4.476901265227633,\"hkd\":4.394407511152966,\"huf\":4.128300034976555,\"idr\":4.625490456032468,\"ils\":4.7034735474172065,\"inr\":4.396307630117372,\"jpy\":4.710064177125313,\"krw\":4.511251568813594,\"kwd\":4.42704159262658,\"lkr\":4.3203799479373295,\"ltc\":1.7298903675043424,\"mmk\":4.841437236277195,\"mxn\":4.358557081180536,\"myr\":4.386920091451726,\"ngn\":4.84701852089096,\"nok\":4.5372287288166,\"nzd\":4.35129053353693,\"php\":4.302043177860944,\"pkr\":4.877583901754737,\"pln\":4.062306640243056,\"rub\":4.938174435587494,\"sar\":4.395657096443884,\"sek\":4.173902708445964,\"sgd\":4.489259116419767,\"thb\":4.354129299379914,\"try\":4.518380077062472,\"twd\":4.370715375667346,\"uah\":4.855333313859273,\"usd\":4.412164812150686,\"vef\":4.412164812150504,\"vnd\":4.5083829391607555,\"xag\":4.650034505838803,\"xau\":4.795945720041961,\"xdr\":4.685377249554215,\"xlm\":3.372039082898353,\"xrp\":1.9145831250208376,\"yfi\":11.199342342612002,\"zar\":4.758687725480845,\"bits\":-0.15666994672733656,\"link\":4.289461451167918,\"sats\":-0.15666994672734724}", "data-coin-id", "1", "data-up-class", "text-green", "data-down-class", "text-danger", "data-24h", "true", "data-target", "percent-change.percent", 1, "text-green"], [1, "td-change7d", "change7d", "text-right", "stat-percent", "px-0", "pl-2"], ["data-json", "{\"aed\":2.716464123720653,\"ars\":3.301292096834553,\"aud\":2.5424745650058536,\"bch\":-9.328498794368317,\"bdt\":2.8145391321173303,\"bhd\":2.6527326872055066,\"bmd\":2.7161844717073422,\"bnb\":-26.629341001491387,\"brl\":2.226717019424193,\"btc\":0,\"cad\":2.3453443305529587,\"chf\":0.7245560000232623,\"clp\":1.7852110124452134,\"cny\":2.4894034020705447,\"czk\":1.2091967026029042,\"dkk\":1.483590258046798,\"dot\":-0.1594832653835673,\"eos\":0.3306719836774646,\"eth\":1.2750309953860006,\"eur\":1.505291622626926,\"gbp\":3.630208496506408,\"hkd\":2.7405557416121975,\"huf\":0.4737256221066106,\"idr\":3.270146696552946,\"ils\":1.4637999934254593,\"inr\":4.610964954521692,\"jpy\":1.7507709239723108,\"krw\":1.9283923356394683,\"kwd\":2.664144416658335,\"lkr\":3.4823910461826015,\"ltc\":-5.862630940047125,\"mmk\":2.6333970175650707,\"mxn\":1.9344883541509545,\"myr\":2.5921311088190646,\"ngn\":10.12738633818302,\"nok\":2.1907910758812257,\"nzd\":2.6415730881116897,\"php\":2.6266153946447637,\"pkr\":2.1782774402746985,\"pln\":0.08476162358292566,\"rub\":4.046031691899822,\"sar\":2.712432207282385,\"sek\":0.5201378108859814,\"sgd\":2.4093662272476317,\"thb\":3.3644067301641822,\"try\":2.774697871945476,\"twd\":2.3948534292196135,\"uah\":2.92450924413437,\"usd\":2.7161844717073422,\"vef\":2.7161844717072223,\"vnd\":2.762815049255466,\"xag\":1.556861327087744,\"xau\":1.9322678624034233,\"xdr\":2.4304809286430697,\"xlm\":-8.577831191559717,\"xrp\":-41.36379643294259,\"yfi\":-10.512217194269597,\"zar\":2.3674123767533803,\"bits\":-0.28843784224582586,\"link\":1.740135501613558,\"sats\":-0.28843784224582214}", "data-coin-id", "1", "data-up-class", "text-green", "data-down-class", "text-danger", "data-24h", "false", "data-target", "percent-change.percent", 1, "text-green"], [1, "td-change30d", "change30d", "text-right", "stat-percent", "px-0", "pl-2"], ["data-json", "{\"aed\":8.283720137881536,\"ars\":10.204843177455185,\"aud\":9.805390096502757,\"bch\":-9.809245629993438,\"bdt\":8.07640491387943,\"bhd\":8.23390514714385,\"bmd\":8.289321513000715,\"bnb\":-36.08442669684547,\"brl\":8.445858627622911,\"btc\":0,\"cad\":7.504675350251704,\"chf\":7.639796813360669,\"clp\":6.226461810616749,\"cny\":9.073290993512728,\"czk\":7.581046319227444,\"dkk\":8.516335651993206,\"dot\":-3.297831572487566,\"eos\":-31.930217648343906,\"eth\":-9.825545795804107,\"eur\":8.504967840765262,\"gbp\":10.058160252698695,\"hkd\":8.517004834878406,\"huf\":5.724479530221451,\"idr\":9.997975082272328,\"ils\":7.234213673255198,\"inr\":11.303221618098778,\"jpy\":9.50655646568577,\"krw\":6.782592013528295,\"kwd\":7.988079574465563,\"lkr\":10.43924551812375,\"ltc\":-6.073499613282131,\"mmk\":8.235991467952624,\"mxn\":4.441355318241994,\"myr\":8.486091933678697,\"ngn\":11.670059364696604,\"nok\":8.942184093413609,\"nzd\":10.67377486182306,\"php\":8.21060708630328,\"pkr\":5.325447025185703,\"pln\":7.422240842352037,\"rub\":13.984311946825956,\"sar\":8.27797447449394,\"sek\":9.00576053523258,\"sgd\":8.111256482834287,\"thb\":10.907546440970831,\"try\":17.84706256166333,\"twd\":9.21852838189877,\"uah\":8.889764331426518,\"usd\":8.289321513000715,\"vef\":8.289321513000578,\"vnd\":8.488903504480344,\"xag\":12.14346541587225,\"xau\":7.210541497237621,\"xdr\":8.3782040437502,\"xlm\":-10.57205577413764,\"xrp\":-52.63868700095927,\"yfi\":-9.080293234247295,\"zar\":4.955712306005079,\"bits\":-0.027916291220881902,\"link\":-0.9648751148904545,\"sats\":-0.027916291220884234}", "data-coin-id", "1", "data-up-class", "text-green", "data-down-class", "text-danger", "data-24h", "false", "data-target", "percent-change.percent", 1, "text-green"], [1, "td-total_volume", "lit", "text-right", "px-0", "pl-2"], ["href", "/en/coins/bitcoin/trading_exchanges"], ["data-price-btc", "926015.161069986", "data-no-decimal", "false", "data-target", "price.price", "data-price-previous", "56298381656.36916", 1, "no-wrap"], [1, "td-circulating_supply"], [1, "cap-price", "text-right"], [1, "td-total_supply"], [1, "td-market_cap", "cap"], ["data-price-btc", "18678556.0", "data-target", "price.price", "data-price-previous", "1135588831248.5078", 1, "no-wrap"], ["href", "#", 1, "btn", "btn-primary", "btn-sm", "mt-3", 3, "click"]], template: function MarketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Coin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "24h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "7d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "30d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "24h Volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Circulating Supply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Total Supply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Mkt Cap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MarketComponent_tr_40_Template, 46, 10, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MarketComponent_a_42_Template, 2, 0, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showmorehide);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXJrZXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _market_market_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./market/market.component */ "d7X1");
/* harmony import */ var _market_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./market/product-view/product-view.component */ "GXoX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', redirectTo: 'market', pathMatch: 'full' },
    { path: 'home', component: _market_market_component__WEBPACK_IMPORTED_MODULE_1__["MarketComponent"] },
    { path: 'market', component: _market_market_component__WEBPACK_IMPORTED_MODULE_1__["MarketComponent"] },
    { path: 'productView/:productId', component: _market_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_2__["ProductViewComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map