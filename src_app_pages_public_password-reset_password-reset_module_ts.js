"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_password-reset_password-reset_module_ts"],{

/***/ 38178:
/*!******************************************************************************!*\
  !*** ./src/app/pages/public/password-reset/password-reset-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPageRoutingModule": () => (/* binding */ PasswordResetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _password_reset_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset.page */ 68509);




const routes = [
    {
        path: '',
        component: _password_reset_page__WEBPACK_IMPORTED_MODULE_0__.PasswordResetPage
    }
];
let PasswordResetPageRoutingModule = class PasswordResetPageRoutingModule {
};
PasswordResetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasswordResetPageRoutingModule);



/***/ }),

/***/ 23135:
/*!**********************************************************************!*\
  !*** ./src/app/pages/public/password-reset/password-reset.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPageModule": () => (/* binding */ PasswordResetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset-routing.module */ 38178);
/* harmony import */ var _password_reset_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset.page */ 68509);







let PasswordResetPageModule = class PasswordResetPageModule {
};
PasswordResetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordResetPageRoutingModule
        ],
        declarations: [_password_reset_page__WEBPACK_IMPORTED_MODULE_1__.PasswordResetPage]
    })
], PasswordResetPageModule);



/***/ }),

/***/ 68509:
/*!********************************************************************!*\
  !*** ./src/app/pages/public/password-reset/password-reset.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetPage": () => (/* binding */ PasswordResetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _password_reset_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset.page.html?ngResource */ 81391);
/* harmony import */ var _password_reset_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset.page.scss?ngResource */ 99718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PasswordResetPage = class PasswordResetPage {
    constructor() {
        this.current_year = new Date().getFullYear();
    }
    ngOnInit() {
    }
};
PasswordResetPage.ctorParameters = () => [];
PasswordResetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-password-reset',
        template: _password_reset_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_password_reset_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PasswordResetPage);



/***/ }),

/***/ 99718:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/public/password-reset/password-reset.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC1yZXNldC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 81391:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/public/password-reset/password-reset.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-no-border\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Sign in\" defaultHref=\"/signin\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-padding ion-full-height ion-flex ion-flex-center\">\n\n    <div class=\"logo-container\">\n      <h1 class=\"logo-placeholder\">Inwista</h1>\n      <p>Reset your password.</p>\n    </div>\n\n    <form class=\"form-default\">\n\n      <ion-list class=\"item-card-list\" lines=\"none\">\n\n        <ion-item>\n          <ion-label color=\"tertiary\" position=\"stacked\">Email</ion-label>\n          <ion-input type=\"email\" autocomplete=\"off\" placeholder=\"Your email address\"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-button class=\"ion-margin-top\" expand=\"block\" color=\"primary\">\n        Reset password\n      </ion-button>\n    </form>\n\n    <div class=\"ion-text-center ion-margin-top\">\n      <ion-text color=\"medium\">\n        <small>&copy; {{current_year}} Banking One</small>\n      </ion-text>\n    </div>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_password-reset_password-reset_module_ts.js.map