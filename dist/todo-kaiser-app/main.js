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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-overview></app-overview>"

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
        this.title = 'todo-kaiser-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/overview/overview.component */ "./src/app/components/overview/overview.component.ts");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-task/add-task.component */ "./src/app/components/add-task/add-task.component.ts");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/task/task.component */ "./src/app/components/task/task.component.ts");
/* harmony import */ var _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/auto-focus.directive */ "./src/app/directives/auto-focus.directive.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["OverviewComponent"],
                _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponent"],
                _components_task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"],
                _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_8__["AutoFocusDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-task/add-task.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-input\">\r\n\t<input\r\n\t\tclass=\"input-add-task\"\r\n\t\ttype=\"text\"\r\n\t\tplaceholder=\"Add your task here...\"\r\n\t\t(keyup)=\"onKey($event)\"\r\n\t\t[(ngModel)]=\"text\"\r\n\t\tappAutoFocus\r\n\t\t>\r\n\r\n\t<i class=\"icon\">&crarr;</i>\r\n</div>"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-input {\n  display: flex;\n  align-items: center;\n  box-shadow: #a0a0a0 0 2px 50px;\n  height: 44px;\n  border-radius: 8px;\n  overflow: hidden; }\n\n.input-add-task {\n  width: 100%;\n  height: 44px;\n  padding-left: 20px;\n  margin: 0;\n  border: 0; }\n\n.input-add-task:focus {\n    outline: none; }\n\n.icon {\n  margin-left: 10px;\n  font-size: 30px;\n  font-style: normal;\n  padding-right: 20px;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdGFzay9EOlxcc2l0ZXNcXGNvZGluZy1jaGFsbGVuZ2VfZWR1YXJkby9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWRkLXRhc2tcXGFkZC10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNoQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUyxFQUFBOztBQUxiO0lBUVEsYUFBYSxFQUFBOztBQUlyQjtFQUNDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlci1pbnB1dCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogI2EwYTBhMCAwIDJweCA1MHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmlucHV0LWFkZC10YXNrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pY29uIHtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/task-data.service */ "./src/app/services/task-data.service.ts");



var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(taskDataService) {
        this.taskDataService = taskDataService;
        this.text = '';
    }
    AddTaskComponent.prototype.ngOnInit = function () {
    };
    AddTaskComponent.prototype.onKey = function (event) {
        if (event.key === 'Enter' && this.text !== '') {
            this.taskDataService.createTask(this.text);
            this.text = '';
        }
    };
    AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/components/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.scss */ "./src/app/components/add-task/add-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_task_data_service__WEBPACK_IMPORTED_MODULE_2__["TaskDataService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/overview/overview.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/overview/overview.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-overview\">\r\n\t<app-add-task tabindex=\"-1\"></app-add-task>\r\n\r\n\t<ul class=\"wrapper-tasks\">\r\n\t\t<ng-container *ngFor=\"let task of taskList\">\r\n\t\t\t<li class=\"list-item\" *ngIf=\"task.status !== 'deleted'\">\r\n\t\t\t\t<app-task\r\n\t\t\t\t\t[task]=\"task\"\r\n\t\t\t\t\t(deleteTaskStart)=\"deleteTaskStart(task)\"\r\n\t\t\t\t\ttabindex=\"-1\"\r\n\t\t\t\t\t>\r\n                </app-task>\r\n            </li>\r\n\t\t</ng-container>\r\n\t</ul>\r\n</div>\r\n\r\n<div\r\n    class=\"modal-backdrop closed\"\r\n    (click)=\"closeModal()\"\r\n    [ngClass]=\"{open: modalOpen, closed: !modalOpen}\"\r\n    tabindex=\"-1\"\r\n    >\r\n</div>\r\n\r\n<div class=\"modal-wrapper closed\" [ngClass]=\"{open: modalOpen, closed: !modalOpen}\" tabindex=\"-1\">\r\n\t<div class=\"modal\" tabindex=\"-1\">\r\n\t\t<p tabindex=\"-1\">Are you sure you want to delete this task?</p>\r\n\r\n\t\t<p tabindex=\"-1\"><strong *ngIf=\"taskToDelete\">{{taskToDelete.text}}</strong></p>\r\n\r\n\t\t<div class=\"wrapper-buttons\" tabindex=\"-1\">\r\n\t\t\t<button [tabindex]=\"modalOpen ? 0 : -1\" class=\"button button-cancel\" (click)=\"closeModal()\" #buttonRef>No, sorry.</button>\r\n\t\t\t<button [tabindex]=\"modalOpen ? 0 : -1\" class=\"button button-delete\" (click)=\"confirmDeleteTask()\">Yes, delete\r\n\t\t\t\tit.</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/overview/overview.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/overview/overview.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper-overview {\n  width: 300px;\n  margin: 77px auto 0; }\n\n.wrapper-tasks {\n  margin: 32px 20px 100px;\n  text-align: left;\n  padding: 0; }\n\n.wrapper-tasks .list-item {\n    display: flex;\n    margin-bottom: 32px; }\n\n.wrapper-tasks .list-item:last-child {\n      margin-bottom: 0; }\n\n.modal-backdrop {\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  opacity: 0;\n  transition: opacity .3s;\n  transition-delay: .1s;\n  height: 0; }\n\n.modal-backdrop.open {\n    opacity: 1;\n    height: 100%; }\n\n.modal-backdrop.closed {\n    height: 0; }\n\n.modal-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity .3s;\n  transition-delay: .1s;\n  opacity: 0;\n  height: 0;\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  width: 100%;\n  overflow: hidden; }\n\n.modal-wrapper.open {\n    opacity: 1;\n    height: 100%; }\n\n.modal-wrapper.closed {\n    height: 0; }\n\n.modal-wrapper .modal {\n    background: white;\n    border-radius: 8px;\n    width: 300px;\n    padding: 20px; }\n\n.modal-wrapper .modal p:first-child {\n      margin-top: 0; }\n\n.modal-wrapper .wrapper-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    margin-top: 30px; }\n\n.modal-wrapper .wrapper-buttons .button {\n      border: 1px solid #ddd;\n      border-radius: 5px;\n      background: white;\n      padding: 5px 10px;\n      margin-left: 5px;\n      transition: background-color .3s;\n      cursor: pointer; }\n\n.modal-wrapper .wrapper-buttons .button:first-of-type {\n        margin: 0; }\n\n.modal-wrapper .wrapper-buttons .button:hover, .modal-wrapper .wrapper-buttons .button:focus, .modal-wrapper .wrapper-buttons .button:active {\n        background-color: #e6e5e5; }\n\n.modal-wrapper .wrapper-buttons .button:hover.button-delete, .modal-wrapper .wrapper-buttons .button:focus.button-delete, .modal-wrapper .wrapper-buttons .button:active.button-delete {\n          background-color: #8f0000; }\n\n.modal-wrapper .wrapper-buttons .button.button-delete {\n        background: #c20000;\n        color: white;\n        border-color: #c20000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdmVydmlldy9EOlxcc2l0ZXNcXGNvZGluZy1jaGFsbGVuZ2VfZWR1YXJkby9zcmNcXGFwcFxcY29tcG9uZW50c1xcb3ZlcnZpZXdcXG92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUhYO0lBTUUsYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQVByQjtNQVVHLGdCQUFnQixFQUFBOztBQUtuQjtFQUNDLDhCQUE2QjtFQUM3QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsU0FBUyxFQUFBOztBQVRWO0lBWUUsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFiZDtJQWlCRSxTQUFTLEVBQUE7O0FBSVg7RUFDQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQVpqQjtJQWVFLFVBQVU7SUFDVixZQUFZLEVBQUE7O0FBaEJkO0lBb0JFLFNBQVMsRUFBQTs7QUFwQlg7SUF3QkUsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYSxFQUFBOztBQTNCZjtNQThCRyxhQUFhLEVBQUE7O0FBOUJoQjtJQW1DRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQTs7QUF0Q2xCO01BeUNHLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsZ0NBQWdDO01BQ2hDLGVBQWUsRUFBQTs7QUEvQ2xCO1FBa0RJLFNBQVMsRUFBQTs7QUFsRGI7UUF3REkseUJBQW1DLEVBQUE7O0FBeER2QztVQTJESyx5QkFBcUMsRUFBQTs7QUEzRDFDO1FBZ0VJLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1oscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItb3ZlcnZpZXcge1xyXG5cdHdpZHRoOiAzMDBweDtcclxuXHRtYXJnaW46IDc3cHggYXV0byAwO1xyXG59XHJcblxyXG4ud3JhcHBlci10YXNrcyB7XHJcblx0bWFyZ2luOiAzMnB4IDIwcHggMTAwcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cclxuXHQubGlzdC1pdGVtIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG5cclxuXHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3Age1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAxMDtcclxuXHR0b3A6IDA7XHJcblx0b3BhY2l0eTogMDtcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcclxuXHR0cmFuc2l0aW9uLWRlbGF5OiAuMXM7XHJcblx0aGVpZ2h0OiAwO1xyXG5cclxuXHQmLm9wZW4ge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdCYuY2xvc2VkIHtcclxuXHRcdGhlaWdodDogMDtcclxuXHR9XHJcbn1cclxuXHJcbi5tb2RhbC13cmFwcGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcblx0dHJhbnNpdGlvbi1kZWxheTogLjFzO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAxMDtcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0Ji5vcGVuIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQmLmNsb3NlZCB7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0fVxyXG5cclxuXHQubW9kYWwge1xyXG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0XHR3aWR0aDogMzAwcHg7XHJcblx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cclxuXHRcdHA6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LndyYXBwZXItYnV0dG9ucyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuXHRcdC5idXR0b24ge1xyXG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRwYWRkaW5nOiA1cHggMTBweDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XHJcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblx0XHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmOmhvdmVyLFxyXG5cdFx0XHQmOmZvY3VzLFxyXG5cdFx0XHQmOmFjdGl2ZSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2VuKHdoaXRlLCAxMCk7XHJcblxyXG5cdFx0XHRcdCYuYnV0dG9uLWRlbGV0ZSB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oI2MyMDAwMCwgMTApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ji5idXR0b24tZGVsZXRlIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjYzIwMDAwO1xyXG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6ICNjMjAwMDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/overview/overview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/overview/overview.component.ts ***!
  \***********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/task-data.service */ "./src/app/services/task-data.service.ts");



var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(taskDataService) {
        this.taskDataService = taskDataService;
        this.modalOpen = false;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskList = this.taskDataService.taskList;
        this.taskDataService.$taskList.subscribe(function (taskList) {
            _this.taskList = taskList;
        });
    };
    OverviewComponent.prototype.deleteTaskStart = function (task) {
        this.taskToDelete = task;
        this.modalOpen = true;
        this.buttonRef.nativeElement.focus();
    };
    OverviewComponent.prototype.confirmDeleteTask = function () {
        this.taskDataService.deleteTask(this.taskToDelete);
        this.modalOpen = false;
    };
    OverviewComponent.prototype.closeModal = function () {
        this.modalOpen = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttonRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OverviewComponent.prototype, "buttonRef", void 0);
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/components/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/components/overview/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_task_data_service__WEBPACK_IMPORTED_MODULE_2__["TaskDataService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/task/task.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/task/task.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n\tclass=\"wrapper-task\"\n\t[ngClass]=\"{'checked': task.status === 'done'}\"\n\ttabindex=\"0\"\n\t(keyup)=\"onKey($event)\"\n\t>\n\t<div class=\"wrapper-clickable\" (click)=\"onTaskClick()\">\n\t\t<div class=\"wrapper-custom-checkbox\">\n\t\t\t<div class=\"custom-checkbox\">\n\t\t\t\t<img class=\"img-check\" src=\"assets/img/checkmark.svg\" />\n\t\t\t</div>\n\t\t</div>\n\n\t\t<span class=\"text\">{{ task.text }}</span>\n\t</div>\n\n\t<div class=\"wrapper-icon-delete\" (click)=\"deleteTask(task)\" appClickStopPropagation>\n\t\t<i class=\"icon icon-delete\">&times;</i>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/task/task.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/task/task.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes bounce {\n  0% {\n    transform: scale(1); }\n  0% {\n    transform: scale(1.5); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes bounce {\n  0% {\n    transform: scale(1); }\n  0% {\n    transform: scale(1.5); }\n  100% {\n    transform: scale(1); } }\n\n.wrapper-task {\n  display: flex;\n  cursor: pointer;\n  outline: none;\n  -webkit-animation: bounce .1s;\n          animation: bounce .1s;\n  /* IE 10+, Fx 29+ */ }\n\n.wrapper-task:hover .wrapper-custom-checkbox, .wrapper-task:focus .wrapper-custom-checkbox, .wrapper-task:active .wrapper-custom-checkbox {\n    border: 0; }\n\n.wrapper-task:hover .wrapper-custom-checkbox .custom-checkbox, .wrapper-task:focus .wrapper-custom-checkbox .custom-checkbox, .wrapper-task:active .wrapper-custom-checkbox .custom-checkbox {\n      border: 2px solid #555555;\n      box-shadow: 0 0 14px #000;\n      margin-top: 0;\n      margin-left: 0; }\n\n.wrapper-task:hover .text, .wrapper-task:focus .text, .wrapper-task:active .text {\n    font-weight: bold; }\n\n.wrapper-task:hover .wrapper-icon-delete, .wrapper-task:focus .wrapper-icon-delete, .wrapper-task:active .wrapper-icon-delete {\n    opacity: 1; }\n\n.wrapper-task.checked .wrapper-custom-checkbox .custom-checkbox {\n    background-color: #7ED321; }\n\n.wrapper-task.checked .wrapper-custom-checkbox .custom-checkbox .img-check {\n      opacity: 1; }\n\n.wrapper-task.checked .text {\n    color: #ABABAB;\n    text-decoration: line-through; }\n\n.wrapper-task.checked .wrapper-icon-delete {\n    opacity: 1; }\n\n.wrapper-task .wrapper-clickable {\n    display: flex; }\n\n.wrapper-custom-checkbox {\n  width: 24px;\n  height: 24px;\n  margin-right: 11px; }\n\n.icon {\n  font-style: normal; }\n\n.custom-checkbox {\n  width: 22px;\n  height: 22px;\n  background-color: #F2F2F2;\n  border: 1px solid #CFCFCF;\n  border-radius: 50%;\n  margin-left: 1px;\n  margin-top: 1px;\n  overflow: hidden;\n  transition: border 0.3s, box-shadow 0.3s, margin 0.3s, background-color 0.3s, box-shadow 0.3s; }\n\n.custom-checkbox .img-check {\n    opacity: 0;\n    transition: opacity 0.3s;\n    width: 14px;\n    height: 14px;\n    margin-top: 4px;\n    margin-left: 4px; }\n\n.text {\n  margin-top: 4px;\n  display: block;\n  max-width: 200px;\n  overflow: hidden; }\n\n.wrapper-icon-delete {\n  position: relative;\n  overflow: hidden;\n  width: 14px;\n  height: 14px;\n  margin-top: 5px;\n  margin-left: 11px;\n  opacity: 0;\n  transition: all .3s ease-in-out; }\n\n.wrapper-icon-delete .icon-delete {\n    display: block;\n    font-size: 28px;\n    position: absolute;\n    color: #c20000;\n    top: -7px;\n    left: -2px; }\n\n.wrapper-icon-delete:hover {\n    transform: scale(1.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL0Q6XFxzaXRlc1xcY29kaW5nLWNoYWxsZW5nZV9lZHVhcmRvL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0YXNrXFx0YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFBSyxtQkFBbUIsRUFBQTtFQUN4QjtJQUFLLHFCQUFxQixFQUFBO0VBQzFCO0lBQU8sbUJBQW1CLEVBQUEsRUFBQTs7QUFINUI7RUFDRTtJQUFLLG1CQUFtQixFQUFBO0VBQ3hCO0lBQUsscUJBQXFCLEVBQUE7RUFDMUI7SUFBTyxtQkFBbUIsRUFBQSxFQUFBOztBQUc1QjtFQUNDLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFBRSxtQkFBQSxFQUFvQjs7QUFKNUM7SUFVRyxTQUFTLEVBQUE7O0FBVlo7TUFhSSx5QkFBeUI7TUFDekIseUJBQXlCO01BQ3pCLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBaEJsQjtJQXFCRyxpQkFBaUIsRUFBQTs7QUFyQnBCO0lBeUJHLFVBQVUsRUFBQTs7QUF6QmI7SUErQkcseUJBQXlCLEVBQUE7O0FBL0I1QjtNQWtDSSxVQUFVLEVBQUE7O0FBbENkO0lBd0NFLGNBQWM7SUFDZCw2QkFBNkIsRUFBQTs7QUF6Qy9CO0lBNkNFLFVBQVUsRUFBQTs7QUE3Q1o7SUFpREUsYUFBYSxFQUFBOztBQUlmO0VBQ0MsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyxrQkFBa0IsRUFBQTs7QUFLbkI7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDZGQVhtQixFQUFBOztBQUVwQjtJQWdCRSxVQUFVO0lBQ1Ysd0JBbkJrQjtJQW9CbEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0MsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0Msa0JBQWtCO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsK0JBQStCLEVBQUE7O0FBUmhDO0lBV0UsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVLEVBQUE7O0FBaEJaO0lBb0JFLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGJvdW5jZSB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG59XHJcblxyXG4ud3JhcHBlci10YXNrIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGFuaW1hdGlvbjogYm91bmNlIC4xczsgLyogSUUgMTArLCBGeCAyOSsgKi9cclxuXHJcblx0Jjpob3ZlcixcclxuXHQmOmZvY3VzLFxyXG5cdCY6YWN0aXZlIHtcclxuXHRcdC53cmFwcGVyLWN1c3RvbS1jaGVja2JveCB7XHJcblx0XHRcdGJvcmRlcjogMDtcclxuXHJcblx0XHRcdC5jdXN0b20tY2hlY2tib3gge1xyXG5cdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICM1NTU1NTU7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMCAwIDE0cHggIzAwMDtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LnRleHQge1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdH1cclxuXHJcblx0XHQud3JhcHBlci1pY29uLWRlbGV0ZSB7XHJcblx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmLmNoZWNrZWQgLndyYXBwZXItY3VzdG9tLWNoZWNrYm94IHtcclxuXHRcdC5jdXN0b20tY2hlY2tib3gge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjN0VEMzIxO1xyXG5cclxuXHRcdFx0LmltZy1jaGVjayB7XHJcblx0XHRcdFx0b3BhY2l0eTogMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ji5jaGVja2VkIC50ZXh0IHtcclxuXHRcdGNvbG9yOiAjQUJBQkFCO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0fVxyXG5cclxuXHQmLmNoZWNrZWQgLndyYXBwZXItaWNvbi1kZWxldGUge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcblxyXG5cdC53cmFwcGVyLWNsaWNrYWJsZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxufVxyXG5cclxuLndyYXBwZXItY3VzdG9tLWNoZWNrYm94IHtcclxuXHR3aWR0aDogMjRweDtcclxuXHRoZWlnaHQ6IDI0cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4kYW5pbWF0aW9uLXRpbWU6IC4zcztcclxuXHJcbi5jdXN0b20tY2hlY2tib3gge1xyXG5cdHdpZHRoOiAyMnB4O1xyXG5cdGhlaWdodDogMjJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNDRkNGQ0Y7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdG1hcmdpbi1sZWZ0OiAxcHg7XHJcblx0bWFyZ2luLXRvcDogMXB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dHJhbnNpdGlvbjogYm9yZGVyICRhbmltYXRpb24tdGltZSxcclxuXHRcdFx0XHRib3gtc2hhZG93ICRhbmltYXRpb24tdGltZSxcclxuXHRcdFx0XHRtYXJnaW4gJGFuaW1hdGlvbi10aW1lLFxyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3IgJGFuaW1hdGlvbi10aW1lLFxyXG5cdFx0XHRcdGJveC1zaGFkb3cgJGFuaW1hdGlvbi10aW1lO1xyXG5cclxuXHQuaW1nLWNoZWNrIHtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5ICRhbmltYXRpb24tdGltZTtcclxuXHRcdHdpZHRoOiAxNHB4O1xyXG5cdFx0aGVpZ2h0OiAxNHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogNHB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDRweDtcclxuXHR9XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuXHRtYXJnaW4tdG9wOiA0cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWF4LXdpZHRoOiAyMDBweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ud3JhcHBlci1pY29uLWRlbGV0ZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG5cdGhlaWdodDogMTRweDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDExcHg7XHJcblx0b3BhY2l0eTogMDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuXHQuaWNvbi1kZWxldGUge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRmb250LXNpemU6IDI4cHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRjb2xvcjogI2MyMDAwMDtcclxuXHRcdHRvcDogLTdweDtcclxuXHRcdGxlZnQ6IC0ycHg7XHJcblx0fVxyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/task/task.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/task/task.component.ts ***!
  \***************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_task_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/task-data.service */ "./src/app/services/task-data.service.ts");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/task */ "./src/app/models/task.ts");




