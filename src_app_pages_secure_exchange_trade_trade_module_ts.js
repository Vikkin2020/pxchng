"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_exchange_trade_trade_module_ts"],{

/***/ 1289:
/*!*********************************************************************!*\
  !*** ./src/app/pages/secure/exchange/trade/trade-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TradePageRoutingModule": () => (/* binding */ TradePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _trade_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trade.page */ 93302);




const routes = [
    {
        path: '',
        component: _trade_page__WEBPACK_IMPORTED_MODULE_0__.TradePage
    }
];
let TradePageRoutingModule = class TradePageRoutingModule {
};
TradePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TradePageRoutingModule);



/***/ }),

/***/ 18810:
/*!*************************************************************!*\
  !*** ./src/app/pages/secure/exchange/trade/trade.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TradePageModule": () => (/* binding */ TradePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _trade_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trade-routing.module */ 1289);
/* harmony import */ var _trade_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trade.page */ 93302);








let TradePageModule = class TradePageModule {
};
TradePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _trade_routing_module__WEBPACK_IMPORTED_MODULE_0__.TradePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_trade_page__WEBPACK_IMPORTED_MODULE_1__.TradePage]
    })
], TradePageModule);



/***/ }),

/***/ 93302:
/*!***********************************************************!*\
  !*** ./src/app/pages/secure/exchange/trade/trade.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TradePage": () => (/* binding */ TradePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _trade_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trade.page.html?ngResource */ 82736);
/* harmony import */ var _trade_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trade.page.scss?ngResource */ 90879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);








let TradePage = class TradePage {
    constructor(r, formBuilder, authService, toastService) {
        this.r = r;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastService = toastService;
        this.submit_attempt = false;
    }
    ngOnInit() {
        const coin_1 = this.r.snapshot.paramMap.get('coin');
        this.coin_1 = coin_1;
        this.coin_2 = "USDT";
        // Setup form
        this.frm_book_trade = this.formBuilder.group({
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            amount: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            coin_1: [this.coin_1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            coin_2: [this.coin_2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        this.authService
            .exchange_rate(this.frm_book_trade.value)
            .subscribe((data) => {
            this.frm_book_trade.get('price').setValue(data['amount']);
        });
    }
    submit() {
        this.submit_attempt = true;
        this.authService
            .book_trade(this.frm_book_trade.value)
            .subscribe((data) => {
            this.toastService.presentToast('Success', 'Trade Submitted', 'top', 'success', 4000);
        });
    }
    ngOnDestroy() {
        //this.r.unsubscribe();
    }
    getexchangerate(e) {
        console.log(this.frm_book_trade.value);
        this.authService
            .exchange_rate(this.frm_book_trade.value)
            .subscribe((data) => {
            this.frm_book_trade.get('price').setValue(data['amount']);
        });
    }
};
TradePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService }
];
TradePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-trade',
        template: _trade_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_trade_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TradePage);



/***/ }),

/***/ 90879:
/*!************************************************************************!*\
  !*** ./src/app/pages/secure/exchange/trade/trade.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFkZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 82736:
/*!************************************************************************!*\
  !*** ./src/app/pages/secure/exchange/trade/trade.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Trades\" defaultHref=\"/pairs\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>\n Trade\n    </ion-title>\n     \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n \n\n  <div class=\"ion-padding\">\n\n    <form class=\"form-default\" [formGroup]=\"frm_book_trade\" (submit)=\"submit()\">\n\n      <ion-list class=\"item-card-list\" lines=\"none\">\n        <ion-item>\n          <ion-label color=\"tertiary\" position=\"stacked\">Price   {{coin_1}}</ion-label>\n          <ion-input  formControlName=\"price\" readonly  ></ion-input>\n        </ion-item>\n      \n      </ion-list>\n\n      <ion-list class=\"item-card-list\" lines=\"none\">\n        <ion-item>\n          <ion-label color=\"tertiary\" position=\"stacked\">Amount   {{coin_2}}</ion-label>\n          <ion-input (change)=\"getexchangerate($event)\" formControlName=\"amount\" ></ion-input>\n          {{returnamount}}\n        </ion-item>\n      \n      </ion-list>\n    </form>\n\n  </div>\n\n</ion-content>\n\n\n<ion-footer class=\"modal-footer\" collapse=\"fade\">\n  <ion-toolbar>\n    <form class=\"form-default\" [formGroup]=\"frm_book_trade\" (submit)=\"submit()\">\n      <ion-button type=\"submit\" expand=\"block\" color=\"primary\">\n       Submit Order\n      </ion-button>\n    </form>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_exchange_trade_trade_module_ts.js.map