"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_cards_cards_module_ts"],{

/***/ 72202:
/*!****************************************************!*\
  !*** ./src/app/pages/secure/cards/add/add.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPage": () => (/* binding */ AddPage)
/* harmony export */ });
/* harmony import */ var C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _add_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.page.html?ngResource */ 42817);
/* harmony import */ var _add_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.page.scss?ngResource */ 1042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);







let AddPage = class AddPage {
  constructor(modalController, loadingController, formBuilder) {
    this.modalController = modalController;
    this.loadingController = loadingController;
    this.formBuilder = formBuilder;
    this.submit_attempt = false;
  }

  ngOnInit() {
    // Setup form
    this.add_card_form = this.formBuilder.group({
      card_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      expiry_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      cvv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])]
    });
  } // Format credit


  formatCreditCardNumber(event) {
    // Input val
    let value = event.detail.value; // Format: 0000 0000 0000 0000

    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    } // Set formatted value


    if (parts.length > 0) {
      this.add_card_form.get('card_number').setValue(parts.join(' '));
    } else {
      this.add_card_form.get('card_number').setValue(value);
    }
  } // Format expiry date


  formatExpiryDate(event) {
    // Input val
    let value = event.detail.value; // Format: 01/23

    if (value.length == 3) {
      if (!value.includes('/')) {
        const month = value.slice(0, 2);
        const year = value.slice(2, 4);
        this.add_card_form.get('expiry_date').setValue(month + '/' + year);
      }
    } else if (value.length > 5) {
      value = value.substring(0, value.length - 1);
      this.add_card_form.get('expiry_date').setValue(value);
    }
  } // Cancel


  cancel() {
    // Dismiss modal
    this.modalController.dismiss();
  } // Save card


  save() {
    var _this = this;

    return (0,C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.submit_attempt = true; // If form valid

      if (_this.add_card_form.valid) {
        // Loading overlay
        const loading = yield _this.loadingController.create({
          cssClass: 'default-loading',
          message: '<p>Saving card...</p><span>Please be patient.</span>',
          spinner: 'crescent'
        });
        yield loading.present(); // Add save logic here ...
        // ...
        // Fake timeout

        setTimeout(() => {
          // Dismiss modal
          _this.modalController.dismiss();

          loading.dismiss();
        }, 2000);
      }
    })();
  }

};

AddPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder
}];

AddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-add',
  template: _add_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddPage);


/***/ }),

/***/ 50611:
/*!************************************************************!*\
  !*** ./src/app/pages/secure/cards/cards-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsPageRoutingModule": () => (/* binding */ CardsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cards_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.page */ 72228);




const routes = [
    {
        path: '',
        component: _cards_page__WEBPACK_IMPORTED_MODULE_0__.CardsPage
    },
    {
        path: 'add',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_cards_add_add_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add/add.module */ 90967)).then(m => m.AddPageModule)
    }
];
let CardsPageRoutingModule = class CardsPageRoutingModule {
};
CardsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CardsPageRoutingModule);



/***/ }),

/***/ 13517:
/*!****************************************************!*\
  !*** ./src/app/pages/secure/cards/cards.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsPageModule": () => (/* binding */ CardsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _cards_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards-routing.module */ 50611);
/* harmony import */ var _cards_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.page */ 72228);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 28775);







// Swiper

let CardsPageModule = class CardsPageModule {
};
CardsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cards_routing_module__WEBPACK_IMPORTED_MODULE_0__.CardsPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule
        ],
        declarations: [_cards_page__WEBPACK_IMPORTED_MODULE_1__.CardsPage]
    })
], CardsPageModule);



/***/ }),

/***/ 72228:
/*!**************************************************!*\
  !*** ./src/app/pages/secure/cards/cards.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsPage": () => (/* binding */ CardsPage)
/* harmony export */ });
/* harmony import */ var C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _cards_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.page.html?ngResource */ 3635);
/* harmony import */ var _cards_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.page.scss?ngResource */ 6123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _add_add_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.page */ 72202);









swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination]);
let CardsPage = class CardsPage {
  constructor(alertController, toastService, loadingController, modalController, routerOutlet) {
    this.alertController = alertController;
    this.toastService = toastService;
    this.loadingController = loadingController;
    this.modalController = modalController;
    this.routerOutlet = routerOutlet; // Swiper config

    this.config = {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        clickable: false
      },
      allowTouchMove: true
    };
    this.card_details_visible = false;
  }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  } // Sync


  sync() {
    var _this = this;

    return (0,C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Loading overlay
      const loading = yield _this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Syncing card...</p><span>Please be patient.</span>',
        spinner: 'crescent'
      });
      yield loading.present(); // Fake timeout

      setTimeout(() => {
        loading.dismiss();
      }, 2000);
    })();
  } // Add card


  addCard() {
    var _this2 = this;

    return (0,C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Open filter modal
      const modal = yield _this2.modalController.create({
        component: _add_add_page__WEBPACK_IMPORTED_MODULE_5__.AddPage,
        presentingElement: _this2.routerOutlet.nativeEl
      });
      return yield modal.present();
    })();
  } // Delete card


  deleteCard() {
    var _this3 = this;

    return (0,C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'custom-alert',
        header: 'Delete this card permanently?',
        message: 'This action cannot be undone.',
        buttons: [{
          text: 'Delete card',
          cssClass: 'danger',
          handler: function () {
            var _ref = (0,C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              _this3.toastService.presentToast('Success', 'Card successfully deleted', 'top', 'success', 2000);
            });

            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }, {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancel'
        }]
      });
      yield alert.present();
    })();
  }

};

CardsPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet
}];

CardsPage.propDecorators = {
  swiper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['swiper']
  }]
};
CardsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-cards',
  template: _cards_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cards_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CardsPage);


/***/ }),

