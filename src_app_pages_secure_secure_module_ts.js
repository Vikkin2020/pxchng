"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_secure_module_ts"],{

/***/ 34507:
/*!*******************************************************!*\
  !*** ./src/app/pages/secure/secure-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecureRoutingModule": () => (/* binding */ SecureRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
    },
    {
        path: 'styleguide',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_styleguide_styleguide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./styleguide/styleguide.module */ 95594)).then(m => m.StyleguidePageModule)
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 91576)).then(m => m.SettingsPageModule)
    },
    {
        path: 'settings/profile/edit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_profile_edit_edit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/edit/edit.module */ 70630)).then(m => m.EditPageModule)
    },
    {
        path: 'payments/detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_payments_payment-detail_payment-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payments/payment-detail/payment-detail.module */ 92925)).then(m => m.PaymentDetailPageModule)
    },
    {
        path: 'wallet/tron-network',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_wallet_tron-network_tron-network_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wallet/tron-network/tron-network.module */ 33379)).then(m => m.TronNetworkPageModule)
    },
    {
        path: 'send',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_wallet_send_send_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wallet/send/send.module */ 83992)).then(m => m.SendPageModule)
    },
    {
        path: 'wallet/eth-network',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_wallet_ethwallet-network_ethwallet-network_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wallet/ethwallet-network/ethwallet-network.module */ 24363)).then(m => m.EthwalletNetworkPageModule)
    },
    {
        path: 'ethwallet-network',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_wallet_ethwallet-network_ethwallet-network_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wallet/ethwallet-network/ethwallet-network.module */ 24363)).then(m => m.EthwalletNetworkPageModule)
    },
    {
        path: 'wallet/ftm-network',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_wallet_ftm-network_ftm-network_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wallet/ftm-network/ftm-network.module */ 16804)).then(m => m.FtmNetworkPageModule)
    },
    {
        path: 'ftm-network',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_wallet_ftm-network_ftm-network_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wallet/ftm-network/ftm-network.module */ 16804)).then(m => m.FtmNetworkPageModule)
    },
    {
        path: 'wallet/usdc-network',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_wallet_usdc-network_usdc-network_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wallet/usdc-network/usdc-network.module */ 2012)).then(m => m.UsdcNetworkPageModule)
    },
    {
        path: 'trade/:coin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_exchange_trade_trade_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./exchange/trade/trade.module */ 18810)).then(m => m.TradePageModule)
    },
    {
        path: 'pairs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_secure_exchange_pairs_pairs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./exchange/pairs/pairs.module */ 82692)).then(m => m.PairsPageModule)
    }
];
let SecureRoutingModule = class SecureRoutingModule {
};
SecureRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], SecureRoutingModule);



/***/ }),

/***/ 53079:
/*!***********************************************!*\
  !*** ./src/app/pages/secure/secure.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecureModule": () => (/* binding */ SecureModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _secure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secure-routing.module */ 34507);




let SecureModule = class SecureModule {
};
SecureModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _secure_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecureRoutingModule
        ]
    })
], SecureModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_secure_module_ts.js.map