var TaskComponent = /** @class */ (function () {
    function TaskComponent(taskDataService) {
        this.taskDataService = taskDataService;
        this.deleteTaskStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.prototype.onTaskClick = function () {
        var task = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.task);
        task.status = task.status === 'todo' ? 'done' : 'todo';
        this.taskDataService.setTask(task);
    };
    TaskComponent.prototype.deleteTask = function (task) {
        if (task.status === 'done') {
            this.taskDataService.deleteTask(task);
        }
        else {
            this.deleteTaskStart.emit(task);
        }
    };
    TaskComponent.prototype.onKey = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            this.onTaskClick();
        }
        if (event.code === 'Backspace' || event.code === 'Delete') {
            this.deleteTask(this.task);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_task__WEBPACK_IMPORTED_MODULE_3__["Task"])
    ], TaskComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TaskComponent.prototype, "deleteTaskStart", void 0);
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/components/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.scss */ "./src/app/components/task/task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_task_data_service__WEBPACK_IMPORTED_MODULE_2__["TaskDataService"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/directives/auto-focus.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/auto-focus.directive.ts ***!
  \****************************************************/
/*! exports provided: AutoFocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoFocusDirective", function() { return AutoFocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    AutoFocusDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.focus();
    };
    AutoFocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAutoFocus]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AutoFocusDirective);
    return AutoFocusDirective;
}());



/***/ }),