/***/ 1042:
/*!*****************************************************************!*\
  !*** ./src/app/pages/secure/cards/add/add.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6123:
/*!***************************************************************!*\
  !*** ./src/app/pages/secure/cards/cards.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 42817:
/*!*****************************************************************!*\
  !*** ./src/app/pages/secure/cards/add/add.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancel()\">\n        Cancel\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Add card\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-padding\">\n\n    <form class=\"form-default\" [formGroup]=\"add_card_form\" (submit)=\"save()\">\n\n      <ion-list class=\"item-card-list\" lines=\"none\">\n        <ion-item>\n          <ion-label color=\"tertiary\" position=\"stacked\">Card number</ion-label>\n          <ion-input formControlName=\"card_number\" placeholder=\"0000 0000 0000 0000\" type=\"text\" minlength=\"13\" maxlength=\"22\" inputmode=\"numeric\" (ionChange)=\"formatCreditCardNumber($event)\"></ion-input>\n        </ion-item>\n        <ion-text *ngIf=\"!add_card_form.controls.card_number.valid && submit_attempt\" color=\"danger\">\n          <small class=\"error-message-form\">Credit card number not valid. Minimum digits is 9, maximum digits is 19.</small>\n        </ion-text>\n\n        <ion-item>\n          <ion-label color=\"tertiary\" position=\"stacked\">Expiry date</ion-label>\n          <ion-input formControlName=\"expiry_date\" placeholder=\"MM/YY\" type=\"text\" minlength=\"5\" maxlength=\"5\" inputmode=\"numeric\" length=\"5\" (ionChange)=\"formatExpiryDate($event)\"></ion-input>\n        </ion-item>\n        <ion-text *ngIf=\"!add_card_form.controls.expiry_date.valid && submit_attempt\" color=\"danger\">\n          <small class=\"error-message-form\">Expiry date is required.</small>\n        </ion-text>\n\n        <ion-item>\n          <ion-label color=\"tertiary\" position=\"stacked\">CVC/CVV</ion-label>\n          <ion-input formControlName=\"cvv\" placeholder=\"123\" type=\"tel\" pattern=\"[0-9]*\" maxlength=\"3\" inputmode=\"numeric\"></ion-input>\n        </ion-item>\n        <ion-text *ngIf=\"!add_card_form.controls.cvv.valid && submit_attempt\" color=\"danger\">\n          <small class=\"error-message-form\">CVC/CVV number is required to have exactly 3 digits.</small>\n        </ion-text>\n\n      </ion-list>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"modal-footer\" collapse=\"fade\">\n  <ion-toolbar>\n    <form class=\"form-default\" [formGroup]=\"add_card_form\" (submit)=\"save()\">\n      <ion-button type=\"submit\" expand=\"block\" color=\"primary\">\n        Save card\n      </ion-button>\n    </form>\n  </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 3635:
/*!***************************************************************!*\
  !*** ./src/app/pages/secure/cards/cards.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Cards\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"addCard()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Cards</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"ion-padding\">\n\n    <swiper class=\"swiper-cards\" #swiper [config]=\"config\">\n      <ng-template swiperSlide>\n        <div class=\"cc-template cc-template-color-1\">\n          <div class=\"cc-bankname\">Bank of America</div>\n          <div class=\"cc-number\">\n            <ion-text *ngIf=\"card_details_visible\" class=\"animate__animated animate__flipInX\">0123 4567 8901 2345</ion-text>\n            <ion-text *ngIf=\"!card_details_visible\" class=\"animate__animated animate__flipInX\">&middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot;\n              &middot;&middot;&middot;&middot; 2345</ion-text>\n          </div>\n          <div class=\"cc-footer\">\n            <div>\n              <div class=\"cc-expiry-date\">\n                <p>Expiry date</p>\n                <span>03/26</span>\n              </div>\n              <div class=\"cc-cvv\">\n                <p>CVV</p>\n                <span>047</span>\n              </div>\n            </div>\n            <div>\n              <div class=\"cc-logo\">\n                <img src=\"../../../../assets/sample/banking-logos/visa.svg\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"cc-description\">VISA 2345</p>\n      </ng-template>\n      <ng-template swiperSlide>\n        <div class=\"cc-template cc-template-color-2\">\n          <div class=\"cc-bankname\">Wells Fargo</div>\n          <div class=\"cc-number\">\n            <ion-text *ngIf=\"card_details_visible\" class=\"animate__animated animate__flipInX\">9876 5432 1098 7654</ion-text>\n            <ion-text *ngIf=\"!card_details_visible\" class=\"animate__animated animate__flipInX\">&middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot;\n              &middot;&middot;&middot;&middot; 7654</ion-text>\n          </div>\n          <div class=\"cc-footer\">\n            <div>\n              <div class=\"cc-expiry-date\">\n                <p>Expiry date</p>\n                <span>01/24</span>\n              </div>\n              <div class=\"cc-cvv\">\n                <p>CVV</p>\n                <span>853</span>\n              </div>\n            </div>\n            <div>\n              <div class=\"cc-logo\">\n                <img src=\"../../../../assets/sample/banking-logos/visa.svg\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"cc-description\">VISA 7654</p>\n      </ng-template>\n    </swiper>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item button routerLink=\"/payments\">\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\n          <ion-icon color=\"primary\" name=\"analytics\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <h3>Transactions</h3>\n          <p class=\"font-size-smallest\">View all transactions</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list-header class=\"ion-list-header-small\">\n      <ion-label>Quick Actions</ion-label>\n    </ion-list-header>\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item button detail=\"false\">\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\n          <ion-icon color=\"primary\" name=\"eye\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <h3>Show card details</h3>\n          <p class=\"font-size-smallest\">Hidden by default</p>\n        </ion-label>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"card_details_visible\"></ion-toggle>\n      </ion-item>\n      <ion-item detail=\"false\">\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\n          <ion-icon color=\"primary\" name=\"sync\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <h3>Manual sync</h3>\n          <p class=\"font-size-smallest\">Sync card</p>\n        </ion-label>\n        <ion-button slot=\"end\" (click)=\"sync()\">\n          Sync now\n        </ion-button>\n      </ion-item>\n      <ion-item button>\n        <ion-avatar slot=\"start\" class=\"ion-avatar-default-icon\">\n          <ion-icon color=\"primary\" name=\"information\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <h3>Details</h3>\n          <p class=\"font-size-smallest\">More info about this card</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <hr class=\"hr-medium\">\n\n    <ion-list class=\"list-custom\" lines=\"full\">\n      <ion-item button detail=\"false\" (click)=\"deleteCard()\">\n        <ion-avatar slot=\"start\" class=\"ion-avatar-danger-icon\">\n          <ion-icon color=\"danger\" name=\"close\"></ion-icon>\n        </ion-avatar>\n        <ion-label color=\"danger\">\n          <h3>Delete card</h3>\n          <p class=\"font-size-smallest\">Remove this card</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_cards_cards_module_ts.js.map