"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_payments_payment-detail_payment-detail_module_ts"],{

/***/ 90556:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/secure/payments/payment-detail/payment-detail-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailPageRoutingModule": () => (/* binding */ PaymentDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payment_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-detail.page */ 454);




const routes = [
    {
        path: '',
        component: _payment_detail_page__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailPage
    }
];
let PaymentDetailPageRoutingModule = class PaymentDetailPageRoutingModule {
};
PaymentDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentDetailPageRoutingModule);



/***/ }),

/***/ 92925:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/secure/payments/payment-detail/payment-detail.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailPageModule": () => (/* binding */ PaymentDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _payment_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-detail-routing.module */ 90556);
/* harmony import */ var _payment_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-detail.page */ 454);







let PaymentDetailPageModule = class PaymentDetailPageModule {
};
PaymentDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailPageRoutingModule
        ],
        declarations: [_payment_detail_page__WEBPACK_IMPORTED_MODULE_1__.PaymentDetailPage]
    })
], PaymentDetailPageModule);



/***/ }),

/***/ 454:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/secure/payments/payment-detail/payment-detail.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailPage": () => (/* binding */ PaymentDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _payment_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-detail.page.html?ngResource */ 63889);
/* harmony import */ var _payment_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-detail.page.scss?ngResource */ 46091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PaymentDetailPage = class PaymentDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentDetailPage.ctorParameters = () => [];
PaymentDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-payment-detail',
        template: _payment_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payment_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentDetailPage);



/***/ }),

/***/ 46091:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/secure/payments/payment-detail/payment-detail.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LWRldGFpbC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 63889:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/secure/payments/payment-detail/payment-detail.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Payments\" defaultHref=\"/payments\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Details\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-padding\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>Information</ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item>\n        <ion-label>\n          <p>Amount</p>\n        </ion-label>\n        <ion-badge color=\"danger\" mode=\"ios\" slot=\"end\">- $8.60</ion-badge>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <p>Status</p>\n        </ion-label>\n        <ion-input readonly slot=\"end\" class=\"font-size-small ion-text-right ion-no-padding-end\" value=\"Completed\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <p>Date</p>\n        </ion-label>\n        <ion-input readonly slot=\"end\" class=\"font-size-small ion-text-right ion-no-padding-end\" value=\"01 June, 2022 / 09:21\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <p>Merchant</p>\n        </ion-label>\n        <ion-input readonly slot=\"end\" class=\"font-size-small ion-text-right ion-no-padding-end\" value=\"Starbucks New York\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <p>Transaction-ID</p>\n        </ion-label>\n        <ion-input readonly slot=\"end\" class=\"font-size-small ion-text-right ion-no-padding-end\" value=\"848-14E-11V\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>Actions</ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item detail=\"false\">\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\n          <ion-icon color=\"primary\" name=\"receipt\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <h3>Receipt</h3>\n          <p class=\"font-size-smallest\">View digital invoice</p>\n        </ion-label>\n        <ion-button slot=\"end\">\n          View\n        </ion-button>\n      </ion-item>\n      <ion-item button>\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\n          <ion-icon color=\"primary\" name=\"chatbox\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <h3>Contact merchant</h3>\n          <p class=\"font-size-smallest\">Get in touch with merchant</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_payments_payment-detail_payment-detail_module_ts.js.map