"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_settings_backups_backups_module_ts"],{

/***/ 61271:
/*!*************************************************************************!*\
  !*** ./src/app/pages/secure/settings/backups/backups-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackupsPageRoutingModule": () => (/* binding */ BackupsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _backups_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backups.page */ 6192);




const routes = [
    {
        path: '',
        component: _backups_page__WEBPACK_IMPORTED_MODULE_0__.BackupsPage
    }
];
let BackupsPageRoutingModule = class BackupsPageRoutingModule {
};
BackupsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BackupsPageRoutingModule);



/***/ }),

/***/ 64329:
/*!*****************************************************************!*\
  !*** ./src/app/pages/secure/settings/backups/backups.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackupsPageModule": () => (/* binding */ BackupsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _backups_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backups-routing.module */ 61271);
/* harmony import */ var _backups_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backups.page */ 6192);







let BackupsPageModule = class BackupsPageModule {
};
BackupsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _backups_routing_module__WEBPACK_IMPORTED_MODULE_0__.BackupsPageRoutingModule
        ],
        declarations: [_backups_page__WEBPACK_IMPORTED_MODULE_1__.BackupsPage]
    })
], BackupsPageModule);



/***/ }),

/***/ 6192:
/*!***************************************************************!*\
  !*** ./src/app/pages/secure/settings/backups/backups.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackupsPage": () => (/* binding */ BackupsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _backups_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backups.page.html?ngResource */ 30836);
/* harmony import */ var _backups_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backups.page.scss?ngResource */ 53492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let BackupsPage = class BackupsPage {
    constructor() { }
    ngOnInit() {
    }
};
BackupsPage.ctorParameters = () => [];
BackupsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-backups',
        template: _backups_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_backups_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BackupsPage);



/***/ }),

/***/ 53492:
/*!****************************************************************************!*\
  !*** ./src/app/pages/secure/settings/backups/backups.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWNrdXBzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 30836:
/*!****************************************************************************!*\
  !*** ./src/app/pages/secure/settings/backups/backups.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Settings\" defaultHref=\"/settings\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Backups\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"ion-padding\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>Backups (3)</ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item detail=\"false\">\n        <ion-label>\n          <h3>01 Jan, 2022</h3>\n          <p class=\"font-size-smallest\">10:00 AM &middot; 6.98 MB</p>\n        </ion-label>\n        <ion-button slot=\"end\" fill=\"clear\" color=\"primary\">\n          Restore\n        </ion-button>\n      </ion-item>\n      <ion-item detail=\"false\">\n        <ion-label>\n          <h3>01 Dec, 2021</h3>\n          <p class=\"font-size-smallest\">10:00 AM &middot; 6.40 MB</p>\n        </ion-label>\n        <ion-button slot=\"end\" fill=\"clear\" color=\"primary\">\n          Restore\n        </ion-button>\n      </ion-item>\n      <ion-item detail=\"false\">\n        <ion-label>\n          <h3>01 Nov, 2021</h3>\n          <p class=\"font-size-smallest\">10:00 AM &middot; 5.15 MB</p>\n        </ion-label>\n        <ion-button slot=\"end\" fill=\"clear\" color=\"primary\">\n          Restore\n        </ion-button>\n      </ion-item>\n    </ion-list>\n    <p class=\"list-description\">After restoring a backup you have to login again.</p>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item button detail=false>\n        <ion-icon slot=\"start\" color=\"primary\" name=\"cloud-upload\"></ion-icon>\n        <ion-label color=\"primary\">\n          <h3>Create backup now</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_settings_backups_backups_module_ts.js.map