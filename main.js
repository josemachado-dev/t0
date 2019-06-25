(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_model/storybit.ts":
/*!************************************!*\
  !*** ./src/app/_model/storybit.ts ***!
  \************************************/
/*! exports provided: StoryBit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryBit", function() { return StoryBit; });
var StoryBit = /** @class */ (function () {
    function StoryBit() {
    }
    return StoryBit;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'flash': flash}\">\r\n\r\n</div>\r\n\r\n<div class=\"centered\">\r\n\r\n  <app-name-input\r\n    (name)=\"setPlayerName($event)\"\r\n  ></app-name-input>\r\n  \r\n  <ng-container *ngFor=\"let storyPiece of story\">\r\n    <app-section-image-left-text-right\r\n      imageSelectSrc=\"assets/media/game/day_2_start__choice_day_2_closed_curtains.png\"\r\n      [storyBit]=\"storyPiece\"\r\n      (choice)=\"onNext($event)\"\r\n    ></app-section-image-left-text-right>\r\n  </ng-container>\r\n\r\n</div>\r\n"

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
/* harmony import */ var src_stories_small_story__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/stories/small_story */ "./src/stories/small_story.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ggj2019';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.setPlayerName = function (name) {
        this.story = [Object(src_stories_small_story__WEBPACK_IMPORTED_MODULE_2__["buildStory"])()];
        this.playerName = name;
    };
    AppComponent.prototype.onNext = function (nextStory) {
        var _this = this;
        this.story.unshift(nextStory);
        this.flash = true;
        setTimeout(function () {
            _this.flash = false;
        }, 500);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _section_image_only_section_image_only_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section-image-only/section-image-only.component */ "./src/app/section-image-only/section-image-only.component.ts");
/* harmony import */ var _section_image_left_text_right_section_image_left_text_right_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section-image-left-text-right/section-image-left-text-right.component */ "./src/app/section-image-left-text-right/section-image-left-text-right.component.ts");
/* harmony import */ var _name_input_name_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./name-input/name-input.component */ "./src/app/name-input/name-input.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _section_image_only_section_image_only_component__WEBPACK_IMPORTED_MODULE_4__["SectionImageOnlyComponent"],
                _section_image_left_text_right_section_image_left_text_right_component__WEBPACK_IMPORTED_MODULE_5__["SectionImageLeftTextRightComponent"],
                _name_input_name_input_component__WEBPACK_IMPORTED_MODULE_6__["NameInputComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/name-input/name-input.component.css":
/*!*****************************************************!*\
  !*** ./src/app/name-input/name-input.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.centerText{\r\n    text-align: center;\r\n}\r\n\r\n.name {\r\n    font-size: 5em;\r\n}\r\n\r\na {\r\n    font-size: 1.5em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFtZS1pbnB1dC9uYW1lLWlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL25hbWUtaW5wdXQvbmFtZS1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jZW50ZXJUZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/name-input/name-input.component.html":
/*!******************************************************!*\
  !*** ./src/app/name-input/name-input.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!hasSubmited\">\n  <div class=\"centerText\">\n    <p class=\"name\"> Who are you?</p>\n    <input autofocus [(ngModel)]=\"playerName\" >\n    <p>\n      <a\n        (click)=\"play()\"\n        [innerHTML]=\"submitButtonText[0]\"\n      ></a>\n    </p>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/name-input/name-input.component.ts":
/*!****************************************************!*\
  !*** ./src/app/name-input/name-input.component.ts ***!
  \****************************************************/
/*! exports provided: NameInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameInputComponent", function() { return NameInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NameInputComponent = /** @class */ (function () {
    function NameInputComponent() {
        this.hasSubmited = false;
        this.playerName = "";
        this.submitButtonText = [
            "I am certain of myself!",
            "I know myself.",
            "I'm unsure of myself...",
            "...Who am I, really?<br><span class='footnote'> Write a name</span>"
        ];
        this.name = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NameInputComponent.prototype.ngOnInit = function () {
    };
    NameInputComponent.prototype.play = function () {
        if (this.playerName != "" && this.playerName != undefined) {
            this.hasSubmited = true;
            this.name.emit(this.playerName);
            //this.toggleFullscreen();
        }
        else {
            if (this.submitButtonText.length > 1) {
                this.submitButtonText.shift();
            }
        }
    };
    NameInputComponent.prototype.toggleFullscreen = function () {
        var elem = document.querySelector("body");
        if (!document.fullscreenElement) {
            elem.requestFullscreen().then(function () { }).catch(function (err) {
                alert("Error attempting to enable full-screen mode: " + err.message + " (" + err.name + ")");
            });
        }
        else {
            document.exitFullscreen();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NameInputComponent.prototype, "name", void 0);
    NameInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-name-input',
            template: __webpack_require__(/*! ./name-input.component.html */ "./src/app/name-input/name-input.component.html"),
            styles: [__webpack_require__(/*! ./name-input.component.css */ "./src/app/name-input/name-input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NameInputComponent);
    return NameInputComponent;
}());



/***/ }),

/***/ "./src/app/section-image-left-text-right/section-image-left-text-right.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/section-image-left-text-right/section-image-left-text-right.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aligned-left {\r\n    float: left;\r\n    width: 70%;\r\n}\r\n\r\n.text-aligned-right {\r\n    float: right;\r\n    width: 30%;\r\n    top: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    text-align: justify;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi1pbWFnZS1sZWZ0LXRleHQtcmlnaHQvc2VjdGlvbi1pbWFnZS1sZWZ0LXRleHQtcmlnaHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24taW1hZ2UtbGVmdC10ZXh0LXJpZ2h0L3NlY3Rpb24taW1hZ2UtbGVmdC10ZXh0LXJpZ2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxpZ25lZC1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLnRleHQtYWxpZ25lZC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/section-image-left-text-right/section-image-left-text-right.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/section-image-left-text-right/section-image-left-text-right.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ratio-4-3\">\r\n  <img \r\n    id=\"img_{{storyBit.id}}\"\r\n    class=\"aligned-left\"\r\n    src=\"assets/media/game/{{storyBit.image}}\"\r\n    [attr.usemap]=\"'#' + storyBit.id\"\r\n    >\r\n  <div class=\"text-aligned-right\">\r\n    <p [innerHTML]=\"storyBit.description\"></p>\r\n    <ng-container *ngIf=\"hasChosen == -1\">\r\n      <p\r\n        class=\"choice-text\"\r\n        *ngFor=\"let nextBit of storyBit.nextBits; index as i\"\r\n      >\r\n        <a\r\n          (click)=\"chosen(i)\"\r\n        >{{nextBit.choiceText}}</a>\r\n      </p>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"hasChosen != -1\">\r\n      <p [innerHTML]=\"storyBit.nextBits[hasChosen].resultText\"></p>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<map [name]=\"storyBit.id\">\r\n  <ng-container *ngFor=\"let nextBit of storyBit.nextBits; index as i\" >\r\n    <area \r\n      *ngIf=\"hasChosen == -1 && nextBit.choiceCoords\"\r\n      (click)=\"chosen(i)\"\r\n      (mouseenter) =\"mouseEnter('div a')\"\r\n      shape=\"circle\"\r\n      [coords]=\"nextBit.choiceCoords.join(',')\"\r\n      [attr.name]=\"nextBit.id\"\r\n      href=\"#\"\r\n    >\r\n  </ng-container>\r\n</map>"

/***/ }),

/***/ "./src/app/section-image-left-text-right/section-image-left-text-right.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/section-image-left-text-right/section-image-left-text-right.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SectionImageLeftTextRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionImageLeftTextRightComponent", function() { return SectionImageLeftTextRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_storybit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_model/storybit */ "./src/app/_model/storybit.ts");



var SectionImageLeftTextRightComponent = /** @class */ (function () {
    function SectionImageLeftTextRightComponent() {
        this.choice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slide = false;
        this.hasChosen = -1;
    }
    SectionImageLeftTextRightComponent.prototype.ngOnInit = function () {
    };
    SectionImageLeftTextRightComponent.prototype.ngAfterViewInit = function () {
        console.log("here we go");
        var areas = this.storyBit.nextBits.map(function (nextBit) {
            return {
                key: "" + nextBit.id,
                fillColor: "ffffff",
                toolTip: nextBit.choiceText,
            };
        });
        console.log(areas);
        this.map = $("#img_" + this.storyBit.id).mapster({
            // fillOpacity: 1.0,
            fillOpacity: 0.1,
            // fillColor: "d42e16",
            // stroke: false,
            // strokeColor: "ffffff",
            // strokeOpacity: 0.4,
            // strokeWidth: 4,
            fadeDuration: 80,
            singleSelect: true,
            mapKey: 'name',
            // render_highlight: {
            //   fillColor: '2aff00',
            //   stroke: false,
            //   altImage: this.imageSelectSrc
            // },
            // render_select: {
            //     fillColor: 'ff000c',
            //     stroke: false,
            //     altImage: this.imageSelectSrc
            // },
            showToolTip: true,
            toolTipClose: ["area-mouseout"],
            areas: areas,
        });
        console.log(this.map);
    };
    SectionImageLeftTextRightComponent.prototype.mouseEnter = function (s) {
        console.log(s);
    };
    SectionImageLeftTextRightComponent.prototype.chosen = function (choice) {
        this.slide = true;
        this.choice.emit(this.storyBit.nextBits[choice]);
        this.hasChosen = choice;
        $("#img_" + this.storyBit.id).mapster('tooltip');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SectionImageLeftTextRightComponent.prototype, "imageSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SectionImageLeftTextRightComponent.prototype, "imageSelectSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SectionImageLeftTextRightComponent.prototype, "textRight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SectionImageLeftTextRightComponent.prototype, "textChoiceResult", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_storybit__WEBPACK_IMPORTED_MODULE_2__["StoryBit"])
    ], SectionImageLeftTextRightComponent.prototype, "storyBit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SectionImageLeftTextRightComponent.prototype, "choice", void 0);
    SectionImageLeftTextRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-image-left-text-right',
            template: __webpack_require__(/*! ./section-image-left-text-right.component.html */ "./src/app/section-image-left-text-right/section-image-left-text-right.component.html"),
            styles: [__webpack_require__(/*! ./section-image-left-text-right.component.css */ "./src/app/section-image-left-text-right/section-image-left-text-right.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SectionImageLeftTextRightComponent);
    return SectionImageLeftTextRightComponent;
}());



/***/ }),

/***/ "./src/app/section-image-only/section-image-only.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/section-image-only/section-image-only.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24taW1hZ2Utb25seS9zZWN0aW9uLWltYWdlLW9ubHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/section-image-only/section-image-only.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/section-image-only/section-image-only.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"clicked()\" class=\"ratio-4-3\" >\r\n    <img class=\"full-width\" src=\"{{imageSrc}}\">\r\n</div>"

/***/ }),

