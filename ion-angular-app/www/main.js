(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\" footer\">\n  <div class=\" container-fluid\">\n    <!-- <ul class=\" nav\">\n      <li class=\" nav-item\">\n        <a class=\" nav-link\" href=\"https://www.creative-tim.com?ref=bda-footer\">\n          Creative Tim\n        </a>\n      </li>\n      <li class=\" nav-item\">\n        <a class=\" nav-link\" href=\"https://www.creative-tim.com/about-us?ref=bda-footer\">\n          About Us\n        </a>\n      </li>\n      <li class=\" nav-item\">\n        <a class=\" nav-link\" href=\"http://blog.creative-tim.com?ref=bda-footer\"> Blog </a>\n      </li>\n    </ul> -->\n    <div class=\" copyright\">\n      &copy; {{ test | date: \"yyyy\" }} made with\n      <i class=\" tim-icons icon-heart-2\"> </i> by\n      <a href=\"https://www.themartire.com\" target=\"_blank\"> Michael Martre </a>\n      of the Create Commune team.\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\" navbar navbar-expand-lg navbar-absolute navbar-transparent\">\n  <div class=\" container-fluid\">\n    <div class=\" navbar-wrapper\">\n      <div class=\" navbar-toggle d-inline\">\n        <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n          <span class=\" navbar-toggler-bar bar1\"> </span>\n          <span class=\" navbar-toggler-bar bar2\"> </span>\n          <span class=\" navbar-toggler-bar bar3\"> </span>\n        </button>\n      </div>\n      <a class=\" navbar-brand\" href=\"javascript:void(0)\"> {{ getTitle() }} </a>\n    </div>\n    <button\n      aria-label=\"Toggle navigation\"\n      class=\" navbar-toggler\"\n      (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\"\n      aria-controls=\"collapseExample\"\n      id=\"navigation\"\n      type=\"button\"\n    >\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n    </button>\n    <div class=\" navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\n      <ul class=\" navbar-nav ml-auto\">\n        <li class=\" search-bar input-group\">\n          <button\n            class=\" btn btn-link\"\n            data-target=\"#searchModal\"\n            data-toggle=\"modal\"\n            (click)=\"open(content)\"\n            id=\"search-button\"\n          >\n            <i class=\" tim-icons icon-zoom-split\"> </i>\n            <span class=\" d-lg-none d-md-block\"> Search </span>\n          </button>\n        </li>\n        <li class=\" nav-item\" ngbDropdown>\n          <a\n            class=\" nav-link\"\n            data-toggle=\"dropdown\"\n            href=\"javascript:void(0)\"\n            ngbDropdownToggle\n          >\n            <div class=\" notification d-none d-lg-block d-xl-block\"></div>\n            <i class=\" tim-icons icon-sound-wave\"> </i>\n            <p class=\" d-lg-none\">Notifications</p>\n          </a>\n          <ul class=\" dropdown-menu-right dropdown-navbar\" ngbDropdownMenu>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Mike John responded to your email\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                You have 5 more tasks\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Your friend Michael is in town\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Another notification\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Another one\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li class=\" nav-item\" ngbDropdown>\n          <a\n            class=\" nav-link\"\n            data-toggle=\"dropdown\"\n            href=\"javascript:void(0)\"\n            ngbDropdownToggle\n          >\n            <div class=\" photo\">\n              <img alt=\"Profile Photo\" src=\"assets/img/anime3.png\" />\n            </div>\n            <b class=\" caret d-none d-lg-block d-xl-block\"> </b>\n            <p class=\" d-lg-none\">Log out</p>\n          </a>\n          <ul class=\" dropdown-navbar\" ngbDropdownMenu>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Profile\n              </a>\n            </li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Settings\n              </a>\n            </li>\n            <li class=\" dropdown-divider\"></li>\n            <li class=\" nav-link\">\n              <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                Log out\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li class=\" separator d-lg-none\"></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<ng-template #content let-modal>\n  <div class=\" modal-header\">\n    <input\n      class=\" form-control\"\n      id=\"inlineFormInputGroup\"\n      placeholder=\"SEARCH\"\n      type=\"text\"\n    />\n\n    <button\n      aria-label=\"Close\"\n      class=\" close\"\n      data-dismiss=\"modal\"\n      type=\"button\"\n      (click)=\"modal.dismiss('Cross click')\"\n    >\n      <i class=\" tim-icons icon-simple-remove\"> </i>\n    </button>\n  </div>\n\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n  <a href=\"#\" class=\"simple-text logo-mini\">\n    <div class=\"logo-img\">\n      <img src=\"./assets/img/angular2-logo-white.png\" />\n    </div>\n  </a>\n  <a href=\"https://www.creative-tim.com?ref=bda-sidebar-logo\" class=\"simple-text logo-normal\">\n    Create Analyze\n  </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <ul class=\"nav\">\n    <li\n      routerLinkActive=\"active\"\n      *ngFor=\"let menuItem of menuItems\"\n      class=\"{{ menuItem.class }} nav-item\"\n    >\n      <a [routerLink]=\"[menuItem.path]\">\n        <i class=\"tim-icons  {{ menuItem.icon }}\"></i>\n        <p>{{ menuItem.title }}</p>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\"><app-sidebar></app-sidebar></div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n</div>\n<!-- <div class=\" fixed-plugin\">\n  <div class=\" show-dropdown\" ngbDropdown>\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\n      <i class=\" fa fa-cog fa-2x\"> </i>\n    </a>\n    <ul ngbDropdownMenu>\n      <li class=\" header-title\">Sidebar Background</li>\n      <li class=\" adjustments-line\">\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\n          <div class=\" badge-colors text-center\">\n            <span\n              class=\" badge filter badge-danger\"\n              [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"\n            >\n            </span>\n            <span\n              class=\" badge filter badge-primary\"\n              [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"\n            >\n            </span>\n            <span class=\" badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\n            <span class=\" badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\">\n            </span>\n          </div>\n          <div class=\" clearfix\"></div>\n        </a>\n      </li>\n      <li class=\" adjustments-line text-center color-change\">\n        <span class=\" color-label\"> LIGHT MODE </span>\n        <span class=\" badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\n        <span class=\" badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\n        <span class=\" color-label\"> DARK MODE </span>\n      </li>\n    </ul>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\">\n    <div class=\"logo\">\n      <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-sidebar-logo\" class=\"simple-text logo-mini\">\n        <div class=\"logo-img\">\n          <img src=\"./assets/img/angular2-logo-white.png\" />\n        </div>\n      </a>\n      <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-sidebar-logo\" class=\"simple-text logo-normal\">\n        الإبداعية تيم\n      </a>\n    </div>\n    <div class=\"sidebar-wrapper\">\n      <ul class=\"nav\">\n        <li\n          routerLinkActive=\"active\"\n          *ngFor=\"let menuItem of menuItems\"\n          class=\"{{ menuItem.class }} nav-item\"\n        >\n          <a [routerLink]=\"[menuItem.path]\">\n            <i class=\"tim-icons  {{ menuItem.icon }}\"></i>\n            <p>{{ menuItem.rtlTitle }}</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n  <div class=\"main-panel\">\n    <nav class=\" navbar navbar-expand-lg navbar-absolute navbar-transparent\">\n      <div class=\" container-fluid\">\n        <div class=\" navbar-wrapper\">\n          <div class=\" navbar-toggle d-inline\">\n            <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n              <span class=\" navbar-toggler-bar bar1\"> </span>\n              <span class=\" navbar-toggler-bar bar2\"> </span>\n              <span class=\" navbar-toggler-bar bar3\"> </span>\n            </button>\n          </div>\n          <a class=\" navbar-brand\" href=\"javascript:void(0)\"> ار تي ال </a>\n        </div>\n        <button\n          aria-label=\"Toggle navigation\"\n          class=\" navbar-toggler\"\n          (click)=\"collapse()\"\n          [attr.aria-expanded]=\"!isCollapsed\"\n          aria-controls=\"collapseExample\"\n          id=\"navigation\"\n          type=\"button\"\n        >\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n          <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\n        </button>\n        <div class=\" navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\n          <ul class=\" navbar-nav mr-auto\">\n            <li class=\" search-bar input-group\">\n              <button\n                class=\" btn btn-link\"\n                data-target=\"#searchModal\"\n                data-toggle=\"modal\"\n                (click)=\"open(content)\"\n                id=\"search-button\"\n              >\n                <i class=\" tim-icons icon-zoom-split\"> </i>\n                <span class=\" d-lg-none d-md-block\"> بحث </span>\n              </button>\n            </li>\n            <li class=\" nav-item\" ngbDropdown>\n              <a\n                class=\" nav-link\"\n                data-toggle=\"dropdown\"\n                ngbDropdownToggle\n              >\n                <div class=\" notification d-none d-lg-block d-xl-block\"></div>\n                <i class=\" tim-icons icon-sound-wave\"> </i>\n                <p class=\" d-lg-none\">إخطارات</p>\n              </a>\n              <ul class=\" dropdown-menu-right dropdown-navbar\" ngbDropdownMenu>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    ورد مايك جون على بريدك الإلكتروني\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    لديك 5 مهام أخرى\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    صديقك مايكل في المدينة\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    إشعار آخر\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    واحدة أخرى\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\" nav-item\" ngbDropdown>\n              <a\n                class=\" nav-link\"\n                data-toggle=\"dropdown\"\n                ngbDropdownToggle\n              >\n                <div class=\" photo\">\n                  <img alt=\"Profile Photo\" src=\"assets/img/anime3.png\" />\n                </div>\n                <b class=\" caret d-none d-lg-block d-xl-block\"> </b>\n                <p class=\" d-lg-none\">الخروج</p>\n              </a>\n              <ul class=\" dropdown-navbar\" ngbDropdownMenu>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    الملف الشخصي\n                  </a>\n                </li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    الإعدادات\n                  </a>\n                </li>\n                <li class=\" dropdown-divider\"></li>\n                <li class=\" nav-link\">\n                  <a class=\" nav-item\" href=\"javascript:void(0)\" ngbDropdownItem>\n                    الخروج\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\" separator d-lg-none\"></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    <router-outlet></router-outlet>\n    <footer class=\" footer\">\n      <div class=\" container-fluid\">\n        <ul class=\" nav\">\n          <li class=\" nav-item\">\n            <a class=\" nav-link\" href=\"https://www.creative-tim.com?ref=bda-auth-layout-footer\">\n              تيم الإبداعية\n            </a>\n          </li>\n          <li class=\" nav-item\">\n            <a class=\" nav-link\" href=\"https://www.creative-tim.com/about-us?ref=bda-auth-layout-footer\">\n              معلومات عنا\n            </a>\n          </li>\n          <li class=\" nav-item\">\n            <a class=\" nav-link\" href=\"http://blog.creative-tim.com?ref=bda-auth-layout-footer\"> مدونة </a>\n          </li>\n        </ul>\n        <div class=\" copyright\">\n          &copy; {{ test | date: \"yyyy\" }} مصنوع من\n          <i class=\" tim-icons icon-heart-2\"> </i> بواسطة\n          <a href=\"https://www.creative-tim.com?ref=bda-auth-layout-footer\" target=\"_blank\"> تيم الإبداعية </a>\n          من أجل شبكة أفضل.\n        </div>\n      </div>\n    </footer>\n\n  </div>\n</div>\n<div class=\" fixed-plugin\">\n  <div class=\" show-dropdown\" ngbDropdown>\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\n      <i class=\" fa fa-cog fa-2x\"> </i>\n    </a>\n    <ul ngbDropdownMenu>\n      <li class=\" header-title\">خلفية الشريط الجانبي</li>\n      <li class=\" adjustments-line\">\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\n          <div class=\" badge-colors text-center\">\n            <span\n              class=\" badge filter badge-danger\"\n              [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"\n            >\n            </span>\n            <span\n              class=\" badge filter badge-primary\"\n              data-color=\"primary\"\n              [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"\n            >\n            </span>\n            <span class=\" badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\n            <span class=\" badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\">\n            </span>\n          </div>\n          <div class=\" clearfix\"></div>\n        </a>\n      </li>\n      <li class=\" adjustments-line text-center color-change\">\n        <span class=\" color-label\"> وضع الضوء </span>\n        <span class=\" badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\n        <span class=\" badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\n        <span class=\" color-label\"> وضع الظلام</span>\n      </li>\n      <li class=\" button-container\">\n        <a\n          class=\" btn btn-primary btn-block btn-round\"\n          href=\"https://www.creative-tim.com/product/black-dashboard-angular?ref=bda-auth-layout-fixed-plugin\"\n          target=\"_blank\"\n        >\n          التحميل الان\n        </a>\n        <a\n          class=\" btn btn-default btn-block btn-round\"\n          href=\"https://demos.creative-tim.com/black-dashboard-angular/#/documentation/tutorial?ref=bda-auth-layout-fixed-plugin\"\n          target=\"_blank\"\n        >\n          كابل بيانات\n        </a>\n      </li>\n      <li class=\" header-title\">شكرا لك على 95 سهم!</li>\n      <li class=\" button-container text-center\">\n        <button class=\" btn btn-round btn-info\" id=\"twitter\">\n          <i class=\" fab fa-twitter\"> </i> · 45\n        </button>\n        <button class=\" btn btn-round btn-info\" id=\"facebook\">\n          <i class=\" fab fa-facebook-f\"> </i> · 50\n        </button>\n        <br />\n\n        <br />\n\n        <a\n          aria-label=\"Star ntkme/github-buttons on GitHub\"\n          class=\" github-button\"\n          data-icon=\"octicon-star\"\n          data-show-count=\"true\"\n          data-size=\"large\"\n          href=\"https://github.com/creativetimofficial/black-dashboard-angular?ref=bda-auth-layout-fixed-plugin\"\n        >\n          نجمة\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n    <ng-template #content let-modal>\n      <div class=\" modal-header\">\n        <input\n          class=\" form-control\"\n          id=\"inlineFormInputGroup\"\n          placeholder=\"بحث\"\n          type=\"text\"\n        />\n\n        <button\n          aria-label=\"Close\"\n          class=\" close\"\n          data-dismiss=\"modal\"\n          type=\"button\"\n          (click)=\"modal.dismiss('Cross click')\"\n        >\n          <i class=\" tim-icons icon-simple-remove\"> </i>\n        </button>\n      </div>\n\n    </ng-template>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"./src/app/layouts/auth-layout/auth-layout.module.ts",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");







var routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: "",
                loadChildren: "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    },
    {
        path: "**",
        redirectTo: "dashboard"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "black-dashboard-angular";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot()
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__["AuthLayoutComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, modalService) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.modalService = modalService;
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('navbar-transparent');
            }
        };
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener("resize", this.updateColor);
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName("close-layer")[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName("nav")[0];
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("bg-white");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("bg-white");
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName("html")[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove("nav-open");
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove("toggled");
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add("toggled");
            }, 430);
            var $layer = document.createElement("div");
            $layer.setAttribute("class", "close-layer");
            if (html.querySelectorAll(".main-panel")) {
                document.getElementsByClassName("main-panel")[0].appendChild($layer);
            }
            else if (html.classList.contains("off-canvas-sidebar")) {
                document
                    .getElementsByClassName("wrapper-full-page")[0]
                    .appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add("visible");
            }, 100);
            $layer.onclick = function () {
                //asign a function
                html.classList.remove("nav-open");
                this.mobile_menu_visible = 0;
                $layer.classList.remove("visible");
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove("toggled");
                }, 400);
            }.bind(this);
            html.classList.add("nav-open");
            this.mobile_menu_visible = 1;
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    };
    NavbarComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NavbarComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener("resize", this.updateColor);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ROUTES = [
    {
        path: "/dashboard",
        title: "Dashboard",
        rtlTitle: "لوحة القيادة",
        icon: "icon-chart-pie-36",
        class: ""
    },
    {
        path: "/icons",
        title: "Icons",
        rtlTitle: "الرموز",
        icon: "icon-atom",
        class: ""
    },
    {
        path: "/maps",
        title: "Maps",
        rtlTitle: "خرائط",
        icon: "icon-pin",
        class: ""
    },
    {
        path: "/notifications",
        title: "Notifications",
        rtlTitle: "إخطارات",
        icon: "icon-bell-55",
        class: ""
    },
    {
        path: "/user",
        title: "User Profile",
        rtlTitle: "ملف تعريفي للمستخدم",
        icon: "icon-single-02",
        class: ""
    },
    {
        path: "/tables",
        title: "Table List",
        rtlTitle: "قائمة الجدول",
        icon: "icon-puzzle-10",
        class: ""
    },
    {
        path: "/typography",
        title: "Typography",
        rtlTitle: "طباعة",
        icon: "icon-align-center",
        class: ""
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        this.sidebarColor = "red";
    }
    AdminLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AdminLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () { };
    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-layout",
            template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, modalService) {
        var _this = this;
        this.router = router;
        this.modalService = modalService;
        this.test = new Date();
        this.sidebarColor = "red";
        this.isCollapsed = true;
        this.mobile_menu_visible = 0;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('navbar-transparent');
            }
        };
    }
    AuthLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AuthLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = document.getElementsByClassName('navbar')[0];
        window.addEventListener("resize", this.updateColor);
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName("close-layer")[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
        this.menuItems = _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (menuItem) { return menuItem; });
        // on this page, we need on the body tag the classes .rtl and .menu-on-right
        document.body.classList.add("rtl", "menu-on-right");
        // we also need the rtl bootstrap
        // so we add it dynamically to the head
        var head = document.head;
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.id = "rtl-id";
        link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.css";
        head.appendChild(link);
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        // when we exit this page, we need to delete the classes .rtl and .menu-on-right
        // from the body tag
        document.body.classList.remove("rtl", "menu-on-right");
        // we also need to delete the rtl bootstrap, so it does not break the other pages
        // that do not make use of rtl
        document.getElementById("rtl-id").remove();
    };
    AuthLayoutComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName("nav")[0];
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("bg-white");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("bg-white");
        }
    };
    AuthLayoutComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    AuthLayoutComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    };
    AuthLayoutComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName("html")[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove("nav-open");
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove("toggled");
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add("toggled");
            }, 430);
            var $layer = document.createElement("div");
            $layer.setAttribute("class", "close-layer");
            if (html.querySelectorAll(".main-panel")) {
                document.getElementsByClassName("main-panel")[0].appendChild($layer);
            }
            else if (html.classList.contains("off-canvas-sidebar")) {
                document
                    .getElementsByClassName("wrapper-full-page")[0]
                    .appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add("visible");
            }, 100);
            $layer.onclick = function () {
                //asign a function
                html.classList.remove("nav-open");
                this.mobile_menu_visible = 0;
                $layer.classList.remove("visible");
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove("toggled");
                }, 400);
            }.bind(this);
            html.classList.add("nav-open");
            this.mobile_menu_visible = 1;
        }
    };
    AuthLayoutComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AuthLayoutComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*
 =========================================================
 * Black Dashboard Angular - v1.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard-angular
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michael/dev/scraper/frontend/black-dashboard-angular-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map