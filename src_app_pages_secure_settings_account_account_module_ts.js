"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_settings_account_account_module_ts"],{

/***/ 33413:
/*!*************************************************************************!*\
  !*** ./src/app/pages/secure/settings/account/account-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 4276);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 89972:
/*!*****************************************************************!*\
  !*** ./src/app/pages/secure/settings/account/account.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 33413);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 4276);







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
    })
], AccountPageModule);



/***/ }),

/***/ 4276:
/*!***************************************************************!*\
  !*** ./src/app/pages/secure/settings/account/account.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page.html?ngResource */ 66275);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss?ngResource */ 7813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AccountPage = class AccountPage {
    constructor() { }
    ngOnInit() {
    }
};
AccountPage.ctorParameters = () => [];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-account',
        template: _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountPage);



/***/ }),

/***/ 7813:
/*!****************************************************************************!*\
  !*** ./src/app/pages/secure/settings/account/account.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 66275:
/*!****************************************************************************!*\
  !*** ./src/app/pages/secure/settings/account/account.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Settings\" defaultHref=\"/settings\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Account\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"ion-padding\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>Privacy</ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"notifications\"></ion-icon>\n        <ion-label>\n          <h3>Notifications</h3>\n        </ion-label>\n        <ion-toggle checked slot=\"end\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n    <p class=\"list-description\">We never display sensible data in your notifications.</p>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>Feedback & Reports</ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"bug\"></ion-icon>\n        <ion-label>\n          <h3>Share crash reports</h3>\n        </ion-label>\n        <ion-toggle slot=\"end\"></ion-toggle>\n      </ion-item>\n      <ion-item detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"document\"></ion-icon>\n        <ion-label>\n          <h3>Protocols</h3>\n        </ion-label>\n        <ion-toggle slot=\"end\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n    <p class=\"list-description\">Activate this function to auto share crash reports with us. Important: no personal or financial data is shared.</p>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item button detail=false>\n        <ion-icon slot=\"start\" color=\"danger\" name=\"close\"></ion-icon>\n        <ion-label color=\"danger\">\n          <h3>Delete account</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_settings_account_account_module_ts.js.map