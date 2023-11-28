"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_signin_signin_module_ts"],{

/***/ 54433:
/*!**************************************************************!*\
  !*** ./src/app/pages/public/signin/signin-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageRoutingModule": () => (/* binding */ SigninPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.page */ 64569);




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ 8685:
/*!******************************************************!*\
  !*** ./src/app/pages/public/signin/signin.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageModule": () => (/* binding */ SigninPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin-routing.module */ 54433);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page */ 64569);







let SigninPageModule = class SigninPageModule {
};
SigninPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage]
    })
], SigninPageModule);



/***/ }),

/***/ 64569:
/*!****************************************************!*\
  !*** ./src/app/pages/public/signin/signin.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPage": () => (/* binding */ SigninPage)
/* harmony export */ });
/* harmony import */ var C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _signin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page.html?ngResource */ 56269);
/* harmony import */ var _signin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.page.scss?ngResource */ 43797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);










let SigninPage = class SigninPage {
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
    this.signin_form = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])]
    }); // DEBUG: Prefill inputs

    this.signin_form.get('email').setValue('');
    this.signin_form.get('password').setValue('');
  } // Sign in


  signIn() {
    var _this = this;

    return (0,C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.submit_attempt = true; // If email or password empty

      if (_this.signin_form.value.email == '' || _this.signin_form.value.password == '') {
        _this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);
      } else {
        // Proceed with loading overlay
        const loading = yield _this.loadingController.create({
          cssClass: 'default-loading',
          message: 'Signing in... Please be patient.',
          spinner: 'crescent'
        });
        yield loading.present();

        _this.authService.signInv2(_this.signin_form.value).subscribe(data => {
          if (data['status'] == true) {
            localStorage.removeItem("access_token");
            localStorage.setItem('access_token', data['token']);
            localStorage.setItem('login_data', JSON.stringify(data));

            _this.router.navigate(['/home']);
          } else _this.toastService.presentToast('Error', 'Please correct input email and password', 'top', 'danger', 2000);

          loading.dismiss();
        });
      }
    })();
  }

};

SigninPage.ctorParameters = () => [{
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

SigninPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-signin',
  template: _signin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_signin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SigninPage);


/***/ }),

/***/ 43797:
/*!*****************************************************************!*\
  !*** ./src/app/pages/public/signin/signin.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 56269:
/*!*****************************************************************!*\
  !*** ./src/app/pages/public/signin/signin.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-no-border\">\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" routerLink=\"/signup\">\n        Sign up\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-padding ion-full-height ion-flex ion-flex-center\">\n\n    <div class=\"logo-container\">\n      <h1 class=\"logo-placeholder\">Inwista</h1>\n      <p>Login to your account.</p>\n    </div>\n\n    <form class=\"form-default\" [formGroup]=\"signin_form\" (submit)=\"signIn()\">\n\n      <ion-list class=\"item-card-list\" lines=\"none\">\n        <ion-item>\n          <ion-label color=\"tertiary\" position=\"stacked\">Email</ion-label>\n          <ion-input formControlName=\"email\" type=\"email\" autocomplete=\"off\"\n            placeholder=\"Your email address\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"ion-margin-top-small\">\n          <ion-label color=\"tertiary\" position=\"stacked\">Password</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Your password\"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-button class=\"ion-margin-top\" type=\"submit\" expand=\"block\" color=\"primary\">\n        Sign in\n      </ion-button>\n\n      <ion-button color=\"primary\" fill=\"clear\" expand=\"block\" class=\"ion-button-small ion-margin-top-medium\" routerLink=\"/password-reset\">\n        Forgot password?\n      </ion-button>\n    </form>\n\n    <div class=\"ion-text-center ion-margin-top\">\n      <ion-text color=\"medium\">\n        <small>&copy; {{current_year}} Inwista</small>\n      </ion-text>\n    </div>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_signin_signin_module_ts.js.map