"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_settings_devices_devices_module_ts"],{

/***/ 613:
/*!*************************************************************************!*\
  !*** ./src/app/pages/secure/settings/devices/devices-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesPageRoutingModule": () => (/* binding */ DevicesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _devices_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices.page */ 68651);




const routes = [
    {
        path: '',
        component: _devices_page__WEBPACK_IMPORTED_MODULE_0__.DevicesPage
    }
];
let DevicesPageRoutingModule = class DevicesPageRoutingModule {
};
DevicesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DevicesPageRoutingModule);



/***/ }),

/***/ 64681:
/*!*****************************************************************!*\
  !*** ./src/app/pages/secure/settings/devices/devices.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesPageModule": () => (/* binding */ DevicesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _devices_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices-routing.module */ 613);
/* harmony import */ var _devices_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices.page */ 68651);







let DevicesPageModule = class DevicesPageModule {
};
DevicesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _devices_routing_module__WEBPACK_IMPORTED_MODULE_0__.DevicesPageRoutingModule
        ],
        declarations: [_devices_page__WEBPACK_IMPORTED_MODULE_1__.DevicesPage]
    })
], DevicesPageModule);



/***/ }),

/***/ 68651:
/*!***************************************************************!*\
  !*** ./src/app/pages/secure/settings/devices/devices.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesPage": () => (/* binding */ DevicesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _devices_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices.page.html?ngResource */ 346);
/* harmony import */ var _devices_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices.page.scss?ngResource */ 7842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let DevicesPage = class DevicesPage {
    constructor() { }
    ngOnInit() {
    }
};
DevicesPage.ctorParameters = () => [];
DevicesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-devices',
        template: _devices_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_devices_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DevicesPage);



/***/ }),

/***/ 7842:
/*!****************************************************************************!*\
  !*** ./src/app/pages/secure/settings/devices/devices.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2VzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 346:
/*!****************************************************************************!*\
  !*** ./src/app/pages/secure/settings/devices/devices.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Settings\" defaultHref=\"/settings\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Devices\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"ion-padding\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>Registered devices (3)</ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"phone-portrait\"></ion-icon>\n        <ion-label>\n          <h3>John's iPhone</h3>\n          <p class=\"font-size-smallest\">Registered: 01 Jan, 2021</p>\n        </ion-label>\n        <ion-badge color=\"primary\" mode=\"ios\" slot=\"end\">Main device</ion-badge>\n      </ion-item>\n      <ion-item detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"laptop\"></ion-icon>\n        <ion-label>\n          <h3>John's MacBook Pro</h3>\n          <p class=\"font-size-smallest\">Registered: 04 Feb, 2021</p>\n        </ion-label>\n        <ion-button slot=\"end\" fill=\"clear\" color=\"danger\">\n          Remove\n        </ion-button>\n      </ion-item>\n      <ion-item detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"tablet-portrait\"></ion-icon>\n        <ion-label>\n          <h3>John's iPad</h3>\n          <p class=\"font-size-smallest\">Registered: 18 June, 2021</p>\n        </ion-label>\n        <ion-button slot=\"end\" fill=\"clear\" color=\"danger\">\n          Remove\n        </ion-button>\n      </ion-item>\n    </ion-list>\n    <p class=\"list-description\">To remove your current main device, you have to set another one as your main device.</p>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_settings_devices_devices_module_ts.js.map