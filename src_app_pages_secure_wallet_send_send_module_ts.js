"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_wallet_send_send_module_ts"],{

/***/ 23418:
/*!*****************************************************************!*\
  !*** ./src/app/pages/secure/wallet/send/send-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendPageRoutingModule": () => (/* binding */ SendPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _send_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send.page */ 46136);




const routes = [
    {
        path: '',
        component: _send_page__WEBPACK_IMPORTED_MODULE_0__.SendPage
    }
];
let SendPageRoutingModule = class SendPageRoutingModule {
};
SendPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SendPageRoutingModule);



/***/ }),

/***/ 83992:
/*!*********************************************************!*\
  !*** ./src/app/pages/secure/wallet/send/send.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendPageModule": () => (/* binding */ SendPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _send_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-routing.module */ 23418);
/* harmony import */ var _send_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send.page */ 46136);







let SendPageModule = class SendPageModule {
};
SendPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _send_routing_module__WEBPACK_IMPORTED_MODULE_0__.SendPageRoutingModule
        ],
        declarations: [_send_page__WEBPACK_IMPORTED_MODULE_1__.SendPage]
    })
], SendPageModule);



/***/ }),

/***/ 46136:
/*!*******************************************************!*\
  !*** ./src/app/pages/secure/wallet/send/send.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendPage": () => (/* binding */ SendPage)
/* harmony export */ });
/* harmony import */ var C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _send_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send.page.html?ngResource */ 69561);
/* harmony import */ var _send_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send.page.scss?ngResource */ 57259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);










let SendPage = class SendPage {
  constructor(authService, loadingController, formBuilder, toastService, router) {
    this.authService = authService;
    this.loadingController = loadingController;
    this.formBuilder = formBuilder;
    this.toastService = toastService;
    this.router = router;
    this.current_year = new Date().getFullYear();
    this.submit_attempt = false;
  }

  ngOnInit() {
    // Setup form
    this.send_fund_form = this.formBuilder.group({
      address: [''],
      amount: ['']
    });
  } // Sign in


  send_fund() {
    var _this = this;

    return (0,C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.submit_attempt = true; // If email or password empty

      if (_this.send_fund_form.value.address == '' || _this.send_fund_form.value.amount == '') {
        _this.toastService.presentToast('Error', 'Please input address and amount', 'top', 'danger', 2000);
      } else {
        // Proceed with loading overlay
        const loading = yield _this.loadingController.create({
          cssClass: 'default-loading',
          message: 'Signing in... Please be patient.',
          spinner: 'crescent'
        });
        yield loading.present();

        _this.authService.send_fund(_this.send_fund_form.value).subscribe(data => {
          _this.toastService.presentToast('Success', 'Request forwarded successfully', 'top', 'success', 2000);

          loading.dismiss();
        });
      }
    })();
  }

};

SendPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

SendPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-send',
  template: _send_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_send_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SendPage);


/***/ }),

/***/ 57259:
/*!********************************************************************!*\
  !*** ./src/app/pages/secure/wallet/send/send.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 69561:
/*!********************************************************************!*\
  !*** ./src/app/pages/secure/wallet/send/send.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-no-border\">\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" routerLink=\"/signup\">\n    Send Fund\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-padding ion-full-height ion-flex ion-flex-center\">\n\n    <div class=\"logo-container\">\n      <h1 class=\"logo-placeholder\">Send USDT to</h1>\n       \n    </div>\n\n    <form class=\"form-default\" [formGroup]=\"send_fund_form\" (submit)=\"send_fund()\">\n\n      <ion-list class=\"item-card-list\" lines=\"none\">\n        <ion-item>\n          <ion-label color=\"tertiary\" position=\"stacked\">Address</ion-label>\n          <ion-input formControlName=\"address\" type=\"text\" autocomplete=\"off\"\n       ></ion-input>\n        </ion-item>\n\n        <ion-item class=\"ion-margin-top-small\">\n          <ion-label color=\"tertiary\" position=\"stacked\">Amount</ion-label>\n          <ion-input formControlName=\"amount\" type=\"text\" ></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-button class=\"ion-margin-top\" type=\"submit\" expand=\"block\" color=\"primary\">\n        Send\n      </ion-button>\n\n    \n    </form>\n\n    <div class=\"ion-text-center ion-margin-top\">\n      <ion-text color=\"medium\">\n        <small>&copy; {{current_year}} Inwista</small>\n      </ion-text>\n    </div>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_wallet_send_send_module_ts.js.map