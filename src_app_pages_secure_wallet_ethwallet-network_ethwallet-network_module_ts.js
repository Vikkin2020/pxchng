"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_wallet_ethwallet-network_ethwallet-network_module_ts"],{

/***/ 42547:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/secure/wallet/ethwallet-network/ethwallet-network-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthwalletNetworkPageRoutingModule": () => (/* binding */ EthwalletNetworkPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ethwallet_network_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ethwallet-network.page */ 27955);




const routes = [
    {
        path: '',
        component: _ethwallet_network_page__WEBPACK_IMPORTED_MODULE_0__.EthwalletNetworkPage
    }
];
let EthwalletNetworkPageRoutingModule = class EthwalletNetworkPageRoutingModule {
};
EthwalletNetworkPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EthwalletNetworkPageRoutingModule);



/***/ }),

/***/ 24363:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/secure/wallet/ethwallet-network/ethwallet-network.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthwalletNetworkPageModule": () => (/* binding */ EthwalletNetworkPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _ethwallet_network_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ethwallet-network-routing.module */ 42547);
/* harmony import */ var _ethwallet_network_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ethwallet-network.page */ 27955);







let EthwalletNetworkPageModule = class EthwalletNetworkPageModule {
};
EthwalletNetworkPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ethwallet_network_routing_module__WEBPACK_IMPORTED_MODULE_0__.EthwalletNetworkPageRoutingModule
        ],
        declarations: [_ethwallet_network_page__WEBPACK_IMPORTED_MODULE_1__.EthwalletNetworkPage]
    })
], EthwalletNetworkPageModule);



/***/ }),

/***/ 27955:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/secure/wallet/ethwallet-network/ethwallet-network.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthwalletNetworkPage": () => (/* binding */ EthwalletNetworkPage)
/* harmony export */ });
/* harmony import */ var C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ethwallet_network_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ethwallet-network.page.html?ngResource */ 16854);
/* harmony import */ var _ethwallet_network_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ethwallet-network.page.scss?ngResource */ 9213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper/helper.service */ 60337);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);











let EthwalletNetworkPage = class EthwalletNetworkPage {
  constructor(authService, loadingController, formBuilder, toastService, router, helperService) {
    this.authService = authService;
    this.loadingController = loadingController;
    this.formBuilder = formBuilder;
    this.toastService = toastService;
    this.router = router;
    this.helperService = helperService;
    this.content_loaded = false;
  }

  ngOnInit() {
    this.loaddata().then(console.log);
  }

  loaddata() {
    var _this = this;

    return (0,C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Proceed with loading overlay
      const loading = yield _this.loadingController.create({
        cssClass: 'default-loading',
        message: 'Loading... Please be patient.',
        spinner: 'crescent'
      });
      yield loading.present();

      _this.authService.getETHWallet().subscribe(data => {
        _this.wallets = data;
        _this.address = data['address'];
        _this.qrcode = data['qrcode'];
        _this.icon = data['icon'];
        _this.balance = data['balance'];
        _this.name = data['name'];
        _this.usdt_transactions = data['USDT']['transactions'];
        console.log(data); //  this.router.navigate(['/home']);

        _this.content_loaded = true;
        loading.dismiss();
      });
    })();
  }

  copyText(text) {
    navigator.clipboard.writeText(text).then().catch(e => console.log(e));
  }

  sendto(send) {
    this.router.navigate([send]);
  }

};

EthwalletNetworkPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_3__.HelperService
}];

EthwalletNetworkPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-ethwallet-network',
  template: _ethwallet_network_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_ethwallet_network_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EthwalletNetworkPage);


/***/ }),

/***/ 9213:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/secure/wallet/ethwallet-network/ethwallet-network.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-thumbnail {\n  --size: 140px;\n  --border-radius: 14px;\n}\n\n.address_block {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin: 1 auto;\n  text-align: center;\n  padding-top: 50px;\n}\n\n.topbtn {\n  margin-right: 5px;\n}\n\n.address_block img {\n  border-radius: 5%;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aHdhbGxldC1uZXR3b3JrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUlFO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUdBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0U7RUFDRSxpQkFBQTtBQUpKOztBQVFFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBTEoiLCJmaWxlIjoiZXRod2FsbGV0LW5ldHdvcmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi10aHVtYm5haWwge1xyXG4gICAgLS1zaXplOiAxNDBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICB9XHJcblxyXG5cclxuICAuYWRkcmVzc19ibG9ja3tcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiBcclxuXHJcbiAgICBtYXJnaW46IDEgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4OztcclxuICB9XHJcblxyXG4gIC50b3BidG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDs7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmFkZHJlc3NfYmxvY2sgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 16854:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/secure/wallet/ethwallet-network/ethwallet-network.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = " \n<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"{{name}}\" defaultHref=\"/settings\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>\n\n    </ion-title>\n    <ion-buttons slot=\"end\">\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"address_block\">\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <img alt=\"{{qrcode}}\" class=\"img-fluid\" src=\"{{qrcode}}\" />\n\n\n\n    <div>{{address}}</div>\n    <br />\n\n    {{balance}}\n\n    <br /><br />\n    <ion-button size=\"small\" class=\"topbtn btn btn-small\" (click)=\"sendto('send')\"> <ion-icon slot=\"icon-only\" \n        name=\"send\"></ion-icon>\n      Send</ion-button>\n\n    <ion-button size=\"small\" class=\"topbtn btn btn-small\"> <ion-icon slot=\"icon-only\"\n        name=\"swap-horizontal-sharp\"></ion-icon> Swap</ion-button>\n\n\n\n  </div>\n\n  <div class=\"ion-padding\">\n\n\n\n\n    <ion-list class=\"list-custom animate__animated animate__fadeIn\" lines=\"full\">\n      <ion-item button detail=\"false\" routerLink=\"detail\" *ngFor=\"let i of usdt_transactions;\">\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\n          <img alt=\"{{address}}\" src=\"{{icon}}\" />\n        </ion-avatar>\n        <ion-label>\n          <h3>{{i.token_info.name}} </h3>\n          <p>{{i.block_timestamp | date:'medium'}}</p>\n        </ion-label>\n        <ion-badge color=\"medium\" mode=\"ios\" slot=\"end\"> Amount {{ (i.value/1000000 )| number}}</ion-badge>\n      </ion-item>\n    </ion-list>\n\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_wallet_ethwallet-network_ethwallet-network_module_ts.js.map