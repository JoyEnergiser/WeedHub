(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/ngx-isotope/ngx-isotope.umd.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-isotope/ngx-isotope.umd.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js")) :
	undefined;
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var IsotopeGridComponent = (function () {
    /**
     * @param {?} el
     */
    function IsotopeGridComponent(el) {
        this.el = el;
        this.items = [];
    }
    /**
     * @return {?}
     */
    IsotopeGridComponent.prototype.ngOnInit = function () {
        if (!this.options)
            this.options = {};
        if (!this.options.itemSelector) {
            this.options.itemSelector = '[isotope-item], isotope-item';
        }
        if (this.el.nativeElement.tagName === 'ISOTOPE-GRID') {
            this.el.nativeElement.style.display = 'block';
        }
        this.isotope = new Isotope(this.el.nativeElement, this.options);
    };
    /**
     * @param {?} el
     * @return {?}
     */
    IsotopeGridComponent.prototype.add = function (el) {
        var _this = this;
        this.isotope.appended(el);
        this.isotope.layout();
        imagesLoaded(el).on('progress', function () {
            _this.isotope.layout();
        });
    };
    return IsotopeGridComponent;
}());
IsotopeGridComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'isotope-grid',
                template: "<ng-content></ng-content> ",
                styles: [""]
            },] },
];
/**
 * @nocollapse
 */
IsotopeGridComponent.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
]; };
IsotopeGridComponent.propDecorators = {
    'options': [{ type: _angular_core.Input },],
};

var IsotopeItemComponent = (function () {
    /**
     * @param {?} grid
     * @param {?} el
     */
    function IsotopeItemComponent(grid, el) {
        this.grid = grid;
        this.el = el;
    }
    /**
     * @return {?}
     */
    IsotopeItemComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    IsotopeItemComponent.prototype.ngAfterViewInit = function () {
        this.grid.add(this.el.nativeElement);
    };
    return IsotopeItemComponent;
}());
IsotopeItemComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'isotope-item',
                template: "<ng-content></ng-content> ",
                styles: [""]
            },] },
];
/**
 * @nocollapse
 */
IsotopeItemComponent.ctorParameters = function () { return [
    { type: IsotopeGridComponent, },
    { type: _angular_core.ElementRef, },
]; };

var IsotopeModule = (function () {
    function IsotopeModule() {
    }
    /**
     * @return {?}
     */
    IsotopeModule.forRoot = function () {
        return {
            ngModule: IsotopeModule,
            providers: []
        };
    };
    return IsotopeModule;
}());
IsotopeModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
                ],
                declarations: [
                    IsotopeGridComponent,
                    IsotopeItemComponent,
                ],
                exports: [
                    IsotopeGridComponent,
                    IsotopeItemComponent,
                ]
            },] },
];
/**
 * @nocollapse
 */
IsotopeModule.ctorParameters = function () { return []; };

