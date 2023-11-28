"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_profile_edit_edit_module_ts"],{

/***/ 73222:
/*!******************************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPageRoutingModule": () => (/* binding */ EditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.page */ 81996);




const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_0__.EditPage
    }
];
let EditPageRoutingModule = class EditPageRoutingModule {
};
EditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditPageRoutingModule);



/***/ }),

/***/ 70630:
/*!**********************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPageModule": () => (/* binding */ EditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-routing.module */ 73222);
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.page */ 81996);







let EditPageModule = class EditPageModule {
};
EditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_1__.EditPage]
    })
], EditPageModule);



/***/ }),

/***/ 81996:
/*!********************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPage": () => (/* binding */ EditPage)
/* harmony export */ });
/* harmony import */ var C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.page.html?ngResource */ 72257);
/* harmony import */ var _edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.page.scss?ngResource */ 37103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);









let EditPage = class EditPage {
  constructor(formBuilder, authService, toastService, navController, actionSheetController) {
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.toastService = toastService;
    this.navController = navController;
    this.actionSheetController = actionSheetController;
    this.submit_attempt = false;
  }

  ngOnInit() {
    // Setup form
    this.edit_profile_form = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    this.authService.getme().subscribe(data => {
      this.name = data.name;
      this.edit_profile_form.get('name').setValue(data.name);
    });
  } // Update profile picture


  updateProfilePicture() {
    var _this = this;

    return (0,C_Users_sushe_Downloads_banking_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this.actionSheetController.create({
        header: 'Choose existing picture or take new',
        cssClass: 'custom-action-sheet',
        buttons: [{
          text: 'Choose from gallery',
          icon: 'images',
          handler: () => {// Put in logic ...
          }
        }, {
          text: 'Take picture',
          icon: 'camera',
          handler: () => {// Put in logic ...
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  } // Submit form


  submit() {
    this.submit_attempt = true; // If form valid

    if (this.edit_profile_form.valid) {
      // Save form ...
      this.authService.update_profile(this.edit_profile_form.value).subscribe(data => {
        // Display success message and go back
        this.toastService.presentToast('Success', 'Profile saved', 'top', 'success', 2000);
        this.navController.back();
      });
    } else {
      // Display error message
      this.toastService.presentToast('Error', 'Please fill in all required fields', 'top', 'danger', 2000);
    }
  }

};

EditPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder
}, {
  type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
}];

EditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-edit',
  template: _edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EditPage);


/***/ }),

/***/ 37103:
/*!*********************************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 72257:
/*!*********************************************************************!*\
  !*** ./src/app/pages/secure/profile/edit/edit.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Settings\" defaultHref=\"/settings\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Profile\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <form class=\"form-default\" [formGroup]=\"edit_profile_form\" (ngSubmit)=\"submit()\">\n        <ion-button type=\"submit\">\n          Done\n        </ion-button>\n      </form>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"hero hero-light-gradient\">\n    <ion-avatar>\n      <ion-icon class=\"avatar-icon-placeholder\" name=\"person-circle\" color=\"tertiary\">\n      </ion-icon>\n    </ion-avatar>\n    <ion-button class=\"ion-button-small\" color=\"primary\" fill=\"clear\" (click)=\"updateProfilePicture()\">\n      Update profile picture\n    </ion-button>\n  </div>\n\n  <div class=\"ion-padding\">\n\n    <form class=\"form-default\" [formGroup]=\"edit_profile_form\" (submit)=\"submit()\">\n\n      <ion-list class=\"item-card-list\" lines=\"none\">\n        <ion-item>\n          <ion-label color=\"tertiary\" position=\"stacked\">Name</ion-label>\n          <ion-input formControlName=\"name\" placeholder=\"Name\"></ion-input>\n        </ion-item>\n      \n      </ion-list>\n\n    </form>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_profile_edit_edit_module_ts.js.map