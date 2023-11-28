"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_home_home_module_ts"],{

/***/ 92115:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/home/home-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 43455);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 66424:
/*!**************************************************!*\
  !*** ./src/app/pages/secure/home/home.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 92115);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 43455);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 43455:
/*!************************************************!*\
  !*** ./src/app/pages/secure/home/home.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 14923);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 74594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);










let HomePage = class HomePage {
  constructor(authService, loadingController, formBuilder, toastService, router) {
    this.authService = authService;
    this.loadingController = loadingController;
    this.formBuilder = formBuilder;
    this.toastService = toastService;
    this.router = router;
    this.content_loaded = false;
  }

  ngOnInit() {
    this.loaddata().then(console.log);
    this.authService.getme().subscribe(data => {
      this.name = data.name; // this.edit_profile_form.get('name').setValue(data.name);
    });
  }

  loaddata() {
    var _this = this;

    return (0,C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        cssClass: 'default-loading',
        message: 'Loading... Please be patient.',
        spinner: 'crescent'
      });
      yield loading.present();

      _this.authService.wallets().subscribe(data => {
        _this.wallets = data;
        console.log(data);
        _this.content_loaded = true;
        loading.dismiss();
      });
    })();
  }

  sendto(coin, id) {
    var page = "";
    if (coin === 'USDT') page = 'wallet/tron-network';else if (coin === 'ETH') page = 'wallet/eth-network';else if (coin === 'USDC') page = 'wallet/usdc-network';else page = "wallet/ftm-network";
    this.router.navigate([page]);
  }

};

HomePage.ctorParameters = () => [{
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

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 74594:
/*!*************************************************************!*\
  !*** ./src/app/pages/secure/home/home.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 14923:
/*!*************************************************************!*\
  !*** ./src/app/pages/secure/home/home.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/settings\">\n        <ion-icon slot=\"icon-only\" name=\"cog\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Home</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar showCancelButton=\"focus\" placeholder=\"Address, transactions ...\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"ion-padding\">\n\n    <ion-list-header>\n      <ion-label color=\"white\">  Welcome {{name}}</ion-label>\n    </ion-list-header>\n\n    <!-- Skeletons -->\n    <ion-list class=\"item-card-list animate__animated animate__fadeIn\" *ngIf=\"!content_loaded\">\n      <ion-item lines=\"none\" *ngFor=\"let i of [].constructor(3);\">\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n          <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"item-card-list animate__animated animate__fadeIn\" *ngIf=\"content_loaded\" lines=\"none\">\n     \n      \n      \n      <ion-item button detail *ngFor=\"let i of wallets;\"  (click)=\"sendto(i.coin,i.name)\">\n        \n   \n\n\n\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\"  >\n         <img src=\"{{i.logo}}\" > \n\n        </ion-avatar>\n        <ion-label>\n          <h3>{{i.balance}}</h3>\n          <p>{{i.coin}}</p>\n        </ion-label>\n\n         \n\n\n      </ion-item>\n    </ion-list>\n  <!--\n    <hr>\n\n    <ion-list-header>\n      <ion-label color=\"white\">Recent transactions</ion-label>\n      <ion-button *ngIf=\"content_loaded\" routerLink=\"/payments\">See All <ion-icon slot=\"end\"\n          name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-list-header>\n-->\n    <!-- Skeletons -->\n    <!--  <ion-list class=\"list-custom animate__animated animate__fadeIn\" lines=\"full\" *ngIf=\"!content_loaded\">\n      <ion-item *ngFor=\"let i of [].constructor(3);\">\n        <ion-label>\n          <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\n          <p><ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text></p>\n        </ion-label>\n        <ion-skeleton-text slot=\"end\" animated style=\"width: 10%\"></ion-skeleton-text>\n      </ion-item>\n    </ion-list>\n\n    <ion-list class=\"list-custom animate__animated animate__fadeIn\" lines=\"full\" *ngIf=\"content_loaded\">\n      <ion-item button detail=\"false\">\n        <ion-label>\n          <h3>Coffee</h3>\n          <p>Starbucks &middot; 04.01.2022</p>\n        </ion-label>\n        <ion-badge color=\"danger\" mode=\"ios\" slot=\"end\">- $8.60</ion-badge>\n      </ion-item>\n      <ion-item button detail=\"false\">\n        <ion-label>\n          <h3>Salary</h3>\n          <p>Apple Inc. &middot; 03.01.2022</p>\n        </ion-label>\n        <ion-badge color=\"medium\" mode=\"ios\" slot=\"end\">$8412.48</ion-badge>\n      </ion-item>\n      <ion-item button detail=\"false\">\n        <ion-label>\n          <h3>Rent</h3>\n          <p>Housing Inc. &middot; 01.01.2022</p>\n        </ion-label>\n        <ion-badge color=\"danger\" mode=\"ios\" slot=\"end\">- $1400.00</ion-badge>\n      </ion-item>\n    </ion-list>-->\n\n    <!-- Loading spinner -->\n    <!-- <ion-row class=\"spinner-container ion-justify-content-center ion-align-items-center\">\n    <ion-spinner name=\"crescent\" color=\"medium\"></ion-spinner>\n  </ion-row> -->\n\n    <!-- <ion-button routerLink=\"/styleguide\">\n     Style guide\n    </ion-button>\n\n    <br><br><br>\n \n    <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n\n    <br>\n\n    <p class=\"animate__animated animate__fadeIn\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum cum ea repudiandae temporibus optio accusantium non! Autem ex quia architecto quod nostrum nam ipsa tempora? Obcaecati nobis numquam provident doloribus!</p>\n\n    <ion-text color=\"medium\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea suscipit exercitationem deserunt tempora ratione, natus mollitia praesentium doloribus iure veritatis. Deserunt delectus impedit vitae suscipit illo laborum hic rerum recusandae.</p>\n    </ion-text>\n\n    <ion-text color=\"medium\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea suscipit exercitationem deserunt tempora ratione, natus mollitia praesentium doloribus iure veritatis. Deserunt delectus impedit vitae suscipit illo laborum hic rerum recusandae.</p>\n    </ion-text>\n\n    <ion-text color=\"medium\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea suscipit exercitationem deserunt tempora ratione, natus mollitia praesentium doloribus iure veritatis. Deserunt delectus impedit vitae suscipit illo laborum hic rerum recusandae.</p>\n    </ion-text>\n\n    <ion-text color=\"medium\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea suscipit exercitationem deserunt tempora ratione, natus mollitia praesentium doloribus iure veritatis. Deserunt delectus impedit vitae suscipit illo laborum hic rerum recusandae.</p>\n    </ion-text> -->\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_home_home_module_ts.js.map