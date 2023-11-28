"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_settings_settings_module_ts"],{

/***/ 37734:
/*!******************************************************************!*\
  !*** ./src/app/pages/secure/settings/settings-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 978);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_settings_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 89972)).then(m => m.AccountPageModule)
    },
    {
        path: 'devices',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_settings_devices_devices_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./devices/devices.module */ 64681)).then(m => m.DevicesPageModule)
    },
    {
        path: 'backups',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_settings_backups_backups_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./backups/backups.module */ 64329)).then(m => m.BackupsPageModule)
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 91576:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/settings/settings.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 37734);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 978);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 978:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/settings/settings.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 16438);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 28241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);








let SettingsPage = class SettingsPage {
    constructor(formBuilder, authService, toastService, navController, actionSheetController) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastService = toastService;
        this.navController = navController;
        this.actionSheetController = actionSheetController;
    }
    ngOnInit() {
        this.authService
            .getme()
            .subscribe((data) => {
            this.name = data.name;
            this.email = data.email;
        });
    }
    // Sign out
    signOut() {
        this.authService.signOut();
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-settings',
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 28241:
/*!*********************************************************************!*\
  !*** ./src/app/pages/secure/settings/settings.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 16438:
/*!*********************************************************************!*\
  !*** ./src/app/pages/secure/settings/settings.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Home\" defaultHref=\"/home\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"hero hero-light-gradient\">\n    <ion-avatar>\n      <ion-icon class=\"avatar-icon-placeholder\" name=\"person-circle\" color=\"tertiary\">\n      </ion-icon>\n    </ion-avatar>\n    <p class=\"font-weight-500\"> {{name}}</p>\n    <ion-text color=\"medium\">\n      <small> {{email}}</small>\n    </ion-text>\n  </div>\n\n  <div class=\"ion-padding\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>Personal</ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item button routerLink=\"profile/edit\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"person\"></ion-icon>\n        <ion-label>\n          <h3>Profile</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item button routerLink=\"account\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"person-circle\"></ion-icon>\n        <ion-label>\n          <h3>Account settings</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n   \n    <hr class=\"hr-medium\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>Security</ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item button>\n        <ion-icon slot=\"start\" color=\"medium\" name=\"lock-closed\"></ion-icon>\n        <ion-label>\n          <h3>Master password</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item detail=\"false\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"scan\"></ion-icon>\n        <ion-label>\n          <h3>Face ID</h3>\n        </ion-label>\n        <ion-toggle slot=\"end\"></ion-toggle>\n      </ion-item>\n      <ion-item button routerLink=\"backups\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"cloud-circle\"></ion-icon>\n        <ion-label>\n          <h3>Backups</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list class=\"list-custom\" lines=\"full\" (click)=\"signOut()\">\n      <ion-item button detail=false>\n        <ion-icon slot=\"start\" color=\"danger\" name=\"log-out\"></ion-icon>\n        <ion-label color=\"danger\">\n          <h3>Sign out</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_settings_settings_module_ts.js.map