/***/ "./src/app/section-image-only/section-image-only.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/section-image-only/section-image-only.component.ts ***!
  \********************************************************************/
/*! exports provided: SectionImageOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionImageOnlyComponent", function() { return SectionImageOnlyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionImageOnlyComponent = /** @class */ (function () {
    function SectionImageOnlyComponent() {
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rotate = false;
    }
    SectionImageOnlyComponent.prototype.ngOnInit = function () {
    };
    SectionImageOnlyComponent.prototype.clicked = function () {
        this.rotate = true;
        this.next.emit("ToDo: send noods");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SectionImageOnlyComponent.prototype, "imageSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SectionImageOnlyComponent.prototype, "textShow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SectionImageOnlyComponent.prototype, "next", void 0);
    SectionImageOnlyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-image-only',
            template: __webpack_require__(/*! ./section-image-only.component.html */ "./src/app/section-image-only/section-image-only.component.html"),
            styles: [__webpack_require__(/*! ./section-image-only.component.css */ "./src/app/section-image-only/section-image-only.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SectionImageOnlyComponent);
    return SectionImageOnlyComponent;
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/stories/small_story.ts":
/*!************************************!*\
  !*** ./src/stories/small_story.ts ***!
  \************************************/
/*! exports provided: small_story, buildStory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "small_story", function() { return small_story; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStory", function() { return buildStory; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/stories/util.ts");

var small_story = [
    {
        id: "day_1_start",
        image: "day_1_start.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        I was let go from my job, today. They were firing people every month, I should be expecting this. Maybe moving here so suddenly was a bad idea. I don\u2019t know what to do with myself now.<br>I just want this day to end. I should go to bed and not think about this\u2026\n        ",
        choiceText: "_",
        resultText: "\n            _\n        ",
    },
    {
        id: "day_1_rest",
        image: "day_1_rest.png",
        imageDescription: "\n            _\n        ",
        description: "\n        I should get to sleep. Things are better when my head is rested.\n        ",
        choiceText: "Rest",
        choiceCoords: [834, 478, 250],
        resultText: "\n        I went to sleep.\n        ",
    },
    {
        id: "day_1_not_rest",
        image: "day_1_not_rest.png",
        imageDescription: "\n            _\n        ",
        description: "\n        Every hour seemed to be 3. My head doesn\u2019t stop spinning. Don\u2019t know what to do\u2026 maybe I should have taken a pill and slept this through.\n        ",
        choiceText: "Not Rest",
        choiceCoords: [0, 0, 400],
        resultText: "\n        I stayed up all night.\n        ",
    },
    /***** */
    {
        id: "day_2_curtains_start",
        image: "day_2_start.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        My head is freaking heavy. Getting up to have no place to go sucks. I don\u2019t feel like going anywhere. Don\u2019t want to see anyone. Guess I\u2019m staying\u2026\n        ",
        choiceText: "Next day",
        choiceCoords: [834, 478, 250],
        resultText: "\n            \n        ",
    },
    {
        id: "day_2_curtains_open",
        image: "day_2_open_curtains.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        I love how the sun gives me energy, it gives me a new perspective of my life. It almost feels a little brighter\u2026\n        ",
        choiceText: "Open Drapes",
        resultText: "\n        Sun shines through the room.\n        ",
    },
    {
        id: "day_2_curtains_closed",
        image: "day_2_closed_curtains.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        If I\u2019m not going anywhere, there\u2019s no reason to see the world outside, or to let it in.\n        ",
        choiceText: "Don't Open Drapes",
        resultText: "\n        Everything remains dark.\n        ",
    },
    {
        id: "day_2_bath_start_curtains_open",
        image: "day_2_open_curtains.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        I\u2019m having a lot of trouble staying on top of my life. Getting up sucks. I feel dizzy and tired all the time\u2026 now I\u2019m all that and broke.<br>A good shower might make everything more tolerable.\n        ",
        choiceText: "...",
        resultText: "\n        \n        ",
    },
    {
        id: "day_2_bath_takeshower_curtains_open",
        image: "day_2_open_curtains_open_wc.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        I was really in need of that shower, Jesus\u2026 I feel fresh and renewed, abler to deal with everything.        ",
        choiceText: "Take Shower",
        resultText: "\n        Took a good, hot, steamy shower.\n        ",
    },
    {
        id: "day_2_bath_donttakeshower_curtains_open",
        image: "day_2_open_curtains_closed_wc.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        I feel tired, without energy\u2026I don\u2019t feel like doing much.\n        ",
        choiceText: "Dont' Take Shower",
        resultText: "\n        Took a good, hot, steamy shower.\n        ",
    },
    {
        id: "day_2_bath_start",
        image: "day_2_start.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        I\u2019m having a lot of trouble staying on top of my life. Getting up sucks. I feel dizzy and tired all the time\u2026 now I\u2019m all that and broke.<br>A good shower might make everything more tolerable.\n        ",
        choiceText: "...",
        resultText: "\n        \n        ",
    },
    {
        id: "day_2_bath_takeshower",
        image: "day_2_closed_curtains_open_wc.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        I was really in need of that shower, Jesus\u2026 I feel fresh and renewed, abler to deal with everything.        ",
        choiceText: "Take Shower",
        resultText: "\n        Took a good, hot, steamy shower.\n        ",
    },
    {
        id: "day_2_bath_donttakeshower",
        image: "day_2_closed_curtains_closed_wc.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        I feel tired, without energy\u2026I don\u2019t feel like doing much.\n        ",
        choiceText: "Dont' Take Shower",
        resultText: "\n        Took a good, hot, steamy shower.\n        ",
    },
    {
        id: "day_2_phone_start",
        image: "phone_green.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        The loneliness I feel is breathtaking. My job was the last thing I had to keep me here and to hang on to. I quit my life for it, based my decisions in hope that money would make it better. Now he\u2019s far away, and I have nothing. No job, no one, no hope for a bright future anytime soon.<br>Should I call him? Maybe he can help me cope...\n        ",
        choiceText: "...",
        resultText: "\n        \n        ",
    },
    {
        id: "day_2_phone_call_nocurtains_nobath",
        image: "phone_red.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        No, he\u2019s not gonna talk to me\u2026 After I left the way I did I wouldn\u2019t wanna talk to me either\u2026\n        ",
        choiceText: "Call",
        resultText: "\n        Called him\n        ",
    },
    {
        id: "day_2_phone_call_onenotother",
        image: "phone_bad_response.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        *Phone Rings*<br>\n        __name__: \u201CHi?\u201D<br>\n        Gustav: \u201CAfter all this time, that\u2019s how you want to start this conversation?\u201D<br>\n        __name__: \u201CI\u2019m sorry\u2026I just\u2026 I needed to talk to you. I need you\u2026\u201D<br>\n        Gustav: \u201CWell\u2026I really don\u2019t think I can do this right now. I\u2019m sorry. Maybe I\u2019ll call you<br>\n        tomorrow or something\u2026\u201D<br>\n        __name__: \u201COk\u2026 I\u2019m sorry I bothered you.\u201D<br>\n        Gustav: \u201CTake care\u2026bye.\u201D<br>\n        *Beep*\n        ",
        choiceText: "Call",
        resultText: "\n        Called him\n        ",
    },
    {
        id: "day_2_phone_call_curtains_bath",
        image: "phone_green.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        *Phone Rings*<br>\n        __name__: \u201CHi?\u201D<br>\n        Gustav: \u201CHey you!\u201D<br>\n        __name__ \u201CI\u2019m sorry I\u2019m calling, I just\u2026I need you\u2026\u201D<br>\n        Gustav: \u201CI thought you would. It\u2019s fine. I\u2019m here. Are you ready to come back?\u201D<br>\n        __name__: \u201C\u2026 I don\u2019t know. I\u2019m lost, to be honest\u2026\u201D<br>\n        Gustav: \u201C__name__, that\u2019s fine. Just meet me, let\u2019s grab a cup of coffee. Are you free\nSaturday?\u201D\n        ",
        choiceText: "Call",
        resultText: "\n        Called him\n        ",
    },
    {
        id: "day_2_phone_dontcall",
        image: "phone_red.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        I feel tired, without energy\u2026 I don\u2019t feel like doing much.\u201D\n        ",
        choiceText: "Dont' Call",
        resultText: "\n        Didn't Called him\n        ",
    },
    {
        id: "day_2_end_nocall",
        image: "day_2_start.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        Staying alone in the dark will only help you dig deeper. Sometimes the extra effort to\n        get to a friend or someone we trust is a major leap to feel whole, to cope with all the\n        wrongs in our life. A hug, a good talk or just talking about other stuff with people you\n        love, is a great step to begin the change. Getting out of depression can be easier with a\n        little help from your friends\u2026 just talk to someone who listens.        ",
        choiceText: "...",
        resultText: "\n        \n        ",
    },
    {
        id: "day_2_end_nocurtain_nobath",
        image: "day_2_start.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        Staying alone in the dark will only help you dig deeper. Sometimes the extra effort to        get to a friend or someone we trust is a major leap to feel whole, to cope with all the wrongs in our life. A hug, a good talk or just talking about other stuff with people you     love, is a great step to begin the change. Getting out of depression can be easier with a   little help from your friends\u2026 just talk to someone who listens.        ",
        choiceText: "...",
        resultText: "\n        \n        ",
    },
    {
        id: "day_2_end_curtain_nobath",
        image: "day_2_start.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        By not showering you don\u2019t help your state, you are not giving a chance to yourself.     Taking care of yourself might be the first great step to feel confident to pick up the phone and to get ready to deal with the things in your life that need some change. It\u2019s normal to feel demoralised, so walk against those feelings. Freshen up and take a deep breath. Things will look a bit lighter then.\n        ",
        choiceText: "...",
        resultText: "\n        \n        ",
    },
    {
        id: "day_2_end_nocurtain_bath",
        image: "day_2_start.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        Taking a bath was a great step in your confidence. But sometimes it isn\u2019t enough to send a good message to the world. Let some light in\u2026 feel the heat in your skin, let it illuminate you and give you the strength that makes a positive impact in the world. What goes around comes around.\n        ",
        choiceText: "...",
        resultText: "\n        \n        ",
    },
    {
        id: "day_2_end_curtain_bath",
        image: "day_2_start.png",
        imageDescription: "\n        Quarto Base (1)\n        ",
        description: "\n        By showering and opening the curtains you show you are giving a chance to yourself and to the world, by opening your heart to it. The more you do to get you closer to the end of the tunnel, the quicker you get out of it and make changes happening. That is reflected in others. By making your life easier, you make yourself easier to help by people around you. Most often than not you get compensated by it.        ",
        choiceText: "...",
        resultText: "\n        \n        ",
    },
];
function buildStory() {
    var n = function (id, nextNodes) {
        if (nextNodes === void 0) { nextNodes = []; }
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])(small_story, id, nextNodes);
    };
    var end = n("end");
    var no_call = n("day_2_end_nocall", []);
    var arc_4 = n("day_2_phone_start", [
        n("day_2_phone_call_nocurtains_nobath", [
            n("day_2_end_call_nocurtains_nobath")
        ]),
        n("day_2_phone_call_onenotother", [
            n("day_2_end_call_onenotother")
        ]),
        n("day_2_phone_call_curtains_bath", [
            n("day_2_end_call_curtains_bath")
        ]),
        n("day_2_phone_dontcall", [no_call]),
    ]);
    var arc_3 = n("day_2_bath_start", [
        n("day_2_bath_takeshower", [arc_4]),
        n("day_2_bath_donttakeshower", [arc_4]),
    ]);
    var arc_2 = n("day_2_curtains_start", [
        n("day_2_curtains_open", [arc_3]),
        n("day_2_curtains_closed", [arc_3]),
    ]);
    var arc_1 = n("day_1_start", [
        n("day_1_rest", [arc_2]),
        n("day_1_not_rest", [arc_2]),
    ]);
    return arc_1;
}


/***/ }),

/***/ "./src/stories/util.ts":
/*!*****************************!*\
  !*** ./src/stories/util.ts ***!
  \*****************************/
/*! exports provided: findStoryBit, node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findStoryBit", function() { return findStoryBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "node", function() { return node; });
function findStoryBit(storyId, storyList) {
    return storyList.find(function (story) { return story.id == storyId; });
}
function node(storyBits, id, nextNodes) {
    if (nextNodes === void 0) { nextNodes = []; }
    var story = findStoryBit(id, storyBits);
    if (story != null) {
        if (nextNodes.length != 0) {
            story.nextBits = nextNodes;
        }
        return story;
    }
    else {
        console.error("story id not found: ", id);
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\Tibers\Desktop\GGJ2019\browser\ggj2019\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map