exports.IsotopeModule = IsotopeModule;
exports.IsotopeGridComponent = IsotopeGridComponent;
exports.IsotopeItemComponent = IsotopeItemComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about-us/about-us.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>about us</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">About us</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb end -->\n<!-- about section start -->\n<section class=\"about-page  section-b-space\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"banner-section\">\n                    <img  src=\"assets/images/about/about%20us.jpg\" class=\"img-fluid\" alt=\"\"/>\n                </div>\n            </div>\n            <div class=\"col-sm-12\">\n                <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</h4>\n                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>\n                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- about section end -->\n<!--Testimonial start-->\n<section class=\"testimonial small-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <ngx-slick-carousel class=\"slide-2 testimonial-slider no-arrow\" #slickModal=\"slick-carousel\" [config]=\"testimonialSliderConfig\">\n                    <div  ngxSlickItem *ngFor=\"let ts of testimonial\">\n                        <div class=\"media\">\n                            <div class=\"text-center\">\n                                <img [src]=\"ts.image\" alt=\"#\">\n                                <h5>{{ts.name}}</h5>\n                                <h6>{{ts.designation}}</h6>\n                            </div>\n                            <div class=\"media-body\">\n                                <p>{{ts.description}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </ngx-slick-carousel>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Testimonial ends-->\n<!--Team start-->\n<section id=\"team\" class=\"team section-b-space\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h2>Our Team</h2>\n                <div class=\"team-4\">\n                    <ngx-slick-carousel class=\"team-4\" #slickModal=\"slick-carousel\" [config]=\"teamSliderConfig\">\n                    <div ngxSlickItem *ngFor=\"let tm of team\">\n                        <img [src]=\"tm.image\" class=\"img-fluid\" alt=\"\"/>\n                        <h4>{{tm.name}}</h4>\n                        <h6>{{tm.designation}}</h6>\n                    </div>\n                </ngx-slick-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Team ends-->\n<!-- service section -->\n<div class=\"container about-cls section-b-space\">\n    <section class=\"service border-section small-section\">\n        <div class=\"row\">\n            <div class=\"col-md-4 service-block\">\n                <div class=\"media\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 -117 679.99892 679\"><path d=\"m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0\" fill=\"#ff4c3b\"/></svg>\n                    <div class=\"media-body\">\n                        <h4>free shipping</h4>\n                        <p>free shipping world wide</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 service-block\">\n                <div class=\"media\">\n                     <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 480 480\" style=\"enable-background:new 0 0 480 480;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\">\n                       <g>\n                           <g>\n                              <g>\n                                <path d=\"M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z\" fill=\"#ff4c3b\"/>\n                                <path d=\"M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z\" fill=\"#ff4c3b\"/>\n                                <path d=\"M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z\" fill=\"#ff4c3b\"/>\n                                <path d=\"M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z\" fill=\"#ff4c3b\"/>\n                              </g>\n                           </g>\n                       </g>\n                    </svg>\n                    <div class=\"media-body\">\n                        <h4>24 X 7 service</h4>\n                        <p>online service for new customer</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 service-block\">\n                <div class=\"media\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -14 512.00001 512\" ><path d=\"m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0\" fill=\"#ff4c3b\"/><path d=\"m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0\" fill=\"#ff4c3b\"/><path d=\"m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0\" fill=\"#ff4c3b\"/><path d=\"m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0\" fill=\"#ff4c3b\"/><path d=\"m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0\" fill=\"#ff4c3b\"/><path d=\"m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0\" fill=\"#ff4c3b\"/></svg>\n                    <div class=\"media-body\">\n                        <h4>festival offer</h4>\n                        <p>new online special festival offer</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n<!-- service section end -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cart/cart.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>cart</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item active\">cart</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<!-- section start -->\n<section class=\"cart-section section-b-space\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <table class=\"table cart-table table-responsive-xs\">\n                    <thead>\n                    <tr class=\"table-head\">\n                        <th scope=\"col\">image</th>\n                        <th scope=\"col\">product name</th>\n                        <th scope=\"col\">price</th>\n                        <th scope=\"col\">quantity</th>\n                        <th scope=\"col\">action</th>\n                        <th scope=\"col\">total</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>\n                            <a [routerLink]=\"\">\n                                <img src=\"assets/images/pro3/1.jpg\" alt=\"\">\n                            </a>\n                        </td>\n                        <td><a [routerLink]=\"\">cotton shirt</a>\n                            <div class=\"mobile-cart-content row\">\n                                <div class=\"col-xs-3\">\n                                    <div class=\"qty-box\">\n                                        <div class=\"input-group\">\n                                            <input type=\"text\"  name=\"quantity\" class=\"form-control input-number\" value=\"1\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">$63.00</h2>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">\n                                        <a [routerLink]=\"\" class=\"icon\">\n                                            <i class=\"ti-close\"></i>\n                                        </a>\n                                    </h2>\n                                </div>\n                            </div>\n                        </td>\n                        <td><h2>$63.00</h2></td>\n                        <td >\n                            <div class=\"qty-box\">\n                                <div class=\"input-group\">\n                                    <input type=\"number\"  name=\"quantity\" class=\"form-control input-number\" value=\"1\">\n                                </div>\n                            </div>\n                        </td>\n                        <td>\n                            <a [routerLink]=\"\" class=\"icon\">\n                                <i class=\"ti-close\"></i>\n                            </a>\n                        </td>\n                        <td><h2 class=\"td-color\">$4539.00</h2></td>\n                    </tr>\n                    </tbody>\n                    <tbody>\n                    <tr>\n                        <td>\n                            <a [routerLink]=\"\">\n                                <img src=\"assets/images/pro3/1.jpg\" alt=\"\">\n                            </a>\n                        </td>\n                        <td><a [routerLink]=\"\">cotton shirt</a>\n                            <div class=\"mobile-cart-content row\">\n                                <div class=\"col-xs-3\">\n                                    <div class=\"qty-box\">\n                                        <div class=\"input-group\">\n                                            <input type=\"number\"  name=\"quantity\" class=\"form-control input-number\" value=\"1\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">$63.00</h2>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">\n                                        <a [routerLink]=\"\" class=\"icon\">\n                                            <i class=\"ti-close\"></i>\n                                        </a>\n                                    </h2>\n                                </div>\n                            </div>\n                        </td>\n                        <td><h2>$63.00</h2></td>\n                        <td >\n                            <div class=\"qty-box\">\n                                <div class=\"input-group\">\n                                    <input type=\"number\"  name=\"quantity\" class=\"form-control input-number\" value=\"1\">\n                                </div>\n                            </div>\n                        </td>\n                        <td>\n                            <a [routerLink]=\"\" class=\"icon\">\n                                <i class=\"ti-close\"></i>\n                            </a>\n                        </td>\n                        <td><h2 class=\"td-color\">$4539.00</h2></td>\n                    </tr>\n                    </tbody>\n                    <tbody>\n                    <tr>\n                        <td>\n                            <a [routerLink]=\"\">\n                                <img src=\"assets/images/pro3/1.jpg\" alt=\"\">\n                            </a>\n                        </td>\n                        <td><a [routerLink]=\"\">cotton shirt</a>\n                            <div class=\"mobile-cart-content row\">\n                                <div class=\"col-xs-3\">\n                                    <div class=\"qty-box\">\n                                        <div class=\"input-group\">\n                                            <input type=\"number\"  name=\"quantity\" class=\"form-control input-number\" value=\"1\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">$63.00</h2>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">\n                                        <a [routerLink]=\"\" class=\"icon\">\n                                            <i class=\"ti-close\"></i>\n                                        </a>\n                                    </h2>\n                                </div>\n                            </div>\n                        </td>\n                        <td><h2>$63.00</h2></td>\n                        <td >\n                            <div class=\"qty-box\">\n                                <div class=\"input-group\">\n                                    <input type=\"number\"  name=\"quantity\" class=\"form-control input-number\" value=\"1\">\n                                </div>\n                            </div>\n                        </td>\n                        <td>\n                            <a [routerLink]=\"\" class=\"icon\">\n                                <i class=\"ti-close\"></i>\n                            </a>\n                        </td>\n                        <td><h2 class=\"td-color\">$4539.00</h2></td>\n                    </tr>\n                    </tbody>\n                </table>\n                <table class=\"table cart-table table-responsive-md\">\n                    <tfoot>\n                    <tr>\n                        <td>total price :</td>\n                        <td><h2> $6935.00 </h2></td>\n                    </tr>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n        <div class=\"row cart-buttons\">\n            <div class=\"col-6\">\n                <a [routerLink]=\"\" class=\"btn btn-solid\">continue shopping</a>\n            </div>\n            <div class=\"col-6\">\n                <a [routerLink]=\"\" class=\"btn btn-solid\">check out</a>\n            </div>\n        </div>\n    </div>\n</section>\n<!--section end-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/checkout.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/checkout/checkout.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"page-title\">\n          <h2>Checkout</h2>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n          <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Checkout</li>\n          </ol>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- breadcrumb End -->\n<!-- section start -->\n<section class=\"section-b-space\">\n  <div class=\"container padding-cls\">\n    <div class=\"checkout-page\">\n      <div class=\"checkout-form\">\n        <form>\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-sm-12 col-xs-12\">\n              <div class=\"checkout-title\">\n                <h3>Billing Details</h3>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"field-label\">First Name</div>\n                  <input type=\"text\" name=\"field-name\" value=\"\" placeholder=\"\">\n                </div>\n                <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"field-label\">Last Name </div>\n                  <input type=\"text\" name=\"field-name\" value=\"\" placeholder=\"\">\n                </div>\n                <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"field-label\">Phone</div>\n                  <input type=\"text\" name=\"field-name\" value=\"\" placeholder=\"\">\n                </div>\n                <div class=\"form-group col-md-6 col-sm-6 col-xs-12\">\n                  <div class=\"field-label\">Email Address</div>\n                  <input type=\"text\" name=\"field-name\" value=\"\" placeholder=\"\">\n                </div>\n                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"field-label\">Country</div>\n                  <select>\n                    <option>India</option>\n                    <option>South Africa</option>\n                    <option>United State</option>\n                    <option>Australia</option>\n                  </select>\n                </div>\n                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"field-label\">Address</div>\n                  <input type=\"text\" name=\"field-name\" value=\"\" placeholder=\"Street address\">\n                </div>\n                <div class=\"form-group col-md-12 col-sm-12 col-xs-12\">\n                  <div class=\"field-label\">Town/City</div>\n                  <input type=\"text\" name=\"field-name\" value=\"\" placeholder=\"\">\n                </div>\n                <div class=\"form-group col-md-12 col-sm-6 col-xs-12\">\n                  <div class=\"field-label\">State / County</div>\n                  <input type=\"text\" name=\"field-name\" value=\"\" placeholder=\"\">\n                </div>\n                <div class=\"form-group col-md-12 col-sm-6 col-xs-12\">\n                  <div class=\"field-label\">Postal Code</div>\n                  <input type=\"text\" name=\"field-name\" value=\"\" placeholder=\"\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <div class=\"stripe-section\">\n                    <h5>stripe js</h5>\n                    <div class=\"content\">\n                      <h5>dummy test</h5>\n                      <table>\n                        <tr>\n                          <td>cart number</td>\n                          <td>4242424242424242</td>\n                        </tr>\n                        <tr>\n                          <td>mm/yy</td>\n                          <td>2/2020</td>\n                        </tr>\n                        <tr>\n                          <td>cvc</td>\n                          <td>2222</td>\n                        </tr>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row margin-cls\">\n                <div class=\"col-12\">\n                  <div class=\"stripe-section\">\n                    <h5>paypal</h5>\n                    <div class=\"content\">\n                      <h5>dummy test</h5>\n                      <h5>I set total payment to $0.01 for static demo</h5>\n                      <table>\n                        <tr>\n                          <td>cart number</td>\n                          <td>4152521541244</td>\n                        </tr>\n                        <tr>\n                          <td>mm/yy</td>\n                          <td>11/18</td>\n                        </tr>\n                        <tr>\n                          <td>cvc</td>\n                          <td>521</td>\n                        </tr>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-sm-12 col-xs-12\">\n              <div class=\"checkout-details\">\n                <div class=\"order-box\">\n                  <div class=\"title-box\">\n                    <div>Product <span> Total</span></div>\n                  </div>\n                  <ul class=\"qty\">\n                    <li>Pink Slim Shirt × 1 <span>$25.10</span></li>\n                    <li>SLim Fit Jeans × 1 <span>$555.00</span></li>\n                  </ul>\n                  <ul class=\"sub-total\">\n                    <li>Subtotal <span class=\"count\">$380.10</span></li>\n                    <li>Shipping <div class=\"shipping\">\n                      <div class=\"shopping-option\">\n                        <input type=\"checkbox\" name=\"free-shipping\" id=\"free-shipping\">\n                        <label for=\"free-shipping\">Free Shipping</label>\n                      </div>\n                      <div class=\"shopping-option\">\n                        <input type=\"checkbox\" name=\"local-pickup\" id=\"local-pickup\">\n                        <label for=\"local-pickup\">Local Pickup</label>\n                      </div>\n                    </div>\n                    </li>\n                  </ul>\n\n                  <ul class=\"total\">\n                    <li>Total <span class=\"count\">$620.00</span></li>\n                  </ul>\n                </div>\n\n                <div class=\"payment-box\">\n                  <div class=\"upper-box\">\n                    <div class=\"payment-options\">\n                      <ul>\n                        <li>\n                          <div class=\"radio-option\">\n                            <input type=\"radio\" name=\"payment-group\" id=\"payment-1\" checked>\n                            <label for=\"payment-1\">Check Payments<span class=\"small-text\">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span></label>\n                          </div>\n                        </li>\n\n                        <li>\n                          <div class=\"radio-option\">\n                            <input type=\"radio\" name=\"payment-group\" id=\"payment-2\">\n                            <label for=\"payment-2\">Cash On Delivery<span class=\"small-text\">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span></label>\n                          </div>\n                        </li>\n                        <li>\n                          <div class=\"radio-option paypal\">\n                            <input type=\"radio\" name=\"payment-group\" id=\"payment-3\">\n                            <label for=\"payment-3\">PayPal<span class=\"image\"><img src=\"assets/images/paypal.png\" alt=\"\" /></span></label>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"text-right\">\n                    <a [routerLink]=\"\" class=\"btn-solid btn\">Place Order</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- section End -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/collection/collection.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/collection/collection.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>our collection</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">collection</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<!--section start-->\n<section class=\"collection section-b-space\">\n    <div class=\"container\">\n        <div class=\"row partition-collection\">\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"collection-block\">\n                    <img src=\"assets/images/collection/1.jpg\" class=\"img-fluid\" alt=\"\">\n                    <div class=\"collection-content\">\n                        <h4>(20 products)</h4>\n                        <h3>fashion</h3>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>\n                        <a [routerLink]=\"\" class=\"btn btn-outline\">shop now !</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"collection-block\">\n                    <img src=\"assets/images/collection/3.jpg\" class=\"img-fluid\" alt=\"\">\n                    <div class=\"collection-content\">\n                        <h4>(20 products)</h4>\n                        <h3>fashion</h3>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>\n                        <a [routerLink]=\"\" class=\"btn btn-outline\">shop now !</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"collection-block\">\n                    <img src=\"assets/images/collection/5.jpg\" class=\"img-fluid\" alt=\"\">\n                    <div class=\"collection-content\">\n                        <h4>(20 products)</h4>\n                        <h3>fashion</h3>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>\n                        <a [routerLink]=\"\" class=\"btn btn-outline\">shop now !</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"collection-block\">\n                    <img src=\"assets/images/collection/6.jpg\" class=\"img-fluid\" alt=\"\">\n                    <div class=\"collection-content\">\n                        <h4>(20 products)</h4>\n                        <h3>fashion</h3>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>\n                        <a [routerLink]=\"\" class=\"btn btn-outline\">shop now !</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row partition-collection section-t-space\">\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"collection-block\">\n                    <img src=\"assets/images/collection/7.jpg\" class=\"img-fluid\" alt=\"\">\n                    <div class=\"collection-content\">\n                        <h4>(20 products)</h4>\n                        <h3>fashion</h3>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>\n                        <a [routerLink]=\"\" class=\"btn btn-outline\">shop now !</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"collection-block\">\n                    <img src=\"assets/images/collection/8.jpg\" class=\"img-fluid\" alt=\"\">\n                    <div class=\"collection-content\">\n                        <h4>(20 products)</h4>\n                        <h3>fashion</h3>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>\n                        <a [routerLink]=\"\" class=\"btn btn-outline\">shop now !</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"collection-block\">\n                    <img src=\"assets/images/collection/9.jpg\" class=\"img-fluid\" alt=\"\">\n                    <div class=\"collection-content\">\n                        <h4>(20 products)</h4>\n                        <h3>fashion</h3>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>\n                        <a [routerLink]=\"\" class=\"btn btn-outline\">shop now !</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n                <div class=\"collection-block\">\n                    <img src=\"assets/images/collection/11.jpg\" class=\"img-fluid\" alt=\"\">\n                    <div class=\"collection-content\">\n                        <h4>(20 products)</h4>\n                        <h3>fashion</h3>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>\n                        <a [routerLink]=\"\" class=\"btn btn-outline\">shop now !</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Section ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/compare/compare.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/compare/compare.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>compare</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">compare</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<!-- section start -->\n<section class=\"compare-padding\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"compare-page\">\n                    <div class=\"table-wrapper table-responsive\">\n                        <table class=\"table\">\n                            <thead>\n                            <tr class=\"th-compare\">\n                                <td>Action</td>\n                                <th class=\"item-row\"><button type=\"button\" class=\"remove-compare\" > Remove </button></th>\n                                <th class=\"item-row\"><button type=\"button\" class=\"remove-compare\" > Remove </button></th>\n                                <th class=\"item-row\"><button type=\"button\" class=\"remove-compare\" > Remove </button></th>\n                                <th class=\"item-row\"><button type=\"button\" class=\"remove-compare\" > Remove </button></th>\n                            </tr>\n                            </thead>\n                            <tbody id=\"table-compare\">\n                            <tr>\n                                <th class=\"product-name\">Product Name</th>\n                                <td class=\"grid-link__title\"> Cut Dress  </td>\n                                <td class=\"grid-link__title\"> Floral Dress  </td>\n                                <td class=\"grid-link__title\"> Notched  Dresss  </td>\n                                <td class=\"grid-link__title\"> Notched  Dresss  </td>\n                            </tr>\n                            <tr>\n                                <th class=\"product-name \">Product Image</th>\n                                <td class=\"item-row\">\n                                    <img src=\"assets/images/pro3/1.jpg\" alt=\"\" class=\"featured-image\">\n                                    <div class=\"product-price product_price\"> <strong>On Sale: </strong><span>$89,00</span></div>\n                                    <form class=\"variants clearfix\">\n                                        <input type=\"hidden\">\n                                        <button title=\"Add to Cart\" class=\"add-to-cart btn btn-solid\">Add to Cart</button>\n                                    </form>\n                                    \n                                </td>\n                                <td class=\"item-row\">\n                                    <img src=\"assets/images/pro3/33.jpg\" alt=\"\" class=\"featured-image\">\n                                    <div class=\"product-price product_price\"> <strong>On Sale: </strong><span>$89,00</span></div>\n                                    <form class=\"variants clearfix\">\n                                        <input type=\"hidden\">\n                                        <button title=\"Add to Cart\" class=\"add-to-cart btn btn-solid\">Add to Cart</button>\n                                    </form>\n                                    \n                                </td>\n                                <td class=\"item-row\">\n                                    <img src=\"assets/images/pro3/35.jpg\" alt=\"\" class=\"featured-image\">\n                                    <div class=\"compare-lable\">\n                                        <span class=\"lable4\">on sale</span>\n                                    </div>\n                                    <div class=\"product-price product_price\"> <strong>On Sale: </strong><span>$89,00</span></div>\n                                    <form class=\"variants clearfix\">\n                                        <input type=\"hidden\">\n                                        <button title=\"Add to Cart\" class=\"add-to-cart btn btn-solid\">Add to Cart</button>\n                                    </form>\n                                    \n                                </td>\n                                <td class=\"item-row\">\n                                    <img src=\"assets/images/pro3/35.jpg\" alt=\"\" class=\"featured-image\">\n                                    <div class=\"product-price product_price\"> <strong>On Sale: </strong><span>$89,00</span></div>\n                                    <form class=\"variants clearfix\">\n                                        <input type=\"hidden\">\n                                        <button title=\"Add to Cart\" class=\"add-to-cart btn btn-solid\">Add to Cart</button>\n                                    </form>\n                                    \n                                </td>\n                            </tr>\n                            <tr>\n                                <th class=\"product-name\">Product Description</th>\n                                <td class=\"item-row\">\n                                    <p class=\"description-compare\"> Add an extra dose of style with this raw look henley t-shirt from the house... </p>\n                                </td>\n                                <td class=\"item-row\">\n                                    <p class=\"description-compare\"> Add an extra dose of style with this raw look henley t-shirt from the house... </p>\n                                </td>\n                                <td class=\"item-row\">\n                                    <p class=\"description-compare\"> Add an extra dose of style with this raw look henley t-shirt from the house... </p>\n                                </td>\n                                <td class=\"item-row\">\n                                    <p class=\"description-compare\"> Add an extra dose of style with this raw look henley t-shirt from the house... </p>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th class=\"product-name\"> Availability </th>\n                                <td class=\"available-stock\">\n                                    <p> Available In stock </p>\n                                </td>\n                                <td class=\"available-stock\">\n                                    <p> Available In stock </p>\n                                </td>\n                                <td class=\"available-stock\">\n                                    <p> Available In stock </p>\n                                </td>\n                                <td class=\"available-stock\">\n                                    <p> Available In stock </p>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Section ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact/contact.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>contact</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item active\">contact</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<!--section start-->\n<section class=\" contact-page section-b-space\">\n    <div class=\"container\">\n        <div class=\"row section-b-space\">\n            <div class=\"col-lg-7 map\">\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50059.12775918716!2d72.78534673554945!3d21.16564923510817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1533793756956\"   allowfullscreen></iframe>\n            </div>\n            <div class=\"col-lg-5\">\n                <div class=\"contact-right\">\n                    <ul>\n                        <li>\n                            <div class=\"contact-icon\">\n                                <img  src=\"assets/images/icon/phone.png\" alt=\"Generic placeholder image\">\n                                <h6>Contact Us</h6>\n                            </div>\n                            <div class=\"media-body\">\n                                <p>+91 123 - 456 - 7890</p>\n                                <p>+86 163 - 451 - 7894</p>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"contact-icon\">\n                                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                                <h6>Address</h6>\n                            </div>\n                            <div class=\"media-body\">\n                                <p>ABC Complex,Near xyz, New York</p>\n                                <p>USA 123456</p>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"contact-icon\">\n                                <img  src=\"assets/images/icon/email.png\" alt=\"Generic placeholder image\">\n                                <h6>Address</h6>\n                            </div>\n                            <div class=\"media-body\">\n                                <p>Support@Shopcart.com</p>\n                                <p>info@shopcart.com</p>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"contact-icon\">\n                                <i class=\"fa fa-fax\" aria-hidden=\"true\"></i>\n                                <h6>Fax</h6>\n                            </div>\n                            <div class=\"media-body\">\n                                <p>Support@Shopcart.com</p>\n                                <p>info@shopcart.com</p>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <form class=\"theme-form\">\n                    <div class=\"form-row\">\n                        <div class=\"col-md-6\">\n                            <label for=\"name\">First Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter Your name\" required=\"\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label for=\"email\">Last Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Email\" required=\"\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label for=\"review\">Phone number</label>\n                            <input type=\"text\" class=\"form-control\" id=\"review\" placeholder=\"Enter your number\" required=\"\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" required=\"\">\n                        </div>\n                        <div class=\"col-md-12\">\n                            <label for=\"review\">Write Your Message</label>\n                            <textarea class=\"form-control\" placeholder=\"Write Your Message\" id=\"exampleFormControlTextarea1\" rows=\"6\"></textarea>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <button class=\"btn btn-solid\" type=\"submit\">Send Your Message</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Section ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>Dashboard</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Dashboard</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<!-- section start -->\n<section class=\"section-b-space\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-3\">\n                <div class=\"account-sidebar\">\n                    <a class=\"popup-btn\">\n                        my account\n                    </a>\n                </div>\n                <div class=\"dashboard-left\">\n                    <div class=\"collection-mobile-back\">\n                        <span class=\"filter-back\">\n                            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> back\n                        </span>\n                    </div>\n                    <div class=\"block-content\">\n                        <ul>\n                            <li class=\"active\"><a href='#'>Account Info</a></li>\n                            <li><a [routerLink]=\"\">Address Book</a></li>\n                            <li><a [routerLink]=\"\">My Orders</a></li>\n                            <li><a [routerLink]=\"\">My Wishlist</a></li>\n                            <li><a [routerLink]=\"\">Newsletter</a></li>\n                            <li><a [routerLink]=\"\">My Account</a></li>\n                            <li><a [routerLink]=\"\">Change Password</a></li>\n                            <li class=\"last\"><a [routerLink]=\"\">Log Out</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-9\">\n                <div class=\"dashboard-right\">\n                    <div class=\"dashboard\">\n                        <div class=\"page-title\">\n                            <h2>My Dashboard</h2>\n                        </div>\n                        <div class=\"welcome-msg\">\n                            <p>Hello, MARK JECNO !</p>\n                            <p>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>\n                        </div>\n                        <div class=\"box-account box-info\">\n                            <div class=\"box-head\">\n                                <h2>Account Information</h2>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"box\">\n                                        <div class=\"box-title\">\n                                            <h3>Contact Information</h3>\n                                            <a [routerLink]=\"\">Edit</a>\n                                        </div>\n                                        <div class=\"box-content\">\n                                            <h6>MARK JECNO</h6>\n                                            <h6>MARk-JECNO@gmail.com</h6>\n                                            <h6><a [routerLink]=\"\">Change Password</a></h6>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"box\">\n                                        <div class=\"box-title\">\n                                            <h3>Newsletters</h3>\n                                            <a [routerLink]=\"\">Edit</a>\n                                        </div>\n                                        <div class=\"box-content\">\n                                            <p>\n                                                You are currently not subscribed to any newsletter.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div>\n                                <div class=\"box\">\n                                    <div class=\"box-title\">\n                                        <h3>Address Book</h3>\n                                        <a [routerLink]=\"\">Manage Addresses</a>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\">\n                                            <h6>Default Billing Address</h6>\n                                            <address>\n                                                You have not set a default billing address.<br>\n                                                <a [routerLink]=\"\">Edit Address</a>\n                                            </address>\n                                        </div>\n                                        <div class=\"col-sm-6\">\n                                            <h6>Default Shipping Address</h6>\n                                            <address>\n                                                You have not set a default shipping address.<br>\n                                                <a [routerLink]=\"\">Edit Address</a>\n                                            </address>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- section end -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/error-page/error-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/error-page/error-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>404 page</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">404 page</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<!-- section start -->\n<section class=\"p-0\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"error-section\">\n                    <h1>404</h1>\n                    <h2>page not found</h2>\n                    <a [routerLink]=\"'/home/one'\" class=\"btn btn-solid\">back to home</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Section ends -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/faq/faq.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/faq/faq.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>faq</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">faq</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb end -->\n<!-- section start-->\n<section class=\"faq-section section-b-space\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"accordion theme-accordion\" id=\"accordionExample\">\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingOne\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                    How can I downgrade to an earlier version of Dummy Content?\n                                </button>\n                            </h5>\n                        </div>\n\n                        <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n                            <div class=\"card-body\">\n                                <p>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingTwo\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                                    How can I upgrade from Shopify 2.5 to shopify 3?\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n                            <div class=\"card-body\">\n                                <p>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingThree\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                                    Under what license are Regular Labs extensions released?\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n                            <div class=\"card-body\">\n                                <p>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingFour\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n                                    What is the Regular Labs Library?\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordionExample\">\n                            <div class=\"card-body\">\n                                <p>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingFive\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">\n                                    Can I turn on/off some blocks on the page?\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseFive\" class=\"collapse\" aria-labelledby=\"headingFive\" data-parent=\"#accordionExample\">\n                            <div class=\"card-body\">\n                                <p>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingSix\">\n                            <h5 class=\"mb-0\">\n                                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseSix\">\n                                    What is included in the theme package?\n                                </button>\n                            </h5>\n                        </div>\n                        <div id=\"collapseSix\" class=\"collapse\" aria-labelledby=\"headingSix\" data-parent=\"#accordionExample\">\n                            <div class=\"card-body\">\n                                <p>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Section ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/forget-password/forget-password.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/forget-password/forget-password.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>forget password</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/pages/login'\">login</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">forget password</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<!-- section start -->\n<section class=\"pwd-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 offset-lg-3\">\n                <h2>Forget Your Password</h2>\n                <form class=\"theme-form\">\n                    <div class=\"form-row\">\n                        <div class=\"col-md-12\">\n                            <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Enter Your Email\" required=\"\">\n                        </div>\n                        <button class=\"btn btn-solid\">Submit</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Section ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>customer's login</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" >login</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<!-- section start -->\n<section class=\"login-page section-b-space\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <h3>Login</h3>\n                <div class=\"theme-card\">\n                    <form class=\"theme-form\">\n                        <div class=\"form-group\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" required=\"\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"review\">Password</label>\n                            <input type=\"password\" class=\"form-control\" id=\"review\" placeholder=\"Enter your password\" required=\"\">\n                        </div>\n                        <button class=\"btn btn-solid\">Login</button>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-lg-6 right-login\">\n                <h3>New Customer</h3>\n                <div class=\"theme-card authentication-right\">\n                    <h6 class=\"title-font\">Create A Account</h6>\n                    <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>\n                    <button class=\"btn btn-solid\">Create an Account</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Section ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/lookbook/lookbook.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/lookbook/lookbook.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>look book</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">look book</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<!-- section start -->\n<section class=\"lookbook section-b-space\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"lookbook-block\">\n                    <img src=\"assets/images/lookbook.jpg\" class=\"img-fluid\" alt=\"\">\n                    <div class=\"lookbook-dot\">\n                        <span>1</span>\n                        <a [routerLink]=\"\">\n                            <div class=\"dot-showbox\">\n                                <img src=\"assets/images/pro3/2.jpg\" class=\"img-fluid\" alt=\"\">\n                                <div class=\"dot-info\">\n                                    <h5 class=\"title\">tee</h5>\n                                    <h5>200$</h5>\n                                    <h6>details</h6>\n                                </div>\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"lookbook-dot dot2\">\n                        <span>2</span>\n                        <a [routerLink]=\"\">\n                            <div class=\"dot-showbox\">\n                                <img src=\"assets/images/pro3/2.jpg\" class=\"img-fluid\" alt=\"\">\n                                <div class=\"dot-info\">\n                                    <h5 class=\"title\">tee</h5>\n                                    <h5>200$</h5>\n                                    <h6>details</h6>\n                                </div>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"lookbook-block\">\n                    <img src=\"assets/images/lookbook2.jpg\" class=\"img-fluid\" alt=\"\">\n                    <div class=\"lookbook-dot dot3\">\n                        <span>1</span>\n                        <a [routerLink]=\"\">\n                            <div class=\"dot-showbox\">\n                                <img src=\"assets/images/pro3/2.jpg\" class=\"img-fluid\" alt=\"\">\n                                <div class=\"dot-info\">\n                                    <h5 class=\"title\">tee</h5>\n                                    <h5>200$</h5>\n                                    <h6>details</h6>\n                                </div>\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"lookbook-dot dot4\">\n                        <span>2</span>\n                        <a [routerLink]=\"\">\n                            <div class=\"dot-showbox\">\n                                <img src=\"assets/images/pro3/2.jpg\" class=\"img-fluid\" alt=\"\">\n                                <div class=\"dot-info\">\n                                    <h5 class=\"title\">tee</h5>\n                                    <h5>200$</h5>\n                                    <h6>details</h6>\n                                </div>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Section ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order-success/order-success.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order-success/order-success.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- thank-you section start -->\n<section class=\"section-b-space light-layout\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"success-text\">\n                    <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\n                    <h2>thank you</h2>\n                    <p>Payment is successfully processsed and your order is on the way</p>\n                    <p>Transaction ID:267676GHERT105467</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Section ends -->\n<!-- order-detail section start -->\n<section class=\"section-b-space\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"product-order\">\n                    <h3>your order details</h3>\n                    <div class=\"row product-order-detail\">\n                        <div class=\"col-3\">\n                            <img src=\"assets/images/pro3/1.jpg\" alt=\"\" class=\"img-fluid\">\n                        </div>\n                        <div class=\"col-3 order_detail\">\n                            <div>\n                                <h4>product name</h4>\n                                <h5>cotton shirt</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-3 order_detail\">\n                            <div>\n                                <h4>quantity</h4>\n                                <h5>1</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-3 order_detail\">\n                            <div>\n                                <h4>price</h4>\n                                <h5>$555.00</h5>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row product-order-detail\">\n                        <div class=\"col-3\">\n                            <img src=\"assets/images/pro3/1.jpg\" alt=\"\" class=\"img-fluid\">\n                        </div>\n                        <div class=\"col-3 order_detail\">\n                            <div>\n                                <h4>product name</h4>\n                                <h5>cotton shirt</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-3 order_detail\">\n                            <div>\n                                <h4>quantity</h4>\n                                <h5>1</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-3 order_detail\">\n                            <div>\n                                <h4>price</h4>\n                                <h5>$555.00</h5>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"total-sec\">\n                        <ul>\n                            <li>subtotal <span>$55.00</span></li>\n                            <li>shipping <span>$12.00</span></li>\n                            <li>tax(GST) <span>$10.00</span></li>\n                        </ul>\n                    </div>\n                    <div class=\"final-total\">\n                        <h3>total <span>$77.00</span></h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div class=\"row order-success-sec\">\n                    <div class=\"col-sm-6\">\n                        <h4>summery</h4>\n                        <ul class=\"order-detail\">\n                            <li>order ID: 5563853658932</li>\n                            <li>Order Date: October 22, 2018</li>\n                            <li>Order Total: $907.28</li>\n                        </ul>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <h4>shipping address</h4>\n                        <ul class=\"order-detail\">\n                            <li>gerg harvell</li>\n                            <li>568, suite ave.</li>\n                            <li>Austrlia, 235153</li>\n                            <li>Contact No. 987456321</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"col-sm-12 payment-mode\">\n                        <h4>payment method</h4>\n                        <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.</p>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"delivery-sec\">\n                            <h3>expected date of delivery</h3>\n                            <h2>october 22, 2018</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</section>\n<!-- Section ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/grid-four-col/grid-four-col.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/portfolio/grid-four-col/grid-four-col.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>Portfolio</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">portfolio</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n\n<!-- Our Project Start -->\n<section class=\"portfolio-section grid-portfolio\">\n    <div class=\"container\">\n        <div align=\"center\" id=\"form1\">\n            <button class=\"filter-button project_button active\" data-filter=\"all\">All</button>\n            <button class=\"filter-button project_button\" data-filter=\"fashion\">Fashion</button>\n            <button class=\"filter-button project_button\" data-filter=\"bags\">Bags</button>\n            <button class=\"filter-button project_button\" data-filter=\"shoes\">Shoes</button>\n            <button class=\"filter-button project_button\" data-filter=\"watch\">Watch</button>\n        </div>\n        <div #gallery class=\"row  zoom-gallery\">\n            <div class=\"isotopeSelector filter fashion col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/1.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/1.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter shoes col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/2.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/2.jpg\" class=\"b-top img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/3.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/3.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/4.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/4.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/5.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/5.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter watch col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/6.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/6.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/7.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/7.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/8.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/8.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter fashion col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/9.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/9.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter shoes col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/10.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/10.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/11.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/11.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter fashion col-lg-3 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/12.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/12.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Our Project End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/grid-three-col/grid-three-col.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/portfolio/grid-three-col/grid-three-col.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>Portfolio</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">portfolio</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n\n<!-- Our Project Start -->\n<section class=\"portfolio-section\">\n    <div class=\"container\">\n        <div align=\"center\" id=\"form1\">\n            <button class=\"filter-button project_button active\" data-filter=\"all\">All</button>\n            <button class=\"filter-button project_button\" data-filter=\"fashion\">Fashion</button>\n            <button class=\"filter-button project_button\" data-filter=\"bags\">Bags</button>\n            <button class=\"filter-button project_button\" data-filter=\"shoes\">Shoes</button>\n            <button class=\"filter-button project_button\" data-filter=\"watch\">Watch</button>\n        </div>\n        <div #gallery class=\"row  zoom-gallery\">\n            <div class=\"isotopeSelector filter fashion col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/1.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/1.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter shoes col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/2.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/2.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/3.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/3.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/4.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/4.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/5.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/5.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter watch col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/6.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/6.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/7.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/7.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/8.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/8.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter fashion col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/9.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/9.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter shoes col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/10.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/10.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/11.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/11.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter fashion col-lg-4 col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/12.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/12.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Our Project End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/grid-two-col/grid-two-col.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/portfolio/grid-two-col/grid-two-col.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>Portfolio</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">portfolio</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n\n\n<!-- Our Project Start -->\n<section class=\"portfolio-section grid-portfolio\">\n    <div class=\"container\">\n        <div align=\"center\" id=\"form1\">\n            <button class=\"filter-button project_button active\" data-filter=\"all\">All</button>\n            <button class=\"filter-button project_button\" data-filter=\"fashion\">Fashion</button>\n            <button class=\"filter-button project_button\" data-filter=\"bags\">Bags</button>\n            <button class=\"filter-button project_button\" data-filter=\"shoes\">Shoes</button>\n            <button class=\"filter-button project_button\" data-filter=\"watch\">Watch</button>\n        </div>\n        <div #gallery class=\"row\">\n            <div class=\"isotopeSelector filter fashion col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/1.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/1.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter shoes col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/2.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/2.jpg\" class=\"b-top img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/3.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/3.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/4.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/4.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/5.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/5.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter watch col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/6.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/6.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/7.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/7.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/8.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/8.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter fashion col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/9.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/9.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter shoes col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/10.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/10.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter bags col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/11.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/11.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"isotopeSelector filter fashion col-sm-6\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/grid/12.jpg\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/grid/12.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Our Project End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/masonary-four-grid/masonary-four-grid.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/portfolio/masonary-four-grid/masonary-four-grid.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>Portfolio</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">portfolio</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n\n\n<!-- section start -->\n<section class=\"filter-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"title1 \">\n                    <h2 class=\"title-inner1\">portfolio</h2>\n                </div>\n                <div class=\"filter-container isotopeFilters\">\n                    <ul class=\"list-inline filter\">\n                        <li class=\"active\"><a href=\"#\" data-filter=\"*\">All </a></li>\n                        <li><a href=\"#\" data-filter=\".fashion\">Fashion</a></li>\n                        <li><a href=\"#\" data-filter=\".bags\">Bags</a></li>\n                        <li><a href=\"#\" data-filter=\".shoes\">Shoes</a></li>\n                        <li><a href=\"#\" data-filter=\".watch\">Watch</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section #gallery class=\"portfolio-section pt-0 port-col zoom-gallery\">\n    <div class=\"container\">\n        <div class=\"isotopeContainer row\">\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector shoes\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/1.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/1.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/2.jpg\" data-source=\"http://500px.com/photo/32736307\" title=\"Into The Blue\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/2.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector shoes\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/3.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/3.jpg\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/4.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/4.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector watch\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/5.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/5.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector watch\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/6.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/6.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/7.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/7.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector bags\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/8.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/8.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/9.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/9.jpg\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/10.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/10.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/11.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/11.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector bags\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/12.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/12.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/13.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/13.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/14.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/14.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Section ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/masonary-fullwidth/masonary-fullwidth.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/portfolio/masonary-fullwidth/masonary-fullwidth.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>Portfolio</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">portfolio</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n\n\n<!-- section start -->\n<section class=\"filter-section\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"title1 \">\n                    <h2 class=\"title-inner1\">portfolio</h2>\n                </div>\n                <div class=\"filter-container isotopeFilters\">\n                    <ul class=\"list-inline filter\">\n                        <li class=\"active\"><a href=\"#\" data-filter=\"*\">All </a></li>\n                        <li><a href=\"#\" data-filter=\".fashion\">Fashion</a></li>\n                        <li><a href=\"#\" data-filter=\".bags\">Bags</a></li>\n                        <li><a href=\"#\" data-filter=\".shoes\">Shoes</a></li>\n                        <li><a href=\"#\" data-filter=\".watch\">Watch</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section #gallery class=\"portfolio-section pt-0 port-col zoom-gallery fullwidth-portfolio\">\n    <div class=\"container-fluid\">\n        <div class=\"isotopeContainer row\">\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector shoes\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/1.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/1.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/2.jpg\" data-source=\"http://500px.com/photo/32736307\" title=\"Into The Blue\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/2.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector shoes\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/3.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/3.jpg\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/4.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/4.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector watch\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/5.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/5.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector watch\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/6.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/6.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/7.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/7.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector bags\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/8.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/8.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/9.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/9.jpg\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/10.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/10.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/11.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/11.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector bags\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/12.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/12.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/13.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/13.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/14.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/14.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector watch\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/18.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/18.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector bag\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/19.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/19.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector watch\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/20.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/20.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/21.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/21.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/22.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/22.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Section ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/masonary-three-grid/masonary-three-grid.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/portfolio/masonary-three-grid/masonary-three-grid.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>Portfolio</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">portfolio</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n\n\n<!-- section start -->\n<section class=\"filter-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"title1 \">\n                    <h2 class=\"title-inner1\">portfolio</h2>\n                </div>\n                <div class=\"filter-container isotopeFilters\">\n                    <ul class=\"list-inline filter\">\n                        <li class=\"active\"><a href=\"#\" data-filter=\"*\">All </a></li>\n                        <li><a href=\"#\" data-filter=\".fashion\">Fashion</a></li>\n                        <li><a href=\"#\" data-filter=\".bags\">Bags</a></li>\n                        <li><a href=\"#\" data-filter=\".shoes\">Shoes</a></li>\n                        <li><a href=\"#\" data-filter=\".watch\">Watch</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"portfolio-section pt-0 port-col zoom-gallery\">\n    <div class=\"container\">\n        <div class=\"isotopeContainer row\">\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector shoes\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/1.jpg\" data-source=\"http://500px.com/photo/32554131\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/1.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/2.jpg\" data-source=\"http://500px.com/photo/32736307\" title=\"Into The Blue\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/2.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector shoes\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/3.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/3.jpg\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/4.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/4.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector watch\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/14.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/14.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector watch\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/6.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/6.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/7.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/7.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector bags\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/8.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/8.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/9.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/9.jpg\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/10.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/10.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/11.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/11.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector bags\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/17.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/17.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/13.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/13.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/5.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/5.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/16.jpg\" data-source=\"http://500px.com/photo/32554131\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/16.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Section ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/masonary-two-grid/masonary-two-grid.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/portfolio/masonary-two-grid/masonary-two-grid.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>Portfolio</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">portfolio</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n\n\n<!-- section start -->\n<section class=\"filter-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"title1 \">\n                    <h2 class=\"title-inner1\">portfolio</h2>\n                </div>\n                <div class=\"filter-container isotopeFilters\">\n                    <ul class=\"list-inline filter\">\n                        <li class=\"active\"><a href=\"#\" data-filter=\"*\">All </a></li>\n                        <li><a href=\"#\" data-filter=\".fashion\">Fashion</a></li>\n                        <li><a href=\"#\" data-filter=\".shoes\">Shoes</a></li>\n                        <li><a href=\"#\" data-filter=\".watch\">Watch</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section #gallery class=\"portfolio-section pt-0 port-col zoom-gallery\">\n    <div class=\"container\">\n        <div class=\"row isotopeContainer\">\n            <div class=\"col-sm-6 isotopeSelector shoes\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/1.jpg\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/1.jpg\" class=\"img-fluid\">\n                        </a>\n                    </div>\n                </div>\n           </div>\n           <div class=\"col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/2.jpg\" title=\"Into The Blue\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/2.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 isotopeSelector shoes\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/3.jpg\" title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/3.jpg\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/4.jpg\"  title=\"Light Sabre\">\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/4.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 isotopeSelector watch\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/14.jpg\"  title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/14.jpg\" >\n                        </a>\n                    </div>\n                </div> \n            </div>\n            <div class=\"col-sm-6 isotopeSelector watch\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/6.jpg\"  title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/6.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 isotopeSelector fashion\">\n                <div class=\"overlay\">\n                    <div class=\"border-portfolio\">\n                        <a href=\"assets/images/portfolio/7.jpg\"  title=\"Light Sabre\" >\n                            <div class=\"overlay-background\">\n                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                            </div>\n                            <img src=\"assets/images/portfolio/7.jpg\" >\n                        </a>\n                    </div>\n                </div>\n            </div>\n         </div>\n    </div>\n</section>\n<!-- Section ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>create account</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">create account</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<!-- section start -->\n<section class=\"register-page section-b-space\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h3>create account</h3>\n                <div class=\"theme-card\">\n                    <form class=\"theme-form\">\n                        <div class=\"form-row\">\n                            <div class=\"col-md-6\">\n                                <label for=\"email\">First Name</label>\n                                <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"First Name\" required=\"\">\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label for=\"review\">Last Name</label>\n                                <input type=\"password\" class=\"form-control\" id=\"lname\" placeholder=\"Last Name\" required=\"\">\n                            </div>\n                        </div>\n                        <div class=\"form-row\">\n                            <div class=\"col-md-6\">\n                                <label for=\"email\">email</label>\n                                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" required=\"\">\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label for=\"review\">Password</label>\n                                <input type=\"password\" class=\"form-control\" id=\"review\" placeholder=\"Enter your password\" required=\"\">\n                            </div>\n                            <button class=\"btn btn-solid\">create Account</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Section ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/search/search.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"page-title\">\n          <h2>search</h2>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n          <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n            <li class=\"breadcrumb-item active\">search</li>\n          </ol>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- breadcrumb End -->\n<!-- section start -->\n<section class=\"authentication-page section-b-space\">\n  <div class=\"container\">\n    <section class=\"search-block\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 offset-lg-3\">\n            <form class=\"form-header\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Search a Product\">\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </section>\n      <div class=\"col-sm-12 text-center\">\n        <img src=\"assets/images/empty-search.jpg\" class=\"img-fluid mb-4\">\n          <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>\n          <p>Please check if you have misspelt something or try searching with other words.</p>\n          <a [routerLink]=\"'/home/one'\" class=\"btn btn-solid\">continue shopping</a>\n      </div>\n  </div>\n</section>\n<!-- section end -->\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/typography/typography.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/typography/typography.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>typography</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a href=\"index.html\">Home</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">typography</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<section class=\"section-b-space typography_section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"typography-box\">\n                    <div class=\"headings\">\n                        <h3>headings</h3>\n                        <span>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</span>\n                    </div>\n                    <div class=\"typo-content heading_content\">\n                        <h1>h1 heading</h1>\n                        <h2>h2 heading</h2>\n                        <h3>h3 heading</h3>\n                        <h4>h4 heading</h4>\n                        <h5>h5 heading</h5>\n                        <h6>h6 heading</h6>\n                    </div>\n                </div>\n                <div class=\"typography-box\">\n                    <div class=\"headings\">\n                        <h3>Text Color</h3>\n                        <span>You can Give text color by using txt-* class</span>\n                    </div>\n                    <div class=\"typo-content\">\n                        <p class=\"text-primary\">This is Primary text You can archive this adding <code>.text-primary</code> class</p>\n                        <p class=\"text-secondary\">This is Secondary text You can archive this adding <code>.text-secondary</code> class</p>\n                        <p class=\"text-success\">This is Success text You can archive this adding <code>.text-success</code> class</p>\n                        <p class=\"text-info\">This is Info text You can archive this adding <code>.text-info</code> class</p>\n                        <p class=\"text-warning\">This is Warning text You can archive this adding <code>.text-warning</code> class</p>\n                        <p class=\"text-danger\">This is Danger text You can archive this adding <code>.text-danger</code> class</p>\n                        <p class=\"text-dark\">This is Dark text You can archive this adding <code>.text-dark</code> class</p>\n                        <p class=\"text-muted\">This is Primary text You can archive this adding <code>.text-muted</code> class</p>\n                    </div>\n                </div>\n                <div class=\"typography-box\">\n                    <div class=\"headings\">\n                        <h3>Text Color</h3>\n                        <span>You can Give text color by using txt-* class</span>\n                    </div>\n                    <div class=\"typo-content product-pagination\">\n                        <ul class=\"pagination\">\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\" aria-label=\"Previous\"><span aria-hidden=\"true\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></span> <span class=\"sr-only\">Previous</span></a></li>\n                            <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></span> <span class=\"sr-only\">Next</span></a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"typography-box\">\n                    <div class=\"headings\">\n                        <h3>Text Color</h3>\n                        <span>You can Give text color by using txt-* class</span>\n                    </div>\n                    <div class=\"typo-content\">\n                        <form>\n                            <div class=\"form-row\">\n                                <div class=\"col-12 mb-3\">\n                                    <label for=\"name\">First Name</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter Your name\" required=\"\">\n                                </div>\n                                <div class=\"col-12 mb-3\">\n                                    <label for=\"email\">Email</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" required=\"\">\n                                </div>\n                                <div class=\"col-12 mb-3\">\n                                    <label>Write Your Message</label>\n                                    <textarea class=\"form-control\" placeholder=\"Write Your Message\" id=\"exampleFormControlTextarea1\" rows=\"5\"></textarea>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"typography-box\">\n                    <div class=\"headings\">\n                        <h3>Alignment</h3>\n                        <span>Use text utilities as needed to change the alignment of your blockquote.</span>\n                    </div>\n                    <div class=\"typo-content\">\n                        <p class=\"text-left\">This is a left aligned text .text-left</p>\n                        <p class=\"text-center\">This is a center aligned text .text-center</p>\n                        <p class=\"text-right\">This is a right aligned text .text-right</p>\n                    </div>\n                </div>\n                <div class=\"typography-box\">\n                    <div class=\"headings\">\n                        <h3>loader</h3>\n                    </div>\n                    <div class=\"typo-content loader-typo\">\n                        <div class=\"pre-loader\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div class=\"typography-box \">\n                    <div class=\"headings\">\n                        <h3>buttons</h3>\n                        <span>Styling for common inline HTML5 elements.</span>\n                    </div>\n                    <div class=\"typo-content typo-buttons\">\n                        <a href=\"#\" class=\"btn btn-solid mr-3\">button</a>\n                        <a href=\"#\" class=\"btn btn-outline mr-3\">button</a>\n                        <a href=\"#\" class=\"btn btn-solid black-btn mr-3\">button</a>\n                        <a href=\"#\" class=\"btn btn-solid btn-sm\">button</a>\n                    </div>\n                </div>\n                <div class=\"typography-box\">\n                    <div class=\"headings\">\n                        <h3>Inline text elements</h3>\n                        <span>Styling for common inline HTML5 elements.</span>\n                    </div>\n                    <div class=\"typo-content\">\n                        <p>You can use the mark tag to <mark>highlight</mark> text.</p>\n                        <p><del>This line of text is meant to be treated as deleted text.</del></p>\n                        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\n                        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\n                        <p><u>This line of text will render as underlined</u></p>\n                        <p><small>This line of text is meant to be treated as fine print.</small></p>\n                        <p><strong>This line rendered as bold text.</strong></p>\n                        <p><em>This line rendered as italicized text.</em></p>\n                    </div>\n                </div>\n                <div class=\"typography-box\">\n                    <div class=\"headings\">\n                        <h3>lists</h3>\n                        <span>Styling for common inline HTML5 elements.</span>\n                    </div>\n                    <div class=\"typo-content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <h6 class=\"sub-title\">Unorder list</h6>\n                                <ul>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                </ul>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <h6 class=\"sub-title\">order list</h6>\n                                <ol>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                    <li>Lorem ipsum dolor sit amet</li>\n                                </ol>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <h6 class=\"sub-title\">order list</h6>\n                                <dl>\n                                    <dt>Lorem ipsum dolor sit amet</dt>\n                                    <dd>- ipsum dolor sit amet</dd>\n                                    <dt>Lorem ipsum dolor sit amet</dt>\n                                    <dd>- ipsum dolor sit amet</dd>\n                                    <dt>Lorem ipsum dolor sit amet</dt>\n                                    <dd>- ipsum dolor sit amet</dd>\n                                </dl>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <h6 class=\"sub-title\">order list</h6>\n                                <ul>\n                                    <li><i class=\"fa fa-angle-double-right mr-2\"></i>Lorem ipsum dolor sit amet</li>\n                                    <li><i class=\"fa fa-angle-double-right mr-2\"></i>Lorem ipsum dolor sit amet</li>\n                                    <li><i class=\"fa fa-angle-double-right mr-2\"></i>Lorem ipsum dolor sit amet</li>\n                                    <li><i class=\"fa fa-angle-double-right mr-2\"></i>Lorem ipsum dolor sit amet</li>\n                                    <li><i class=\"fa fa-angle-double-right mr-2\"></i>Lorem ipsum dolor sit amet</li>\n                                    <li><i class=\"fa fa-angle-double-right mr-2\"></i>Lorem ipsum dolor sit amet</li>\n                                    <li><i class=\"fa fa-angle-double-right mr-2\"></i>Lorem ipsum dolor sit amet</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"typography-box\">\n                    <div class=\"headings\">\n                        <h3>lists</h3>\n                        <span>Styling for common inline HTML5 elements.</span>\n                    </div>\n                    <div class=\"typo-content input_button\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <form>\n                                    <div>\n                                        <input type=\"radio\" name=\"gender\" id=\"one\" value=\"male\">\n                                        <label for=\"one\">radio button1</label>\n                                    </div>\n                                    <div>\n                                        <input type=\"radio\" name=\"gender\" id=\"two\" value=\"male\">\n                                        <label for=\"two\">radio button2</label>\n                                    </div>\n                                    <div>\n                                        <input type=\"radio\" name=\"gender\" id=\"three\" value=\"male\">\n                                        <label for=\"three\">radio button3</label>\n                                    </div>\n                                    <div>\n                                        <input type=\"radio\" name=\"gender\" id=\"four\" value=\"male\">\n                                        <label for=\"four\">radio button4</label>\n                                    </div>\n                                    <div>\n                                        <input type=\"radio\" name=\"gender\" id=\"five\" value=\"male\">\n                                        <label for=\"five\">radio button5</label>\n                                    </div>\n                                </form>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <form>\n                                    <div>\n                                        <input type=\"checkbox\" name=\"gender\" id=\"six\" value=\"male\">\n                                        <label for=\"six\">checkbox button1</label>\n                                    </div>\n                                    <div>\n                                        <input type=\"checkbox\" name=\"gender\" id=\"seven\" value=\"male\">\n                                        <label for=\"seven\">checkbox button2</label>\n                                    </div>\n                                    <div>\n                                        <input type=\"checkbox\" name=\"gender\" id=\"eight\" value=\"male\">\n                                        <label for=\"eight\">checkbox button3</label>\n                                    </div>\n                                    <div>\n                                        <input type=\"checkbox\" name=\"gender\" id=\"nine\" value=\"male\">\n                                        <label for=\"nine\">checkbox button4</label>\n                                    </div>\n                                    <div>\n                                        <input type=\"checkbox\" name=\"gender\" id=\"ten\" value=\"male\">\n                                        <label for=\"ten\">checkbox button5</label>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"typography-box\">\n                    <div class=\"headings\">\n                        <h3>Naming a source</h3>\n                        <span>Add a <code class=\"highlighter-rouge\">&lt;footer class=\"blockquote-footer\"&gt;</code> for identifying the source. Wrap the name of the source work in <code class=\"highlighter-rouge\">&lt;cite&gt;</code>.</span>\n                    </div>\n                    <div class=\"typo-content\">\n                        <blockquote class=\"blockquote\">\n                            <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                            <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n                        </blockquote>\n                    </div>\n                </div>\n                <div class=\"typography-box\">\n                    <div class=\"headings\">\n                        <h3>social icons</h3>\n                    </div>\n                    <div class=\"typo-content\">\n                        <div class=\"footer-social\">\n                            <ul>\n                                <li>\n                                    <a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li>\n                                    <a href=\"#\"><i class=\"fa fa-rss\" aria-hidden=\"true\"></i></a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wishlist/wishlist.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wishlist/wishlist.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\n<div class=\"breadcrumb-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"page-title\">\n                    <h2>wishlist</h2>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/one'\">Home</a></li>\n                        <li class=\"breadcrumb-item active\">wishlist</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- breadcrumb End -->\n<!-- section start -->\n<section class=\"wishlist-section section-b-space\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <table class=\"table cart-table table-responsive-xs\">\n                    <thead>\n                    <tr class=\"table-head\">\n                        <th scope=\"col\">image</th>\n                        <th scope=\"col\">product name</th>\n                        <th scope=\"col\">price</th>\n                        <th scope=\"col\">availability</th>\n                        <th scope=\"col\">action</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>\n                            <a [routerLink]=\"\">\n                                <img src=\"assets/images/pro3/1.jpg\" alt=\"\">\n                            </a>\n                        </td>\n                        <td><a [routerLink]=\"\">cotton shirt</a>\n                            <div class=\"mobile-cart-content row\">\n                                <div class=\"col-xs-3\">\n                                    <p>in stock</p>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">$63.00</h2>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">\n                                        <a [routerLink]=\"\" class=\"icon mr-1\">\n                                            <i class=\"ti-close\"></i>\n                                        </a>\n                                        <a [routerLink]=\"\" class=\"cart\">\n                                            <i class=\"ti-shopping-cart\"></i>\n                                        </a>\n                                    </h2>\n                                </div>\n                            </div>\n                        </td>\n                        <td><h2>$63.00</h2></td>\n                        <td >\n                            <p>in stock</p>\n                        </td>\n                        <td>\n                            <a [routerLink]=\"\" class=\"icon mr-3\">\n                                <i class=\"ti-close\"></i>\n                            </a>\n                            <a [routerLink]=\"\" class=\"cart\">\n                                <i class=\"ti-shopping-cart\"></i>\n                            </a>\n                        </td>\n                    </tr>\n                    </tbody>\n                    <tbody>\n                    <tr>\n                        <td>\n                            <a [routerLink]=\"\">\n                                <img src=\"assets/images/pro3/1.jpg\" alt=\"\">\n                            </a>\n                        </td>\n                        <td><a [routerLink]=\"\">cotton shirt</a>\n                            <div class=\"mobile-cart-content row\">\n                                <div class=\"col-xs-3\">\n                                    <p>in stock</p>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">$63.00</h2>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">\n                                        <a [routerLink]=\"\" class=\"icon mr-1\">\n                                            <i class=\"ti-close\"></i>\n                                        </a>\n                                        <a [routerLink]=\"\" class=\"cart\">\n                                            <i class=\"ti-shopping-cart\"></i>\n                                        </a>\n                                    </h2>\n                                </div>\n                            </div>\n                        </td>\n                        <td><h2>$63.00</h2></td>\n                        <td >\n                            <p>in stock</p>\n                        </td>\n                        <td>\n                            <a [routerLink]=\"\" class=\"icon mr-3\">\n                                <i class=\"ti-close\"></i>\n                            </a>\n                            <a [routerLink]=\"\" class=\"cart\">\n                                <i class=\"ti-shopping-cart\"></i>\n                            </a>\n                        </td>\n                    </tr>\n                    </tbody>\n                    <tbody>\n                    <tr>\n                        <td>\n                            <a [routerLink]=\"\">\n                                <img src=\"assets/images/pro3/1.jpg\" alt=\"\">\n                            </a>\n                        </td>\n                        <td><a [routerLink]=\"\">cotton shirt</a>\n                            <div class=\"mobile-cart-content row\">\n                                <div class=\"col-xs-3\">\n                                    <p>in stock</p>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">$63.00</h2>\n                                </div>\n                                <div class=\"col-xs-3\">\n                                    <h2 class=\"td-color\">\n                                        <a [routerLink]=\"\" class=\"icon mr-1\">\n                                            <i class=\"ti-close\"></i>\n                                        </a>\n                                        <a [routerLink]=\"\" class=\"cart\">\n                                            <i class=\"ti-shopping-cart\"></i>\n                                        </a>\n                                    </h2>\n                                </div>\n                            </div>\n                        </td>\n                        <td><h2>$63.00</h2></td>\n                        <td >\n                            <p>in stock</p>\n                        </td>\n                        <td>\n                            <a [routerLink]=\"\" class=\"icon mr-3\">\n                                <i class=\"ti-close\"></i>\n                            </a>\n                            <a [routerLink]=\"\" class=\"cart\">\n                                <i class=\"ti-shopping-cart\"></i>\n                            </a>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"row wishlist-buttons\">\n            <div class=\"col-12\">\n                <a [routerLink]=\"\" class=\"btn btn-solid\">continue shopping</a>\n                <a [routerLink]=\"\" class=\"btn btn-solid\">check out</a>\n            </div>\n        </div>\n    </div>\n</section>\n<!--section end-->"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        // Testimonial Carousel
        this.testimonial = [{
                image: 'assets/images/avtar.jpg',
                name: 'Mark jkcno',
                designation: 'Designer',
                description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
            }, {
                image: 'assets/images/2.jpg',
                name: 'Adegoke Yusuff',
                designation: 'Content Writer',
                description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
            }, {
                image: 'assets/images/avtar.jpg',
                name: 'John Shipmen',
                designation: 'Lead Developer',
                description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
            }];
        // Teastimonial Slick slider config
        this.testimonialSliderConfig = {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        // Team 
        this.team = [{
                image: 'assets/images/team/1.jpg',
                name: 'Mark jkcno',
                designation: 'Designer'
            }, {
                image: 'assets/images/team/2.jpg',
                name: 'Adegoke Yusuff',
                designation: 'Content Writer'
            }, {
                image: 'assets/images/team/3.jpg',
                name: 'John Shipmen',
                designation: 'Lead Developer'
            }, {
                image: 'assets/images/team/4.jpg',
                name: 'Hileri Keol',
                designation: 'CEO & Founder at Company'
            }, {
                image: 'assets/images/team/3.jpg',
                name: 'John Shipmen',
                designation: 'Lead Developer'
            }];
        // Team Slick slider config
        this.teamSliderConfig = {
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 586,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/pages/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/pages/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/pages/checkout/checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/collection/collection.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/collection/collection.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/collection/collection.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/collection/collection.component.ts ***!
  \**********************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollectionComponent = /** @class */ (function () {
    function CollectionComponent() {
    }
    CollectionComponent.prototype.ngOnInit = function () {
    };
    CollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collection',
            template: __webpack_require__(/*! raw-loader!./collection.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/collection/collection.component.html"),
            styles: [__webpack_require__(/*! ./collection.component.scss */ "./src/app/pages/collection/collection.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/pages/compare/compare.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/compare/compare.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhcmUvY29tcGFyZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/compare/compare.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/compare/compare.component.ts ***!
  \****************************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompareComponent = /** @class */ (function () {
    function CompareComponent() {
    }
    CompareComponent.prototype.ngOnInit = function () {
    };
    CompareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! raw-loader!./compare.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/compare/compare.component.html"),
            styles: [__webpack_require__(/*! ./compare.component.scss */ "./src/app/pages/compare/compare.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompareComponent);
    return CompareComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/pages/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/error-page/error-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/error-page/error-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/pages/error-page/error-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/faq/faq.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/pages/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/pages/forget-password/forget-password.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/forget-password/forget-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent() {
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.scss */ "./src/app/pages/forget-password/forget-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/lookbook/lookbook.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/lookbook/lookbook.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvb2tib29rL2xvb2tib29rLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/lookbook/lookbook.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/lookbook/lookbook.component.ts ***!
  \******************************************************/
/*! exports provided: LookbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookbookComponent", function() { return LookbookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LookbookComponent = /** @class */ (function () {
    function LookbookComponent() {
    }
    LookbookComponent.prototype.ngOnInit = function () {
    };
    LookbookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lookbook',
            template: __webpack_require__(/*! raw-loader!./lookbook.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/lookbook/lookbook.component.html"),
            styles: [__webpack_require__(/*! ./lookbook.component.scss */ "./src/app/pages/lookbook/lookbook.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LookbookComponent);
    return LookbookComponent;
}());



/***/ }),

/***/ "./src/app/pages/order-success/order-success.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/order-success/order-success.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLXN1Y2Nlc3Mvb3JkZXItc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/order-success/order-success.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/order-success/order-success.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! raw-loader!./order-success.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.scss */ "./src/app/pages/order-success/order-success.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/pages/error-page/error-page.component.ts");
/* harmony import */ var _lookbook_lookbook_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lookbook/lookbook.component */ "./src/app/pages/lookbook/lookbook.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/pages/wishlist/wishlist.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _collection_collection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collection/collection.component */ "./src/app/pages/collection/collection.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/pages/forget-password/forget-password.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./compare/compare.component */ "./src/app/pages/compare/compare.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/pages/order-success/order-success.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/pages/typography/typography.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _portfolio_grid_two_col_grid_two_col_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./portfolio/grid-two-col/grid-two-col.component */ "./src/app/pages/portfolio/grid-two-col/grid-two-col.component.ts");
/* harmony import */ var _portfolio_grid_three_col_grid_three_col_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./portfolio/grid-three-col/grid-three-col.component */ "./src/app/pages/portfolio/grid-three-col/grid-three-col.component.ts");
/* harmony import */ var _portfolio_grid_four_col_grid_four_col_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./portfolio/grid-four-col/grid-four-col.component */ "./src/app/pages/portfolio/grid-four-col/grid-four-col.component.ts");
/* harmony import */ var _portfolio_masonary_two_grid_masonary_two_grid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./portfolio/masonary-two-grid/masonary-two-grid.component */ "./src/app/pages/portfolio/masonary-two-grid/masonary-two-grid.component.ts");
/* harmony import */ var _portfolio_masonary_three_grid_masonary_three_grid_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./portfolio/masonary-three-grid/masonary-three-grid.component */ "./src/app/pages/portfolio/masonary-three-grid/masonary-three-grid.component.ts");
/* harmony import */ var _portfolio_masonary_four_grid_masonary_four_grid_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./portfolio/masonary-four-grid/masonary-four-grid.component */ "./src/app/pages/portfolio/masonary-four-grid/masonary-four-grid.component.ts");
/* harmony import */ var _portfolio_masonary_fullwidth_masonary_fullwidth_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./portfolio/masonary-fullwidth/masonary-fullwidth.component */ "./src/app/pages/portfolio/masonary-fullwidth/masonary-fullwidth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// Portfolio Page







var routes = [
    {
        path: '',
        children: [
            {
                path: 'about-us',
                component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"]
            },
            {
                path: '404',
                component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"]
            },
            {
                path: 'lookbook',
                component: _lookbook_lookbook_component__WEBPACK_IMPORTED_MODULE_4__["LookbookComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            },
            {
                path: 'search',
                component: _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]
            },
            {
                path: 'wishlist',
                component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_8__["WishlistComponent"]
            },
            {
                path: 'cart',
                component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"]
            },
            {
                path: 'collection',
                component: _collection_collection_component__WEBPACK_IMPORTED_MODULE_10__["CollectionComponent"]
            },
            {
                path: 'forgetpassword',
                component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgetPasswordComponent"]
            },
            {
                path: 'contact',
                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]
            },
            {
                path: 'checkout',
                component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"]
            },
            {
                path: 'compare',
                component: _compare_compare_component__WEBPACK_IMPORTED_MODULE_14__["CompareComponent"]
            },
            {
                path: 'order-success',
                component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_15__["OrderSuccessComponent"]
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"]
            },
            {
                path: 'typography',
                component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_17__["TypographyComponent"]
            },
            {
                path: 'faq',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_18__["FaqComponent"]
            },
            {
                path: 'grid/two/column',
                component: _portfolio_grid_two_col_grid_two_col_component__WEBPACK_IMPORTED_MODULE_19__["GridTwoColComponent"]
            },
            {
                path: 'grid/three/column',
                component: _portfolio_grid_three_col_grid_three_col_component__WEBPACK_IMPORTED_MODULE_20__["GridThreeColComponent"]
            },
            {
                path: 'grid/four/column',
                component: _portfolio_grid_four_col_grid_four_col_component__WEBPACK_IMPORTED_MODULE_21__["GridFourColComponent"]
            },
            {
                path: 'grid/two/masonary',
                component: _portfolio_masonary_two_grid_masonary_two_grid_component__WEBPACK_IMPORTED_MODULE_22__["MasonaryTwoGridComponent"]
            },
            {
                path: 'grid/three/masonary',
                component: _portfolio_masonary_three_grid_masonary_three_grid_component__WEBPACK_IMPORTED_MODULE_23__["MasonaryThreeGridComponent"]
            },
            {
                path: 'grid/four/masonary',
                component: _portfolio_masonary_four_grid_masonary_four_grid_component__WEBPACK_IMPORTED_MODULE_24__["MasonaryFourGridComponent"]
            },
            {
                path: 'fullwidth/masonary',
                component: _portfolio_masonary_fullwidth_masonary_fullwidth_component__WEBPACK_IMPORTED_MODULE_25__["MasonaryFullwidthComponent"]
            }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var ngx_isotope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-isotope */ "./node_modules/ngx-isotope/ngx-isotope.umd.js");
/* harmony import */ var ngx_isotope__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_isotope__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/pages/error-page/error-page.component.ts");
/* harmony import */ var _lookbook_lookbook_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lookbook/lookbook.component */ "./src/app/pages/lookbook/lookbook.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/pages/wishlist/wishlist.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _collection_collection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collection/collection.component */ "./src/app/pages/collection/collection.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/pages/forget-password/forget-password.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./compare/compare.component */ "./src/app/pages/compare/compare.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/pages/order-success/order-success.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/pages/typography/typography.component.ts");
/* harmony import */ var _portfolio_grid_two_col_grid_two_col_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./portfolio/grid-two-col/grid-two-col.component */ "./src/app/pages/portfolio/grid-two-col/grid-two-col.component.ts");
/* harmony import */ var _portfolio_grid_three_col_grid_three_col_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./portfolio/grid-three-col/grid-three-col.component */ "./src/app/pages/portfolio/grid-three-col/grid-three-col.component.ts");
/* harmony import */ var _portfolio_grid_four_col_grid_four_col_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./portfolio/grid-four-col/grid-four-col.component */ "./src/app/pages/portfolio/grid-four-col/grid-four-col.component.ts");
/* harmony import */ var _portfolio_masonary_two_grid_masonary_two_grid_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./portfolio/masonary-two-grid/masonary-two-grid.component */ "./src/app/pages/portfolio/masonary-two-grid/masonary-two-grid.component.ts");
/* harmony import */ var _portfolio_masonary_three_grid_masonary_three_grid_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./portfolio/masonary-three-grid/masonary-three-grid.component */ "./src/app/pages/portfolio/masonary-three-grid/masonary-three-grid.component.ts");
/* harmony import */ var _portfolio_masonary_four_grid_masonary_four_grid_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./portfolio/masonary-four-grid/masonary-four-grid.component */ "./src/app/pages/portfolio/masonary-four-grid/masonary-four-grid.component.ts");
/* harmony import */ var _portfolio_masonary_fullwidth_masonary_fullwidth_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./portfolio/masonary-fullwidth/masonary-fullwidth.component */ "./src/app/pages/portfolio/masonary-fullwidth/masonary-fullwidth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselModule"],
                ngx_isotope__WEBPACK_IMPORTED_MODULE_4__["IsotopeModule"]
            ],
            declarations: [
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"],
                _lookbook_lookbook_component__WEBPACK_IMPORTED_MODULE_7__["LookbookComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__["WishlistComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
                _collection_collection_component__WEBPACK_IMPORTED_MODULE_13__["CollectionComponent"],
                _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_14__["ForgetPasswordComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"],
                _compare_compare_component__WEBPACK_IMPORTED_MODULE_17__["CompareComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_18__["OrderSuccessComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_20__["FaqComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_21__["TypographyComponent"],
                _portfolio_grid_two_col_grid_two_col_component__WEBPACK_IMPORTED_MODULE_22__["GridTwoColComponent"],
                _portfolio_grid_three_col_grid_three_col_component__WEBPACK_IMPORTED_MODULE_23__["GridThreeColComponent"],
                _portfolio_grid_four_col_grid_four_col_component__WEBPACK_IMPORTED_MODULE_24__["GridFourColComponent"],
                _portfolio_masonary_two_grid_masonary_two_grid_component__WEBPACK_IMPORTED_MODULE_25__["MasonaryTwoGridComponent"],
                _portfolio_masonary_three_grid_masonary_three_grid_component__WEBPACK_IMPORTED_MODULE_26__["MasonaryThreeGridComponent"],
                _portfolio_masonary_four_grid_masonary_four_grid_component__WEBPACK_IMPORTED_MODULE_27__["MasonaryFourGridComponent"],
                _portfolio_masonary_fullwidth_masonary_fullwidth_component__WEBPACK_IMPORTED_MODULE_28__["MasonaryFullwidthComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/portfolio/grid-four-col/grid-four-col.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/portfolio/grid-four-col/grid-four-col.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9ncmlkLWZvdXItY29sL2dyaWQtZm91ci1jb2wuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/portfolio/grid-four-col/grid-four-col.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/portfolio/grid-four-col/grid-four-col.component.ts ***!
  \**************************************************************************/
/*! exports provided: GridFourColComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFourColComponent", function() { return GridFourColComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridFourColComponent = /** @class */ (function () {
    function GridFourColComponent() {
        $.getScript('assets/js/portfolio.js');
    }
    GridFourColComponent.prototype.ngAfterViewInit = function () {
        $(this.galleryElement.nativeElement).magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title') + ' &middot;';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gallery', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GridFourColComponent.prototype, "galleryElement", void 0);
    GridFourColComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-four-col',
            template: __webpack_require__(/*! raw-loader!./grid-four-col.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/grid-four-col/grid-four-col.component.html"),
            styles: [__webpack_require__(/*! ./grid-four-col.component.scss */ "./src/app/pages/portfolio/grid-four-col/grid-four-col.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridFourColComponent);
    return GridFourColComponent;
}());



/***/ }),

/***/ "./src/app/pages/portfolio/grid-three-col/grid-three-col.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/portfolio/grid-three-col/grid-three-col.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9ncmlkLXRocmVlLWNvbC9ncmlkLXRocmVlLWNvbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/portfolio/grid-three-col/grid-three-col.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/portfolio/grid-three-col/grid-three-col.component.ts ***!
  \****************************************************************************/
/*! exports provided: GridThreeColComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridThreeColComponent", function() { return GridThreeColComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridThreeColComponent = /** @class */ (function () {
    function GridThreeColComponent() {
        $.getScript('assets/js/portfolio.js');
    }
    GridThreeColComponent.prototype.ngAfterViewInit = function () {
        $(this.galleryElement.nativeElement).magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title') + ' &middot;';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gallery', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GridThreeColComponent.prototype, "galleryElement", void 0);
    GridThreeColComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-three-col',
            template: __webpack_require__(/*! raw-loader!./grid-three-col.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/grid-three-col/grid-three-col.component.html"),
            styles: [__webpack_require__(/*! ./grid-three-col.component.scss */ "./src/app/pages/portfolio/grid-three-col/grid-three-col.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridThreeColComponent);
    return GridThreeColComponent;
}());



/***/ }),

/***/ "./src/app/pages/portfolio/grid-two-col/grid-two-col.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/portfolio/grid-two-col/grid-two-col.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9ncmlkLXR3by1jb2wvZ3JpZC10d28tY29sLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/portfolio/grid-two-col/grid-two-col.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/portfolio/grid-two-col/grid-two-col.component.ts ***!
  \************************************************************************/
/*! exports provided: GridTwoColComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridTwoColComponent", function() { return GridTwoColComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridTwoColComponent = /** @class */ (function () {
    function GridTwoColComponent() {
        $.getScript('assets/js/portfolio.js');
    }
    GridTwoColComponent.prototype.ngAfterViewInit = function () {
        $(this.galleryElement.nativeElement).magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title') + ' &middot;';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gallery', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GridTwoColComponent.prototype, "galleryElement", void 0);
    GridTwoColComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-two-col',
            template: __webpack_require__(/*! raw-loader!./grid-two-col.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/grid-two-col/grid-two-col.component.html"),
            styles: [__webpack_require__(/*! ./grid-two-col.component.scss */ "./src/app/pages/portfolio/grid-two-col/grid-two-col.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridTwoColComponent);
    return GridTwoColComponent;
}());



/***/ }),

/***/ "./src/app/pages/portfolio/masonary-four-grid/masonary-four-grid.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/portfolio/masonary-four-grid/masonary-four-grid.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9tYXNvbmFyeS1mb3VyLWdyaWQvbWFzb25hcnktZm91ci1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/portfolio/masonary-four-grid/masonary-four-grid.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/portfolio/masonary-four-grid/masonary-four-grid.component.ts ***!
  \************************************************************************************/
/*! exports provided: MasonaryFourGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasonaryFourGridComponent", function() { return MasonaryFourGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasonaryFourGridComponent = /** @class */ (function () {
    function MasonaryFourGridComponent() {
    }
    MasonaryFourGridComponent.prototype.ngOnInit = function () {
        $.getScript('assets/js/masonary.js');
    };
    MasonaryFourGridComponent.prototype.ngAfterViewInit = function () {
        $(this.galleryElement.nativeElement).magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title') + ' &middot;';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gallery', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MasonaryFourGridComponent.prototype, "galleryElement", void 0);
    MasonaryFourGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masonary-four-grid',
            template: __webpack_require__(/*! raw-loader!./masonary-four-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/masonary-four-grid/masonary-four-grid.component.html"),
            styles: [__webpack_require__(/*! ./masonary-four-grid.component.scss */ "./src/app/pages/portfolio/masonary-four-grid/masonary-four-grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MasonaryFourGridComponent);
    return MasonaryFourGridComponent;
}());



/***/ }),

/***/ "./src/app/pages/portfolio/masonary-fullwidth/masonary-fullwidth.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/portfolio/masonary-fullwidth/masonary-fullwidth.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9tYXNvbmFyeS1mdWxsd2lkdGgvbWFzb25hcnktZnVsbHdpZHRoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/portfolio/masonary-fullwidth/masonary-fullwidth.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/portfolio/masonary-fullwidth/masonary-fullwidth.component.ts ***!
  \************************************************************************************/
/*! exports provided: MasonaryFullwidthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasonaryFullwidthComponent", function() { return MasonaryFullwidthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasonaryFullwidthComponent = /** @class */ (function () {
    function MasonaryFullwidthComponent() {
    }
    MasonaryFullwidthComponent.prototype.ngOnInit = function () {
        $.getScript('assets/js/masonary.js');
    };
    MasonaryFullwidthComponent.prototype.ngAfterViewInit = function () {
        $(this.galleryElement.nativeElement).magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title') + ' &middot;';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gallery', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MasonaryFullwidthComponent.prototype, "galleryElement", void 0);
    MasonaryFullwidthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masonary-fullwidth',
            template: __webpack_require__(/*! raw-loader!./masonary-fullwidth.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/masonary-fullwidth/masonary-fullwidth.component.html"),
            styles: [__webpack_require__(/*! ./masonary-fullwidth.component.scss */ "./src/app/pages/portfolio/masonary-fullwidth/masonary-fullwidth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MasonaryFullwidthComponent);
    return MasonaryFullwidthComponent;
}());



/***/ }),

