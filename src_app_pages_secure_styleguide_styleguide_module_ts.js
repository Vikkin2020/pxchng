"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_styleguide_styleguide_module_ts"],{

/***/ 266:
/*!**********************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePageRoutingModule": () => (/* binding */ StyleguidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _styleguide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide.page */ 44236);




const routes = [
    {
        path: '',
        component: _styleguide_page__WEBPACK_IMPORTED_MODULE_0__.StyleguidePage
    }
];
let StyleguidePageRoutingModule = class StyleguidePageRoutingModule {
};
StyleguidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StyleguidePageRoutingModule);



/***/ }),

/***/ 95594:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePageModule": () => (/* binding */ StyleguidePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide-routing.module */ 266);
/* harmony import */ var _styleguide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleguide.page */ 44236);







let StyleguidePageModule = class StyleguidePageModule {
};
StyleguidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__.StyleguidePageRoutingModule
        ],
        declarations: [_styleguide_page__WEBPACK_IMPORTED_MODULE_1__.StyleguidePage]
    })
], StyleguidePageModule);



/***/ }),

/***/ 44236:
/*!************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePage": () => (/* binding */ StyleguidePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _styleguide_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide.page.html?ngResource */ 14629);
/* harmony import */ var _styleguide_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleguide.page.scss?ngResource */ 66012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let StyleguidePage = class StyleguidePage {
    constructor() { }
    ngOnInit() {
    }
};
StyleguidePage.ctorParameters = () => [];
StyleguidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-styleguide',
        template: _styleguide_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_styleguide_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StyleguidePage);



/***/ }),

/***/ 66012:
/*!*************************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZWd1aWRlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 14629:
/*!*************************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Styleguide</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Styleguide</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"ion-padding\">\n\n    <p><strong>Text</strong></p>\n    <hr>\n\n    <h1>First Headline Lorem ipsum dolor sit.</h1>\n    <h2>Second Headline Lorem ipsum dolor sit amet, consetetur sadipscing.</h2>\n    <h3>Third Headline Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</h3>\n    <p>Default text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.\n    </p>\n    <ion-text color=\"medium\">\n      <p>Light text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.\n      </p>\n    </ion-text>\n    <small>Small text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n      labore et dolore magna aliquyam erat, sed diam voluptua.</small>\n    <br>\n    <ion-text color=\"medium\">\n      <small>Small light text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</small>\n    </ion-text>\n\n    <br>\n    <hr>\n    <br>\n    <br>\n\n    <p><strong>Buttons</strong></p>\n    <br>\n\n    <ion-button expand=\"block\">\n      Primary button\n    </ion-button>\n    <ion-text color=\"medium\">\n      <small class=\"ion-margin-top-small\">Used for creating or updating data or navigation.</small>\n    </ion-text>\n\n    <br>\n\n    <ion-button expand=\"block\" color=\"secondary\">\n      Secondary button\n    </ion-button>\n    <ion-text color=\"medium\">\n      <small class=\"ion-margin-top-small\">Used for doing some real action.</small>\n    </ion-text>\n\n    <br>\n\n    <ion-button expand=\"block\" color=\"medium\" fill=\"clear\">\n      Cancel action\n    </ion-button>\n    <ion-text color=\"medium\">\n      <small class=\"ion-margin-top-small\">Cancel things.</small>\n    </ion-text>\n\n    <br>\n\n    <ion-button expand=\"block\">\n      <ion-icon slot=\"start\" name=\"duplicate-outline\"></ion-icon>\n      Button with icon start\n    </ion-button>\n\n    <br>\n\n    <ion-button expand=\"block\">\n      <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n      Button with icon end\n    </ion-button>\n\n    <br>\n\n    <ion-button class=\"ion-button-small\">\n      Button small\n    </ion-button>\n\n    <br>\n    <hr>\n    <br>\n    <br>\n\n    <p><strong>Cards</strong></p>\n    <hr>\n    <br>\n\n    <ion-card class=\"card-default ion-no-margin ion-no-padding\">\n      <ion-card-header>\n        <ion-card-title>\n          <h2>Default card</h2>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit aspernatur deleniti ratione vel sed\n          tempora, facere dolores, veritatis vitae velit quis labore at aliquid repellat quo nisi. Inventore, quae?</p>\n          <ion-text color=\"medium\">\n            <h1>Awesome text</h1>\n          </ion-text>\n      </ion-card-content>\n    </ion-card>\n\n    <br><br>\n\n    <ion-card class=\"card-default ion-no-margin ion-no-padding\" color=\"primary\">\n      <ion-card-header>\n        <ion-card-title>\n          <h2>Light card</h2>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit aspernatur deleniti ratione vel sed\n          tempora, facere dolores, veritatis vitae velit quis labore at aliquid repellat quo nisi. Inventore, quae?</p>\n      </ion-card-content>\n    </ion-card>\n\n    <br>\n    <hr>\n    <br>\n\n    <p><strong>Lists</strong></p>\n\n    <ion-list class=\"list-custom\">\n      <ion-list-header class=\"list-header-compact\">\n        Simple list\n      </ion-list-header>\n\n      <ion-item detail lines=\"full\" *ngFor=\"let l of [].constructor(3);\">\n        <ion-label>\n          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla dolorum repellendus necessitatibus, laborum quidem enim ab excepturi quibusdam facilis culpa ex beatae, totam repudiandae mollitia natus ipsa aut vitae?</h3>\n          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis expedita distinctio quod libero quidem placeat at corrupti sapiente quis veniam voluptate deleniti nam, amet saepe, dolores quam non quibusdam. Ipsa!</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_styleguide_styleguide_module_ts.js.map