/***/ "./src/app/models/task.ts":
/*!********************************!*\
  !*** ./src/app/models/task.ts ***!
  \********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(text) {
        this.id = new Date().getTime();
        this.status = 'todo';
        this.text = text;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/services/task-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/task-data.service.ts ***!
  \***********************************************/
/*! exports provided: TaskDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDataService", function() { return TaskDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/task */ "./src/app/models/task.ts");




var TaskDataService = /** @class */ (function () {
    function TaskDataService() {
        this.$taskList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.$a = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.getAllTasks();
        this.$taskList.subscribe(function (taskList) {
            if (taskList !== null) {
                localStorage.setItem('tasks', JSON.stringify(taskList));
            }
        });
    }
    Object.defineProperty(TaskDataService.prototype, "taskList", {
        get: function () {
            return this.$taskList.getValue();
        },
        enumerable: true,
        configurable: true
    });
    TaskDataService.prototype.getAllTasks = function () {
        var taskList = JSON.parse(localStorage.getItem('tasks'));
        this.$taskList.next(taskList || []);
    };
    TaskDataService.prototype.createTask = function (text) {
        var task = new _models_task__WEBPACK_IMPORTED_MODULE_3__["Task"](text);
        var taskList = this.taskList ? this.taskList.slice() : [];
        taskList.push(task);
        taskList = taskList.sort(this.sortTasks);
        this.$taskList.next(taskList);
    };
    TaskDataService.prototype.setTask = function (task) {
        var taskList = this.taskList.slice();
        var index;
        taskList.find(function (t, i) {
            if (t.id === task.id) {
                index = i;
                return true;
            }
        });
        taskList[index] = task;
        taskList = taskList.sort(this.sortTasks);
        this.$taskList.next(taskList);
    };
    TaskDataService.prototype.sortTasks = function (a, b) {
        if (a.status !== 'done' && b.status === 'done') {
            return -1;
        }
        if (a.status === 'done' && b.status !== 'done') {
            return 1;
        }
        if ((a.id > b.id)) {
            return -1;
        }
        if (a.id < b.id) {
            return 1;
        }
        return 0;
    };
    TaskDataService.prototype.deleteTask = function (task) {
        task.status = 'deleted';
        this.setTask(task);
    };
    TaskDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskDataService);
    return TaskDataService;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\sites\coding-challenge_eduardo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map