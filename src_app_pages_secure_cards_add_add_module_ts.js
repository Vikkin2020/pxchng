"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_cards_add_add_module_ts"],{

/***/ 43390:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/cards/add/add-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPageRoutingModule": () => (/* binding */ AddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.page */ 72202);




const routes = [
    {
        path: '',
        component: _add_page__WEBPACK_IMPORTED_MODULE_0__.AddPage
    }
];
let AddPageRoutingModule = class AddPageRoutingModule {
};
AddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddPageRoutingModule);



/***/ }),

/***/ 90967:
/*!******************************************************!*\
  !*** ./src/app/pages/secure/cards/add/add.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPageModule": () => (/* binding */ AddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 75992);
/* harmony import */ var _add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-routing.module */ 43390);
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.page */ 72202);







let AddPageModule = class AddPageModule {
};
AddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_add_page__WEBPACK_IMPORTED_MODULE_1__.AddPage]
    })
], AddPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_cards_add_add_module_ts.js.map