/***/ "./src/app/pages/portfolio/masonary-three-grid/masonary-three-grid.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/portfolio/masonary-three-grid/masonary-three-grid.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9tYXNvbmFyeS10aHJlZS1ncmlkL21hc29uYXJ5LXRocmVlLWdyaWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/portfolio/masonary-three-grid/masonary-three-grid.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/portfolio/masonary-three-grid/masonary-three-grid.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MasonaryThreeGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasonaryThreeGridComponent", function() { return MasonaryThreeGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasonaryThreeGridComponent = /** @class */ (function () {
    function MasonaryThreeGridComponent() {
    }
    MasonaryThreeGridComponent.prototype.ngOnInit = function () {
        $.getScript('assets/js/masonary.js');
    };
    MasonaryThreeGridComponent.prototype.ngAfterViewInit = function () {
        $(this.galleryElement.nativeElement).magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title') + ' &middot;';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gallery', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MasonaryThreeGridComponent.prototype, "galleryElement", void 0);
    MasonaryThreeGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masonary-three-grid',
            template: __webpack_require__(/*! raw-loader!./masonary-three-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/masonary-three-grid/masonary-three-grid.component.html"),
            styles: [__webpack_require__(/*! ./masonary-three-grid.component.scss */ "./src/app/pages/portfolio/masonary-three-grid/masonary-three-grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MasonaryThreeGridComponent);
    return MasonaryThreeGridComponent;
}());



/***/ }),

/***/ "./src/app/pages/portfolio/masonary-two-grid/masonary-two-grid.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/portfolio/masonary-two-grid/masonary-two-grid.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9tYXNvbmFyeS10d28tZ3JpZC9tYXNvbmFyeS10d28tZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/portfolio/masonary-two-grid/masonary-two-grid.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/portfolio/masonary-two-grid/masonary-two-grid.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MasonaryTwoGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasonaryTwoGridComponent", function() { return MasonaryTwoGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasonaryTwoGridComponent = /** @class */ (function () {
    function MasonaryTwoGridComponent() {
    }
    MasonaryTwoGridComponent.prototype.ngOnInit = function () {
        $.getScript('assets/js/masonary.js');
    };
    MasonaryTwoGridComponent.prototype.ngAfterViewInit = function () {
        $(this.galleryElement.nativeElement).magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title') + ' &middot;';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gallery', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MasonaryTwoGridComponent.prototype, "galleryElement", void 0);
    MasonaryTwoGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masonary-two-grid',
            template: __webpack_require__(/*! raw-loader!./masonary-two-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/portfolio/masonary-two-grid/masonary-two-grid.component.html"),
            styles: [__webpack_require__(/*! ./masonary-two-grid.component.scss */ "./src/app/pages/portfolio/masonary-two-grid/masonary-two-grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MasonaryTwoGridComponent);
    return MasonaryTwoGridComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/typography/typography.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/typography/typography.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/typography/typography.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/typography/typography.component.ts ***!
  \**********************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/pages/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.component.ts ***!
  \******************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WishlistComponent = /** @class */ (function () {
    function WishlistComponent() {
    }
    WishlistComponent.prototype.ngOnInit = function () {
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! raw-loader!./wishlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/pages/wishlist/wishlist.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map