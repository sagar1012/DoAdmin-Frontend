(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_charts_charts_module_ts"], {
    /***/
    36968:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartjsBarHorizontalComponent": function ChartjsBarHorizontalComponent() {
          return (
            /* binding */
            _ChartjsBarHorizontalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular2-chartjs */
      79251);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__);

      var _ChartjsBarHorizontalComponent = /*#__PURE__*/function () {
        function _ChartjsBarHorizontalComponent(theme) {
          var _this = this;

          _classCallCheck(this, _ChartjsBarHorizontalComponent);

          this.theme = theme;
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [{
                label: 'Dataset 1',
                backgroundColor: colors.infoLight,
                borderWidth: 1,
                data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()]
              }, {
                label: 'Dataset 2',
                backgroundColor: colors.successLight,
                data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()]
              }]
            };
            _this.options = {
              responsive: true,
              maintainAspectRatio: false,
              elements: {
                rectangle: {
                  borderWidth: 2
                }
              },
              scales: {
                xAxes: [{
                  gridLines: {
                    display: true,
                    color: chartjs.axisLineColor
                  },
                  ticks: {
                    fontColor: chartjs.textColor
                  }
                }],
                yAxes: [{
                  gridLines: {
                    display: false,
                    color: chartjs.axisLineColor
                  },
                  ticks: {
                    fontColor: chartjs.textColor
                  }
                }]
              },
              legend: {
                position: 'right',
                labels: {
                  fontColor: chartjs.textColor
                }
              }
            };
          });
        }

        _createClass(_ChartjsBarHorizontalComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }, {
          key: "random",
          value: function random() {
            return Math.round(Math.random() * 100);
          }
        }]);

        return _ChartjsBarHorizontalComponent;
      }();

      _ChartjsBarHorizontalComponent.ɵfac = function ChartjsBarHorizontalComponent_Factory(t) {
        return new (t || _ChartjsBarHorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbThemeService));
      };

      _ChartjsBarHorizontalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ChartjsBarHorizontalComponent,
        selectors: [["ngx-chartjs-bar-horizontal"]],
        decls: 1,
        vars: 2,
        consts: [["type", "horizontalBar", 3, "data", "options"]],
        template: function ChartjsBarHorizontalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "chart", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
          }
        },
        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__.ChartComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    29124:
    /*!***************************************************************!*\
      !*** ./src/app/pages/charts/chartjs/chartjs-bar.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartjsBarComponent": function ChartjsBarComponent() {
          return (
            /* binding */
            _ChartjsBarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular2-chartjs */
      79251);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__);

      var _ChartjsBarComponent = /*#__PURE__*/function () {
        function _ChartjsBarComponent(theme) {
          var _this2 = this;

          _classCallCheck(this, _ChartjsBarComponent);

          this.theme = theme;
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this2.data = {
              labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
              datasets: [{
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'Series A',
                backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbColorHelper.hexToRgbA(colors.primaryLight, 0.8)
              }, {
                data: [28, 48, 40, 19, 86, 27, 90],
                label: 'Series B',
                backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbColorHelper.hexToRgbA(colors.infoLight, 0.8)
              }]
            };
            _this2.options = {
              maintainAspectRatio: false,
              responsive: true,
              legend: {
                labels: {
                  fontColor: chartjs.textColor
                }
              },
              scales: {
                xAxes: [{
                  gridLines: {
                    display: false,
                    color: chartjs.axisLineColor
                  },
                  ticks: {
                    fontColor: chartjs.textColor
                  }
                }],
                yAxes: [{
                  gridLines: {
                    display: true,
                    color: chartjs.axisLineColor
                  },
                  ticks: {
                    fontColor: chartjs.textColor
                  }
                }]
              }
            };
          });
        }

        _createClass(_ChartjsBarComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _ChartjsBarComponent;
      }();

      _ChartjsBarComponent.ɵfac = function ChartjsBarComponent_Factory(t) {
        return new (t || _ChartjsBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _ChartjsBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ChartjsBarComponent,
        selectors: [["ngx-chartjs-bar"]],
        decls: 1,
        vars: 2,
        consts: [["type", "bar", 3, "data", "options"]],
        template: function ChartjsBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "chart", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
          }
        },
        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__.ChartComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    60205:
    /*!****************************************************************!*\
      !*** ./src/app/pages/charts/chartjs/chartjs-line.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartjsLineComponent": function ChartjsLineComponent() {
          return (
            /* binding */
            _ChartjsLineComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular2-chartjs */
      79251);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__);

      var _ChartjsLineComponent = /*#__PURE__*/function () {
        function _ChartjsLineComponent(theme) {
          var _this3 = this;

          _classCallCheck(this, _ChartjsLineComponent);

          this.theme = theme;
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this3.data = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'Series A',
                backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbColorHelper.hexToRgbA(colors.primary, 0.3),
                borderColor: colors.primary
              }, {
                data: [28, 48, 40, 19, 86, 27, 90],
                label: 'Series B',
                backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbColorHelper.hexToRgbA(colors.danger, 0.3),
                borderColor: colors.danger
              }, {
                data: [18, 48, 77, 9, 100, 27, 40],
                label: 'Series C',
                backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbColorHelper.hexToRgbA(colors.info, 0.3),
                borderColor: colors.info
              }]
            };
            _this3.options = {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                xAxes: [{
                  gridLines: {
                    display: true,
                    color: chartjs.axisLineColor
                  },
                  ticks: {
                    fontColor: chartjs.textColor
                  }
                }],
                yAxes: [{
                  gridLines: {
                    display: true,
                    color: chartjs.axisLineColor
                  },
                  ticks: {
                    fontColor: chartjs.textColor
                  }
                }]
              },
              legend: {
                labels: {
                  fontColor: chartjs.textColor
                }
              }
            };
          });
        }

        _createClass(_ChartjsLineComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _ChartjsLineComponent;
      }();

      _ChartjsLineComponent.ɵfac = function ChartjsLineComponent_Factory(t) {
        return new (t || _ChartjsLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _ChartjsLineComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ChartjsLineComponent,
        selectors: [["ngx-chartjs-line"]],
        decls: 1,
        vars: 2,
        consts: [["type", "line", 3, "data", "options"]],
        template: function ChartjsLineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "chart", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
          }
        },
        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__.ChartComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    41747:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartjsMultipleXaxisComponent": function ChartjsMultipleXaxisComponent() {
          return (
            /* binding */
            _ChartjsMultipleXaxisComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular2-chartjs */
      79251);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__);

      var _ChartjsMultipleXaxisComponent = /*#__PURE__*/function () {
        function _ChartjsMultipleXaxisComponent(theme) {
          var _this4 = this;

          _classCallCheck(this, _ChartjsMultipleXaxisComponent);

          this.theme = theme;
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this4.data = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [{
                label: 'dataset - big points',
                data: [_this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random()],
                borderColor: colors.primary,
                backgroundColor: colors.primary,
                fill: false,
                borderDash: [5, 5],
                pointRadius: 8,
                pointHoverRadius: 10
              }, {
                label: 'dataset - individual point sizes',
                data: [_this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random()],
                borderColor: colors.dangerLight,
                backgroundColor: colors.dangerLight,
                fill: false,
                borderDash: [5, 5],
                pointRadius: 8,
                pointHoverRadius: 10
              }, {
                label: 'dataset - large pointHoverRadius',
                data: [_this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random()],
                borderColor: colors.info,
                backgroundColor: colors.info,
                fill: false,
                pointRadius: 8,
                pointHoverRadius: 10
              }, {
                label: 'dataset - large pointHitRadius',
                data: [_this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random(), _this4.random()],
                borderColor: colors.success,
                backgroundColor: colors.success,
                fill: false,
                pointRadius: 8,
                pointHoverRadius: 10
              }]
            };
            _this4.options = {
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                position: 'bottom',
                labels: {
                  fontColor: chartjs.textColor
                }
              },
              hover: {
                mode: 'index'
              },
              scales: {
                xAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Month'
                  },
                  gridLines: {
                    display: true,
                    color: chartjs.axisLineColor
                  },
                  ticks: {
                    fontColor: chartjs.textColor
                  }
                }],
                yAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Value'
                  },
                  gridLines: {
                    display: true,
                    color: chartjs.axisLineColor
                  },
                  ticks: {
                    fontColor: chartjs.textColor
                  }
                }]
              }
            };
          });
        }

        _createClass(_ChartjsMultipleXaxisComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }, {
          key: "random",
          value: function random() {
            return Math.round(Math.random() * 100);
          }
        }]);

        return _ChartjsMultipleXaxisComponent;
      }();

      _ChartjsMultipleXaxisComponent.ɵfac = function ChartjsMultipleXaxisComponent_Factory(t) {
        return new (t || _ChartjsMultipleXaxisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbThemeService));
      };

      _ChartjsMultipleXaxisComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ChartjsMultipleXaxisComponent,
        selectors: [["ngx-chartjs-multiple-xaxis"]],
        decls: 1,
        vars: 2,
        consts: [["type", "line", 3, "data", "options"]],
        template: function ChartjsMultipleXaxisComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "chart", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
          }
        },
        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__.ChartComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    43844:
    /*!***************************************************************!*\
      !*** ./src/app/pages/charts/chartjs/chartjs-pie.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartjsPieComponent": function ChartjsPieComponent() {
          return (
            /* binding */
            _ChartjsPieComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular2-chartjs */
      79251);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__);

      var _ChartjsPieComponent = /*#__PURE__*/function () {
        function _ChartjsPieComponent(theme) {
          var _this5 = this;

          _classCallCheck(this, _ChartjsPieComponent);

          this.theme = theme;
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this5.data = {
              labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
              datasets: [{
                data: [300, 500, 100],
                backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight]
              }]
            };
            _this5.options = {
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                xAxes: [{
                  display: false
                }],
                yAxes: [{
                  display: false
                }]
              },
              legend: {
                labels: {
                  fontColor: chartjs.textColor
                }
              }
            };
          });
        }

        _createClass(_ChartjsPieComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _ChartjsPieComponent;
      }();

      _ChartjsPieComponent.ɵfac = function ChartjsPieComponent_Factory(t) {
        return new (t || _ChartjsPieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbThemeService));
      };

      _ChartjsPieComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ChartjsPieComponent,
        selectors: [["ngx-chartjs-pie"]],
        decls: 1,
        vars: 2,
        consts: [["type", "pie", 3, "data", "options"]],
        template: function ChartjsPieComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "chart", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
          }
        },
        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__.ChartComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    89810:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/charts/chartjs/chartjs-radar.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartjsRadarComponent": function ChartjsRadarComponent() {
          return (
            /* binding */
            _ChartjsRadarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular2-chartjs */
      79251);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__);

      var _ChartjsRadarComponent = /*#__PURE__*/function () {
        function _ChartjsRadarComponent(theme) {
          var _this6 = this;

          _classCallCheck(this, _ChartjsRadarComponent);

          this.theme = theme;
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this6.data = {
              labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
              datasets: [{
                data: [65, 59, 90, 81, 56, 55, 40],
                label: 'Series A',
                borderColor: colors.danger,
                backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbColorHelper.hexToRgbA(colors.dangerLight, 0.5)
              }, {
                data: [28, 48, 40, 19, 96, 27, 100],
                label: 'Series B',
                borderColor: colors.warning,
                backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbColorHelper.hexToRgbA(colors.warningLight, 0.5)
              }]
            };
            _this6.options = {
              responsive: true,
              maintainAspectRatio: false,
              scaleFontColor: 'white',
              legend: {
                labels: {
                  fontColor: chartjs.textColor
                }
              },
              scale: {
                pointLabels: {
                  fontSize: 14,
                  fontColor: chartjs.textColor
                },
                gridLines: {
                  color: chartjs.axisLineColor
                },
                angleLines: {
                  color: chartjs.axisLineColor
                }
              }
            };
          });
        }

        _createClass(_ChartjsRadarComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _ChartjsRadarComponent;
      }();

      _ChartjsRadarComponent.ɵfac = function ChartjsRadarComponent_Factory(t) {
        return new (t || _ChartjsRadarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _ChartjsRadarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ChartjsRadarComponent,
        selectors: [["ngx-chartjs-radar"]],
        decls: 1,
        vars: 2,
        consts: [["type", "radar", 3, "data", "options"]],
        template: function ChartjsRadarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "chart", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
          }
        },
        directives: [angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__.ChartComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    65337:
    /*!***********************************************************!*\
      !*** ./src/app/pages/charts/chartjs/chartjs.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartjsComponent": function ChartjsComponent() {
          return (
            /* binding */
            _ChartjsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _chartjs_pie_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chartjs-pie.component */
      43844);
      /* harmony import */


      var _chartjs_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chartjs-bar.component */
      29124);
      /* harmony import */


      var _chartjs_line_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chartjs-line.component */
      60205);
      /* harmony import */


      var _chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chartjs-multiple-xaxis.component */
      41747);
      /* harmony import */


      var _chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chartjs-bar-horizontal.component */
      36968);
      /* harmony import */


      var _chartjs_radar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chartjs-radar.component */
      89810);

      var _ChartjsComponent = function _ChartjsComponent() {
        _classCallCheck(this, _ChartjsComponent);
      };

      _ChartjsComponent.ɵfac = function ChartjsComponent_Factory(t) {
        return new (t || _ChartjsComponent)();
      };

      _ChartjsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _ChartjsComponent,
        selectors: [["ngx-chartjs"]],
        decls: 37,
        vars: 0,
        consts: [[1, "row"], [1, "col-lg-6"]],
        template: function ChartjsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Pie");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "ngx-chartjs-pie");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ngx-chartjs-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Line");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "ngx-chartjs-line");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Multiple x-axis");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "ngx-chartjs-multiple-xaxis");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Bar Horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "ngx-chartjs-bar-horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Radar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "ngx-chartjs-radar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardBodyComponent, _chartjs_pie_component__WEBPACK_IMPORTED_MODULE_0__.ChartjsPieComponent, _chartjs_bar_component__WEBPACK_IMPORTED_MODULE_1__.ChartjsBarComponent, _chartjs_line_component__WEBPACK_IMPORTED_MODULE_2__.ChartjsLineComponent, _chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_3__.ChartjsMultipleXaxisComponent, _chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_4__.ChartjsBarHorizontalComponent, _chartjs_radar_component__WEBPACK_IMPORTED_MODULE_5__.ChartjsRadarComponent],
        styles: [".nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%] {\n  display: block;\n  height: 28.875rem;\n  width: 100%;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%] {\n  display: block;\n  height: 28.875rem;\n  width: 100%;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, .nb-theme-dark   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%] {\n  display: block;\n  height: 28.875rem;\n  width: 100%;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%] {\n  display: block;\n  height: 28.875rem;\n  width: 100%;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvX3RoZW1pbmcuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX2Z1bmN0aW9ucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL192YXJpYW50cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX21hcHBpbmcuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS90aGVtaW5nL19yZWdpc3Rlci5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL3RoZW1pbmcvX2luc3RhbGwuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS90aGVtaW5nL19nZXQtdmFsdWUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19kZWZhdWx0LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fZGFyay5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2Nvc21pYy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2NvcnBvcmF0ZS5zY3NzIiwiY2hhcnRqcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FBTUE7OztFQUFBO0FDTkE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUNsTUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQ0ZBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBTkFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBUWxNQTs7OztFQUFBO0FQQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FPbE1BOzs7O0VBQUE7QU5BQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVNsTUE7Ozs7RUFBQTtBUkFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBUWxNQTs7OztFQUFBO0FQQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FPbE1BOzs7O0VBQUE7QU5BQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVVsTUE7Ozs7RUFBQTtBVEFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBT2xNQTs7OztFQUFBO0FOQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FLdkhJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QU14RUY7Ozs7OztFQU1FLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUF1dkNKO0FBcnZDSTs7Ozs7O0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNHZDTjtBTmpzQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBTXhFRjs7Ozs7O0VBTUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQWd5Q0o7QUE5eENJOzs7Ozs7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFxeUNOO0FOMXVDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FNeEVGOzs7Ozs7RUFNRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBeTBDSjtBQXYwQ0k7Ozs7OztFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTgwQ047QU5ueENJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QU14RUY7Ozs7OztFQU1FLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFrM0NKO0FBaDNDSTs7Ozs7O0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBdTNDTiIsImZpbGUiOiJjaGFydGpzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vKlxuICBEZWNsYXJlIHZhcmlhYmxlcyBiZWZvcmUgbWFraW5nIHRoZW0gZ2xvYmFsLlxuICBkYXJ0LXNhc3MgZG9lc24ndCBhbGxvdyB0byBkZWNsYXJlIHZhcmlhYmxlIHdpdGggIWdsb2JhbC5cbiAqL1xuJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXM6IGZhbHNlICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKTtcbiRuYi10aGVtZXM6ICgpO1xuJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogbnVsbDtcbiRuYi10aGVtZS1uYW1lOiAnZGVmYXVsdCc7XG4kbmItdGhlbWU6ICgpO1xuJG5iLXByb2Nlc3NlZC10aGVtZTogKCk7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFkZWZhdWx0O1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpO1xuJG5iLWN1c3RvbS1zdGF0dXNlczogKCkgIWRlZmF1bHQ7XG5cbi8vIHB1YmxpYyB2YXJpYWJsZXNcbiRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzOiBmYWxzZSAhZ2xvYmFsICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi1jdXN0b20tc3RhdHVzZXM6ICgpICFnbG9iYWwgIWRlZmF1bHQ7XG5cbi8vIHByaXZhdGUgdmFyaWFibGVzXG4kbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuJG5iLXRoZW1lLW5hbWU6IG51bGwgIWdsb2JhbDtcbiRuYi10aGVtZTogKCkgIWdsb2JhbDtcbiRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpICFnbG9iYWw7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFnbG9iYWwgIWRlZmF1bHQ7XG4kbmItdGhlbWVzLWV4cG9ydDogKCkgIWdsb2JhbDtcblxuQGltcG9ydCAnY29yZS9taXhpbnMnO1xuQGltcG9ydCAnY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnY29yZS92YXJpYW50cyc7XG5AaW1wb3J0ICdjb3JlL3RoZW1pbmcvcmVnaXN0ZXInO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2luc3RhbGwnO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2dldC12YWx1ZSc7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1zY3JvbGxiYXJzKCRmZywgJGJnLCAkc2l6ZSwgJGJvcmRlci1yYWRpdXM6ICRzaXplIC8gMikge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmVcbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZmc7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJnO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1vdXRsaW5lKCRvdXRsaW5lLXdpZHRoLCAkb3V0bGluZS1jb2xvciwgJGluc2V0LXNoYWRvdy1sZW5ndGg6IDApIHtcbiAgJG91dHNldC1zaGFkb3c6IDAgMCAwICRvdXRsaW5lLXdpZHRoICRvdXRsaW5lLWNvbG9yO1xuICBib3gtc2hhZG93OiAkb3V0c2V0LXNoYWRvdztcblxuICBAaWYgKCRpbnNldC1zaGFkb3ctbGVuZ3RoICE9IDApIHtcbiAgICAmOm5vdCg6aG92ZXIpOm5vdCg6YWN0aXZlKSB7XG4gICAgICAkaW5zZXQtc2hhZG93OiBpbnNldCAkaW5zZXQtc2hhZG93LWxlbmd0aCAkb3V0bGluZS1jb2xvcjtcbiAgICAgIGJveC1zaGFkb3c6ICRvdXRzZXQtc2hhZG93LCAkaW5zZXQtc2hhZG93O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eTogMSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIG5iLWNvbXBvbmVudC1hbmltYXRpb24oJHByb3BlcnRpZXMuLi4pIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6ICRwcm9wZXJ0aWVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuXG5AZnVuY3Rpb24gbmItdGhlbWUtdmFyLW5lZ2F0aXZlKCR2YWx1ZSkge1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzKSB7XG4gICAgQHJldHVybiBjYWxjKCN7JHZhbHVlfSAqIC0xKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiAtJHZhbHVlO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBmdW5jdGlvbiBuYi1nZXQtY29yZS1zdGF0dXNlcygpIHtcbiAgQHJldHVybiAnYmFzaWMnLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2luZm8nLCAnY29udHJvbCc7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gIEByZXR1cm4gam9pbihuYi1nZXQtY29yZS1zdGF0dXNlcygpLCAkbmItY3VzdG9tLXN0YXR1c2VzKTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1zaXplcygpIHtcbiAgQHJldHVybiAndGlueScsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnZ2lhbnQnO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXNoYXBlcygpIHtcbiAgQHJldHVybiAncmVjdGFuZ2xlJywgJ3NlbWktcm91bmQnLCAncm91bmQnO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4kZXZhLW1hcHBpbmc6IChcblxuICAvKiBDb21wb25lbnRzIG1hcHBpbmdzIC0gbWFwcyB0aGVtZSB2YXJpYWJsZXMgb250byBjb21wb25lbnQgdmFyaWFibGVzICovXG5cbiAgbGluay10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGxpbmstdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUsXG4gIGxpbmstdGV4dC1mb2N1cy1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICBsaW5rLXRleHQtaG92ZXItY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICBjYXJkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY2FyZC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYXJkLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjYXJkLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGNhcmQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGNhcmQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGNhcmQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBjYXJkLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNhcmQtcGFkZGluZzogMXJlbSAxLjVyZW0sXG4gIGNhcmQtc2hhZG93OiBub25lLFxuICBjYXJkLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNhcmQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgY2FyZC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIGNhcmQtaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIGNhcmQtaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FyZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBjYXJkLWhlYWRlci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhcmQtaGVhZGVyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuXG4gIGNhcmQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGNhcmQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBjYXJkLXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBoZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBoZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaGVhZGVyLWhlaWdodDogNC43NXJlbSxcbiAgaGVhZGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGhlYWRlci1zaGFkb3c6IHNoYWRvdyxcblxuICBmb290ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBmb290ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBmb290ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgZm9vdGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBmb290ZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGZvb3Rlci10ZXh0LWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgZm9vdGVyLWhlaWdodDogNC43MjVyZW0sXG4gIGZvb3Rlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBmb290ZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgZm9vdGVyLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGZvb3Rlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBmb290ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgbGF5b3V0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxheW91dC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgbGF5b3V0LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGxheW91dC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGF5b3V0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtbWluLWhlaWdodDogMTAwdmgsXG4gIGxheW91dC1jb250ZW50LXdpZHRoOiA5MDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1pbi13aWR0aDogMzAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGg6IDE5MjBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcbiAgbGF5b3V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgbGF5b3V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBsYXlvdXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNpZGViYXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2lkZWJhci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc2lkZWJhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzaWRlYmFyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzaWRlYmFyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzaWRlYmFyLWhlaWdodDogMTAwdmgsXG4gIHNpZGViYXItd2lkdGg6IDE2cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNXJlbSxcbiAgc2lkZWJhci1wYWRkaW5nOiAxLjI1cmVtLFxuICBzaWRlYmFyLWhlYWRlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1mb290ZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItc2hhZG93OiBzaGFkb3csXG4gIHNpZGViYXItbWVudS1pdGVtLWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzaWRlYmFyLXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBtZW51LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBtZW51LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG1lbnUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICBtZW51LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBtZW51LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgbWVudS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG5cbiAgbWVudS1ncm91cC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtaXRlbS1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgbWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1pdGVtLWhvdmVyLWN1cnNvcjogcG9pbnRlcixcbiAgbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgbWVudS1pdGVtLWljb24taG92ZXItY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuXG4gIG1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG4gIG1lbnUtaXRlbS1pY29uLXdpZHRoOiAxLjI1cmVtLFxuXG4gIG1lbnUtaXRlbS1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBtZW51LWl0ZW0tZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgbWVudS1pdGVtLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgbWVudS1zdWJtZW51LWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG1lbnUtc3VibWVudS1tYXJnaW46IDAsXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwIDEuMjVyZW0sXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItcmFkaXVzOiAwLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiBtZW51LWl0ZW0tcGFkZGluZyxcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJvcmRlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjogbWVudS1pdGVtLWljb24taG92ZXItY29sb3IsXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjogbWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1jb2xvcjogbWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtaG92ZXItdGV4dC1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taWNvbi1hY3RpdmUtaG92ZXItY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWljb24taG92ZXItY29sb3IsXG5cbiAgdGFic2V0LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtYm9yZGVyLXJhZGl1czogMCxcbiAgdGFic2V0LXNoYWRvdzogbm9uZSxcblxuICB0YWJzZXQtdGFiLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLXBhZGRpbmc6IDFyZW0gMnJlbSxcbiAgdGFic2V0LXRhYi10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHRhYnNldC10YWItdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIHRhYnNldC10YWItdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIHRhYnNldC10YWItdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIHRhYnNldC10YWItdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICB0YWJzZXQtdGFiLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG4gIHRhYnNldC10YWItdW5kZXJsaW5lLXdpZHRoOiAwLjI1cmVtLFxuICB0YWJzZXQtdGFiLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhYnNldC10YWItYWN0aXZlLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICB0YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgdGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgdGFic2V0LXRhYi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG4gIHRhYnNldC10YWItaG92ZXItdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG4gIHRhYnNldC10YWItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFi4oCTYmFkZ2UtZG90LW1vZGUtaG9yaXpvbnRhbC1vZmZzZXQ6IDAuNzVyZW0sXG4gIHRhYnNldC10YWItYmFkZ2UtZG90LW1vZGUtcGFkZGluZzogMC4yNXJlbSxcblxuICB0YWJzZXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgdGFic2V0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIHRhYnNldC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIHRhYnNldC1jb250ZW50LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtY29udGVudC1wYWRkaW5nOiAxcmVtIDJyZW0sXG4gIHRhYnNldC1jb250ZW50LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRhYnNldC1jb250ZW50LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgdGFic2V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICB0YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWJzZXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIHRhYnNldC10YWItdGV4dC1oaWRlLWJyZWFrcG9pbnQ6IDM2cmVtLFxuXG4gIHJvdXRlLXRhYnNldC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LWJvcmRlci1yYWRpdXM6IDAsXG4gIHJvdXRlLXRhYnNldC1zaGFkb3c6IG5vbmUsXG5cbiAgcm91dGUtdGFic2V0LXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1wYWRkaW5nOiAxcmVtIDJyZW0sXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICByb3V0ZS10YWJzZXQtdGFiLXVuZGVybGluZS13aWR0aDogMC4yNXJlbSxcbiAgcm91dGUtdGFic2V0LXRhYi11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1kaXNhYmxlZC11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHJvdXRlLXRhYnNldC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgcm91dGUtdGFic2V0LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1oaWRlLWJyZWFrcG9pbnQ6IDM2cmVtLFxuXG4gIHVzZXItcGljdHVyZS1ib3gtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgdXNlci1waWN0dXJlLWJveC1ib3JkZXItd2lkdGg6IDFweCxcbiAgdXNlci1pbml0aWFscy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB1c2VyLWluaXRpYWxzLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB1c2VyLWluaXRpYWxzLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB1c2VyLW5hbWUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci1uYW1lLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB1c2VyLW5hbWUtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHVzZXItdGl0bGUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci10aXRsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtZmFtaWx5LFxuICB1c2VyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG5cbiAgdXNlci1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogMC41cmVtLFxuICB1c2VyLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgdXNlci1yb3VuZC1ib3JkZXItcmFkaXVzOiA1MCUsXG5cbiAgdXNlci10aW55LWhlaWdodDogMS4yNXJlbSxcbiAgdXNlci10aW55LXdpZHRoOiAxLjI1cmVtLFxuICB1c2VyLXRpbnktaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItdGlueS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItdGlueS1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXRpbnktbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItdGlueS10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci10aW55LXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLXNtYWxsLWhlaWdodDogMS41cmVtLFxuICB1c2VyLXNtYWxsLXdpZHRoOiAxLjVyZW0sXG4gIHVzZXItc21hbGwtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXNtYWxsLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItc21hbGwtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItbWVkaXVtLWhlaWdodDogMi41cmVtLFxuICB1c2VyLW1lZGl1bS13aWR0aDogMi41cmVtLFxuICB1c2VyLW1lZGl1bS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLW1lZGl1bS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1tZWRpdW0tbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLW1lZGl1bS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLW1lZGl1bS10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0tdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItbGFyZ2UtaGVpZ2h0OiAzLjI1cmVtLFxuICB1c2VyLWxhcmdlLXdpZHRoOiAzLjI1cmVtLFxuICB1c2VyLWxhcmdlLWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItbGFyZ2UtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbGFyZ2UtbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbGFyZ2UtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItbGluZS1oZWlnaHQsXG5cbiAgdXNlci1naWFudC1oZWlnaHQ6IDRyZW0sXG4gIHVzZXItZ2lhbnQtd2lkdGg6IDRyZW0sXG4gIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1naWFudC1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1naWFudC1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1naWFudC10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWdpYW50LXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHBvcG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcG9wb3Zlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgcG9wb3Zlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBwb3BvdmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBwb3BvdmVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBwb3BvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgcG9wb3Zlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgcG9wb3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBwb3BvdmVyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHBvcG92ZXItc2hhZG93OiBzaGFkb3csXG4gIHBvcG92ZXItYXJyb3ctc2l6ZTogMC42ODc1cmVtLFxuICBwb3BvdmVyLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcblxuICBjb250ZXh0LW1lbnUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY29udGV4dC1tZW51LWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItd2lkdGg6IDAsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjb250ZXh0LW1lbnUtdGV4dC1hbGlnbjogY2VudGVyLFxuICBjb250ZXh0LW1lbnUtbWluLXdpZHRoOiAxMHJlbSxcbiAgY29udGV4dC1tZW51LW1heC13aWR0aDogMTVyZW0sXG4gIGNvbnRleHQtbWVudS1zaGFkb3c6IHNoYWRvdyxcblxuICBhY3Rpb25zLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBhY3Rpb25zLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGFjdGlvbnMtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgYWN0aW9ucy1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBhY3Rpb25zLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYWN0aW9ucy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBhY3Rpb25zLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBhY3Rpb25zLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBhY3Rpb25zLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcblxuICBhY3Rpb25zLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGFjdGlvbnMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBhY3Rpb25zLXRpbnktaGVpZ2h0OiAxcmVtLFxuICBhY3Rpb25zLXRpbnktaWNvbi1oZWlnaHQ6IGFjdGlvbnMtdGlueS1oZWlnaHQsXG4gIGFjdGlvbnMtdGlueS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGFjdGlvbnMtc21hbGwtaGVpZ2h0OiAxLjVyZW0sXG4gIGFjdGlvbnMtc21hbGwtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtc21hbGwtaGVpZ2h0LFxuICBhY3Rpb25zLXNtYWxsLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLFxuICBhY3Rpb25zLW1lZGl1bS1oZWlnaHQ6IDIuMjVyZW0sXG4gIGFjdGlvbnMtbWVkaXVtLWljb24taGVpZ2h0OiBhY3Rpb25zLW1lZGl1bS1oZWlnaHQsXG4gIGFjdGlvbnMtbWVkaXVtLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGFjdGlvbnMtbGFyZ2UtaGVpZ2h0OiAzLjVyZW0sXG4gIGFjdGlvbnMtbGFyZ2UtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtbGFyZ2UtaGVpZ2h0LFxuICBhY3Rpb25zLWxhcmdlLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplLFxuICBhY3Rpb25zLWdpYW50LWhlaWdodDogNHJlbSxcbiAgYWN0aW9ucy1naWFudC1pY29uLWhlaWdodDogYWN0aW9ucy1naWFudC1oZWlnaHQsXG4gIGFjdGlvbnMtZ2lhbnQtcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemUsXG5cbiAgc2VhcmNoLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VhcmNoLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHNlYXJjaC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBzZWFyY2gtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgc2VhcmNoLWV4dHJhLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VhcmNoLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlYXJjaC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWhlYWRpbmctMS1mb250LWZhbWlseSxcbiAgc2VhcmNoLXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctMS1mb250LXNpemUsXG4gIHNlYXJjaC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctMS1mb250LXdlaWdodCxcbiAgc2VhcmNoLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy0xLWxpbmUtaGVpZ2h0LFxuICBzZWFyY2gtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWFyY2gtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VhcmNoLWluZm8tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgc2VhcmNoLWluZm8tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mZzogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtaGVhZGVyLWJnOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG5cbiAgc21hcnQtdGFibGUtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzbWFydC10YWJsZS1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWZnOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzbWFydC10YWJsZS1iZzogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuXG4gIHNtYXJ0LXRhYmxlLWJnLWV2ZW46IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5OiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzbWFydC10YWJsZS1iZy1hY3RpdmU6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc21hcnQtdGFibGUtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcbiAgc21hcnQtdGFibGUtZmlsdGVyLXBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbSxcbiAgc21hcnQtdGFibGUtc2VwYXJhdG9yOiBkaXZpZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuXG4gIHNtYXJ0LXRhYmxlLWFjdGlvbi1hZGQtZWRpdC1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNtYXJ0LXRhYmxlLWFjdGlvbi1jYW5jZWwtZGVsZXRlLWhvdmVyLXRleHQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLXRleHQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWZvY3VzLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcixcblxuICBzbWFydC10YWJsZS1wYWdpbmctZm9udC1mYW1pbHk6IGJ1dHRvbi10ZXh0LWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1wYWdpbmctZm9udC1zaXplOiBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1wYWdpbmctbGluZS1oZWlnaHQ6IGJ1dHRvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogdHJhbnNwYXJlbnQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3Zlci1ib3JkZXItY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXItdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLWZvY3VzLWJvcmRlci1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLWZvY3VzLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcixcblxuICB0b2FzdHItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgdG9hc3RyLWJvcmRlci13aWR0aDogMXB4LFxuICB0b2FzdHItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdG9hc3RyLXBhZGRpbmc6IDFyZW0sXG4gIHRvYXN0ci1zaGFkb3c6IHNoYWRvdyxcblxuICB0b2FzdHItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuICB0b2FzdHItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIHRvYXN0ci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1iYXNpYy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICB0b2FzdHItYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9hc3RyLWljb24tYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItaWNvbi1iYXNpYy1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG5cbiAgdG9hc3RyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2FzdHItcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG5cbiAgdG9hc3RyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2FzdHItc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG5cbiAgdG9hc3RyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2FzdHItaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24taW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG5cbiAgdG9hc3RyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2FzdHItd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24td2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG5cbiAgdG9hc3RyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2FzdHItZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG5cbiAgdG9hc3RyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b2FzdHItY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2FzdHItaWNvbi1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWljb24tY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2FzdHItZGVzdHJveWFibGUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG5cbiAgYnV0dG9uLWN1cnNvcjogcG9pbnRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBidXR0b24tdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIGJ1dHRvbi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYnV0dG9uLWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcblxuICBidXR0b24tdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGJ1dHRvbi10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi10aW55LWljb24tc2l6ZTogMC43NXJlbSxcbiAgYnV0dG9uLXRpbnktaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLXRpbnktaWNvbi1vZmZzZXQ6IDAuMzc1cmVtLFxuXG4gIGJ1dHRvbi1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLFxuICBidXR0b24tc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1zbWFsbC1pY29uLXNpemU6IDFyZW0sXG4gIGJ1dHRvbi1zbWFsbC1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tc21hbGwtaWNvbi1vZmZzZXQ6IDAuMzc1cmVtLFxuXG4gIGJ1dHRvbi1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGJ1dHRvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICBidXR0b24tbWVkaXVtLWljb24tc2l6ZTogMS4yNXJlbSxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tbWVkaXVtLWljb24tb2Zmc2V0OiAwLjVyZW0sXG5cbiAgYnV0dG9uLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsXG4gIGJ1dHRvbi1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLWxhcmdlLWljb24tc2l6ZTogMS41cmVtLFxuICBidXR0b24tbGFyZ2UtaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLWxhcmdlLWljb24tb2Zmc2V0OiAwLjc1cmVtLFxuXG4gIGJ1dHRvbi1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuICBidXR0b24tZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1naWFudC1pY29uLXNpemU6IDEuNXJlbSxcbiAgYnV0dG9uLWdpYW50LWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi1naWFudC1pY29uLW9mZnNldDogMC43NXJlbSxcblxuICBidXR0b24tcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGJ1dHRvbi1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGJ1dHRvbi1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgYnV0dG9uLWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZmlsbGVkLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tZmlsbGVkLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG5cbiAgYnV0dG9uLWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tb3V0bGluZS10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICBidXR0b24tb3V0bGluZS1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoOiAwIDAgMCAxMDB2bWF4LFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLFxuICBidXR0b24tb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZm9jdXMtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZ2hvc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGJ1dHRvbi1naG9zdC10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICBidXR0b24tZ2hvc3QtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBidXR0b24tZ2hvc3QtdGlueS1wYWRkaW5nOiAwLjMxMjVyZW0gMC42MjVyZW0sXG4gIGJ1dHRvbi1naG9zdC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1naG9zdC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZ2hvc3QtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZ2hvc3QtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWZvY3VzLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1hY3RpdmUtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci13aWR0aDogMCxcbiAgYnV0dG9uLWhlcm8tdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcblxuICBidXR0b24taGVyby10aW55LXBhZGRpbmc6IDAuMzc1cmVtIDAuNjg3NXJlbSxcbiAgYnV0dG9uLWhlcm8tc21hbGwtcGFkZGluZzogMC41cmVtIDAuOTM3NXJlbSxcbiAgYnV0dG9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6IDAuNzVyZW0gMS4xODc1cmVtLFxuICBidXR0b24taGVyby1sYXJnZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjE4NzVyZW0sXG4gIGJ1dHRvbi1oZXJvLWdpYW50LXBhZGRpbmc6IDFyZW0gMS40Mzc1cmVtLFxuXG4gIGJ1dHRvbi1oZXJvLXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LFxuICBidXR0b24taGVyby10ZXh0LXNoYWRvdzogc2hhZG93LFxuICBidXR0b24taGVyby1iZXZlbC1zaXplOiAwIDAgMCAwLFxuICBidXR0b24taGVyby1nbG93LXNpemU6IDAgMCAwIDAsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG5cbiAgYnV0dG9uLWhlcm8tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24taGVyby1iYXNpYy1iZXZlbC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24taGVyby1iYXNpYy1nbG93LWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1iYXNpYy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBidXR0b24taGVyby1iYXNpYy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24taGVyby1iYXNpYy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLFxuICBidXR0b24taGVyby1iYXNpYy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBidXR0b24taGVyby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1iZXZlbC1jb2xvcjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZ2xvdy1jb2xvcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBidXR0b24taGVyby1wcmltYXJ5LWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS0zMDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1zdWNjZXNzLWJldmVsLWNvbG9yOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1nbG93LWNvbG9yOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTMwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24taGVyby1zdWNjZXNzLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuICBidXR0b24taGVyby1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYmV2ZWwtY29sb3I6IGNvbG9yLWluZm8tNjAwLFxuICBidXR0b24taGVyby1pbmZvLWdsb3ctY29sb3I6IGNvbG9yLWluZm8tNzAwLFxuICBidXR0b24taGVyby1pbmZvLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24taGVyby1pbmZvLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgYnV0dG9uLWhlcm8taW5mby1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tMzAwLFxuICBidXR0b24taGVyby1pbmZvLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBidXR0b24taGVyby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8td2FybmluZy1iZXZlbC1jb2xvcjogY29sb3Itd2FybmluZy02MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZ2xvdy1jb2xvcjogY29sb3Itd2FybmluZy03MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBidXR0b24taGVyby13YXJuaW5nLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy0zMDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1iZXZlbC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWdsb3ctY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci00MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTMwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYmV2ZWwtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1nbG93LWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24taGVyby1jb250cm9sLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1jb250cm9sLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBidXR0b24taGVyby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtYnV0dG9uLWJhc2ljLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24tcHJpbWFyeS10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24tc3VjY2Vzcy10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24taW5mby10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLWluZm8tdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24td2FybmluZy10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24tZGFuZ2VyLXRleHQtY29sb3I6IGJ1dHRvbi1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3IsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtYnV0dG9uLWNvbnRyb2wtdGV4dC1jb2xvcjogYnV0dG9uLWZpbGxlZC1jb250cm9sLXRleHQtY29sb3IsXG5cbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1iYXNpYy1kaXZpZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtcHJpbWFyeS1kaXZpZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBidXR0b24tZ3JvdXAtZmlsbGVkLXN1Y2Nlc3MtZGl2aWRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1pbmZvLWRpdmlkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtd2FybmluZy1kaXZpZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBidXR0b24tZ3JvdXAtZmlsbGVkLWRhbmdlci1kaXZpZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtY29udHJvbC1kaXZpZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuXG4gIGJ1dHRvbi1ncm91cC1naG9zdC1kaXZpZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG5cbiAgaWNvbi1idXR0b24tZmlsbGVkLXRpbnktcGFkZGluZzogMC40Mzc1cmVtIDAuMzEyNXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjQzNzVyZW0sXG4gIGljb24tYnV0dG9uLWZpbGxlZC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWZpbGxlZC1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMC45Mzc1cmVtLFxuXG4gIGljb24tYnV0dG9uLW91dGxpbmUtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1vdXRsaW5lLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjQzNzVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAwLjU2MjVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMC45Mzc1cmVtLFxuXG4gIGljb24tYnV0dG9uLWdob3N0LXRpbnktcGFkZGluZzogMC40Mzc1cmVtIDAuMzEyNXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3Qtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAwLjU2MjVyZW0sXG4gIGljb24tYnV0dG9uLWdob3N0LWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWdob3N0LWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24taGVyby10aW55LXBhZGRpbmc6IDAuNXJlbSAwLjM3NXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1zbWFsbC1wYWRkaW5nOiAwLjU2MjVyZW0gMC41cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1sYXJnZS1wYWRkaW5nOiAwLjg3NXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWhlcm8tZ2lhbnQtcGFkZGluZzogMS4wNjI1cmVtIDFyZW0sXG5cbiAgaW5wdXQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgaW5wdXQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGlucHV0LW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGlucHV0LW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIGlucHV0LXBsYWNlaG9sZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBpbnB1dC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuXG4gIGlucHV0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGlucHV0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBpbnB1dC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgaW5wdXQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGlucHV0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgaW5wdXQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGlucHV0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXG4gIGlucHV0LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgaW5wdXQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgaW5wdXQtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwLFxuICBpbnB1dC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgaW5wdXQtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGlucHV0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgaW5wdXQtcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGlucHV0LXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgaW5wdXQtdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCxcbiAgaW5wdXQtdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodCxcbiAgaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBpbnB1dC10aW55LW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIGlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBpbnB1dC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDFyZW0sXG4gIGlucHV0LW1lZGl1bS1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIGlucHV0LWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgaW5wdXQtbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgaW5wdXQtbGFyZ2UtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgaW5wdXQtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG4gIGlucHV0LWdpYW50LW1heC13aWR0aDogMzByZW0sXG5cbiAgY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtLFxuICBjaGVja2JveC13aWR0aDogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgY2hlY2tib3gtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNoZWNrYm94LWJvcmRlci1yYWRpdXM6IDNweCxcbiAgY2hlY2tib3gtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgY2hlY2tib3gtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgY2hlY2tib3gtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICBjaGVja2JveC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgY2hlY2tib3gtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBjaGVja2JveC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIGNoZWNrYm94LXRleHQtc3BhY2U6IDAuNjg3NXJlbSxcbiAgY2hlY2tib3gtcGFkZGluZzogMCxcbiAgY2hlY2tib3gtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBjaGVja2JveC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtYmFzaWMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWJhc2ljLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjaGVja2JveC1iYXNpYy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgY2hlY2tib3gtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBiYWRnZS1kb3QtbW9kZS1ib3JkZXItcmFkaXVzOiAwLjVyZW0sXG4gIGJhZGdlLWRvdC1tb2RlLXBhZGRpbmc6IDAuM3JlbSxcblxuICBiYWRnZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBiYWRnZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgYmFkZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBiYWRnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYmFkZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodCxcbiAgYmFkZ2UtcGFkZGluZzogMC4yNXJlbSAwLjRyZW0sXG5cbiAgYmFkZ2UtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBiYWRnZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBiYWRnZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYmFkZ2UtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJhZGdlLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuXG4gIHByb2dyZXNzLWJhci1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zLFxuICBwcm9ncmVzcy1iYXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgcHJvZ3Jlc3MtYmFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG5cbiAgcHJvZ3Jlc3MtYmFyLXRpbnktaGVpZ2h0OiAxcmVtLFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1zbWFsbC1oZWlnaHQ6IDEuMjVyZW0sXG4gIHByb2dyZXNzLWJhci1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS1oZWlnaHQ6IDEuNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtaGVpZ2h0OiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQsXG4gIHByb2dyZXNzLWJhci1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLWluZm8tZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItY29udHJvbC1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgYWxlcnQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgYWxlcnQtYm90dG9tLW1hcmdpbjogMS41cmVtLFxuICBhbGVydC1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgYWxlcnQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBhbGVydC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhbGVydC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgYWxlcnQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBhbGVydC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBhbGVydC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGFsZXJ0LWNsb3NhYmxlLXN0YXJ0LXBhZGRpbmc6IDNyZW0sXG5cbiAgYWxlcnQtdGlueS1oZWlnaHQ6IDQuNXJlbSxcbiAgYWxlcnQtc21hbGwtaGVpZ2h0OiA1Ljc1cmVtLFxuICBhbGVydC1tZWRpdW0taGVpZ2h0OiA3cmVtLFxuICBhbGVydC1tZWRpdW0tcGFkZGluZzogMXJlbSAxLjEyNXJlbSxcbiAgYWxlcnQtbGFyZ2UtaGVpZ2h0OiA4LjI1cmVtLFxuICBhbGVydC1naWFudC1oZWlnaHQ6IDkuNXJlbSxcblxuICBhbGVydC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGFsZXJ0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFsZXJ0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBhbGVydC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGFsZXJ0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYWxlcnQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBhbGVydC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBhbGVydC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYWxlcnQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgYWxlcnQtYWNjZW50LWJhc2ljLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYWxlcnQtYWNjZW50LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1jb250cm9sLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG5cbiAgYWxlcnQtb3V0bGluZS13aWR0aDogMXB4LFxuICBhbGVydC1vdXRsaW5lLWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtaW5mby1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBhbGVydC1vdXRsaW5lLWNvbnRyb2wtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuXG4gIGNoYXQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjaGF0LWJvcmRlcjogbm9uZSxcbiAgY2hhdC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjaGF0LXNoYWRvdzogc2hhZG93LFxuICBjaGF0LXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgY2hhdC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgY2hhdC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGNoYXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgY2hhdC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGF0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjaGF0LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGNoYXQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGNoYXQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgY2hhdC1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2hhdC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjaGF0LWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNoYXQtdGlueS1oZWlnaHQ6IDEzLjVyZW0sXG4gIGNoYXQtc21hbGwtaGVpZ2h0OiAyMXJlbSxcbiAgY2hhdC1tZWRpdW0taGVpZ2h0OiAyOC41cmVtLFxuICBjaGF0LWxhcmdlLWhlaWdodDogMzZyZW0sXG4gIGNoYXQtZ2lhbnQtaGVpZ2h0OiA0My41cmVtLFxuXG4gIGNoYXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjaGF0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoYXQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoYXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoYXQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoYXQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGF0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoYXQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgY2hhdC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjaGF0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGNoYXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBjaGF0LW1lc3NhZ2UtYmFja2dyb3VuZDogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGF0LW1lc3NhZ2UtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLWF2YXRhci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy01MDAsXG4gIGNoYXQtbWVzc2FnZS1zZW5kZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc3Bpbm5lci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgc3Bpbm5lci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgc3Bpbm5lci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgc3Bpbm5lci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG5cbiAgc3Bpbm5lci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItYmFzaWMtY2lyY2xlLWZpbGxlZC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzcGlubmVyLWJhc2ljLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1pbmZvLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc3Bpbm5lci1pbmZvLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1zdWNjZXNzLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc3Bpbm5lci1zdWNjZXNzLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLWRhbmdlci1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc3Bpbm5lci1kYW5nZXItY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItY29udHJvbC1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHNwaW5uZXItY29udHJvbC1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItaGVpZ2h0LXRpbnk6IDFyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LXNtYWxsOiAxLjI1cmVtLFxuICBzcGlubmVyLWhlaWdodC1tZWRpdW06IDEuNXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtbGFyZ2U6IDEuNzVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LWdpYW50OiAycmVtLFxuXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc3RlcHBlci1zdGVwLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzdGVwcGVyLXN0ZXAtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3IsXG4gIHN0ZXBwZXItc3RlcC1jb21wbGV0ZWQtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci13aWR0aDogMXB4LFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXJhZGl1czogNTAlLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtd2lkdGg6IDJyZW0sXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1jb21wbGV0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1jb21wbGV0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHN0ZXBwZXItY29ubmVjdG9yLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc3RlcHBlci1jb25uZWN0b3ItY29tcGxldGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1ob3Jpem9udGFsLWNvbm5lY3Rvci1tYXJnaW46IDFyZW0sXG4gIHN0ZXBwZXItdmVydGljYWwtY29ubmVjdG9yLW1hcmdpbjogMXJlbSxcblxuICBzdGVwcGVyLXN0ZXAtY29udGVudC1wYWRkaW5nOiAxLjI1cmVtLFxuXG4gIGFjY29yZGlvbi1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBhY2NvcmRpb24tcGFkZGluZzogMS4yNXJlbSxcbiAgYWNjb3JkaW9uLXNoYWRvdzogc2hhZG93LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBhY2NvcmRpb24taGVhZGVyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci13aWR0aDogMXB4LFxuICBhY2NvcmRpb24taXRlbS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgbGlzdC1pdGVtLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGxpc3QtaXRlbS1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBsaXN0LWl0ZW0tZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgbGlzdC1pdGVtLXBhZGRpbmc6IDFyZW0sXG4gIGxpc3QtaXRlbS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBsaXN0LWl0ZW0tZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBsaXN0LWl0ZW0tZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGxpc3QtaXRlbS1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGxpc3QtaXRlbS1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItd2lkdGg6IDIwLjYyNXJlbSxcbiAgY2FsZW5kYXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjYWxlbmRhci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBjYWxlbmRhci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjYWxlbmRhci1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgY2FsZW5kYXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2FsZW5kYXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2FsZW5kYXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLXRvcDogMC4yNXJlbSxcbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctYm90dG9tOiAwLjYyNXJlbSxcbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctc3RhcnQ6IDAuNjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1lbmQ6IDAuNjI1cmVtLFxuXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tcGFkZGluZzogMC42MjVyZW0gMC4yNXJlbSxcblxuICBjYWxlbmRhci1jZWxsLWluYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBjYWxlbmRhci1jZWxsLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgY2FsZW5kYXItY2VsbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItYm9yZGVyLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1mb250LXNpemU6IGNhbGVuZGFyLXRleHQtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG5cbiAgY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6IDIuNzVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodDogMi43NXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aDogNC44MTI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodDogY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0LFxuICBjYWxlbmRhci15ZWFyLWNlbGwtd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLXdlZWtkYXktYmFja2dyb3VuZDogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLXdlZWtkYXktZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LWhvbGlkYXktdGV4dC1jb2xvcjogY2FsZW5kYXItd2Vla2RheS10ZXh0LWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LWhlaWdodDogY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC13aWR0aCxcblxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1oZWlnaHQ6IGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXdpZHRoOiBjYWxlbmRhci13ZWVrZGF5LXdpZHRoLFxuXG4gIGNhbGVuZGFyLWxhcmdlLXdpZHRoOiAyMi4zNzVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoOiAzcmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQ6IDNyZW0sXG4gIGNhbGVuZGFyLXdlZWtkYXktbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXItd2Vla2RheS1sYXJnZS13aWR0aDogY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWxhcmdlLWhlaWdodDogY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItbGFyZ2Utd2lkdGg6IGNhbGVuZGFyLXdlZWtkYXktbGFyZ2Utd2lkdGgsXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGg6IDUuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQsXG5cbiAgb3ZlcmxheS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpLFxuXG4gIHRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zLFxuICB0b29sdGlwLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtYm9yZGVyLXN0eWxlOiBkYXNoZWQsXG4gIHRvb2x0aXAtYm9yZGVyLXdpZHRoOiAwLFxuICB0b29sdGlwLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHRvb2x0aXAtcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIHRvb2x0aXAtdGV4dC1jb2xvcjogdGV4dC1hbHRlcm5hdGUtY29sb3IsXG4gIHRvb2x0aXAtdGV4dC1mb250LWZhbWlseTogdGV4dC1jYXB0aW9uLWZvbnQtZmFtaWx5LFxuICB0b29sdGlwLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB0b29sdGlwLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi1mb250LXdlaWdodCxcbiAgdG9vbHRpcC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHRvb2x0aXAtaWNvbi1oZWlnaHQ6IDFyZW0sXG4gIHRvb2x0aXAtaWNvbi13aWR0aDogMXJlbSxcbiAgdG9vbHRpcC1tYXgtd2lkdGg6IDE2cmVtLFxuXG4gIHRvb2x0aXAtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICB0b29sdGlwLWJhc2ljLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9vbHRpcC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9vbHRpcC1wcmltYXJ5LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvb2x0aXAtaW5mby1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b29sdGlwLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b29sdGlwLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9vbHRpcC13YXJuaW5nLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b29sdGlwLWRhbmdlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvb2x0aXAtY29udHJvbC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b29sdGlwLXNoYWRvdzogc2hhZG93LFxuXG4gIG9wdGlvbi1saXN0LW1heC1oZWlnaHQ6IDIwcmVtLFxuICBvcHRpb24tbGlzdC1zaGFkb3c6IG5vbmUsXG4gIG9wdGlvbi1saXN0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIG9wdGlvbi1saXN0LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIG9wdGlvbi1saXN0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1jb2xvcjogb3B0aW9uLWxpc3QtYm9yZGVyLWNvbG9yLFxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItc3R5bGU6IG9wdGlvbi1saXN0LWJvcmRlci1zdHlsZSxcbiAgb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOiBvcHRpb24tbGlzdC1ib3JkZXItd2lkdGgsXG5cbiAgb3B0aW9uLWdyb3VwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgb3B0aW9uLWdyb3VwLXRpbnktc3RhcnQtcGFkZGluZzogMS4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLXNtYWxsLXN0YXJ0LXBhZGRpbmc6IDEuNzVyZW0sXG4gIG9wdGlvbi1ncm91cC1tZWRpdW0tc3RhcnQtcGFkZGluZzogMi4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLWxhcmdlLXN0YXJ0LXBhZGRpbmc6IDIuMjVyZW0sXG4gIG9wdGlvbi1ncm91cC1naWFudC1zdGFydC1wYWRkaW5nOiAyLjc1cmVtLFxuXG4gIG9wdGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIG9wdGlvbi10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgb3B0aW9uLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLFxuICBvcHRpb24taG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIG9wdGlvbi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLFxuICBvcHRpb24tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgb3B0aW9uLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIG9wdGlvbi1zZWxlY3RlZC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIG9wdGlvbi1zZWxlY3RlZC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgb3B0aW9uLXNlbGVjdGVkLWZvY3VzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgb3B0aW9uLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tdGlueS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmcsXG5cbiAgb3B0aW9uLXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBvcHRpb24tc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tc21hbGwtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtc21hbGwtcGFkZGluZyxcblxuICBvcHRpb24tbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1tZWRpdW0tcGFkZGluZzogc2VsZWN0LW91dGxpbmUtbWVkaXVtLXBhZGRpbmcsXG5cbiAgb3B0aW9uLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tbGFyZ2UtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtbGFyZ2UtcGFkZGluZyxcblxuICBvcHRpb24tZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZSxcbiAgb3B0aW9uLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1naWFudC1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1naWFudC1wYWRkaW5nLFxuXG4gIHNlbGVjdC1jdXJzb3I6IHBvaW50ZXIsXG4gIHNlbGVjdC1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG4gIHNlbGVjdC1taW4td2lkdGg6IDEzcmVtLFxuICBzZWxlY3Qtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgc2VsZWN0LW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHNlbGVjdC1pY29uLW9mZnNldDogMnJlbSxcblxuICBzZWxlY3QtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgc2VsZWN0LXBsYWNlaG9sZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tMi1mb250LXNpemUsXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodCxcbiAgc2VsZWN0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC10aW55LW1heC13aWR0aDogMjByZW0sXG5cbiAgc2VsZWN0LXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3Qtc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3Qtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3Qtc21hbGwtbWF4LXdpZHRoOiAyMHJlbSxcblxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LW1lZGl1bS1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgc2VsZWN0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNlbGVjdC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LWxhcmdlLW1heC13aWR0aDogMzByZW0sXG5cbiAgc2VsZWN0LWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsXG4gIHNlbGVjdC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgc2VsZWN0LWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBzZWxlY3QtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHNlbGVjdC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIHNlbGVjdC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgc2VsZWN0LW91dGxpbmUtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgc2VsZWN0LW91dGxpbmUtYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgc2VsZWN0LW91dGxpbmUtdGlueS1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtc21hbGwtcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtbGFyZ2UtcGFkZGluZzogMC42ODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxcmVtLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcblxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItc3R5bGU6IHNlbGVjdC1vdXRsaW5lLWJvcmRlci1zdHlsZSxcbiAgc2VsZWN0LW91dGxpbmUtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOiBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGgsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzZWxlY3QtZmlsbGVkLWJvcmRlci13aWR0aDogMXB4LFxuXG4gIHNlbGVjdC1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDFyZW0sXG4gIHNlbGVjdC1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC42ODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG5cbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby10aW55LXBhZGRpbmc6IDAuMjVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tc21hbGwtcGFkZGluZzogMC4yNXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1tZWRpdW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIHNlbGVjdC1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tZ2lhbnQtcGFkZGluZzogMXJlbSAxcmVtLFxuXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1iYXNpYy1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy00MDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTMwMCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtMzAwLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1pbmZvLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG4gIHNlbGVjdC1oZXJvLWluZm8tcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1pbmZvLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWluZm8tZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTUwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBzZWxlY3QtaGVyby1pbmZvLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby0zMDAsXG4gIHNlbGVjdC1oZXJvLWluZm8taG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8td2FybmluZy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTMwMCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1jb250cm9sLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1jb250cm9sLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtaGVyby1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1jb250cm9sLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGRhdGVwaWNrZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBkYXRlcGlja2VyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgZGF0ZXBpY2tlci1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgZGF0ZXBpY2tlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBkYXRlcGlja2VyLXNoYWRvdzogbm9uZSxcblxuICB0aW1lcGlja2VyLWNlbGwtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdGltZXBpY2tlci1jZWxsLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgdGltZXBpY2tlci1jZWxsLWhvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRpbWVwaWNrZXItY2VsbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgdGltZXBpY2tlci1jZWxsLWZvY3VzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRpbWVwaWNrZXItY2VsbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0aW1lcGlja2VyLWNlbGwtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdGltZXBpY2tlci1jZWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgdGltZXBpY2tlci1jZWxsLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRpbWVwaWNrZXItY2VsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICB0aW1lcGlja2VyLWNlbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgdGltZXBpY2tlci1jZWxsLWhlaWdodDogMi43NXJlbSxcbiAgdGltZXBpY2tlci1oZWFkZXItY2VsbC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHRpbWVwaWNrZXItaGVhZGVyLWNlbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICB0aW1lcGlja2VyLWhlYWRlci1jZWxsLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRpbWVwaWNrZXItaGVhZGVyLWNlbGwtaGVpZ2h0OiAyLjc1cmVtLFxuICB0aW1lcGlja2VyLWhlYWRlci1jZWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHRpbWVwaWNrZXItaGVhZGVyLWNlbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgdGltZXBpY2tlci1ib3JkZXItY29sb3I6IGRhdGVwaWNrZXItYm9yZGVyLWNvbG9yLFxuICB0aW1lcGlja2VyLWJvcmRlci1zdHlsZTogZGF0ZXBpY2tlci1ib3JkZXItc3R5bGUsXG4gIHRpbWVwaWNrZXItYm9yZGVyLXdpZHRoOiBkYXRlcGlja2VyLWJvcmRlci13aWR0aCxcbiAgdGltZXBpY2tlci1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgdGltZXBpY2tlci1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIHRpbWVwaWNrZXItc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIHRpbWVwaWNrZXItc2luZ2xlLWNvbHVtbi13aWR0aDogNXJlbSxcbiAgdGltZXBpY2tlci1tdWx0aXBsZS1jb2x1bW4td2lkdGg6IDEzLjg3NXJlbSxcbiAgdGltZXBpY2tlci10aXRsZS1oZWlnaHQ6IDMuNzVyZW0sXG4gIHRpbWVwaWNrZXItdGl0bGUtcGFkZGluZzogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHRpbWVwaWNrZXItY29udGFpbmVyLXdpZHRoOiAyMHJlbSxcbiAgdGltZXBpY2tlci1jb250YWluZXItaGVpZ2h0OiAyNi4xODc1cmVtLFxuXG4gIHJhZGlvLXdpZHRoOiAxLjI1cmVtLFxuICByYWRpby1oZWlnaHQ6IDEuMjVyZW0sXG4gIHJhZGlvLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHJhZGlvLWJvcmRlci13aWR0aDogMXB4LFxuICByYWRpby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIHJhZGlvLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICByYWRpby10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHJhZGlvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcmFkaW8tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgcmFkaW8tb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcblxuICByYWRpby1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICByYWRpby1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICByYWRpby1iYXNpYy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8taW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWluZm8taW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHJhZGlvLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8taW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICByYWRpby1pbmZvLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgcmFkaW8taW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWluZm8taG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8taG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICByYWRpby1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8taW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8td2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICByYWRpby13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICByYWRpby1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHJhZGlvLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICByYWRpby1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1jb250cm9sLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHRyZWUtZ3JpZC1yb3ctbWluLWhlaWdodDogMnJlbSxcbiAgdHJlZS1ncmlkLWNlbGwtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcblxuICB0cmVlLWdyaWQtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICB0cmVlLWdyaWQtZm9vdGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LWZhbWlseSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtc2l6ZTogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtd2VpZ2h0OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1saW5lLWhlaWdodDogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIHRyZWUtZ3JpZC1yb3ctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1ib3JkZXI6IG5vbmUsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tcGFkZGluZzogMCxcblxuICBpY29uLWZvbnQtc2l6ZTogMS4yNXJlbSxcbiAgaWNvbi1saW5lLWhlaWdodDogMSxcbiAgaWNvbi13aWR0aDogMWVtLFxuICBpY29uLWhlaWdodDogMWVtLFxuICBpY29uLXN2Zy12ZXJ0aWNhbC1hbGlnbjogdG9wLFxuICBpY29uLWJhc2ljLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGljb24tcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBpY29uLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgaWNvbi1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGljb24td2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBpY29uLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGljb24tY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuXG4gIHRhZy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICB0YWctdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUsXG4gIHRhZy1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgdGFnLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRhZy1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgdGFnLXRpbnktdGV4dC1mb250LXNpemU6IGlucHV0LXRpbnktdGV4dC1mb250LXNpemUsXG4gIHRhZy10aW55LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LXRpbnktdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLXRpbnktdGV4dC1saW5lLWhlaWdodDogaW5wdXQtdGlueS10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctdGlueS1wYWRkaW5nOiAwLjA2MjVyZW0gMC45Mzc1cmVtLFxuICB0YWctdGlueS1jbG9zZS1vZmZzZXQ6IDAuNjI1cmVtLFxuXG4gIHRhZy1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtc21hbGwtdGV4dC1mb250LXNpemUsXG4gIHRhZy1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctc21hbGwtdGV4dC1saW5lLWhlaWdodDogaW5wdXQtc21hbGwtdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLXNtYWxsLXBhZGRpbmc6IDAuMDYyNXJlbSAwLjkzNzVyZW0sXG4gIHRhZy1zbWFsbC1jbG9zZS1vZmZzZXQ6IDAuNjI1cmVtLFxuXG4gIHRhZy1tZWRpdW0tdGV4dC1mb250LXNpemU6IGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLW1lZGl1bS1wYWRkaW5nOiAwLjE4NzVyZW0gMC45Mzc1cmVtLFxuICB0YWctbWVkaXVtLWNsb3NlLW9mZnNldDogMC42MjVyZW0sXG5cbiAgdGFnLWxhcmdlLXRleHQtZm9udC1zaXplOiBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctbGFyZ2UtcGFkZGluZzogMC4zMTI1cmVtIDAuOTM3NXJlbSxcbiAgdGFnLWxhcmdlLWNsb3NlLW9mZnNldDogMC42MjVyZW0sXG5cbiAgdGFnLWdpYW50LXRleHQtZm9udC1zaXplOiBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctZ2lhbnQtcGFkZGluZzogMC40Mzc1cmVtIDAuOTM3NXJlbSxcbiAgdGFnLWdpYW50LWNsb3NlLW9mZnNldDogMC42MjVyZW0sXG5cbiAgdGFnLWZpbGxlZC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICB0YWctZmlsbGVkLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0YWctZmlsbGVkLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgdGFnLWZpbGxlZC1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtYWN0b3ZlLFxuICB0YWctZmlsbGVkLWJhc2ljLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0YWctZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRhZy1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRhZy1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLXByaW1hcnktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RvdmUsXG4gIHRhZy1maWxsZWQtcHJpbWFyeS1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRhZy1maWxsZWQtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHRhZy1maWxsZWQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLXN1Y2Nlc3Mtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RvdmUsXG4gIHRhZy1maWxsZWQtc3VjY2Vzcy1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0YWctZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHRhZy1maWxsZWQtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRhZy1maWxsZWQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLWluZm8tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RvdmUsXG4gIHRhZy1maWxsZWQtaW5mby1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0YWctZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHRhZy1maWxsZWQtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRhZy1maWxsZWQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLXdhcm5pbmctc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RvdmUsXG4gIHRhZy1maWxsZWQtd2FybmluZy1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdGFnLWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdGFnLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgdGFnLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0YWctZmlsbGVkLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHRhZy1maWxsZWQtZGFuZ2VyLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RvdmUsXG4gIHRhZy1maWxsZWQtZGFuZ2VyLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG5cbiAgdGFnLWZpbGxlZC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdGFnLWZpbGxlZC1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgdGFnLWZpbGxlZC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdGFnLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICB0YWctZmlsbGVkLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXIsXG4gIHRhZy1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICB0YWctZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1jb250cm9sLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0b3ZlLFxuICB0YWctZmlsbGVkLWNvbnRyb2wtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXIsXG5cbiAgdGFnLW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdGFnLW91dGxpbmUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICB0YWctb3V0bGluZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRhZy1vdXRsaW5lLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgdGFnLW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRhZy1vdXRsaW5lLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0YWctb3V0bGluZS1iYXNpYy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHRhZy1vdXRsaW5lLWJhc2ljLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtYmFzaWMtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0YWctb3V0bGluZS1iYXNpYy1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICB0YWctb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0YWctb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdGFnLW91dGxpbmUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgdGFnLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcblxuICB0YWctb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICB0YWctb3V0bGluZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0YWctb3V0bGluZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0YWctb3V0bGluZS1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIHRhZy1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgdGFnLW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0YWctb3V0bGluZS1pbmZvLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgdGFnLW91dGxpbmUtaW5mby1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtaW5mby1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtaW5mby1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG5cbiAgdGFnLW91dGxpbmUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctb3V0bGluZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgdGFnLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgdGFnLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtd2FybmluZy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICB0YWctb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtd2FybmluZy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuXG4gIHRhZy1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctb3V0bGluZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIHRhZy1vdXRsaW5lLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0YWctb3V0bGluZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICB0YWctb3V0bGluZS1kYW5nZXItc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLWRhbmdlci1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcblxuICB0YWctb3V0bGluZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctb3V0bGluZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0YWctb3V0bGluZS1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0YWctb3V0bGluZS1jb250cm9sLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRhZy1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgdGFnLW91dGxpbmUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0YWctb3V0bGluZS1jb250cm9sLWhvdmVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdGFnLW91dGxpbmUtY29udHJvbC1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtY29udHJvbC1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgdGFnLWxpc3QtdGlueS10YWctb2Zmc2V0OiAwLjA2MjVyZW0sXG4gIHRhZy1saXN0LXNtYWxsLXRhZy1vZmZzZXQ6IDAuMTI1cmVtLFxuICB0YWctbGlzdC1tZWRpdW0tdGFnLW9mZnNldDogMC4yNXJlbSxcbiAgdGFnLWxpc3QtbGFyZ2UtdGFnLW9mZnNldDogMC4zNzVyZW0sXG4gIHRhZy1saXN0LWdpYW50LXRhZy1vZmZzZXQ6IDAuNXJlbSxcblxuICB0YWctbGlzdC13aXRoLWlucHV0LXRpbnktcGFkZGluZzogMC4wNjI1cmVtIDFyZW0sXG4gIHRhZy1saXN0LXdpdGgtaW5wdXQtc21hbGwtcGFkZGluZzogMC4wNjI1cmVtIDFyZW0sXG4gIHRhZy1saXN0LXdpdGgtaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICB0YWctbGlzdC13aXRoLWlucHV0LWxhcmdlLXBhZGRpbmc6IDAuMzEyNXJlbSAxcmVtLFxuICB0YWctbGlzdC13aXRoLWlucHV0LWdpYW50LXBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtLFxuXG4gIHRhZy1saXN0LXdpdGgtaW5wdXQtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGlucHV0LXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzLFxuICB0YWctbGlzdC13aXRoLWlucHV0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogaW5wdXQtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzLFxuICB0YWctbGlzdC13aXRoLWlucHV0LXJvdW5kLWJvcmRlci1yYWRpdXM6IGlucHV0LXJvdW5kLWJvcmRlci1yYWRpdXMsXG5cbiAgdGFnLWlucHV0LW1pbi13aWR0aDogNnJlbSxcbiAgdGFnLWlucHV0LXRleHQtZm9udC1mYW1pbHk6IGlucHV0LXRleHQtZm9udC1mYW1pbHksXG4gIHRhZy1pbnB1dC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtZmFtaWx5OiBpbnB1dC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtZmFtaWx5LFxuXG4gIHRhZy1pbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWctaW5wdXQtYmFzaWMtYm9yZGVyLWNvbG9yOiBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1iYXNpYy10ZXh0LWNvbG9yOiBpbnB1dC1iYXNpYy10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1iYXNpYy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuXG4gIHRhZy1pbnB1dC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGlucHV0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktYm9yZGVyLWNvbG9yOiBpbnB1dC1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktdGV4dC1jb2xvcjogaW5wdXQtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG5cbiAgdGFnLWlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGlucHV0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiBpbnB1dC1zdWNjZXNzLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGlucHV0LXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGlucHV0LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1zdWNjZXNzLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcixcblxuICB0YWctaW5wdXQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1pbmZvLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLWJvcmRlci1jb2xvcjogaW5wdXQtaW5mby1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLXRleHQtY29sb3I6IGlucHV0LWluZm8tdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogaW5wdXQtaW5mby1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IGlucHV0LWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LWluZm8tZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtaW5mby1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuXG4gIHRhZy1pbnB1dC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGlucHV0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctYm9yZGVyLWNvbG9yOiBpbnB1dC13YXJuaW5nLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctdGV4dC1jb2xvcjogaW5wdXQtd2FybmluZy10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtd2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogaW5wdXQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtd2FybmluZy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC13YXJuaW5nLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG5cbiAgdGFnLWlucHV0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LWRhbmdlci1ib3JkZXItY29sb3I6IGlucHV0LWRhbmdlci1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItdGV4dC1jb2xvcjogaW5wdXQtZGFuZ2VyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yLFxuICB0YWctaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IGlucHV0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGlucHV0LWRhbmdlci1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuXG4gIHRhZy1pbnB1dC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBpbnB1dC1jb250cm9sLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtdGV4dC1jb2xvcjogaW5wdXQtY29udHJvbC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogaW5wdXQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtY29udHJvbC1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1jb250cm9sLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG5cbiAgdGFnLWlucHV0LXRpbnktdGV4dC1mb250LXNpemU6IGlucHV0LXRpbnktdGV4dC1mb250LXNpemUsXG4gIHRhZy1pbnB1dC10aW55LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LXRpbnktdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LXRpbnktdGV4dC1saW5lLWhlaWdodDogaW5wdXQtdGlueS10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC10aW55LXBhZGRpbmc6IDAuMTI1cmVtIDAsXG5cbiAgdGFnLWlucHV0LXNtYWxsLXRleHQtZm9udC1zaXplOiBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1pbnB1dC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC1zbWFsbC1wYWRkaW5nOiAwLjEyNXJlbSAwLFxuXG4gIHRhZy1pbnB1dC1tZWRpdW0tdGV4dC1mb250LXNpemU6IGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLWlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuMjVyZW0gMCxcblxuICB0YWctaW5wdXQtbGFyZ2UtdGV4dC1mb250LXNpemU6IGlucHV0LWxhcmdlLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LWxhcmdlLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemUsXG4gIHRhZy1pbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLWlucHV0LWxhcmdlLXBhZGRpbmc6IDAuMzc1cmVtIDAsXG5cbiAgdGFnLWlucHV0LWdpYW50LXRleHQtZm9udC1zaXplOiBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1pbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC1naWFudC1wYWRkaW5nOiAwLjVyZW0gMCxcblxuICB0b2dnbGUtaGVpZ2h0OiAxLjg3NXJlbSxcbiAgdG9nZ2xlLXdpZHRoOiAzLjEyNXJlbSxcbiAgdG9nZ2xlLWJvcmRlci13aWR0aDogMXB4LFxuICB0b2dnbGUtYm9yZGVyLXJhZGl1czogMTAwcHgsXG4gIHRvZ2dsZS1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICB0b2dnbGUtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgdG9nZ2xlLXN3aXRjaGVyLXNpemU6IDEuNzVyZW0sXG4gIHRvZ2dsZS1zd2l0Y2hlci1pY29uLXNpemU6IDAuNzVyZW0sXG4gIHRvZ2dsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIHRvZ2dsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgdG9nZ2xlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgdG9nZ2xlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgdG9nZ2xlLWN1cnNvcjogcG9pbnRlcixcbiAgdG9nZ2xlLWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcblxuICB0b2dnbGUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9nZ2xlLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2dnbGUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0b2dnbGUtaW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRvZ2dsZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtY29udHJvbC1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIGZvcm0tZmllbGQtdGlueS1tYXgtd2lkdGg6IGlucHV0LXRpbnktbWF4LXdpZHRoLFxuICBmb3JtLWZpZWxkLXNtYWxsLW1heC13aWR0aDogaW5wdXQtc21hbGwtbWF4LXdpZHRoLFxuICBmb3JtLWZpZWxkLW1lZGl1bS1tYXgtd2lkdGg6IGlucHV0LW1lZGl1bS1tYXgtd2lkdGgsXG4gIGZvcm0tZmllbGQtbGFyZ2UtbWF4LXdpZHRoOiBpbnB1dC1sYXJnZS1tYXgtd2lkdGgsXG4gIGZvcm0tZmllbGQtZ2lhbnQtbWF4LXdpZHRoOiBpbnB1dC1naWFudC1tYXgtd2lkdGgsXG5cbiAgZm9ybS1maWVsZC1hZGRvbi1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tYmFzaWMtaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXByaW1hcnktdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tcHJpbWFyeS1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tc3VjY2Vzcy10ZXh0LWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zdWNjZXNzLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1pbmZvLXRleHQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWluZm8taGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLWluZm8tNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXdhcm5pbmctdGV4dC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24td2FybmluZy1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3Itd2FybmluZy02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tZGFuZ2VyLXRleHQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tZGFuZ2VyLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWNvbnRyb2wtaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgZm9ybS1maWVsZC1hZGRvbi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1oZWlnaHQ6IDEuNXJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLXRpbnktaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktaWNvbi1zaXplOiBidXR0b24tdGlueS1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtaGVpZ2h0OiAycmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1pY29uLXNpemU6IGJ1dHRvbi1zbWFsbC1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1zbWFsbC1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0taGVpZ2h0OiAyLjVyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWljb24tc2l6ZTogYnV0dG9uLW1lZGl1bS1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaWNvbi1zaXplOiBidXR0b24tbGFyZ2UtaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaGVpZ2h0OiAzLjVyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWljb24tc2l6ZTogYnV0dG9uLWdpYW50LWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1mb250LXNpemU6IHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lcy9tYXBwaW5nJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuXG4gIEBpZiAobGVuZ3RoKCRuYi1lbmFibGVkLXRoZW1lcykgPT0gMCkge1xuICAgIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJG5iLXRoZW1lcyB7XG4gICAgICAkbmItZW5hYmxlZC10aGVtZXM6IGFwcGVuZCgkbmItZW5hYmxlZC10aGVtZXMsICR0aGVtZS1uYW1lKSAhZ2xvYmFsO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICRuYi1lbmFibGVkLXRoZW1lcztcbn1cblxuQGZ1bmN0aW9uIGdldC1sYXN0LWVuYWJsZWQtdGhlbWUoKSB7XG4gICR0aGVtZXM6IG5iLWdldC1lbmFibGVkLXRoZW1lcygpO1xuICBAcmV0dXJuIG50aCgkdGhlbWVzLCBsZW5ndGgoJHRoZW1lcykpO1xufVxuXG5AZnVuY3Rpb24gbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lOiBudWxsKSB7XG5cbiAgJHBhcmVudC10aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLWV4cG9ydCwgJHBhcmVudC1uYW1lKTtcbiAgQGlmICgkcGFyZW50LXRoZW1lICE9IG51bGwpIHtcbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRwYXJlbnQtdGhlbWUsIGRhdGEpLCAkdGhlbWUpO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6IChcbiAgICBkYXRhOiAkdGhlbWUsXG4gICAgcGFyZW50OiAkcGFyZW50LW5hbWUsXG4gICk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsICR0aGVtZS1kYXRhKTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCRuYW1lKSB7XG4gICR0aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLCAkbmFtZSk7XG5cbiAgLy8gVE9ETzogY2hlY2sgaWYgb3B0aW1hbCBwbGFjZVxuICBAaWYgKCR0aGVtZSA9PSBudWxsKSB7XG4gICAgQGVycm9yICdOZWJ1bGFyIFRoZW1lOiB0aGVtZSBgJyArICRuYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgbmItcmVnaXN0ZXItdGhlbWVgIGZ1bmN0aW9uLic7XG4gIH1cblxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIFJlZ2lzdGVycyBhIG5ldyB0aGVtZVxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZTogbnVsbCkge1xuXG4gIEBpZiAoJG5iLXRoZW1lLWV4cG9ydC1tb2RlID09IHRydWUpIHtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lKSAhZ2xvYmFsO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG4gIEBpZiAoJHBhcmVudC1uYW1lICE9IG51bGwpIHtcbiAgICAkcGFyZW50LXRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMsICRwYXJlbnQtbmFtZSk7XG4gICAgQGlmICgkcGFyZW50LXRoZW1lID09IG51bGwpIHtcbiAgICAgIEBlcnJvciAnTmVidWxhciBUaGVtZTogcGFyZW50IHRoZW1lIGAnICsgJHBhcmVudC1uYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgb3IgaW1wb3J0ZWQuJztcbiAgICB9XG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UoJHBhcmVudC10aGVtZSwgJHRoZW1lKTtcbiAgfVxuICAkdGhlbWU6IG1hcC1tZXJnZSgkZXZhLW1hcHBpbmcsICR0aGVtZSk7XG4gICRuYi10aGVtZXM6IG1hcC1zZXQoJG5iLXRoZW1lcywgJG5hbWUsICR0aGVtZSkgIWdsb2JhbDtcblxuICBAcmV0dXJuICRuYi10aGVtZXM7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSAhPSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtZm9yLXRoZW1lcygkbmFtZXMuLi4pIHtcbiAgQGVhY2ggJG5hbWUgaW4gJG5hbWVzIHtcbiAgICBAaW5jbHVkZSBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jc3MtcHJvcGVydGllcygkdGhlbWUtbmFtZSwgJHRoZW1lKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG5cbiAgICBAZWFjaCAkdmFyLCAkdmFsdWUgaW4gJHRoZW1lIHtcbiAgICAgIEBpZiAodHlwZS1vZigkdmFsdWUpID09ICdzdHJpbmcnIGFuZCBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKSkge1xuICAgICAgICAtLSN7JHZhcn06IHZhcigtLSN7JHZhbHVlfSk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLS0jeyR2YXJ9OiAjeyR2YWx1ZX07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1wcmUtcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKSB7XG4gICRuYi10aGVtZS1wcm9jZXNzLW1vZGU6ICdwcmUtcHJvY2VzcycgIWdsb2JhbDtcblxuICAkbmItdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgJG5iLXByb2Nlc3NlZC10aGVtZTogbmItcHJvY2Vzcy10aGVtZShuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpICFnbG9iYWw7XG59XG5cbkBtaXhpbiBuYi1sYXp5LXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSkge1xuICAkbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuXG4gICRuYi10aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICAkbmItcHJvY2Vzc2VkLXRoZW1lOiAoKSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIC8vIEBicmVha2luZy1jaGFuZ2UgNS4wLjBcbiAgOmhvc3Qge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgJGVuYWJsZWQtdGhlbWVzOiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkZW5hYmxlZC10aGVtZXMge1xuXG4gICAgQGluY2x1ZGUgbmItbGF6eS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpO1xuXG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSA6aG9zdCB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIEluc3RhbGxzIGNvbXBvbmVudCBzdHlsZXMgYmFzZWQgb24gcmVnaXN0ZXJlZCB0aGVtZXNcbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuXG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG5cbiAgfSBAZWxzZSB7XG5cbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIEBjb250ZW50O1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNzcy1wcm9wZXJ0aWVzKCR0aGVtZS1uYW1lLCBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpO1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICAgQGluY2x1ZGUgbmItcHJlLXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSk7XG5cbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBJbnN0YWxscyBnbG9iYWwgc3R5bGVzIGJhc2VkIG9uIHJlZ2lzdGVyZWQgdGhlbWVzXG5AbWl4aW4gbmItaW5zdGFsbCgpIHtcbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtY3NzLXByb3BzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSB7XG4gICRwYXJlbnQtdmFsdWU6IG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpO1xuXG4gIEBpZiAoJHBhcmVudC12YWx1ZSAhPSBudWxsKSB7XG4gICAgQHJldHVybiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAkdmFsdWUsICRwYXJlbnQtdmFsdWUpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cbkBmdW5jdGlvbiBuYi1wcm9jZXNzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJvY2Vzc2VkLXRoZW1lOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHByb2Nlc3NlZC10aGVtZTogbWFwLXNldCgkcHJvY2Vzc2VkLXRoZW1lLCAka2V5LCBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuICBAcmV0dXJuICRwcm9jZXNzZWQtdGhlbWU7XG59XG5cbkBmdW5jdGlvbiBnZXQtY3VycmVudC10aGVtZS1uYW1lKCkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lICE9IG51bGwpIHtcbiAgICBAcmV0dXJuICRuYi10aGVtZS1uYW1lO1xuICB9XG5cbiAgQHJldHVybiBnZXQtbGFzdC1lbmFibGVkLXRoZW1lKCk7XG59XG5cbkBmdW5jdGlvbiBuYi10aGVtZSgka2V5KSB7XG5cbiAgJHZhbHVlOiAoKTtcblxuICAvLyBpbiBjYXNlIG9mIGNzcyBjdXN0b20gcHJvcGVydGllcyAtIGp1c3QgcmV0dXJucyB2YXIoLS12YXItbmFtZSkgLSB0aGUgcmVzdCBpcyBhIGJyb3dzZXIgam9iXG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMgPT0gdHJ1ZSkge1xuICAgIC8vIHRoZXJlIGlzIG5vIHdheSB0byBjaGVjayBpZiB2YXJpYWJsZSBleGlzdHMgYXMgY3VycmVudCBleGVjdXRpb24gY29udGV4dCBpcyBvdXRzaWRlIG9mIHBhcnRpY3VsYXIgdGhlbWVcbiAgICAvLyBiZWNhdXNlIHdlIHByb2Nlc3MgY3NzIGluIHRoaXMgbW9kZSBvbmx5IG9uY2UhIChhbmQgbm90IGZvciBlYWNoIHRoZW1lKVxuICAgICR2YWx1ZTogdmFyKC0tI3ska2V5fSk7XG4gIH0gQGVsc2Uge1xuICAgIC8vIGluIGEgcHJlcHJvY2VzcyBtb2RlIChuYi1pbnN0YWxsLWdsb2JhbCBjYWxsKSBnZXQgcmVhZHkgdmFsdWUgZnJvbSAkbmItcHJvY2Vzc2VkLXRoZW1lIHZhcmlhYmxlXG4gICAgQGlmICgkbmItdGhlbWUtcHJvY2Vzcy1tb2RlID09ICdwcmUtcHJvY2VzcycpIHtcbiAgICAgICR2YWx1ZTogbWFwLWdldCgkbmItcHJvY2Vzc2VkLXRoZW1lLCAka2V5KTtcbiAgICB9XG5cbiAgICAvLyBvdGhlcndpc2UgbGF6aWx5IHNlYXJjaCBmb3IgdmFyaWFibGUgdmFsdWVcbiAgICBAaWYgKCRuYi10aGVtZS1wcm9jZXNzLW1vZGUgPT0gJ2xhenktcHJvY2VzcycpIHtcblxuICAgICAgJG5iLXRoZW1lLW5hbWU6IGdldC1jdXJyZW50LXRoZW1lLW5hbWUoKTtcblxuICAgICAgJHRoZW1lOiBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkbmItdGhlbWUtbmFtZSk7XG4gICAgICAkdmFsdWU6IG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksIG1hcC1nZXQoJHRoZW1lLCAka2V5KSk7XG4gICAgfVxuICB9XG5cbiAgQGlmICgkdmFsdWUgPT0gbnVsbCkge1xuICAgIEB3YXJuICdOZWJ1bGFyIFRoZW1lOiBgbmItdGhlbWUoKWAgY2Fubm90IGZpbmQgdmFsdWUgZm9yIGtleSBgJyArICRrZXkgKyAnYCBmb3IgdGhlbWUgYCcrICRuYi10aGVtZS1uYW1lICsnYCc7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuXG4kdGhlbWU6IChcblxuICAvKipcbiAgICogU2FzcyBtYXAgY29udGFpbnMgYSBsaXN0IG9mIGFsbCBUaGVtZSB2YXJpYWJsZXMgYW5kIGFsc28gdGhlaXIgbWFwcGluZ3MgaW50byBDb21wb25lbnQgdmFyaWFibGVzXG4gICAqIEEgdGhlbWUgY29uc2lzdHMgb2YgYSBsaXN0IG9mIGNvbG9ycywgYmFja2dyb3VuZHMsIGJvcmRlcnMsIHRleHQgc3R5bGVzIGFuZCBzdXBwb3J0aW5nIHZhcmlhYmxlcy5cbiAgICovXG5cblxuICAvKiBTdGF0dXMgY29sb3JzOiBwcmltYXJ5LCBzdWNjZXNzLCBpbmZvLCB3YXJuaW5nLCBkYW5nZXIgLSBmb3IgY29sb3JlZCBlbGVtZW50cyAoYnV0dG9ucywgZXRjKSAqL1xuXG4gIGNvbG9yLXByaW1hcnktMTAwOiAjZjJmNmZmLFxuICBjb2xvci1wcmltYXJ5LTIwMDogI2Q5ZTRmZixcbiAgY29sb3ItcHJpbWFyeS0zMDA6ICNhNmMxZmYsXG4gIGNvbG9yLXByaW1hcnktNDAwOiAjNTk4YmZmLFxuICBjb2xvci1wcmltYXJ5LTUwMDogIzMzNjZmZixcbiAgY29sb3ItcHJpbWFyeS02MDA6ICMyNzRiZGIsXG4gIGNvbG9yLXByaW1hcnktNzAwOiAjMWEzNGI4LFxuICBjb2xvci1wcmltYXJ5LTgwMDogIzEwMjY5NCxcbiAgY29sb3ItcHJpbWFyeS05MDA6ICMwOTFjN2EsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjA4KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjE2KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjI0KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjMyKSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtMTAwOiAjZjBmZmY1LFxuICBjb2xvci1zdWNjZXNzLTIwMDogI2NjZmNlMyxcbiAgY29sb3Itc3VjY2Vzcy0zMDA6ICM4Y2ZhYzcsXG4gIGNvbG9yLXN1Y2Nlc3MtNDAwOiAjMmNlNjliLFxuICBjb2xvci1zdWNjZXNzLTUwMDogIzAwZDY4ZixcbiAgY29sb3Itc3VjY2Vzcy02MDA6ICMwMGI4ODcsXG4gIGNvbG9yLXN1Y2Nlc3MtNzAwOiAjMDA5OTdhLFxuICBjb2xvci1zdWNjZXNzLTgwMDogIzAwN2Q2YyxcbiAgY29sb3Itc3VjY2Vzcy05MDA6ICMwMDRhNDUsXG5cbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMDgpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4xNiksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjI0KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC00MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMzIpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTUwMDogcmdiYSgwLCAyMTQsIDE0MywgMC40KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuNDgpLFxuXG4gIGNvbG9yLWluZm8tMTAwOiAjZjJmOGZmLFxuICBjb2xvci1pbmZvLTIwMDogI2M3ZTJmZixcbiAgY29sb3ItaW5mby0zMDA6ICM5NGNiZmYsXG4gIGNvbG9yLWluZm8tNDAwOiAjNDJhYWZmLFxuICBjb2xvci1pbmZvLTUwMDogIzAwOTVmZixcbiAgY29sb3ItaW5mby02MDA6ICMwMDZmZDYsXG4gIGNvbG9yLWluZm8tNzAwOiAjMDA1N2MyLFxuICBjb2xvci1pbmZvLTgwMDogIzAwNDFhOCxcbiAgY29sb3ItaW5mby05MDA6ICMwMDI4ODUsXG5cbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0xMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMDgpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4xNiksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjI0KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC00MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMzIpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTUwMDogcmdiYSgwLCAxNDksIDI1NSwgMC40KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLXdhcm5pbmctMTAwOiAjZmZmZGYyLFxuICBjb2xvci13YXJuaW5nLTIwMDogI2ZmZjFjMixcbiAgY29sb3Itd2FybmluZy0zMDA6ICNmZmU1OWUsXG4gIGNvbG9yLXdhcm5pbmctNDAwOiAjZmZjOTRkLFxuICBjb2xvci13YXJuaW5nLTUwMDogI2ZmYWEwMCxcbiAgY29sb3Itd2FybmluZy02MDA6ICNkYjhiMDAsXG4gIGNvbG9yLXdhcm5pbmctNzAwOiAjYjg2ZTAwLFxuICBjb2xvci13YXJuaW5nLTgwMDogIzk0NTQwMCxcbiAgY29sb3Itd2FybmluZy05MDA6ICM3MDNjMDAsXG5cbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMDgpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4xNiksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjI0KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMzIpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC40KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuNDgpLFxuXG4gIGNvbG9yLWRhbmdlci0xMDA6ICNmZmYyZjIsXG4gIGNvbG9yLWRhbmdlci0yMDA6ICNmZmQ2ZDksXG4gIGNvbG9yLWRhbmdlci0zMDA6ICNmZmE4YjQsXG4gIGNvbG9yLWRhbmdlci00MDA6ICNmZjcwOGQsXG4gIGNvbG9yLWRhbmdlci01MDA6ICNmZjNkNzEsXG4gIGNvbG9yLWRhbmdlci02MDA6ICNkYjJjNjYsXG4gIGNvbG9yLWRhbmdlci03MDA6ICNiODFkNWIsXG4gIGNvbG9yLWRhbmdlci04MDA6ICM5NDEyNGUsXG4gIGNvbG9yLWRhbmdlci05MDA6ICM3MDA5NDAsXG5cbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMDgpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4xNiksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjI0KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMzIpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC40KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuNDgpLFxuXG4gIC8qIEJhc2ljIGNvbG9ycyAtIGZvciBiYWNrZ3JvdW5kcyBhbmQgYm9yZGVycyBhbmQgdGV4dHMgKi9cblxuICBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsXG4gIGNvbG9yLWJhc2ljLTIwMDogI2Y3ZjlmYyxcbiAgY29sb3ItYmFzaWMtMzAwOiAjZWRmMWY3LFxuICBjb2xvci1iYXNpYy00MDA6ICNlNGU5ZjIsXG4gIGNvbG9yLWJhc2ljLTUwMDogI2M1Y2VlMCxcbiAgY29sb3ItYmFzaWMtNjAwOiAjOGY5YmIzLFxuICBjb2xvci1iYXNpYy03MDA6ICMyZTNhNTksXG4gIGNvbG9yLWJhc2ljLTgwMDogIzIyMmI0NSxcbiAgY29sb3ItYmFzaWMtOTAwOiAjMTkyMDM4LFxuICBjb2xvci1iYXNpYy0xMDAwOiAjMTUxYTMwLFxuICBjb2xvci1iYXNpYy0xMTAwOiAjMTAxNDI2LFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMTYpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjQ4KSxcblxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OCksXG5cbiAgLyogU3RhdHVzIGNvbG9ycyBzdGF0ZXMgLSBmb2N1cywgaG92ZXIsIGRlZmF1bHQsIGFjdGl2ZSwgZGlzYWJsZWQgICovXG5cbiAgY29sb3ItYmFzaWMtZm9jdXM6IGNvbG9yLWJhc2ljLTQwMCxcbiAgY29sb3ItYmFzaWMtaG92ZXI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgY29sb3ItYmFzaWMtZGVmYXVsdDogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1iYXNpYy1hY3RpdmU6IGNvbG9yLWJhc2ljLTQwMCxcbiAgY29sb3ItYmFzaWMtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXG4gIGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBjb2xvci1iYXNpYy1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy1hY3RpdmUsXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXByaW1hcnktZm9jdXM6IGNvbG9yLXByaW1hcnktNjAwLFxuICBjb2xvci1wcmltYXJ5LWhvdmVyOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgY29sb3ItcHJpbWFyeS1kZWZhdWx0OiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS1hY3RpdmU6IGNvbG9yLXByaW1hcnktNjAwLFxuICBjb2xvci1wcmltYXJ5LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY29sb3ItcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1czogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWhvdmVyOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgY29sb3Itc3VjY2Vzcy1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXG5cbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1czogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWluZm8tZm9jdXM6IGNvbG9yLWluZm8tNjAwLFxuICBjb2xvci1pbmZvLWhvdmVyOiBjb2xvci1pbmZvLTQwMCxcbiAgY29sb3ItaW5mby1kZWZhdWx0OiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby1hY3RpdmU6IGNvbG9yLWluZm8tNjAwLFxuICBjb2xvci1pbmZvLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTcwMCxcbiAgY29sb3ItaW5mby1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8taG92ZXIsXG4gIGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgY29sb3ItaW5mby1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG5cbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1czogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXdhcm5pbmctZm9jdXM6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBjb2xvci13YXJuaW5nLWhvdmVyOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgY29sb3Itd2FybmluZy1kZWZhdWx0OiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy1hY3RpdmU6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBjb2xvci13YXJuaW5nLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyOiBjb2xvci13YXJuaW5nLTcwMCxcbiAgY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXI6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgY29sb3Itd2FybmluZy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG5cbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1czogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWRhbmdlci1mb2N1czogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWhvdmVyOiBjb2xvci1kYW5nZXItNDAwLFxuICBjb2xvci1kYW5nZXItZGVmYXVsdDogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZTogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXI6IGNvbG9yLWRhbmdlci03MDAsXG4gIGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXI6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGNvbG9yLWRhbmdlci1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcblxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItY29udHJvbC1mb2N1czogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1jb250cm9sLWhvdmVyOiBjb2xvci1iYXNpYy0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtZGVmYXVsdDogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLWFjdGl2ZTogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1jb250cm9sLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXG4gIGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRpc2FibGVkLFxuXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgLyogQmFja2dyb3VuZHMgYW5kIGJvcmRlcnMgLSBiYXNpYywgYWx0ZXJuYXRpdmUgYW5kIHByaW1hcnkgICovXG5cbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG5cbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcblxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLXByaW1hcnktNTAwLFxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0zOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLXByaW1hcnktODAwLFxuXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLWJhc2ljLTUwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMjogY29sb3ItYmFzaWMtNjAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci0zOiBjb2xvci1iYXNpYy03MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItNTogY29sb3ItYmFzaWMtOTAwLFxuXG4gIC8qIFRleHQgY29sb3JzIC0gZ2VuZXJhbCBhbmQgc3RhdHVzICovXG5cbiAgdGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1kaXNhYmxlZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICB0ZXh0LWhpbnQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcblxuICB0ZXh0LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0ZXh0LXByaW1hcnktaG92ZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxuXG4gIHRleHQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0ZXh0LXN1Y2Nlc3MtZm9jdXMtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRleHQtc3VjY2Vzcy1ob3Zlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdGV4dC1zdWNjZXNzLWFjdGl2ZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG5cbiAgdGV4dC1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRleHQtaW5mby1mb2N1cy1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdGV4dC1pbmZvLWhvdmVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcblxuICB0ZXh0LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdGV4dC13YXJuaW5nLWZvY3VzLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0ZXh0LXdhcm5pbmctaG92ZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRleHQtd2FybmluZy1hY3RpdmUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxuXG4gIHRleHQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdGV4dC1kYW5nZXItZm9jdXMtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgdGV4dC1kYW5nZXItaG92ZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICB0ZXh0LWRhbmdlci1kaXNhYmxlZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcblxuICAvKiBGb250cyBhbmQgdGV4dCBzdHlsZXMgLSBoZWFkaW5ncywgc3VidGl0bGVzLCBwYXJhZ3JhcGhzLCBjYXB0aW9ucywgYnV0dG9uICovXG5cbiAgZm9udC1mYW1pbHktcHJpbWFyeTogdW5xdW90ZSgnT3BlbiBTYW5zLCBzYW5zLXNlcmlmJyksXG4gIGZvbnQtZmFtaWx5LXNlY29uZGFyeTogZm9udC1mYW1pbHktcHJpbWFyeSxcblxuICB0ZXh0LWhlYWRpbmctMS1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMS1mb250LXNpemU6IDIuMjVyZW0sXG4gIHRleHQtaGVhZGluZy0xLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy0xLWxpbmUtaGVpZ2h0OiAzcmVtLFxuXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtc2l6ZTogMnJlbSxcbiAgdGV4dC1oZWFkaW5nLTItZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTItbGluZS1oZWlnaHQ6IDIuNXJlbSxcblxuICB0ZXh0LWhlYWRpbmctMy1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMy1mb250LXNpemU6IDEuODc1cmVtLFxuICB0ZXh0LWhlYWRpbmctMy1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctMy1saW5lLWhlaWdodDogMi41cmVtLFxuXG4gIHRleHQtaGVhZGluZy00LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy00LWZvbnQtc2l6ZTogMS42MjVyZW0sXG4gIHRleHQtaGVhZGluZy00LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy00LWxpbmUtaGVpZ2h0OiAycmVtLFxuXG4gIHRleHQtaGVhZGluZy01LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy01LWZvbnQtc2l6ZTogMS4zNzVyZW0sXG4gIHRleHQtaGVhZGluZy01LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy01LWxpbmUtaGVpZ2h0OiAycmVtLFxuXG4gIHRleHQtaGVhZGluZy02LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZTogMS4xMjVyZW0sXG4gIHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1zdWJ0aXRsZS1mb250LXNpemU6IDAuOTM3NXJlbSxcbiAgdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplOiAwLjgxMjVyZW0sXG4gIHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplOiAwLjkzNzVyZW0sXG4gIHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0OiAxLjI1cmVtLFxuXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplOiAwLjgxMjVyZW0sXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQ6IDQwMCxcbiAgdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodDogMS4xMjVyZW0sXG5cbiAgdGV4dC1sYWJlbC1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1sYWJlbC1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtbGFiZWwtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1sYWJlbC1saW5lLWhlaWdodDogMXJlbSxcblxuICB0ZXh0LWNhcHRpb24tZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtY2FwdGlvbi1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtY2FwdGlvbi1mb250LXdlaWdodDogNDAwLFxuICB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1jYXB0aW9uLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQ6IDYwMCxcbiAgdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1idXR0b24tZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplOiAwLjYyNXJlbSxcbiAgdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodDogMC43NXJlbSxcbiAgdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodDogMXJlbSxcbiAgdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodDogMXJlbSxcbiAgdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplOiAxcmVtLFxuICB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodDogMS4yNXJlbSxcbiAgdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplOiAxLjEyNXJlbSxcbiAgdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICAvKiBTdXBwb3J0aW5nIHZhcmlhYmxlcyAtIGJvcmRlciByYWRpdXMsIG91dGxpbmUsIHNoYWRvdywgZGl2aWRlciAqL1xuXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXG5cbiAgb3V0bGluZS13aWR0aDogMC4zNzVyZW0sXG4gIG91dGxpbmUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcblxuICBzY3JvbGxiYXItY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItNCxcbiAgc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2Nyb2xsYmFyLXdpZHRoOiAwLjMxMjVyZW0sXG5cbiAgc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSg0NCwgNTEsIDczLCAwLjEpLFxuXG4gIGRpdmlkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBkaXZpZGVyLXN0eWxlOiBzb2xpZCxcbiAgZGl2aWRlci13aWR0aDogMXB4LFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbiR0aGVtZTogKFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG5cbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcblxuICB0ZXh0LWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtYWx0ZXJuYXRlLWNvbG9yOiBjb2xvci1iYXNpYy05MDAsXG4gIHRleHQtZGlzYWJsZWQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBzaGFkb3c6IDAgMC41cmVtIDFyZW0gMCAjMWExZjMzLFxuICBvdXRsaW5lLWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4pO1xuXG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgZGFyaywgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RhcmsnO1xuXG4kdGhlbWU6IChcblxuICBjb2xvci1wcmltYXJ5LTEwMDogI2ZhZjdmZixcbiAgY29sb3ItcHJpbWFyeS0yMDA6ICNlY2UzZmYsXG4gIGNvbG9yLXByaW1hcnktMzAwOiAjZDViZmZmLFxuICBjb2xvci1wcmltYXJ5LTQwMDogI2IxOGFmZixcbiAgY29sb3ItcHJpbWFyeS01MDA6ICNhMTZlZmYsXG4gIGNvbG9yLXByaW1hcnktNjAwOiAjN2I1MWRiLFxuICBjb2xvci1wcmltYXJ5LTcwMDogIzVhMzdiOCxcbiAgY29sb3ItcHJpbWFyeS04MDA6ICMzZTI0OTQsXG4gIGNvbG9yLXByaW1hcnktOTAwOiAjMjkxNTdhLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMDgpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjE2KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4yNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMzIpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjQ4KSxcblxuICBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsXG4gIGNvbG9yLWJhc2ljLTIwMDogI2Y3ZjdmYyxcbiAgY29sb3ItYmFzaWMtMzAwOiAjZjBmMGZhLFxuICBjb2xvci1iYXNpYy00MDA6ICNlMWUxZjIsXG4gIGNvbG9yLWJhc2ljLTUwMDogI2NlY2VlYixcbiAgY29sb3ItYmFzaWMtNjAwOiAjYjRiNGRiLFxuICBjb2xvci1iYXNpYy03MDA6ICM2YTZhOTQsXG4gIGNvbG9yLWJhc2ljLTgwMDogIzMyMzI1OSxcbiAgY29sb3ItYmFzaWMtOTAwOiAjMjUyNTQ3LFxuICBjb2xvci1iYXNpYy0xMDAwOiAjMWIxYjM4LFxuICBjb2xvci1iYXNpYy0xMTAwOiAjMTMxMzJiLFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMTYpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjQ4KSxcbik7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29zbWljLCBkYXJrKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbiR0aGVtZTogKFxuICBib3JkZXItcmFkaXVzOiAwLjE3cmVtLFxuICBzaGFkb3c6IG5vbmUsXG5cbiAgYnV0dG9uLWhlcm8tZ2xvdy1zaXplOiAwIDAgMjBweCAwLFxuXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcblxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIHRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXByaW1hcnktNTAwLFxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG5cbiAgcG9wb3Zlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgcG9wb3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIHRhYnNldC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICByb3V0ZS10YWJzZXQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdXNlci1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2hlY2tib3gtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgbW9kYWwtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcblxuICB0YWJzZXQtc2hhZG93OiBub25lLFxuICByb3V0ZS10YWJzZXQtc2hhZG93OiBub25lLFxuICBidXR0b24taGVyby1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LXNoYWRvdzogbm9uZSxcbiAgYWNjb3JkaW9uLXNoYWRvdzogbm9uZSxcbik7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29ycG9yYXRlLCBkZWZhdWx0KTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL0B0aGVtZS9zdHlsZXMvdGhlbWVzJztcblxuQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gIG5neC1jaGFydGpzLXBpZSxcbiAgbmd4LWNoYXJ0anMtYmFyLFxuICBuZ3gtY2hhcnRqcy1saW5lLFxuICBuZ3gtY2hhcnRqcy1tdWx0aXBsZS14YXhpcyxcbiAgbmd4LWNoYXJ0anMtYmFyLWhvcml6b250YWwsXG4gIG5neC1jaGFydGpzLXJhZGFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IG5iLXRoZW1lKGNhcmQtaGVpZ2h0LW1lZGl1bSk7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICA6Om5nLWRlZXAgY2hhcnQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    64889:
    /*!*******************************************************!*\
      !*** ./src/app/pages/charts/charts-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartsRoutingModule": function ChartsRoutingModule() {
          return (
            /* binding */
            _ChartsRoutingModule
          );
        },

        /* harmony export */
        "routedComponents": function routedComponents() {
          return (
            /* binding */
            _routedComponents
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./charts.component */
      52864);
      /* harmony import */


      var _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./echarts/echarts.component */
      1241);
      /* harmony import */


      var _d3_d3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./d3/d3.component */
      28707);
      /* harmony import */


      var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chartjs/chartjs.component */
      65337);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent,
        children: [{
          path: 'echarts',
          component: _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_1__.EchartsComponent
        }, {
          path: 'd3',
          component: _d3_d3_component__WEBPACK_IMPORTED_MODULE_2__.D3Component
        }, {
          path: 'chartjs',
          component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_3__.ChartjsComponent
        }]
      }];

      var _ChartsRoutingModule = function _ChartsRoutingModule() {
        _classCallCheck(this, _ChartsRoutingModule);
      };

      _ChartsRoutingModule.ɵfac = function ChartsRoutingModule_Factory(t) {
        return new (t || _ChartsRoutingModule)();
      };

      _ChartsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _ChartsRoutingModule
      });
      _ChartsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_ChartsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();

      var _routedComponents = [_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent, _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_1__.EchartsComponent, _d3_d3_component__WEBPACK_IMPORTED_MODULE_2__.D3Component, _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_3__.ChartjsComponent];
      /***/
    },

    /***/
    52864:
    /*!**************************************************!*\
      !*** ./src/app/pages/charts/charts.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartsComponent": function ChartsComponent() {
          return (
            /* binding */
            _ChartsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ChartsComponent = function _ChartsComponent() {
        _classCallCheck(this, _ChartsComponent);
      };

      _ChartsComponent.ɵfac = function ChartsComponent_Factory(t) {
        return new (t || _ChartsComponent)();
      };

      _ChartsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ChartsComponent,
        selectors: [["ngx-charts"]],
        decls: 1,
        vars: 0,
        template: function ChartsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    29313:
    /*!***********************************************!*\
      !*** ./src/app/pages/charts/charts.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartsModule": function ChartsModule() {
          return (
            /* binding */
            _ChartsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ngx-echarts */
      93104);
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      2945);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular2-chartjs */
      79251);
      /* harmony import */


      var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      19466);
      /* harmony import */


      var _charts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./charts-routing.module */
      64889);
      /* harmony import */


      var _chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chartjs/chartjs-bar.component */
      29124);
      /* harmony import */


      var _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chartjs/chartjs-line.component */
      60205);
      /* harmony import */


      var _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chartjs/chartjs-pie.component */
      43844);
      /* harmony import */


      var _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chartjs/chartjs-multiple-xaxis.component */
      41747);
      /* harmony import */


      var _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chartjs/chartjs-bar-horizontal.component */
      36968);
      /* harmony import */


      var _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./chartjs/chartjs-radar.component */
      89810);
      /* harmony import */


      var _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./d3/d3-bar.component */
      90461);
      /* harmony import */


      var _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./d3/d3-line.component */
      30921);
      /* harmony import */


      var _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./d3/d3-pie.component */
      85680);
      /* harmony import */


      var _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./d3/d3-area-stack.component */
      67979);
      /* harmony import */


      var _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./d3/d3-polar.component */
      85742);
      /* harmony import */


      var _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./d3/d3-advanced-pie.component */
      60567);
      /* harmony import */


      var _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./echarts/echarts-line.component */
      48625);
      /* harmony import */


      var _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./echarts/echarts-pie.component */
      43771);
      /* harmony import */


      var _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./echarts/echarts-bar.component */
      99401);
      /* harmony import */


      var _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./echarts/echarts-multiple-xaxis.component */
      4581);
      /* harmony import */


      var _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./echarts/echarts-area-stack.component */
      25922);
      /* harmony import */


      var _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./echarts/echarts-bar-animation.component */
      82019);
      /* harmony import */


      var _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./echarts/echarts-radar.component */
      97685);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _charts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./charts.component */
      52864);
      /* harmony import */


      var _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./echarts/echarts.component */
      1241);
      /* harmony import */


      var _d3_d3_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./d3/d3.component */
      28707);
      /* harmony import */


      var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./chartjs/chartjs.component */
      65337);

      var components = [_chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_3__.ChartjsBarComponent, _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_4__.ChartjsLineComponent, _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_5__.ChartjsPieComponent, _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_6__.ChartjsMultipleXaxisComponent, _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_7__.ChartjsBarHorizontalComponent, _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_8__.ChartjsRadarComponent, _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_9__.D3BarComponent, _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_10__.D3LineComponent, _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_11__.D3PieComponent, _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_12__.D3AreaStackComponent, _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_13__.D3PolarComponent, _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_14__.D3AdvancedPieComponent, _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_15__.EchartsLineComponent, _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_16__.EchartsPieComponent, _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_17__.EchartsBarComponent, _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_18__.EchartsMultipleXaxisComponent, _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_19__.EchartsAreaStackComponent, _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_20__.EchartsBarAnimationComponent, _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_21__.EchartsRadarComponent];

      var _ChartsModule = function _ChartsModule() {
        _classCallCheck(this, _ChartsModule);
      };

      _ChartsModule.ɵfac = function ChartsModule_Factory(t) {
        return new (t || _ChartsModule)();
      };

      _ChartsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
        type: _ChartsModule
      });
      _ChartsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
        imports: [[_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_2__.ChartsRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_27__.NgxEchartsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_28__.NgxChartsModule, angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__.ChartModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__.NbCardModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](_ChartsModule, {
          declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_22__.ChartsComponent, _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_23__.EchartsComponent, _d3_d3_component__WEBPACK_IMPORTED_MODULE_24__.D3Component, _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_25__.ChartjsComponent, _chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_3__.ChartjsBarComponent, _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_4__.ChartjsLineComponent, _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_5__.ChartjsPieComponent, _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_6__.ChartjsMultipleXaxisComponent, _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_7__.ChartjsBarHorizontalComponent, _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_8__.ChartjsRadarComponent, _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_9__.D3BarComponent, _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_10__.D3LineComponent, _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_11__.D3PieComponent, _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_12__.D3AreaStackComponent, _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_13__.D3PolarComponent, _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_14__.D3AdvancedPieComponent, _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_15__.EchartsLineComponent, _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_16__.EchartsPieComponent, _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_17__.EchartsBarComponent, _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_18__.EchartsMultipleXaxisComponent, _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_19__.EchartsAreaStackComponent, _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_20__.EchartsBarAnimationComponent, _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_21__.EchartsRadarComponent],
          imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_2__.ChartsRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_27__.NgxEchartsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_28__.NgxChartsModule, angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__.ChartModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__.NbCardModule]
        });
      })();
      /***/

    },

    /***/
    60567:
    /*!**************************************************************!*\
      !*** ./src/app/pages/charts/d3/d3-advanced-pie.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "D3AdvancedPieComponent": function D3AdvancedPieComponent() {
          return (
            /* binding */
            _D3AdvancedPieComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      2945);

      var _D3AdvancedPieComponent = /*#__PURE__*/function () {
        function _D3AdvancedPieComponent(theme) {
          var _this7 = this;

          _classCallCheck(this, _D3AdvancedPieComponent);

          this.theme = theme;
          this.single = [{
            name: 'Germany',
            value: 8940000
          }, {
            name: 'USA',
            value: 5000000
          }, {
            name: 'France',
            value: 7200000
          }];
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this7.colorScheme = {
              domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
            };
          });
        }

        _createClass(_D3AdvancedPieComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _D3AdvancedPieComponent;
      }();

      _D3AdvancedPieComponent.ɵfac = function D3AdvancedPieComponent_Factory(t) {
        return new (t || _D3AdvancedPieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _D3AdvancedPieComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _D3AdvancedPieComponent,
        selectors: [["ngx-d3-advanced-pie"]],
        decls: 1,
        vars: 2,
        consts: [[3, "scheme", "results"]],
        template: function D3AdvancedPieComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-advanced-pie-chart", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single);
          }
        },
        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.AdvancedPieChartComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    67979:
    /*!************************************************************!*\
      !*** ./src/app/pages/charts/d3/d3-area-stack.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "D3AreaStackComponent": function D3AreaStackComponent() {
          return (
            /* binding */
            _D3AreaStackComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      2945);

      var _D3AreaStackComponent = /*#__PURE__*/function () {
        function _D3AreaStackComponent(theme) {
          var _this8 = this;

          _classCallCheck(this, _D3AreaStackComponent);

          this.theme = theme;
          this.multi = [{
            name: 'Germany',
            series: [{
              name: '2010',
              value: 7300000
            }, {
              name: '2011',
              value: 8940000
            }]
          }, {
            name: 'USA',
            series: [{
              name: '2010',
              value: 7870000
            }, {
              name: '2011',
              value: 8270000
            }]
          }, {
            name: 'France',
            series: [{
              name: '2010',
              value: 5000002
            }, {
              name: '2011',
              value: 5800000
            }]
          }];
          this.showLegend = true;
          this.autoScale = true;
          this.showXAxis = true;
          this.showYAxis = true;
          this.showXAxisLabel = true;
          this.showYAxisLabel = true;
          this.xAxisLabel = 'Country';
          this.yAxisLabel = 'Population';
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this8.colorScheme = {
              domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
            };
          });
        }

        _createClass(_D3AreaStackComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _D3AreaStackComponent;
      }();

      _D3AreaStackComponent.ɵfac = function D3AreaStackComponent_Factory(t) {
        return new (t || _D3AreaStackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _D3AreaStackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _D3AreaStackComponent,
        selectors: [["ngx-d3-area-stack"]],
        decls: 1,
        vars: 10,
        consts: [[3, "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale"]],
        template: function D3AreaStackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-area-chart", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale);
          }
        },
        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.AreaChartComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    90461:
    /*!*****************************************************!*\
      !*** ./src/app/pages/charts/d3/d3-bar.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "D3BarComponent": function D3BarComponent() {
          return (
            /* binding */
            _D3BarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      2945);

      var _D3BarComponent = /*#__PURE__*/function () {
        function _D3BarComponent(theme) {
          var _this9 = this;

          _classCallCheck(this, _D3BarComponent);

          this.theme = theme;
          this.results = [{
            name: 'Germany',
            value: 8940
          }, {
            name: 'USA',
            value: 5000
          }, {
            name: 'France',
            value: 7200
          }];
          this.showLegend = true;
          this.showXAxis = true;
          this.showYAxis = true;
          this.xAxisLabel = 'Country';
          this.yAxisLabel = 'Population';
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this9.colorScheme = {
              domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
            };
          });
        }

        _createClass(_D3BarComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _D3BarComponent;
      }();

      _D3BarComponent.ɵfac = function D3BarComponent_Factory(t) {
        return new (t || _D3BarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _D3BarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _D3BarComponent,
        selectors: [["ngx-d3-bar"]],
        decls: 1,
        vars: 7,
        consts: [[3, "scheme", "results", "xAxis", "yAxis", "legend", "xAxisLabel", "yAxisLabel"]],
        template: function D3BarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-bar-vertical", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.results)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
          }
        },
        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.BarVerticalComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    30921:
    /*!******************************************************!*\
      !*** ./src/app/pages/charts/d3/d3-line.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "D3LineComponent": function D3LineComponent() {
          return (
            /* binding */
            _D3LineComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      2945);

      var _D3LineComponent = /*#__PURE__*/function () {
        function _D3LineComponent(theme) {
          var _this10 = this;

          _classCallCheck(this, _D3LineComponent);

          this.theme = theme;
          this.multi = [{
            name: 'Germany',
            series: [{
              name: '2010',
              value: 7300
            }, {
              name: '2011',
              value: 8940
            }]
          }, {
            name: 'USA',
            series: [{
              name: '2010',
              value: 7870
            }, {
              name: '2011',
              value: 8270
            }]
          }, {
            name: 'France',
            series: [{
              name: '2010',
              value: 5002
            }, {
              name: '2011',
              value: 5800
            }]
          }];
          this.showLegend = true;
          this.showXAxis = true;
          this.showYAxis = true;
          this.showXAxisLabel = true;
          this.xAxisLabel = 'Country';
          this.showYAxisLabel = true;
          this.yAxisLabel = 'Population';
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this10.colorScheme = {
              domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
            };
          });
        }

        _createClass(_D3LineComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _D3LineComponent;
      }();

      _D3LineComponent.ɵfac = function D3LineComponent_Factory(t) {
        return new (t || _D3LineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _D3LineComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _D3LineComponent,
        selectors: [["ngx-d3-line"]],
        decls: 1,
        vars: 9,
        consts: [[3, "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel"]],
        template: function D3LineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-line-chart", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
          }
        },
        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.LineChartComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    85680:
    /*!*****************************************************!*\
      !*** ./src/app/pages/charts/d3/d3-pie.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "D3PieComponent": function D3PieComponent() {
          return (
            /* binding */
            _D3PieComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      2945);

      var _D3PieComponent = /*#__PURE__*/function () {
        function _D3PieComponent(theme) {
          var _this11 = this;

          _classCallCheck(this, _D3PieComponent);

          this.theme = theme;
          this.results = [{
            name: 'Germany',
            value: 8940
          }, {
            name: 'USA',
            value: 5000
          }, {
            name: 'France',
            value: 7200
          }];
          this.showLegend = true;
          this.showLabels = true;
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this11.colorScheme = {
              domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
            };
          });
        }

        _createClass(_D3PieComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _D3PieComponent;
      }();

      _D3PieComponent.ɵfac = function D3PieComponent_Factory(t) {
        return new (t || _D3PieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _D3PieComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _D3PieComponent,
        selectors: [["ngx-d3-pie"]],
        decls: 1,
        vars: 4,
        consts: [[3, "scheme", "results", "legend", "labels"]],
        template: function D3PieComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-pie-chart", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.results)("legend", ctx.showLegend)("labels", ctx.showLabels);
          }
        },
        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.PieChartComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    85742:
    /*!*******************************************************!*\
      !*** ./src/app/pages/charts/d3/d3-polar.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "D3PolarComponent": function D3PolarComponent() {
          return (
            /* binding */
            _D3PolarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      2945);

      var _D3PolarComponent = /*#__PURE__*/function () {
        function _D3PolarComponent(theme) {
          var _this12 = this;

          _classCallCheck(this, _D3PolarComponent);

          this.theme = theme;
          this.multi = [{
            name: 'Germany',
            series: [{
              name: '1990',
              value: 31476
            }, {
              name: '2000',
              value: 36953
            }, {
              name: '2010',
              value: 40632
            }]
          }, {
            name: 'USA',
            series: [{
              name: '1990',
              value: 37060
            }, {
              name: '2000',
              value: 45986
            }, {
              name: '2010',
              value: 49737
            }]
          }, {
            name: 'France',
            series: [{
              name: '1990',
              value: 29476
            }, {
              name: '2000',
              value: 34774
            }, {
              name: '2010',
              value: 36240
            }]
          }];
          this.showLegend = true;
          this.autoScale = true;
          this.showXAxis = true;
          this.showYAxis = true;
          this.showXAxisLabel = true;
          this.showYAxisLabel = true;
          this.xAxisLabel = 'Country';
          this.yAxisLabel = 'Population';
          this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this12.colorScheme = {
              domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight]
            };
          });
        }

        _createClass(_D3PolarComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _D3PolarComponent;
      }();

      _D3PolarComponent.ɵfac = function D3PolarComponent_Factory(t) {
        return new (t || _D3PolarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _D3PolarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _D3PolarComponent,
        selectors: [["ngx-d3-polar"]],
        decls: 1,
        vars: 10,
        consts: [[3, "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale"]],
        template: function D3PolarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-charts-polar-chart", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale);
          }
        },
        directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__.PolarChartComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    28707:
    /*!*************************************************!*\
      !*** ./src/app/pages/charts/d3/d3.component.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "D3Component": function D3Component() {
          return (
            /* binding */
            _D3Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _d3_pie_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./d3-pie.component */
      85680);
      /* harmony import */


      var _d3_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./d3-bar.component */
      90461);
      /* harmony import */


      var _d3_line_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./d3-line.component */
      30921);
      /* harmony import */


      var _d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./d3-advanced-pie.component */
      60567);
      /* harmony import */


      var _d3_area_stack_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./d3-area-stack.component */
      67979);

      var _D3Component = function _D3Component() {
        _classCallCheck(this, _D3Component);
      };

      _D3Component.ɵfac = function D3Component_Factory(t) {
        return new (t || _D3Component)();
      };

      _D3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _D3Component,
        selectors: [["ngx-d3"]],
        decls: 31,
        vars: 0,
        consts: [[1, "row"], [1, "col-lg-6"]],
        template: function D3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Pie");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ngx-d3-pie");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ngx-d3-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Line");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ngx-d3-line");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Advanced Pie");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "ngx-d3-advanced-pie");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Area Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "ngx-d3-area-stack");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardBodyComponent, _d3_pie_component__WEBPACK_IMPORTED_MODULE_0__.D3PieComponent, _d3_bar_component__WEBPACK_IMPORTED_MODULE_1__.D3BarComponent, _d3_line_component__WEBPACK_IMPORTED_MODULE_2__.D3LineComponent, _d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_3__.D3AdvancedPieComponent, _d3_area_stack_component__WEBPACK_IMPORTED_MODULE_4__.D3AreaStackComponent],
        styles: [".nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 28.875rem;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .pie-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .pie-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .pie-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .pie-label {\n  fill: #222b45;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     text {\n  fill: #8f9bb3;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-labels {\n  background: #f7f9fc;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label {\n  color: #8f9bb3;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text {\n  color: #222b45;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-percent, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-percent, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-percent, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .total-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-value, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-percent {\n  line-height: 1.25;\n}\n.nb-theme-default   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .legend-items, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .legend-items, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .legend-items, .nb-theme-default   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .legend-items {\n  overflow-y: hidden;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 28.875rem;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .pie-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .pie-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .pie-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .pie-label {\n  fill: #ffffff;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     text {\n  fill: #8f9bb3;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-labels {\n  background: #192038;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label {\n  color: #8f9bb3;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text {\n  color: #ffffff;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-percent, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-percent, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-percent, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .total-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-value, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-percent {\n  line-height: 1.25;\n}\n.nb-theme-dark   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .legend-items, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .legend-items, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .legend-items, .nb-theme-dark   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .legend-items {\n  overflow-y: hidden;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 28.875rem;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .pie-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .pie-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .pie-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .pie-label {\n  fill: #ffffff;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     text {\n  fill: #b4b4db;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-labels {\n  background: #252547;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label {\n  color: #b4b4db;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text {\n  color: #ffffff;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-percent, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-percent, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-percent, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .total-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-value, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-percent {\n  line-height: 1.25;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .legend-items, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .legend-items, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .legend-items, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .legend-items {\n  overflow-y: hidden;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 28.875rem;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .pie-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .pie-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .pie-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .pie-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .pie-label {\n  fill: #222b45;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     text {\n  fill: #8f9bb3;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-labels, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-labels {\n  background: #f7f9fc;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label {\n  color: #8f9bb3;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text {\n  color: #222b45;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-percent, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-percent, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-percent, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-percent, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .total-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-value, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-percent {\n  line-height: 1.25;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .legend-items, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .legend-items, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .legend-items, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .legend-items, .nb-theme-corporate   [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .legend-items {\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvX3RoZW1pbmcuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9fbWl4aW5zLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX2Z1bmN0aW9ucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL192YXJpYW50cy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX21hcHBpbmcuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS90aGVtaW5nL19yZWdpc3Rlci5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL3RoZW1pbmcvX2luc3RhbGwuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS90aGVtaW5nL19nZXQtdmFsdWUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19kZWZhdWx0LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fZGFyay5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2Nvc21pYy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2NvcnBvcmF0ZS5zY3NzIiwiZDMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQU1BOzs7RUFBQTtBQ05BOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FDbE1BOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0VBOzs7O0VBQUE7QUNGQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QU5BQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVFsTUE7Ozs7RUFBQTtBUEFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBT2xNQTs7OztFQUFBO0FOQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FTbE1BOzs7O0VBQUE7QVJBQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVFsTUE7Ozs7RUFBQTtBUEFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBT2xNQTs7OztFQUFBO0FOQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FVbE1BOzs7O0VBQUE7QVRBQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QU9sTUE7Ozs7RUFBQTtBTkFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBS3ZISTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FNeEVGOzs7Ozs7RUFNRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBdXZDSjtBQXB2Q007Ozs7OztFQUNFLGFBQUE7QUEydkNSO0FBeHZDTTs7Ozs7O0VBQ0UsYUFBQTtBQSt2Q1I7QUEzdkNROzs7Ozs7RUFDRSxtQkFBQTtBQWt3Q1Y7QUFod0NROzs7Ozs7RUFDRSxjQUFBO0FBdXdDVjtBQXR3Q1U7Ozs7OztFQUNFLGNBQUE7QUE2d0NaO0FBeHdDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0UsaUJBQUE7QUF5eENSO0FBdHhDTTs7Ozs7O0VBQ0Usa0JBQUE7QUE2eENSO0FOM3ZDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FNeEVGOzs7Ozs7RUFNRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBMDFDSjtBQXYxQ007Ozs7OztFQUNFLGFBQUE7QUE4MUNSO0FBMzFDTTs7Ozs7O0VBQ0UsYUFBQTtBQWsyQ1I7QUE5MUNROzs7Ozs7RUFDRSxtQkFBQTtBQXEyQ1Y7QUFuMkNROzs7Ozs7RUFDRSxjQUFBO0FBMDJDVjtBQXoyQ1U7Ozs7OztFQUNFLGNBQUE7QUFnM0NaO0FBMzJDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0UsaUJBQUE7QUE0M0NSO0FBejNDTTs7Ozs7O0VBQ0Usa0JBQUE7QUFnNENSO0FOOTFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FNeEVGOzs7Ozs7RUFNRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBNjdDSjtBQTE3Q007Ozs7OztFQUNFLGFBQUE7QUFpOENSO0FBOTdDTTs7Ozs7O0VBQ0UsYUFBQTtBQXE4Q1I7QUFqOENROzs7Ozs7RUFDRSxtQkFBQTtBQXc4Q1Y7QUF0OENROzs7Ozs7RUFDRSxjQUFBO0FBNjhDVjtBQTU4Q1U7Ozs7OztFQUNFLGNBQUE7QUFtOUNaO0FBOThDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0UsaUJBQUE7QUErOUNSO0FBNTlDTTs7Ozs7O0VBQ0Usa0JBQUE7QUFtK0NSO0FOajhDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FNeEVGOzs7Ozs7RUFNRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBZ2lESjtBQTdoRE07Ozs7OztFQUNFLGFBQUE7QUFvaURSO0FBamlETTs7Ozs7O0VBQ0UsYUFBQTtBQXdpRFI7QUFwaURROzs7Ozs7RUFDRSxtQkFBQTtBQTJpRFY7QUF6aURROzs7Ozs7RUFDRSxjQUFBO0FBZ2pEVjtBQS9pRFU7Ozs7OztFQUNFLGNBQUE7QUFzakRaO0FBampETTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBR0UsaUJBQUE7QUFra0RSO0FBL2pETTs7Ozs7O0VBQ0Usa0JBQUE7QUFza0RSIiwiZmlsZSI6ImQzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vKlxuICBEZWNsYXJlIHZhcmlhYmxlcyBiZWZvcmUgbWFraW5nIHRoZW0gZ2xvYmFsLlxuICBkYXJ0LXNhc3MgZG9lc24ndCBhbGxvdyB0byBkZWNsYXJlIHZhcmlhYmxlIHdpdGggIWdsb2JhbC5cbiAqL1xuJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXM6IGZhbHNlICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKTtcbiRuYi10aGVtZXM6ICgpO1xuJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogbnVsbDtcbiRuYi10aGVtZS1uYW1lOiAnZGVmYXVsdCc7XG4kbmItdGhlbWU6ICgpO1xuJG5iLXByb2Nlc3NlZC10aGVtZTogKCk7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFkZWZhdWx0O1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpO1xuJG5iLWN1c3RvbS1zdGF0dXNlczogKCkgIWRlZmF1bHQ7XG5cbi8vIHB1YmxpYyB2YXJpYWJsZXNcbiRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzOiBmYWxzZSAhZ2xvYmFsICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi1jdXN0b20tc3RhdHVzZXM6ICgpICFnbG9iYWwgIWRlZmF1bHQ7XG5cbi8vIHByaXZhdGUgdmFyaWFibGVzXG4kbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuJG5iLXRoZW1lLW5hbWU6IG51bGwgIWdsb2JhbDtcbiRuYi10aGVtZTogKCkgIWdsb2JhbDtcbiRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpICFnbG9iYWw7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFnbG9iYWwgIWRlZmF1bHQ7XG4kbmItdGhlbWVzLWV4cG9ydDogKCkgIWdsb2JhbDtcblxuQGltcG9ydCAnY29yZS9taXhpbnMnO1xuQGltcG9ydCAnY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnY29yZS92YXJpYW50cyc7XG5AaW1wb3J0ICdjb3JlL3RoZW1pbmcvcmVnaXN0ZXInO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2luc3RhbGwnO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2dldC12YWx1ZSc7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1zY3JvbGxiYXJzKCRmZywgJGJnLCAkc2l6ZSwgJGJvcmRlci1yYWRpdXM6ICRzaXplIC8gMikge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmVcbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZmc7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJnO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1vdXRsaW5lKCRvdXRsaW5lLXdpZHRoLCAkb3V0bGluZS1jb2xvciwgJGluc2V0LXNoYWRvdy1sZW5ndGg6IDApIHtcbiAgJG91dHNldC1zaGFkb3c6IDAgMCAwICRvdXRsaW5lLXdpZHRoICRvdXRsaW5lLWNvbG9yO1xuICBib3gtc2hhZG93OiAkb3V0c2V0LXNoYWRvdztcblxuICBAaWYgKCRpbnNldC1zaGFkb3ctbGVuZ3RoICE9IDApIHtcbiAgICAmOm5vdCg6aG92ZXIpOm5vdCg6YWN0aXZlKSB7XG4gICAgICAkaW5zZXQtc2hhZG93OiBpbnNldCAkaW5zZXQtc2hhZG93LWxlbmd0aCAkb3V0bGluZS1jb2xvcjtcbiAgICAgIGJveC1zaGFkb3c6ICRvdXRzZXQtc2hhZG93LCAkaW5zZXQtc2hhZG93O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eTogMSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIG5iLWNvbXBvbmVudC1hbmltYXRpb24oJHByb3BlcnRpZXMuLi4pIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6ICRwcm9wZXJ0aWVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuXG5AZnVuY3Rpb24gbmItdGhlbWUtdmFyLW5lZ2F0aXZlKCR2YWx1ZSkge1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzKSB7XG4gICAgQHJldHVybiBjYWxjKCN7JHZhbHVlfSAqIC0xKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiAtJHZhbHVlO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBmdW5jdGlvbiBuYi1nZXQtY29yZS1zdGF0dXNlcygpIHtcbiAgQHJldHVybiAnYmFzaWMnLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2luZm8nLCAnY29udHJvbCc7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gIEByZXR1cm4gam9pbihuYi1nZXQtY29yZS1zdGF0dXNlcygpLCAkbmItY3VzdG9tLXN0YXR1c2VzKTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1zaXplcygpIHtcbiAgQHJldHVybiAndGlueScsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnZ2lhbnQnO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXNoYXBlcygpIHtcbiAgQHJldHVybiAncmVjdGFuZ2xlJywgJ3NlbWktcm91bmQnLCAncm91bmQnO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4kZXZhLW1hcHBpbmc6IChcblxuICAvKiBDb21wb25lbnRzIG1hcHBpbmdzIC0gbWFwcyB0aGVtZSB2YXJpYWJsZXMgb250byBjb21wb25lbnQgdmFyaWFibGVzICovXG5cbiAgbGluay10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGxpbmstdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUsXG4gIGxpbmstdGV4dC1mb2N1cy1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICBsaW5rLXRleHQtaG92ZXItY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICBjYXJkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY2FyZC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYXJkLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjYXJkLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGNhcmQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGNhcmQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGNhcmQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBjYXJkLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNhcmQtcGFkZGluZzogMXJlbSAxLjVyZW0sXG4gIGNhcmQtc2hhZG93OiBub25lLFxuICBjYXJkLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNhcmQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgY2FyZC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIGNhcmQtaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIGNhcmQtaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FyZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBjYXJkLWhlYWRlci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhcmQtaGVhZGVyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuXG4gIGNhcmQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGNhcmQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBjYXJkLXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBoZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBoZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaGVhZGVyLWhlaWdodDogNC43NXJlbSxcbiAgaGVhZGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGhlYWRlci1zaGFkb3c6IHNoYWRvdyxcblxuICBmb290ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBmb290ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBmb290ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgZm9vdGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBmb290ZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGZvb3Rlci10ZXh0LWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgZm9vdGVyLWhlaWdodDogNC43MjVyZW0sXG4gIGZvb3Rlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBmb290ZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgZm9vdGVyLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGZvb3Rlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBmb290ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgbGF5b3V0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxheW91dC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgbGF5b3V0LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGxheW91dC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGF5b3V0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtbWluLWhlaWdodDogMTAwdmgsXG4gIGxheW91dC1jb250ZW50LXdpZHRoOiA5MDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1pbi13aWR0aDogMzAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGg6IDE5MjBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcbiAgbGF5b3V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgbGF5b3V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBsYXlvdXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNpZGViYXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2lkZWJhci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc2lkZWJhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzaWRlYmFyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzaWRlYmFyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzaWRlYmFyLWhlaWdodDogMTAwdmgsXG4gIHNpZGViYXItd2lkdGg6IDE2cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNXJlbSxcbiAgc2lkZWJhci1wYWRkaW5nOiAxLjI1cmVtLFxuICBzaWRlYmFyLWhlYWRlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1mb290ZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItc2hhZG93OiBzaGFkb3csXG4gIHNpZGViYXItbWVudS1pdGVtLWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzaWRlYmFyLXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBtZW51LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBtZW51LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG1lbnUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICBtZW51LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBtZW51LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgbWVudS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG5cbiAgbWVudS1ncm91cC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtaXRlbS1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgbWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1pdGVtLWhvdmVyLWN1cnNvcjogcG9pbnRlcixcbiAgbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgbWVudS1pdGVtLWljb24taG92ZXItY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuXG4gIG1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG4gIG1lbnUtaXRlbS1pY29uLXdpZHRoOiAxLjI1cmVtLFxuXG4gIG1lbnUtaXRlbS1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBtZW51LWl0ZW0tZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgbWVudS1pdGVtLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgbWVudS1zdWJtZW51LWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG1lbnUtc3VibWVudS1tYXJnaW46IDAsXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwIDEuMjVyZW0sXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItcmFkaXVzOiAwLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiBtZW51LWl0ZW0tcGFkZGluZyxcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJvcmRlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjogbWVudS1pdGVtLWljb24taG92ZXItY29sb3IsXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjogbWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1jb2xvcjogbWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtaG92ZXItdGV4dC1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taWNvbi1hY3RpdmUtaG92ZXItY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWljb24taG92ZXItY29sb3IsXG5cbiAgdGFic2V0LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtYm9yZGVyLXJhZGl1czogMCxcbiAgdGFic2V0LXNoYWRvdzogbm9uZSxcblxuICB0YWJzZXQtdGFiLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLXBhZGRpbmc6IDFyZW0gMnJlbSxcbiAgdGFic2V0LXRhYi10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHRhYnNldC10YWItdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIHRhYnNldC10YWItdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIHRhYnNldC10YWItdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIHRhYnNldC10YWItdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICB0YWJzZXQtdGFiLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG4gIHRhYnNldC10YWItdW5kZXJsaW5lLXdpZHRoOiAwLjI1cmVtLFxuICB0YWJzZXQtdGFiLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhYnNldC10YWItYWN0aXZlLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICB0YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgdGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgdGFic2V0LXRhYi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG4gIHRhYnNldC10YWItaG92ZXItdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG4gIHRhYnNldC10YWItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFi4oCTYmFkZ2UtZG90LW1vZGUtaG9yaXpvbnRhbC1vZmZzZXQ6IDAuNzVyZW0sXG4gIHRhYnNldC10YWItYmFkZ2UtZG90LW1vZGUtcGFkZGluZzogMC4yNXJlbSxcblxuICB0YWJzZXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgdGFic2V0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIHRhYnNldC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIHRhYnNldC1jb250ZW50LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtY29udGVudC1wYWRkaW5nOiAxcmVtIDJyZW0sXG4gIHRhYnNldC1jb250ZW50LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRhYnNldC1jb250ZW50LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgdGFic2V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICB0YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWJzZXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIHRhYnNldC10YWItdGV4dC1oaWRlLWJyZWFrcG9pbnQ6IDM2cmVtLFxuXG4gIHJvdXRlLXRhYnNldC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LWJvcmRlci1yYWRpdXM6IDAsXG4gIHJvdXRlLXRhYnNldC1zaGFkb3c6IG5vbmUsXG5cbiAgcm91dGUtdGFic2V0LXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1wYWRkaW5nOiAxcmVtIDJyZW0sXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICByb3V0ZS10YWJzZXQtdGFiLXVuZGVybGluZS13aWR0aDogMC4yNXJlbSxcbiAgcm91dGUtdGFic2V0LXRhYi11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1kaXNhYmxlZC11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHJvdXRlLXRhYnNldC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgcm91dGUtdGFic2V0LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1oaWRlLWJyZWFrcG9pbnQ6IDM2cmVtLFxuXG4gIHVzZXItcGljdHVyZS1ib3gtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgdXNlci1waWN0dXJlLWJveC1ib3JkZXItd2lkdGg6IDFweCxcbiAgdXNlci1pbml0aWFscy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB1c2VyLWluaXRpYWxzLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB1c2VyLWluaXRpYWxzLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB1c2VyLW5hbWUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci1uYW1lLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB1c2VyLW5hbWUtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHVzZXItdGl0bGUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci10aXRsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtZmFtaWx5LFxuICB1c2VyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG5cbiAgdXNlci1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogMC41cmVtLFxuICB1c2VyLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgdXNlci1yb3VuZC1ib3JkZXItcmFkaXVzOiA1MCUsXG5cbiAgdXNlci10aW55LWhlaWdodDogMS4yNXJlbSxcbiAgdXNlci10aW55LXdpZHRoOiAxLjI1cmVtLFxuICB1c2VyLXRpbnktaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItdGlueS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItdGlueS1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXRpbnktbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItdGlueS10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci10aW55LXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLXNtYWxsLWhlaWdodDogMS41cmVtLFxuICB1c2VyLXNtYWxsLXdpZHRoOiAxLjVyZW0sXG4gIHVzZXItc21hbGwtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXNtYWxsLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItc21hbGwtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItbWVkaXVtLWhlaWdodDogMi41cmVtLFxuICB1c2VyLW1lZGl1bS13aWR0aDogMi41cmVtLFxuICB1c2VyLW1lZGl1bS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLW1lZGl1bS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1tZWRpdW0tbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLW1lZGl1bS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLW1lZGl1bS10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0tdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItbGFyZ2UtaGVpZ2h0OiAzLjI1cmVtLFxuICB1c2VyLWxhcmdlLXdpZHRoOiAzLjI1cmVtLFxuICB1c2VyLWxhcmdlLWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItbGFyZ2UtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbGFyZ2UtbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbGFyZ2UtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItbGluZS1oZWlnaHQsXG5cbiAgdXNlci1naWFudC1oZWlnaHQ6IDRyZW0sXG4gIHVzZXItZ2lhbnQtd2lkdGg6IDRyZW0sXG4gIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1naWFudC1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1naWFudC1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1naWFudC10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWdpYW50LXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHBvcG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcG9wb3Zlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgcG9wb3Zlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBwb3BvdmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBwb3BvdmVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBwb3BvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgcG9wb3Zlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgcG9wb3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBwb3BvdmVyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHBvcG92ZXItc2hhZG93OiBzaGFkb3csXG4gIHBvcG92ZXItYXJyb3ctc2l6ZTogMC42ODc1cmVtLFxuICBwb3BvdmVyLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcblxuICBjb250ZXh0LW1lbnUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY29udGV4dC1tZW51LWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItd2lkdGg6IDAsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjb250ZXh0LW1lbnUtdGV4dC1hbGlnbjogY2VudGVyLFxuICBjb250ZXh0LW1lbnUtbWluLXdpZHRoOiAxMHJlbSxcbiAgY29udGV4dC1tZW51LW1heC13aWR0aDogMTVyZW0sXG4gIGNvbnRleHQtbWVudS1zaGFkb3c6IHNoYWRvdyxcblxuICBhY3Rpb25zLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBhY3Rpb25zLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGFjdGlvbnMtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgYWN0aW9ucy1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBhY3Rpb25zLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYWN0aW9ucy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBhY3Rpb25zLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBhY3Rpb25zLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBhY3Rpb25zLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcblxuICBhY3Rpb25zLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGFjdGlvbnMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBhY3Rpb25zLXRpbnktaGVpZ2h0OiAxcmVtLFxuICBhY3Rpb25zLXRpbnktaWNvbi1oZWlnaHQ6IGFjdGlvbnMtdGlueS1oZWlnaHQsXG4gIGFjdGlvbnMtdGlueS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGFjdGlvbnMtc21hbGwtaGVpZ2h0OiAxLjVyZW0sXG4gIGFjdGlvbnMtc21hbGwtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtc21hbGwtaGVpZ2h0LFxuICBhY3Rpb25zLXNtYWxsLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLFxuICBhY3Rpb25zLW1lZGl1bS1oZWlnaHQ6IDIuMjVyZW0sXG4gIGFjdGlvbnMtbWVkaXVtLWljb24taGVpZ2h0OiBhY3Rpb25zLW1lZGl1bS1oZWlnaHQsXG4gIGFjdGlvbnMtbWVkaXVtLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGFjdGlvbnMtbGFyZ2UtaGVpZ2h0OiAzLjVyZW0sXG4gIGFjdGlvbnMtbGFyZ2UtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtbGFyZ2UtaGVpZ2h0LFxuICBhY3Rpb25zLWxhcmdlLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplLFxuICBhY3Rpb25zLWdpYW50LWhlaWdodDogNHJlbSxcbiAgYWN0aW9ucy1naWFudC1pY29uLWhlaWdodDogYWN0aW9ucy1naWFudC1oZWlnaHQsXG4gIGFjdGlvbnMtZ2lhbnQtcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemUsXG5cbiAgc2VhcmNoLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VhcmNoLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHNlYXJjaC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBzZWFyY2gtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgc2VhcmNoLWV4dHJhLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VhcmNoLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlYXJjaC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWhlYWRpbmctMS1mb250LWZhbWlseSxcbiAgc2VhcmNoLXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctMS1mb250LXNpemUsXG4gIHNlYXJjaC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctMS1mb250LXdlaWdodCxcbiAgc2VhcmNoLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy0xLWxpbmUtaGVpZ2h0LFxuICBzZWFyY2gtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWFyY2gtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VhcmNoLWluZm8tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgc2VhcmNoLWluZm8tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mZzogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtaGVhZGVyLWJnOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG5cbiAgc21hcnQtdGFibGUtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzbWFydC10YWJsZS1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWZnOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzbWFydC10YWJsZS1iZzogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuXG4gIHNtYXJ0LXRhYmxlLWJnLWV2ZW46IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5OiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzbWFydC10YWJsZS1iZy1hY3RpdmU6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc21hcnQtdGFibGUtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcbiAgc21hcnQtdGFibGUtZmlsdGVyLXBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbSxcbiAgc21hcnQtdGFibGUtc2VwYXJhdG9yOiBkaXZpZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuXG4gIHNtYXJ0LXRhYmxlLWFjdGlvbi1hZGQtZWRpdC1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNtYXJ0LXRhYmxlLWFjdGlvbi1jYW5jZWwtZGVsZXRlLWhvdmVyLXRleHQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLXRleHQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWZvY3VzLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcixcblxuICBzbWFydC10YWJsZS1wYWdpbmctZm9udC1mYW1pbHk6IGJ1dHRvbi10ZXh0LWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1wYWdpbmctZm9udC1zaXplOiBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1wYWdpbmctbGluZS1oZWlnaHQ6IGJ1dHRvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogdHJhbnNwYXJlbnQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3Zlci1ib3JkZXItY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXItdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLWZvY3VzLWJvcmRlci1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLWZvY3VzLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcixcblxuICB0b2FzdHItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgdG9hc3RyLWJvcmRlci13aWR0aDogMXB4LFxuICB0b2FzdHItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdG9hc3RyLXBhZGRpbmc6IDFyZW0sXG4gIHRvYXN0ci1zaGFkb3c6IHNoYWRvdyxcblxuICB0b2FzdHItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuICB0b2FzdHItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIHRvYXN0ci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1iYXNpYy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICB0b2FzdHItYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9hc3RyLWljb24tYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItaWNvbi1iYXNpYy1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG5cbiAgdG9hc3RyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2FzdHItcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG5cbiAgdG9hc3RyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2FzdHItc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG5cbiAgdG9hc3RyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2FzdHItaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24taW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG5cbiAgdG9hc3RyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2FzdHItd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24td2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG5cbiAgdG9hc3RyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2FzdHItZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG5cbiAgdG9hc3RyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b2FzdHItY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2FzdHItaWNvbi1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWljb24tY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2FzdHItZGVzdHJveWFibGUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG5cbiAgYnV0dG9uLWN1cnNvcjogcG9pbnRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBidXR0b24tdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIGJ1dHRvbi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYnV0dG9uLWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcblxuICBidXR0b24tdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGJ1dHRvbi10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi10aW55LWljb24tc2l6ZTogMC43NXJlbSxcbiAgYnV0dG9uLXRpbnktaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLXRpbnktaWNvbi1vZmZzZXQ6IDAuMzc1cmVtLFxuXG4gIGJ1dHRvbi1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLFxuICBidXR0b24tc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1zbWFsbC1pY29uLXNpemU6IDFyZW0sXG4gIGJ1dHRvbi1zbWFsbC1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tc21hbGwtaWNvbi1vZmZzZXQ6IDAuMzc1cmVtLFxuXG4gIGJ1dHRvbi1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGJ1dHRvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICBidXR0b24tbWVkaXVtLWljb24tc2l6ZTogMS4yNXJlbSxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tbWVkaXVtLWljb24tb2Zmc2V0OiAwLjVyZW0sXG5cbiAgYnV0dG9uLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsXG4gIGJ1dHRvbi1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLWxhcmdlLWljb24tc2l6ZTogMS41cmVtLFxuICBidXR0b24tbGFyZ2UtaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLWxhcmdlLWljb24tb2Zmc2V0OiAwLjc1cmVtLFxuXG4gIGJ1dHRvbi1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuICBidXR0b24tZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1naWFudC1pY29uLXNpemU6IDEuNXJlbSxcbiAgYnV0dG9uLWdpYW50LWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi1naWFudC1pY29uLW9mZnNldDogMC43NXJlbSxcblxuICBidXR0b24tcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGJ1dHRvbi1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGJ1dHRvbi1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgYnV0dG9uLWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZmlsbGVkLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tZmlsbGVkLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG5cbiAgYnV0dG9uLWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tb3V0bGluZS10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICBidXR0b24tb3V0bGluZS1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoOiAwIDAgMCAxMDB2bWF4LFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLFxuICBidXR0b24tb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZm9jdXMtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZ2hvc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGJ1dHRvbi1naG9zdC10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICBidXR0b24tZ2hvc3QtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBidXR0b24tZ2hvc3QtdGlueS1wYWRkaW5nOiAwLjMxMjVyZW0gMC42MjVyZW0sXG4gIGJ1dHRvbi1naG9zdC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1naG9zdC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZ2hvc3QtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZ2hvc3QtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWZvY3VzLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1hY3RpdmUtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci13aWR0aDogMCxcbiAgYnV0dG9uLWhlcm8tdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcblxuICBidXR0b24taGVyby10aW55LXBhZGRpbmc6IDAuMzc1cmVtIDAuNjg3NXJlbSxcbiAgYnV0dG9uLWhlcm8tc21hbGwtcGFkZGluZzogMC41cmVtIDAuOTM3NXJlbSxcbiAgYnV0dG9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6IDAuNzVyZW0gMS4xODc1cmVtLFxuICBidXR0b24taGVyby1sYXJnZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjE4NzVyZW0sXG4gIGJ1dHRvbi1oZXJvLWdpYW50LXBhZGRpbmc6IDFyZW0gMS40Mzc1cmVtLFxuXG4gIGJ1dHRvbi1oZXJvLXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LFxuICBidXR0b24taGVyby10ZXh0LXNoYWRvdzogc2hhZG93LFxuICBidXR0b24taGVyby1iZXZlbC1zaXplOiAwIDAgMCAwLFxuICBidXR0b24taGVyby1nbG93LXNpemU6IDAgMCAwIDAsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG5cbiAgYnV0dG9uLWhlcm8tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24taGVyby1iYXNpYy1iZXZlbC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24taGVyby1iYXNpYy1nbG93LWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1iYXNpYy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBidXR0b24taGVyby1iYXNpYy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24taGVyby1iYXNpYy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLFxuICBidXR0b24taGVyby1iYXNpYy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBidXR0b24taGVyby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1iZXZlbC1jb2xvcjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZ2xvdy1jb2xvcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBidXR0b24taGVyby1wcmltYXJ5LWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS0zMDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1zdWNjZXNzLWJldmVsLWNvbG9yOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1nbG93LWNvbG9yOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTMwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24taGVyby1zdWNjZXNzLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuICBidXR0b24taGVyby1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYmV2ZWwtY29sb3I6IGNvbG9yLWluZm8tNjAwLFxuICBidXR0b24taGVyby1pbmZvLWdsb3ctY29sb3I6IGNvbG9yLWluZm8tNzAwLFxuICBidXR0b24taGVyby1pbmZvLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24taGVyby1pbmZvLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgYnV0dG9uLWhlcm8taW5mby1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tMzAwLFxuICBidXR0b24taGVyby1pbmZvLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBidXR0b24taGVyby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8td2FybmluZy1iZXZlbC1jb2xvcjogY29sb3Itd2FybmluZy02MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZ2xvdy1jb2xvcjogY29sb3Itd2FybmluZy03MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBidXR0b24taGVyby13YXJuaW5nLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy0zMDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1iZXZlbC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWdsb3ctY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci00MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTMwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYmV2ZWwtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1nbG93LWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24taGVyby1jb250cm9sLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1jb250cm9sLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBidXR0b24taGVyby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtYnV0dG9uLWJhc2ljLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24tcHJpbWFyeS10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24tc3VjY2Vzcy10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24taW5mby10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLWluZm8tdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24td2FybmluZy10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24tZGFuZ2VyLXRleHQtY29sb3I6IGJ1dHRvbi1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3IsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtYnV0dG9uLWNvbnRyb2wtdGV4dC1jb2xvcjogYnV0dG9uLWZpbGxlZC1jb250cm9sLXRleHQtY29sb3IsXG5cbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1iYXNpYy1kaXZpZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtcHJpbWFyeS1kaXZpZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBidXR0b24tZ3JvdXAtZmlsbGVkLXN1Y2Nlc3MtZGl2aWRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1pbmZvLWRpdmlkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtd2FybmluZy1kaXZpZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBidXR0b24tZ3JvdXAtZmlsbGVkLWRhbmdlci1kaXZpZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtY29udHJvbC1kaXZpZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuXG4gIGJ1dHRvbi1ncm91cC1naG9zdC1kaXZpZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG5cbiAgaWNvbi1idXR0b24tZmlsbGVkLXRpbnktcGFkZGluZzogMC40Mzc1cmVtIDAuMzEyNXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjQzNzVyZW0sXG4gIGljb24tYnV0dG9uLWZpbGxlZC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWZpbGxlZC1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMC45Mzc1cmVtLFxuXG4gIGljb24tYnV0dG9uLW91dGxpbmUtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1vdXRsaW5lLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjQzNzVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAwLjU2MjVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMC45Mzc1cmVtLFxuXG4gIGljb24tYnV0dG9uLWdob3N0LXRpbnktcGFkZGluZzogMC40Mzc1cmVtIDAuMzEyNXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3Qtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAwLjU2MjVyZW0sXG4gIGljb24tYnV0dG9uLWdob3N0LWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWdob3N0LWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24taGVyby10aW55LXBhZGRpbmc6IDAuNXJlbSAwLjM3NXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1zbWFsbC1wYWRkaW5nOiAwLjU2MjVyZW0gMC41cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1sYXJnZS1wYWRkaW5nOiAwLjg3NXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWhlcm8tZ2lhbnQtcGFkZGluZzogMS4wNjI1cmVtIDFyZW0sXG5cbiAgaW5wdXQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgaW5wdXQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGlucHV0LW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGlucHV0LW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIGlucHV0LXBsYWNlaG9sZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBpbnB1dC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuXG4gIGlucHV0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGlucHV0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBpbnB1dC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgaW5wdXQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGlucHV0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgaW5wdXQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGlucHV0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXG4gIGlucHV0LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgaW5wdXQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgaW5wdXQtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwLFxuICBpbnB1dC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgaW5wdXQtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGlucHV0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgaW5wdXQtcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGlucHV0LXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgaW5wdXQtdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCxcbiAgaW5wdXQtdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodCxcbiAgaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBpbnB1dC10aW55LW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIGlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBpbnB1dC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDFyZW0sXG4gIGlucHV0LW1lZGl1bS1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIGlucHV0LWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgaW5wdXQtbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgaW5wdXQtbGFyZ2UtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgaW5wdXQtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG4gIGlucHV0LWdpYW50LW1heC13aWR0aDogMzByZW0sXG5cbiAgY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtLFxuICBjaGVja2JveC13aWR0aDogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgY2hlY2tib3gtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNoZWNrYm94LWJvcmRlci1yYWRpdXM6IDNweCxcbiAgY2hlY2tib3gtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgY2hlY2tib3gtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgY2hlY2tib3gtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICBjaGVja2JveC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgY2hlY2tib3gtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBjaGVja2JveC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIGNoZWNrYm94LXRleHQtc3BhY2U6IDAuNjg3NXJlbSxcbiAgY2hlY2tib3gtcGFkZGluZzogMCxcbiAgY2hlY2tib3gtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBjaGVja2JveC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtYmFzaWMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWJhc2ljLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjaGVja2JveC1iYXNpYy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgY2hlY2tib3gtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBiYWRnZS1kb3QtbW9kZS1ib3JkZXItcmFkaXVzOiAwLjVyZW0sXG4gIGJhZGdlLWRvdC1tb2RlLXBhZGRpbmc6IDAuM3JlbSxcblxuICBiYWRnZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBiYWRnZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgYmFkZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBiYWRnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYmFkZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodCxcbiAgYmFkZ2UtcGFkZGluZzogMC4yNXJlbSAwLjRyZW0sXG5cbiAgYmFkZ2UtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBiYWRnZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBiYWRnZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYmFkZ2UtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJhZGdlLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuXG4gIHByb2dyZXNzLWJhci1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zLFxuICBwcm9ncmVzcy1iYXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgcHJvZ3Jlc3MtYmFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG5cbiAgcHJvZ3Jlc3MtYmFyLXRpbnktaGVpZ2h0OiAxcmVtLFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1zbWFsbC1oZWlnaHQ6IDEuMjVyZW0sXG4gIHByb2dyZXNzLWJhci1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS1oZWlnaHQ6IDEuNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtaGVpZ2h0OiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQsXG4gIHByb2dyZXNzLWJhci1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLWluZm8tZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItY29udHJvbC1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgYWxlcnQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgYWxlcnQtYm90dG9tLW1hcmdpbjogMS41cmVtLFxuICBhbGVydC1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgYWxlcnQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBhbGVydC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhbGVydC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgYWxlcnQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBhbGVydC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBhbGVydC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGFsZXJ0LWNsb3NhYmxlLXN0YXJ0LXBhZGRpbmc6IDNyZW0sXG5cbiAgYWxlcnQtdGlueS1oZWlnaHQ6IDQuNXJlbSxcbiAgYWxlcnQtc21hbGwtaGVpZ2h0OiA1Ljc1cmVtLFxuICBhbGVydC1tZWRpdW0taGVpZ2h0OiA3cmVtLFxuICBhbGVydC1tZWRpdW0tcGFkZGluZzogMXJlbSAxLjEyNXJlbSxcbiAgYWxlcnQtbGFyZ2UtaGVpZ2h0OiA4LjI1cmVtLFxuICBhbGVydC1naWFudC1oZWlnaHQ6IDkuNXJlbSxcblxuICBhbGVydC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGFsZXJ0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFsZXJ0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBhbGVydC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGFsZXJ0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYWxlcnQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBhbGVydC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBhbGVydC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYWxlcnQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgYWxlcnQtYWNjZW50LWJhc2ljLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYWxlcnQtYWNjZW50LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1jb250cm9sLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG5cbiAgYWxlcnQtb3V0bGluZS13aWR0aDogMXB4LFxuICBhbGVydC1vdXRsaW5lLWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtaW5mby1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBhbGVydC1vdXRsaW5lLWNvbnRyb2wtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuXG4gIGNoYXQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjaGF0LWJvcmRlcjogbm9uZSxcbiAgY2hhdC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjaGF0LXNoYWRvdzogc2hhZG93LFxuICBjaGF0LXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgY2hhdC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgY2hhdC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGNoYXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgY2hhdC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGF0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjaGF0LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGNoYXQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGNoYXQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgY2hhdC1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2hhdC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjaGF0LWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNoYXQtdGlueS1oZWlnaHQ6IDEzLjVyZW0sXG4gIGNoYXQtc21hbGwtaGVpZ2h0OiAyMXJlbSxcbiAgY2hhdC1tZWRpdW0taGVpZ2h0OiAyOC41cmVtLFxuICBjaGF0LWxhcmdlLWhlaWdodDogMzZyZW0sXG4gIGNoYXQtZ2lhbnQtaGVpZ2h0OiA0My41cmVtLFxuXG4gIGNoYXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjaGF0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoYXQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoYXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoYXQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoYXQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGF0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoYXQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgY2hhdC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjaGF0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGNoYXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBjaGF0LW1lc3NhZ2UtYmFja2dyb3VuZDogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGF0LW1lc3NhZ2UtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLWF2YXRhci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy01MDAsXG4gIGNoYXQtbWVzc2FnZS1zZW5kZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc3Bpbm5lci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgc3Bpbm5lci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgc3Bpbm5lci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgc3Bpbm5lci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG5cbiAgc3Bpbm5lci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItYmFzaWMtY2lyY2xlLWZpbGxlZC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzcGlubmVyLWJhc2ljLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1pbmZvLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc3Bpbm5lci1pbmZvLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1zdWNjZXNzLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc3Bpbm5lci1zdWNjZXNzLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLWRhbmdlci1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc3Bpbm5lci1kYW5nZXItY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItY29udHJvbC1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHNwaW5uZXItY29udHJvbC1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItaGVpZ2h0LXRpbnk6IDFyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LXNtYWxsOiAxLjI1cmVtLFxuICBzcGlubmVyLWhlaWdodC1tZWRpdW06IDEuNXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtbGFyZ2U6IDEuNzVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LWdpYW50OiAycmVtLFxuXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc3RlcHBlci1zdGVwLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzdGVwcGVyLXN0ZXAtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3IsXG4gIHN0ZXBwZXItc3RlcC1jb21wbGV0ZWQtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci13aWR0aDogMXB4LFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXJhZGl1czogNTAlLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtd2lkdGg6IDJyZW0sXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1jb21wbGV0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1jb21wbGV0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHN0ZXBwZXItY29ubmVjdG9yLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc3RlcHBlci1jb25uZWN0b3ItY29tcGxldGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1ob3Jpem9udGFsLWNvbm5lY3Rvci1tYXJnaW46IDFyZW0sXG4gIHN0ZXBwZXItdmVydGljYWwtY29ubmVjdG9yLW1hcmdpbjogMXJlbSxcblxuICBzdGVwcGVyLXN0ZXAtY29udGVudC1wYWRkaW5nOiAxLjI1cmVtLFxuXG4gIGFjY29yZGlvbi1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBhY2NvcmRpb24tcGFkZGluZzogMS4yNXJlbSxcbiAgYWNjb3JkaW9uLXNoYWRvdzogc2hhZG93LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBhY2NvcmRpb24taGVhZGVyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci13aWR0aDogMXB4LFxuICBhY2NvcmRpb24taXRlbS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgbGlzdC1pdGVtLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGxpc3QtaXRlbS1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBsaXN0LWl0ZW0tZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgbGlzdC1pdGVtLXBhZGRpbmc6IDFyZW0sXG4gIGxpc3QtaXRlbS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBsaXN0LWl0ZW0tZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBsaXN0LWl0ZW0tZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGxpc3QtaXRlbS1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGxpc3QtaXRlbS1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItd2lkdGg6IDIwLjYyNXJlbSxcbiAgY2FsZW5kYXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjYWxlbmRhci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBjYWxlbmRhci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjYWxlbmRhci1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgY2FsZW5kYXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2FsZW5kYXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2FsZW5kYXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLXRvcDogMC4yNXJlbSxcbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctYm90dG9tOiAwLjYyNXJlbSxcbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctc3RhcnQ6IDAuNjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1lbmQ6IDAuNjI1cmVtLFxuXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tcGFkZGluZzogMC42MjVyZW0gMC4yNXJlbSxcblxuICBjYWxlbmRhci1jZWxsLWluYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBjYWxlbmRhci1jZWxsLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgY2FsZW5kYXItY2VsbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItYm9yZGVyLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1mb250LXNpemU6IGNhbGVuZGFyLXRleHQtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG5cbiAgY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6IDIuNzVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodDogMi43NXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aDogNC44MTI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodDogY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0LFxuICBjYWxlbmRhci15ZWFyLWNlbGwtd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLXdlZWtkYXktYmFja2dyb3VuZDogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLXdlZWtkYXktZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LWhvbGlkYXktdGV4dC1jb2xvcjogY2FsZW5kYXItd2Vla2RheS10ZXh0LWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LWhlaWdodDogY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC13aWR0aCxcblxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1oZWlnaHQ6IGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXdpZHRoOiBjYWxlbmRhci13ZWVrZGF5LXdpZHRoLFxuXG4gIGNhbGVuZGFyLWxhcmdlLXdpZHRoOiAyMi4zNzVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoOiAzcmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQ6IDNyZW0sXG4gIGNhbGVuZGFyLXdlZWtkYXktbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXItd2Vla2RheS1sYXJnZS13aWR0aDogY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWxhcmdlLWhlaWdodDogY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItbGFyZ2Utd2lkdGg6IGNhbGVuZGFyLXdlZWtkYXktbGFyZ2Utd2lkdGgsXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGg6IDUuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQsXG5cbiAgb3ZlcmxheS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpLFxuXG4gIHRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zLFxuICB0b29sdGlwLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtYm9yZGVyLXN0eWxlOiBkYXNoZWQsXG4gIHRvb2x0aXAtYm9yZGVyLXdpZHRoOiAwLFxuICB0b29sdGlwLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHRvb2x0aXAtcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIHRvb2x0aXAtdGV4dC1jb2xvcjogdGV4dC1hbHRlcm5hdGUtY29sb3IsXG4gIHRvb2x0aXAtdGV4dC1mb250LWZhbWlseTogdGV4dC1jYXB0aW9uLWZvbnQtZmFtaWx5LFxuICB0b29sdGlwLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB0b29sdGlwLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi1mb250LXdlaWdodCxcbiAgdG9vbHRpcC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHRvb2x0aXAtaWNvbi1oZWlnaHQ6IDFyZW0sXG4gIHRvb2x0aXAtaWNvbi13aWR0aDogMXJlbSxcbiAgdG9vbHRpcC1tYXgtd2lkdGg6IDE2cmVtLFxuXG4gIHRvb2x0aXAtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICB0b29sdGlwLWJhc2ljLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9vbHRpcC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9vbHRpcC1wcmltYXJ5LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvb2x0aXAtaW5mby1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b29sdGlwLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b29sdGlwLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9vbHRpcC13YXJuaW5nLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b29sdGlwLWRhbmdlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvb2x0aXAtY29udHJvbC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b29sdGlwLXNoYWRvdzogc2hhZG93LFxuXG4gIG9wdGlvbi1saXN0LW1heC1oZWlnaHQ6IDIwcmVtLFxuICBvcHRpb24tbGlzdC1zaGFkb3c6IG5vbmUsXG4gIG9wdGlvbi1saXN0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIG9wdGlvbi1saXN0LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIG9wdGlvbi1saXN0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1jb2xvcjogb3B0aW9uLWxpc3QtYm9yZGVyLWNvbG9yLFxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItc3R5bGU6IG9wdGlvbi1saXN0LWJvcmRlci1zdHlsZSxcbiAgb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOiBvcHRpb24tbGlzdC1ib3JkZXItd2lkdGgsXG5cbiAgb3B0aW9uLWdyb3VwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgb3B0aW9uLWdyb3VwLXRpbnktc3RhcnQtcGFkZGluZzogMS4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLXNtYWxsLXN0YXJ0LXBhZGRpbmc6IDEuNzVyZW0sXG4gIG9wdGlvbi1ncm91cC1tZWRpdW0tc3RhcnQtcGFkZGluZzogMi4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLWxhcmdlLXN0YXJ0LXBhZGRpbmc6IDIuMjVyZW0sXG4gIG9wdGlvbi1ncm91cC1naWFudC1zdGFydC1wYWRkaW5nOiAyLjc1cmVtLFxuXG4gIG9wdGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIG9wdGlvbi10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgb3B0aW9uLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLFxuICBvcHRpb24taG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIG9wdGlvbi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLFxuICBvcHRpb24tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgb3B0aW9uLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIG9wdGlvbi1zZWxlY3RlZC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIG9wdGlvbi1zZWxlY3RlZC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgb3B0aW9uLXNlbGVjdGVkLWZvY3VzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgb3B0aW9uLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tdGlueS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmcsXG5cbiAgb3B0aW9uLXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBvcHRpb24tc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tc21hbGwtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtc21hbGwtcGFkZGluZyxcblxuICBvcHRpb24tbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1tZWRpdW0tcGFkZGluZzogc2VsZWN0LW91dGxpbmUtbWVkaXVtLXBhZGRpbmcsXG5cbiAgb3B0aW9uLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tbGFyZ2UtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtbGFyZ2UtcGFkZGluZyxcblxuICBvcHRpb24tZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZSxcbiAgb3B0aW9uLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1naWFudC1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1naWFudC1wYWRkaW5nLFxuXG4gIHNlbGVjdC1jdXJzb3I6IHBvaW50ZXIsXG4gIHNlbGVjdC1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG4gIHNlbGVjdC1taW4td2lkdGg6IDEzcmVtLFxuICBzZWxlY3Qtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgc2VsZWN0LW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHNlbGVjdC1pY29uLW9mZnNldDogMnJlbSxcblxuICBzZWxlY3QtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgc2VsZWN0LXBsYWNlaG9sZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tMi1mb250LXNpemUsXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodCxcbiAgc2VsZWN0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC10aW55LW1heC13aWR0aDogMjByZW0sXG5cbiAgc2VsZWN0LXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3Qtc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3Qtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3Qtc21hbGwtbWF4LXdpZHRoOiAyMHJlbSxcblxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LW1lZGl1bS1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgc2VsZWN0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNlbGVjdC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LWxhcmdlLW1heC13aWR0aDogMzByZW0sXG5cbiAgc2VsZWN0LWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsXG4gIHNlbGVjdC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgc2VsZWN0LWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBzZWxlY3QtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHNlbGVjdC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIHNlbGVjdC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgc2VsZWN0LW91dGxpbmUtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgc2VsZWN0LW91dGxpbmUtYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgc2VsZWN0LW91dGxpbmUtdGlueS1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtc21hbGwtcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtbGFyZ2UtcGFkZGluZzogMC42ODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxcmVtLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcblxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItc3R5bGU6IHNlbGVjdC1vdXRsaW5lLWJvcmRlci1zdHlsZSxcbiAgc2VsZWN0LW91dGxpbmUtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOiBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGgsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzZWxlY3QtZmlsbGVkLWJvcmRlci13aWR0aDogMXB4LFxuXG4gIHNlbGVjdC1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDFyZW0sXG4gIHNlbGVjdC1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC42ODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG5cbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby10aW55LXBhZGRpbmc6IDAuMjVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tc21hbGwtcGFkZGluZzogMC4yNXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1tZWRpdW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIHNlbGVjdC1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tZ2lhbnQtcGFkZGluZzogMXJlbSAxcmVtLFxuXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1iYXNpYy1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy00MDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTMwMCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtMzAwLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1pbmZvLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG4gIHNlbGVjdC1oZXJvLWluZm8tcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1pbmZvLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWluZm8tZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTUwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBzZWxlY3QtaGVyby1pbmZvLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby0zMDAsXG4gIHNlbGVjdC1oZXJvLWluZm8taG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8td2FybmluZy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTMwMCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1jb250cm9sLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1jb250cm9sLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtaGVyby1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1jb250cm9sLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGRhdGVwaWNrZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBkYXRlcGlja2VyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgZGF0ZXBpY2tlci1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgZGF0ZXBpY2tlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBkYXRlcGlja2VyLXNoYWRvdzogbm9uZSxcblxuICB0aW1lcGlja2VyLWNlbGwtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdGltZXBpY2tlci1jZWxsLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgdGltZXBpY2tlci1jZWxsLWhvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRpbWVwaWNrZXItY2VsbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgdGltZXBpY2tlci1jZWxsLWZvY3VzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRpbWVwaWNrZXItY2VsbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0aW1lcGlja2VyLWNlbGwtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdGltZXBpY2tlci1jZWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgdGltZXBpY2tlci1jZWxsLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRpbWVwaWNrZXItY2VsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICB0aW1lcGlja2VyLWNlbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgdGltZXBpY2tlci1jZWxsLWhlaWdodDogMi43NXJlbSxcbiAgdGltZXBpY2tlci1oZWFkZXItY2VsbC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHRpbWVwaWNrZXItaGVhZGVyLWNlbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICB0aW1lcGlja2VyLWhlYWRlci1jZWxsLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRpbWVwaWNrZXItaGVhZGVyLWNlbGwtaGVpZ2h0OiAyLjc1cmVtLFxuICB0aW1lcGlja2VyLWhlYWRlci1jZWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHRpbWVwaWNrZXItaGVhZGVyLWNlbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgdGltZXBpY2tlci1ib3JkZXItY29sb3I6IGRhdGVwaWNrZXItYm9yZGVyLWNvbG9yLFxuICB0aW1lcGlja2VyLWJvcmRlci1zdHlsZTogZGF0ZXBpY2tlci1ib3JkZXItc3R5bGUsXG4gIHRpbWVwaWNrZXItYm9yZGVyLXdpZHRoOiBkYXRlcGlja2VyLWJvcmRlci13aWR0aCxcbiAgdGltZXBpY2tlci1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgdGltZXBpY2tlci1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIHRpbWVwaWNrZXItc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIHRpbWVwaWNrZXItc2luZ2xlLWNvbHVtbi13aWR0aDogNXJlbSxcbiAgdGltZXBpY2tlci1tdWx0aXBsZS1jb2x1bW4td2lkdGg6IDEzLjg3NXJlbSxcbiAgdGltZXBpY2tlci10aXRsZS1oZWlnaHQ6IDMuNzVyZW0sXG4gIHRpbWVwaWNrZXItdGl0bGUtcGFkZGluZzogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHRpbWVwaWNrZXItY29udGFpbmVyLXdpZHRoOiAyMHJlbSxcbiAgdGltZXBpY2tlci1jb250YWluZXItaGVpZ2h0OiAyNi4xODc1cmVtLFxuXG4gIHJhZGlvLXdpZHRoOiAxLjI1cmVtLFxuICByYWRpby1oZWlnaHQ6IDEuMjVyZW0sXG4gIHJhZGlvLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHJhZGlvLWJvcmRlci13aWR0aDogMXB4LFxuICByYWRpby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIHJhZGlvLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICByYWRpby10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHJhZGlvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcmFkaW8tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgcmFkaW8tb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcblxuICByYWRpby1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICByYWRpby1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICByYWRpby1iYXNpYy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8taW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWluZm8taW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHJhZGlvLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8taW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICByYWRpby1pbmZvLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgcmFkaW8taW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWluZm8taG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8taG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICByYWRpby1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8taW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8td2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICByYWRpby13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICByYWRpby1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHJhZGlvLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICByYWRpby1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1jb250cm9sLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHRyZWUtZ3JpZC1yb3ctbWluLWhlaWdodDogMnJlbSxcbiAgdHJlZS1ncmlkLWNlbGwtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcblxuICB0cmVlLWdyaWQtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICB0cmVlLWdyaWQtZm9vdGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LWZhbWlseSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtc2l6ZTogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtd2VpZ2h0OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1saW5lLWhlaWdodDogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIHRyZWUtZ3JpZC1yb3ctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1ib3JkZXI6IG5vbmUsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tcGFkZGluZzogMCxcblxuICBpY29uLWZvbnQtc2l6ZTogMS4yNXJlbSxcbiAgaWNvbi1saW5lLWhlaWdodDogMSxcbiAgaWNvbi13aWR0aDogMWVtLFxuICBpY29uLWhlaWdodDogMWVtLFxuICBpY29uLXN2Zy12ZXJ0aWNhbC1hbGlnbjogdG9wLFxuICBpY29uLWJhc2ljLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGljb24tcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBpY29uLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgaWNvbi1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGljb24td2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBpY29uLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGljb24tY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuXG4gIHRhZy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICB0YWctdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUsXG4gIHRhZy1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgdGFnLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRhZy1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgdGFnLXRpbnktdGV4dC1mb250LXNpemU6IGlucHV0LXRpbnktdGV4dC1mb250LXNpemUsXG4gIHRhZy10aW55LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LXRpbnktdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLXRpbnktdGV4dC1saW5lLWhlaWdodDogaW5wdXQtdGlueS10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctdGlueS1wYWRkaW5nOiAwLjA2MjVyZW0gMC45Mzc1cmVtLFxuICB0YWctdGlueS1jbG9zZS1vZmZzZXQ6IDAuNjI1cmVtLFxuXG4gIHRhZy1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtc21hbGwtdGV4dC1mb250LXNpemUsXG4gIHRhZy1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctc21hbGwtdGV4dC1saW5lLWhlaWdodDogaW5wdXQtc21hbGwtdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLXNtYWxsLXBhZGRpbmc6IDAuMDYyNXJlbSAwLjkzNzVyZW0sXG4gIHRhZy1zbWFsbC1jbG9zZS1vZmZzZXQ6IDAuNjI1cmVtLFxuXG4gIHRhZy1tZWRpdW0tdGV4dC1mb250LXNpemU6IGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLW1lZGl1bS1wYWRkaW5nOiAwLjE4NzVyZW0gMC45Mzc1cmVtLFxuICB0YWctbWVkaXVtLWNsb3NlLW9mZnNldDogMC42MjVyZW0sXG5cbiAgdGFnLWxhcmdlLXRleHQtZm9udC1zaXplOiBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctbGFyZ2UtcGFkZGluZzogMC4zMTI1cmVtIDAuOTM3NXJlbSxcbiAgdGFnLWxhcmdlLWNsb3NlLW9mZnNldDogMC42MjVyZW0sXG5cbiAgdGFnLWdpYW50LXRleHQtZm9udC1zaXplOiBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctZ2lhbnQtcGFkZGluZzogMC40Mzc1cmVtIDAuOTM3NXJlbSxcbiAgdGFnLWdpYW50LWNsb3NlLW9mZnNldDogMC42MjVyZW0sXG5cbiAgdGFnLWZpbGxlZC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICB0YWctZmlsbGVkLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0YWctZmlsbGVkLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgdGFnLWZpbGxlZC1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtYWN0b3ZlLFxuICB0YWctZmlsbGVkLWJhc2ljLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0YWctZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRhZy1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRhZy1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLXByaW1hcnktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RvdmUsXG4gIHRhZy1maWxsZWQtcHJpbWFyeS1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRhZy1maWxsZWQtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHRhZy1maWxsZWQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLXN1Y2Nlc3Mtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RvdmUsXG4gIHRhZy1maWxsZWQtc3VjY2Vzcy1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0YWctZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHRhZy1maWxsZWQtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRhZy1maWxsZWQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLWluZm8tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RvdmUsXG4gIHRhZy1maWxsZWQtaW5mby1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0YWctZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHRhZy1maWxsZWQtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRhZy1maWxsZWQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLXdhcm5pbmctc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RvdmUsXG4gIHRhZy1maWxsZWQtd2FybmluZy1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdGFnLWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdGFnLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgdGFnLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0YWctZmlsbGVkLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHRhZy1maWxsZWQtZGFuZ2VyLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RvdmUsXG4gIHRhZy1maWxsZWQtZGFuZ2VyLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG5cbiAgdGFnLWZpbGxlZC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdGFnLWZpbGxlZC1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgdGFnLWZpbGxlZC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdGFnLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICB0YWctZmlsbGVkLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXIsXG4gIHRhZy1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICB0YWctZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1jb250cm9sLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0b3ZlLFxuICB0YWctZmlsbGVkLWNvbnRyb2wtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXIsXG5cbiAgdGFnLW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdGFnLW91dGxpbmUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICB0YWctb3V0bGluZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRhZy1vdXRsaW5lLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgdGFnLW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRhZy1vdXRsaW5lLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0YWctb3V0bGluZS1iYXNpYy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHRhZy1vdXRsaW5lLWJhc2ljLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtYmFzaWMtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0YWctb3V0bGluZS1iYXNpYy1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICB0YWctb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0YWctb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdGFnLW91dGxpbmUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgdGFnLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcblxuICB0YWctb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICB0YWctb3V0bGluZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0YWctb3V0bGluZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0YWctb3V0bGluZS1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIHRhZy1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgdGFnLW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0YWctb3V0bGluZS1pbmZvLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgdGFnLW91dGxpbmUtaW5mby1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtaW5mby1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtaW5mby1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG5cbiAgdGFnLW91dGxpbmUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctb3V0bGluZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgdGFnLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgdGFnLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtd2FybmluZy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICB0YWctb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtd2FybmluZy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuXG4gIHRhZy1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctb3V0bGluZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIHRhZy1vdXRsaW5lLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0YWctb3V0bGluZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICB0YWctb3V0bGluZS1kYW5nZXItc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLWRhbmdlci1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcblxuICB0YWctb3V0bGluZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctb3V0bGluZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0YWctb3V0bGluZS1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0YWctb3V0bGluZS1jb250cm9sLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRhZy1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgdGFnLW91dGxpbmUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0YWctb3V0bGluZS1jb250cm9sLWhvdmVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdGFnLW91dGxpbmUtY29udHJvbC1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtY29udHJvbC1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgdGFnLWxpc3QtdGlueS10YWctb2Zmc2V0OiAwLjA2MjVyZW0sXG4gIHRhZy1saXN0LXNtYWxsLXRhZy1vZmZzZXQ6IDAuMTI1cmVtLFxuICB0YWctbGlzdC1tZWRpdW0tdGFnLW9mZnNldDogMC4yNXJlbSxcbiAgdGFnLWxpc3QtbGFyZ2UtdGFnLW9mZnNldDogMC4zNzVyZW0sXG4gIHRhZy1saXN0LWdpYW50LXRhZy1vZmZzZXQ6IDAuNXJlbSxcblxuICB0YWctbGlzdC13aXRoLWlucHV0LXRpbnktcGFkZGluZzogMC4wNjI1cmVtIDFyZW0sXG4gIHRhZy1saXN0LXdpdGgtaW5wdXQtc21hbGwtcGFkZGluZzogMC4wNjI1cmVtIDFyZW0sXG4gIHRhZy1saXN0LXdpdGgtaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICB0YWctbGlzdC13aXRoLWlucHV0LWxhcmdlLXBhZGRpbmc6IDAuMzEyNXJlbSAxcmVtLFxuICB0YWctbGlzdC13aXRoLWlucHV0LWdpYW50LXBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtLFxuXG4gIHRhZy1saXN0LXdpdGgtaW5wdXQtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGlucHV0LXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzLFxuICB0YWctbGlzdC13aXRoLWlucHV0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogaW5wdXQtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzLFxuICB0YWctbGlzdC13aXRoLWlucHV0LXJvdW5kLWJvcmRlci1yYWRpdXM6IGlucHV0LXJvdW5kLWJvcmRlci1yYWRpdXMsXG5cbiAgdGFnLWlucHV0LW1pbi13aWR0aDogNnJlbSxcbiAgdGFnLWlucHV0LXRleHQtZm9udC1mYW1pbHk6IGlucHV0LXRleHQtZm9udC1mYW1pbHksXG4gIHRhZy1pbnB1dC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtZmFtaWx5OiBpbnB1dC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtZmFtaWx5LFxuXG4gIHRhZy1pbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWctaW5wdXQtYmFzaWMtYm9yZGVyLWNvbG9yOiBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1iYXNpYy10ZXh0LWNvbG9yOiBpbnB1dC1iYXNpYy10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1iYXNpYy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuXG4gIHRhZy1pbnB1dC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGlucHV0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktYm9yZGVyLWNvbG9yOiBpbnB1dC1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktdGV4dC1jb2xvcjogaW5wdXQtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG5cbiAgdGFnLWlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGlucHV0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiBpbnB1dC1zdWNjZXNzLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGlucHV0LXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGlucHV0LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1zdWNjZXNzLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcixcblxuICB0YWctaW5wdXQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1pbmZvLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLWJvcmRlci1jb2xvcjogaW5wdXQtaW5mby1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLXRleHQtY29sb3I6IGlucHV0LWluZm8tdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogaW5wdXQtaW5mby1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IGlucHV0LWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LWluZm8tZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtaW5mby1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuXG4gIHRhZy1pbnB1dC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGlucHV0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctYm9yZGVyLWNvbG9yOiBpbnB1dC13YXJuaW5nLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctdGV4dC1jb2xvcjogaW5wdXQtd2FybmluZy10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtd2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogaW5wdXQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtd2FybmluZy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC13YXJuaW5nLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG5cbiAgdGFnLWlucHV0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LWRhbmdlci1ib3JkZXItY29sb3I6IGlucHV0LWRhbmdlci1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItdGV4dC1jb2xvcjogaW5wdXQtZGFuZ2VyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yLFxuICB0YWctaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IGlucHV0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGlucHV0LWRhbmdlci1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuXG4gIHRhZy1pbnB1dC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBpbnB1dC1jb250cm9sLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtdGV4dC1jb2xvcjogaW5wdXQtY29udHJvbC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogaW5wdXQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtY29udHJvbC1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1jb250cm9sLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG5cbiAgdGFnLWlucHV0LXRpbnktdGV4dC1mb250LXNpemU6IGlucHV0LXRpbnktdGV4dC1mb250LXNpemUsXG4gIHRhZy1pbnB1dC10aW55LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LXRpbnktdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LXRpbnktdGV4dC1saW5lLWhlaWdodDogaW5wdXQtdGlueS10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC10aW55LXBhZGRpbmc6IDAuMTI1cmVtIDAsXG5cbiAgdGFnLWlucHV0LXNtYWxsLXRleHQtZm9udC1zaXplOiBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1pbnB1dC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC1zbWFsbC1wYWRkaW5nOiAwLjEyNXJlbSAwLFxuXG4gIHRhZy1pbnB1dC1tZWRpdW0tdGV4dC1mb250LXNpemU6IGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLWlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuMjVyZW0gMCxcblxuICB0YWctaW5wdXQtbGFyZ2UtdGV4dC1mb250LXNpemU6IGlucHV0LWxhcmdlLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LWxhcmdlLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemUsXG4gIHRhZy1pbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLWlucHV0LWxhcmdlLXBhZGRpbmc6IDAuMzc1cmVtIDAsXG5cbiAgdGFnLWlucHV0LWdpYW50LXRleHQtZm9udC1zaXplOiBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1pbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC1naWFudC1wYWRkaW5nOiAwLjVyZW0gMCxcblxuICB0b2dnbGUtaGVpZ2h0OiAxLjg3NXJlbSxcbiAgdG9nZ2xlLXdpZHRoOiAzLjEyNXJlbSxcbiAgdG9nZ2xlLWJvcmRlci13aWR0aDogMXB4LFxuICB0b2dnbGUtYm9yZGVyLXJhZGl1czogMTAwcHgsXG4gIHRvZ2dsZS1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICB0b2dnbGUtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgdG9nZ2xlLXN3aXRjaGVyLXNpemU6IDEuNzVyZW0sXG4gIHRvZ2dsZS1zd2l0Y2hlci1pY29uLXNpemU6IDAuNzVyZW0sXG4gIHRvZ2dsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIHRvZ2dsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgdG9nZ2xlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgdG9nZ2xlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgdG9nZ2xlLWN1cnNvcjogcG9pbnRlcixcbiAgdG9nZ2xlLWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcblxuICB0b2dnbGUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9nZ2xlLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2dnbGUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0b2dnbGUtaW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRvZ2dsZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtY29udHJvbC1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIGZvcm0tZmllbGQtdGlueS1tYXgtd2lkdGg6IGlucHV0LXRpbnktbWF4LXdpZHRoLFxuICBmb3JtLWZpZWxkLXNtYWxsLW1heC13aWR0aDogaW5wdXQtc21hbGwtbWF4LXdpZHRoLFxuICBmb3JtLWZpZWxkLW1lZGl1bS1tYXgtd2lkdGg6IGlucHV0LW1lZGl1bS1tYXgtd2lkdGgsXG4gIGZvcm0tZmllbGQtbGFyZ2UtbWF4LXdpZHRoOiBpbnB1dC1sYXJnZS1tYXgtd2lkdGgsXG4gIGZvcm0tZmllbGQtZ2lhbnQtbWF4LXdpZHRoOiBpbnB1dC1naWFudC1tYXgtd2lkdGgsXG5cbiAgZm9ybS1maWVsZC1hZGRvbi1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tYmFzaWMtaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXByaW1hcnktdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tcHJpbWFyeS1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tc3VjY2Vzcy10ZXh0LWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zdWNjZXNzLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1pbmZvLXRleHQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWluZm8taGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLWluZm8tNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXdhcm5pbmctdGV4dC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24td2FybmluZy1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3Itd2FybmluZy02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tZGFuZ2VyLXRleHQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tZGFuZ2VyLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWNvbnRyb2wtaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgZm9ybS1maWVsZC1hZGRvbi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1oZWlnaHQ6IDEuNXJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLXRpbnktaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktaWNvbi1zaXplOiBidXR0b24tdGlueS1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtaGVpZ2h0OiAycmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1pY29uLXNpemU6IGJ1dHRvbi1zbWFsbC1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1zbWFsbC1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0taGVpZ2h0OiAyLjVyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWljb24tc2l6ZTogYnV0dG9uLW1lZGl1bS1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaWNvbi1zaXplOiBidXR0b24tbGFyZ2UtaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaGVpZ2h0OiAzLjVyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWljb24tc2l6ZTogYnV0dG9uLWdpYW50LWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1mb250LXNpemU6IHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lcy9tYXBwaW5nJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuXG4gIEBpZiAobGVuZ3RoKCRuYi1lbmFibGVkLXRoZW1lcykgPT0gMCkge1xuICAgIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJG5iLXRoZW1lcyB7XG4gICAgICAkbmItZW5hYmxlZC10aGVtZXM6IGFwcGVuZCgkbmItZW5hYmxlZC10aGVtZXMsICR0aGVtZS1uYW1lKSAhZ2xvYmFsO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICRuYi1lbmFibGVkLXRoZW1lcztcbn1cblxuQGZ1bmN0aW9uIGdldC1sYXN0LWVuYWJsZWQtdGhlbWUoKSB7XG4gICR0aGVtZXM6IG5iLWdldC1lbmFibGVkLXRoZW1lcygpO1xuICBAcmV0dXJuIG50aCgkdGhlbWVzLCBsZW5ndGgoJHRoZW1lcykpO1xufVxuXG5AZnVuY3Rpb24gbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lOiBudWxsKSB7XG5cbiAgJHBhcmVudC10aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLWV4cG9ydCwgJHBhcmVudC1uYW1lKTtcbiAgQGlmICgkcGFyZW50LXRoZW1lICE9IG51bGwpIHtcbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRwYXJlbnQtdGhlbWUsIGRhdGEpLCAkdGhlbWUpO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6IChcbiAgICBkYXRhOiAkdGhlbWUsXG4gICAgcGFyZW50OiAkcGFyZW50LW5hbWUsXG4gICk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsICR0aGVtZS1kYXRhKTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCRuYW1lKSB7XG4gICR0aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLCAkbmFtZSk7XG5cbiAgLy8gVE9ETzogY2hlY2sgaWYgb3B0aW1hbCBwbGFjZVxuICBAaWYgKCR0aGVtZSA9PSBudWxsKSB7XG4gICAgQGVycm9yICdOZWJ1bGFyIFRoZW1lOiB0aGVtZSBgJyArICRuYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgbmItcmVnaXN0ZXItdGhlbWVgIGZ1bmN0aW9uLic7XG4gIH1cblxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIFJlZ2lzdGVycyBhIG5ldyB0aGVtZVxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZTogbnVsbCkge1xuXG4gIEBpZiAoJG5iLXRoZW1lLWV4cG9ydC1tb2RlID09IHRydWUpIHtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lKSAhZ2xvYmFsO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG4gIEBpZiAoJHBhcmVudC1uYW1lICE9IG51bGwpIHtcbiAgICAkcGFyZW50LXRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMsICRwYXJlbnQtbmFtZSk7XG4gICAgQGlmICgkcGFyZW50LXRoZW1lID09IG51bGwpIHtcbiAgICAgIEBlcnJvciAnTmVidWxhciBUaGVtZTogcGFyZW50IHRoZW1lIGAnICsgJHBhcmVudC1uYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgb3IgaW1wb3J0ZWQuJztcbiAgICB9XG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UoJHBhcmVudC10aGVtZSwgJHRoZW1lKTtcbiAgfVxuICAkdGhlbWU6IG1hcC1tZXJnZSgkZXZhLW1hcHBpbmcsICR0aGVtZSk7XG4gICRuYi10aGVtZXM6IG1hcC1zZXQoJG5iLXRoZW1lcywgJG5hbWUsICR0aGVtZSkgIWdsb2JhbDtcblxuICBAcmV0dXJuICRuYi10aGVtZXM7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSAhPSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtZm9yLXRoZW1lcygkbmFtZXMuLi4pIHtcbiAgQGVhY2ggJG5hbWUgaW4gJG5hbWVzIHtcbiAgICBAaW5jbHVkZSBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jc3MtcHJvcGVydGllcygkdGhlbWUtbmFtZSwgJHRoZW1lKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG5cbiAgICBAZWFjaCAkdmFyLCAkdmFsdWUgaW4gJHRoZW1lIHtcbiAgICAgIEBpZiAodHlwZS1vZigkdmFsdWUpID09ICdzdHJpbmcnIGFuZCBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKSkge1xuICAgICAgICAtLSN7JHZhcn06IHZhcigtLSN7JHZhbHVlfSk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLS0jeyR2YXJ9OiAjeyR2YWx1ZX07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1wcmUtcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKSB7XG4gICRuYi10aGVtZS1wcm9jZXNzLW1vZGU6ICdwcmUtcHJvY2VzcycgIWdsb2JhbDtcblxuICAkbmItdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgJG5iLXByb2Nlc3NlZC10aGVtZTogbmItcHJvY2Vzcy10aGVtZShuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpICFnbG9iYWw7XG59XG5cbkBtaXhpbiBuYi1sYXp5LXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSkge1xuICAkbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuXG4gICRuYi10aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICAkbmItcHJvY2Vzc2VkLXRoZW1lOiAoKSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIC8vIEBicmVha2luZy1jaGFuZ2UgNS4wLjBcbiAgOmhvc3Qge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgJGVuYWJsZWQtdGhlbWVzOiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkZW5hYmxlZC10aGVtZXMge1xuXG4gICAgQGluY2x1ZGUgbmItbGF6eS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpO1xuXG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSA6aG9zdCB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIEluc3RhbGxzIGNvbXBvbmVudCBzdHlsZXMgYmFzZWQgb24gcmVnaXN0ZXJlZCB0aGVtZXNcbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuXG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG5cbiAgfSBAZWxzZSB7XG5cbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIEBjb250ZW50O1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNzcy1wcm9wZXJ0aWVzKCR0aGVtZS1uYW1lLCBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpO1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICAgQGluY2x1ZGUgbmItcHJlLXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSk7XG5cbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBJbnN0YWxscyBnbG9iYWwgc3R5bGVzIGJhc2VkIG9uIHJlZ2lzdGVyZWQgdGhlbWVzXG5AbWl4aW4gbmItaW5zdGFsbCgpIHtcbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtY3NzLXByb3BzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSB7XG4gICRwYXJlbnQtdmFsdWU6IG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpO1xuXG4gIEBpZiAoJHBhcmVudC12YWx1ZSAhPSBudWxsKSB7XG4gICAgQHJldHVybiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAkdmFsdWUsICRwYXJlbnQtdmFsdWUpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cbkBmdW5jdGlvbiBuYi1wcm9jZXNzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJvY2Vzc2VkLXRoZW1lOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHByb2Nlc3NlZC10aGVtZTogbWFwLXNldCgkcHJvY2Vzc2VkLXRoZW1lLCAka2V5LCBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuICBAcmV0dXJuICRwcm9jZXNzZWQtdGhlbWU7XG59XG5cbkBmdW5jdGlvbiBnZXQtY3VycmVudC10aGVtZS1uYW1lKCkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lICE9IG51bGwpIHtcbiAgICBAcmV0dXJuICRuYi10aGVtZS1uYW1lO1xuICB9XG5cbiAgQHJldHVybiBnZXQtbGFzdC1lbmFibGVkLXRoZW1lKCk7XG59XG5cbkBmdW5jdGlvbiBuYi10aGVtZSgka2V5KSB7XG5cbiAgJHZhbHVlOiAoKTtcblxuICAvLyBpbiBjYXNlIG9mIGNzcyBjdXN0b20gcHJvcGVydGllcyAtIGp1c3QgcmV0dXJucyB2YXIoLS12YXItbmFtZSkgLSB0aGUgcmVzdCBpcyBhIGJyb3dzZXIgam9iXG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMgPT0gdHJ1ZSkge1xuICAgIC8vIHRoZXJlIGlzIG5vIHdheSB0byBjaGVjayBpZiB2YXJpYWJsZSBleGlzdHMgYXMgY3VycmVudCBleGVjdXRpb24gY29udGV4dCBpcyBvdXRzaWRlIG9mIHBhcnRpY3VsYXIgdGhlbWVcbiAgICAvLyBiZWNhdXNlIHdlIHByb2Nlc3MgY3NzIGluIHRoaXMgbW9kZSBvbmx5IG9uY2UhIChhbmQgbm90IGZvciBlYWNoIHRoZW1lKVxuICAgICR2YWx1ZTogdmFyKC0tI3ska2V5fSk7XG4gIH0gQGVsc2Uge1xuICAgIC8vIGluIGEgcHJlcHJvY2VzcyBtb2RlIChuYi1pbnN0YWxsLWdsb2JhbCBjYWxsKSBnZXQgcmVhZHkgdmFsdWUgZnJvbSAkbmItcHJvY2Vzc2VkLXRoZW1lIHZhcmlhYmxlXG4gICAgQGlmICgkbmItdGhlbWUtcHJvY2Vzcy1tb2RlID09ICdwcmUtcHJvY2VzcycpIHtcbiAgICAgICR2YWx1ZTogbWFwLWdldCgkbmItcHJvY2Vzc2VkLXRoZW1lLCAka2V5KTtcbiAgICB9XG5cbiAgICAvLyBvdGhlcndpc2UgbGF6aWx5IHNlYXJjaCBmb3IgdmFyaWFibGUgdmFsdWVcbiAgICBAaWYgKCRuYi10aGVtZS1wcm9jZXNzLW1vZGUgPT0gJ2xhenktcHJvY2VzcycpIHtcblxuICAgICAgJG5iLXRoZW1lLW5hbWU6IGdldC1jdXJyZW50LXRoZW1lLW5hbWUoKTtcblxuICAgICAgJHRoZW1lOiBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkbmItdGhlbWUtbmFtZSk7XG4gICAgICAkdmFsdWU6IG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksIG1hcC1nZXQoJHRoZW1lLCAka2V5KSk7XG4gICAgfVxuICB9XG5cbiAgQGlmICgkdmFsdWUgPT0gbnVsbCkge1xuICAgIEB3YXJuICdOZWJ1bGFyIFRoZW1lOiBgbmItdGhlbWUoKWAgY2Fubm90IGZpbmQgdmFsdWUgZm9yIGtleSBgJyArICRrZXkgKyAnYCBmb3IgdGhlbWUgYCcrICRuYi10aGVtZS1uYW1lICsnYCc7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuXG4kdGhlbWU6IChcblxuICAvKipcbiAgICogU2FzcyBtYXAgY29udGFpbnMgYSBsaXN0IG9mIGFsbCBUaGVtZSB2YXJpYWJsZXMgYW5kIGFsc28gdGhlaXIgbWFwcGluZ3MgaW50byBDb21wb25lbnQgdmFyaWFibGVzXG4gICAqIEEgdGhlbWUgY29uc2lzdHMgb2YgYSBsaXN0IG9mIGNvbG9ycywgYmFja2dyb3VuZHMsIGJvcmRlcnMsIHRleHQgc3R5bGVzIGFuZCBzdXBwb3J0aW5nIHZhcmlhYmxlcy5cbiAgICovXG5cblxuICAvKiBTdGF0dXMgY29sb3JzOiBwcmltYXJ5LCBzdWNjZXNzLCBpbmZvLCB3YXJuaW5nLCBkYW5nZXIgLSBmb3IgY29sb3JlZCBlbGVtZW50cyAoYnV0dG9ucywgZXRjKSAqL1xuXG4gIGNvbG9yLXByaW1hcnktMTAwOiAjZjJmNmZmLFxuICBjb2xvci1wcmltYXJ5LTIwMDogI2Q5ZTRmZixcbiAgY29sb3ItcHJpbWFyeS0zMDA6ICNhNmMxZmYsXG4gIGNvbG9yLXByaW1hcnktNDAwOiAjNTk4YmZmLFxuICBjb2xvci1wcmltYXJ5LTUwMDogIzMzNjZmZixcbiAgY29sb3ItcHJpbWFyeS02MDA6ICMyNzRiZGIsXG4gIGNvbG9yLXByaW1hcnktNzAwOiAjMWEzNGI4LFxuICBjb2xvci1wcmltYXJ5LTgwMDogIzEwMjY5NCxcbiAgY29sb3ItcHJpbWFyeS05MDA6ICMwOTFjN2EsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjA4KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjE2KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjI0KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjMyKSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtMTAwOiAjZjBmZmY1LFxuICBjb2xvci1zdWNjZXNzLTIwMDogI2NjZmNlMyxcbiAgY29sb3Itc3VjY2Vzcy0zMDA6ICM4Y2ZhYzcsXG4gIGNvbG9yLXN1Y2Nlc3MtNDAwOiAjMmNlNjliLFxuICBjb2xvci1zdWNjZXNzLTUwMDogIzAwZDY4ZixcbiAgY29sb3Itc3VjY2Vzcy02MDA6ICMwMGI4ODcsXG4gIGNvbG9yLXN1Y2Nlc3MtNzAwOiAjMDA5OTdhLFxuICBjb2xvci1zdWNjZXNzLTgwMDogIzAwN2Q2YyxcbiAgY29sb3Itc3VjY2Vzcy05MDA6ICMwMDRhNDUsXG5cbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMDgpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4xNiksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjI0KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC00MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMzIpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTUwMDogcmdiYSgwLCAyMTQsIDE0MywgMC40KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuNDgpLFxuXG4gIGNvbG9yLWluZm8tMTAwOiAjZjJmOGZmLFxuICBjb2xvci1pbmZvLTIwMDogI2M3ZTJmZixcbiAgY29sb3ItaW5mby0zMDA6ICM5NGNiZmYsXG4gIGNvbG9yLWluZm8tNDAwOiAjNDJhYWZmLFxuICBjb2xvci1pbmZvLTUwMDogIzAwOTVmZixcbiAgY29sb3ItaW5mby02MDA6ICMwMDZmZDYsXG4gIGNvbG9yLWluZm8tNzAwOiAjMDA1N2MyLFxuICBjb2xvci1pbmZvLTgwMDogIzAwNDFhOCxcbiAgY29sb3ItaW5mby05MDA6ICMwMDI4ODUsXG5cbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0xMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMDgpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4xNiksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjI0KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC00MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMzIpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTUwMDogcmdiYSgwLCAxNDksIDI1NSwgMC40KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLXdhcm5pbmctMTAwOiAjZmZmZGYyLFxuICBjb2xvci13YXJuaW5nLTIwMDogI2ZmZjFjMixcbiAgY29sb3Itd2FybmluZy0zMDA6ICNmZmU1OWUsXG4gIGNvbG9yLXdhcm5pbmctNDAwOiAjZmZjOTRkLFxuICBjb2xvci13YXJuaW5nLTUwMDogI2ZmYWEwMCxcbiAgY29sb3Itd2FybmluZy02MDA6ICNkYjhiMDAsXG4gIGNvbG9yLXdhcm5pbmctNzAwOiAjYjg2ZTAwLFxuICBjb2xvci13YXJuaW5nLTgwMDogIzk0NTQwMCxcbiAgY29sb3Itd2FybmluZy05MDA6ICM3MDNjMDAsXG5cbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMDgpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4xNiksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjI0KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMzIpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC40KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuNDgpLFxuXG4gIGNvbG9yLWRhbmdlci0xMDA6ICNmZmYyZjIsXG4gIGNvbG9yLWRhbmdlci0yMDA6ICNmZmQ2ZDksXG4gIGNvbG9yLWRhbmdlci0zMDA6ICNmZmE4YjQsXG4gIGNvbG9yLWRhbmdlci00MDA6ICNmZjcwOGQsXG4gIGNvbG9yLWRhbmdlci01MDA6ICNmZjNkNzEsXG4gIGNvbG9yLWRhbmdlci02MDA6ICNkYjJjNjYsXG4gIGNvbG9yLWRhbmdlci03MDA6ICNiODFkNWIsXG4gIGNvbG9yLWRhbmdlci04MDA6ICM5NDEyNGUsXG4gIGNvbG9yLWRhbmdlci05MDA6ICM3MDA5NDAsXG5cbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMDgpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4xNiksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjI0KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMzIpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC40KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuNDgpLFxuXG4gIC8qIEJhc2ljIGNvbG9ycyAtIGZvciBiYWNrZ3JvdW5kcyBhbmQgYm9yZGVycyBhbmQgdGV4dHMgKi9cblxuICBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsXG4gIGNvbG9yLWJhc2ljLTIwMDogI2Y3ZjlmYyxcbiAgY29sb3ItYmFzaWMtMzAwOiAjZWRmMWY3LFxuICBjb2xvci1iYXNpYy00MDA6ICNlNGU5ZjIsXG4gIGNvbG9yLWJhc2ljLTUwMDogI2M1Y2VlMCxcbiAgY29sb3ItYmFzaWMtNjAwOiAjOGY5YmIzLFxuICBjb2xvci1iYXNpYy03MDA6ICMyZTNhNTksXG4gIGNvbG9yLWJhc2ljLTgwMDogIzIyMmI0NSxcbiAgY29sb3ItYmFzaWMtOTAwOiAjMTkyMDM4LFxuICBjb2xvci1iYXNpYy0xMDAwOiAjMTUxYTMwLFxuICBjb2xvci1iYXNpYy0xMTAwOiAjMTAxNDI2LFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMTYpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjQ4KSxcblxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OCksXG5cbiAgLyogU3RhdHVzIGNvbG9ycyBzdGF0ZXMgLSBmb2N1cywgaG92ZXIsIGRlZmF1bHQsIGFjdGl2ZSwgZGlzYWJsZWQgICovXG5cbiAgY29sb3ItYmFzaWMtZm9jdXM6IGNvbG9yLWJhc2ljLTQwMCxcbiAgY29sb3ItYmFzaWMtaG92ZXI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgY29sb3ItYmFzaWMtZGVmYXVsdDogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1iYXNpYy1hY3RpdmU6IGNvbG9yLWJhc2ljLTQwMCxcbiAgY29sb3ItYmFzaWMtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXG4gIGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBjb2xvci1iYXNpYy1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy1hY3RpdmUsXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXByaW1hcnktZm9jdXM6IGNvbG9yLXByaW1hcnktNjAwLFxuICBjb2xvci1wcmltYXJ5LWhvdmVyOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgY29sb3ItcHJpbWFyeS1kZWZhdWx0OiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS1hY3RpdmU6IGNvbG9yLXByaW1hcnktNjAwLFxuICBjb2xvci1wcmltYXJ5LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY29sb3ItcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1czogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWhvdmVyOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgY29sb3Itc3VjY2Vzcy1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXG5cbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1czogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWluZm8tZm9jdXM6IGNvbG9yLWluZm8tNjAwLFxuICBjb2xvci1pbmZvLWhvdmVyOiBjb2xvci1pbmZvLTQwMCxcbiAgY29sb3ItaW5mby1kZWZhdWx0OiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby1hY3RpdmU6IGNvbG9yLWluZm8tNjAwLFxuICBjb2xvci1pbmZvLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTcwMCxcbiAgY29sb3ItaW5mby1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8taG92ZXIsXG4gIGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgY29sb3ItaW5mby1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG5cbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1czogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXdhcm5pbmctZm9jdXM6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBjb2xvci13YXJuaW5nLWhvdmVyOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgY29sb3Itd2FybmluZy1kZWZhdWx0OiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy1hY3RpdmU6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBjb2xvci13YXJuaW5nLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyOiBjb2xvci13YXJuaW5nLTcwMCxcbiAgY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXI6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgY29sb3Itd2FybmluZy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG5cbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1czogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWRhbmdlci1mb2N1czogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWhvdmVyOiBjb2xvci1kYW5nZXItNDAwLFxuICBjb2xvci1kYW5nZXItZGVmYXVsdDogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZTogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXI6IGNvbG9yLWRhbmdlci03MDAsXG4gIGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXI6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGNvbG9yLWRhbmdlci1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcblxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItY29udHJvbC1mb2N1czogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1jb250cm9sLWhvdmVyOiBjb2xvci1iYXNpYy0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtZGVmYXVsdDogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLWFjdGl2ZTogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1jb250cm9sLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXG4gIGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRpc2FibGVkLFxuXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgLyogQmFja2dyb3VuZHMgYW5kIGJvcmRlcnMgLSBiYXNpYywgYWx0ZXJuYXRpdmUgYW5kIHByaW1hcnkgICovXG5cbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG5cbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcblxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLXByaW1hcnktNTAwLFxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0zOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLXByaW1hcnktODAwLFxuXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLWJhc2ljLTUwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMjogY29sb3ItYmFzaWMtNjAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci0zOiBjb2xvci1iYXNpYy03MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItNTogY29sb3ItYmFzaWMtOTAwLFxuXG4gIC8qIFRleHQgY29sb3JzIC0gZ2VuZXJhbCBhbmQgc3RhdHVzICovXG5cbiAgdGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1kaXNhYmxlZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICB0ZXh0LWhpbnQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcblxuICB0ZXh0LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0ZXh0LXByaW1hcnktaG92ZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxuXG4gIHRleHQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0ZXh0LXN1Y2Nlc3MtZm9jdXMtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRleHQtc3VjY2Vzcy1ob3Zlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdGV4dC1zdWNjZXNzLWFjdGl2ZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG5cbiAgdGV4dC1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRleHQtaW5mby1mb2N1cy1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdGV4dC1pbmZvLWhvdmVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcblxuICB0ZXh0LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdGV4dC13YXJuaW5nLWZvY3VzLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0ZXh0LXdhcm5pbmctaG92ZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRleHQtd2FybmluZy1hY3RpdmUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxuXG4gIHRleHQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdGV4dC1kYW5nZXItZm9jdXMtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgdGV4dC1kYW5nZXItaG92ZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICB0ZXh0LWRhbmdlci1kaXNhYmxlZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcblxuICAvKiBGb250cyBhbmQgdGV4dCBzdHlsZXMgLSBoZWFkaW5ncywgc3VidGl0bGVzLCBwYXJhZ3JhcGhzLCBjYXB0aW9ucywgYnV0dG9uICovXG5cbiAgZm9udC1mYW1pbHktcHJpbWFyeTogdW5xdW90ZSgnT3BlbiBTYW5zLCBzYW5zLXNlcmlmJyksXG4gIGZvbnQtZmFtaWx5LXNlY29uZGFyeTogZm9udC1mYW1pbHktcHJpbWFyeSxcblxuICB0ZXh0LWhlYWRpbmctMS1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMS1mb250LXNpemU6IDIuMjVyZW0sXG4gIHRleHQtaGVhZGluZy0xLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy0xLWxpbmUtaGVpZ2h0OiAzcmVtLFxuXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtc2l6ZTogMnJlbSxcbiAgdGV4dC1oZWFkaW5nLTItZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTItbGluZS1oZWlnaHQ6IDIuNXJlbSxcblxuICB0ZXh0LWhlYWRpbmctMy1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMy1mb250LXNpemU6IDEuODc1cmVtLFxuICB0ZXh0LWhlYWRpbmctMy1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctMy1saW5lLWhlaWdodDogMi41cmVtLFxuXG4gIHRleHQtaGVhZGluZy00LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy00LWZvbnQtc2l6ZTogMS42MjVyZW0sXG4gIHRleHQtaGVhZGluZy00LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy00LWxpbmUtaGVpZ2h0OiAycmVtLFxuXG4gIHRleHQtaGVhZGluZy01LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy01LWZvbnQtc2l6ZTogMS4zNzVyZW0sXG4gIHRleHQtaGVhZGluZy01LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy01LWxpbmUtaGVpZ2h0OiAycmVtLFxuXG4gIHRleHQtaGVhZGluZy02LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZTogMS4xMjVyZW0sXG4gIHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1zdWJ0aXRsZS1mb250LXNpemU6IDAuOTM3NXJlbSxcbiAgdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplOiAwLjgxMjVyZW0sXG4gIHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplOiAwLjkzNzVyZW0sXG4gIHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0OiAxLjI1cmVtLFxuXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplOiAwLjgxMjVyZW0sXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQ6IDQwMCxcbiAgdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodDogMS4xMjVyZW0sXG5cbiAgdGV4dC1sYWJlbC1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1sYWJlbC1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtbGFiZWwtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1sYWJlbC1saW5lLWhlaWdodDogMXJlbSxcblxuICB0ZXh0LWNhcHRpb24tZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtY2FwdGlvbi1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtY2FwdGlvbi1mb250LXdlaWdodDogNDAwLFxuICB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1jYXB0aW9uLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQ6IDYwMCxcbiAgdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1idXR0b24tZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplOiAwLjYyNXJlbSxcbiAgdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodDogMC43NXJlbSxcbiAgdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodDogMXJlbSxcbiAgdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodDogMXJlbSxcbiAgdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplOiAxcmVtLFxuICB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodDogMS4yNXJlbSxcbiAgdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplOiAxLjEyNXJlbSxcbiAgdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICAvKiBTdXBwb3J0aW5nIHZhcmlhYmxlcyAtIGJvcmRlciByYWRpdXMsIG91dGxpbmUsIHNoYWRvdywgZGl2aWRlciAqL1xuXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXG5cbiAgb3V0bGluZS13aWR0aDogMC4zNzVyZW0sXG4gIG91dGxpbmUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcblxuICBzY3JvbGxiYXItY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItNCxcbiAgc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2Nyb2xsYmFyLXdpZHRoOiAwLjMxMjVyZW0sXG5cbiAgc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSg0NCwgNTEsIDczLCAwLjEpLFxuXG4gIGRpdmlkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBkaXZpZGVyLXN0eWxlOiBzb2xpZCxcbiAgZGl2aWRlci13aWR0aDogMXB4LFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbiR0aGVtZTogKFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG5cbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcblxuICB0ZXh0LWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtYWx0ZXJuYXRlLWNvbG9yOiBjb2xvci1iYXNpYy05MDAsXG4gIHRleHQtZGlzYWJsZWQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBzaGFkb3c6IDAgMC41cmVtIDFyZW0gMCAjMWExZjMzLFxuICBvdXRsaW5lLWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4pO1xuXG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgZGFyaywgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RhcmsnO1xuXG4kdGhlbWU6IChcblxuICBjb2xvci1wcmltYXJ5LTEwMDogI2ZhZjdmZixcbiAgY29sb3ItcHJpbWFyeS0yMDA6ICNlY2UzZmYsXG4gIGNvbG9yLXByaW1hcnktMzAwOiAjZDViZmZmLFxuICBjb2xvci1wcmltYXJ5LTQwMDogI2IxOGFmZixcbiAgY29sb3ItcHJpbWFyeS01MDA6ICNhMTZlZmYsXG4gIGNvbG9yLXByaW1hcnktNjAwOiAjN2I1MWRiLFxuICBjb2xvci1wcmltYXJ5LTcwMDogIzVhMzdiOCxcbiAgY29sb3ItcHJpbWFyeS04MDA6ICMzZTI0OTQsXG4gIGNvbG9yLXByaW1hcnktOTAwOiAjMjkxNTdhLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMDgpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjE2KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4yNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMzIpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjQ4KSxcblxuICBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsXG4gIGNvbG9yLWJhc2ljLTIwMDogI2Y3ZjdmYyxcbiAgY29sb3ItYmFzaWMtMzAwOiAjZjBmMGZhLFxuICBjb2xvci1iYXNpYy00MDA6ICNlMWUxZjIsXG4gIGNvbG9yLWJhc2ljLTUwMDogI2NlY2VlYixcbiAgY29sb3ItYmFzaWMtNjAwOiAjYjRiNGRiLFxuICBjb2xvci1iYXNpYy03MDA6ICM2YTZhOTQsXG4gIGNvbG9yLWJhc2ljLTgwMDogIzMyMzI1OSxcbiAgY29sb3ItYmFzaWMtOTAwOiAjMjUyNTQ3LFxuICBjb2xvci1iYXNpYy0xMDAwOiAjMWIxYjM4LFxuICBjb2xvci1iYXNpYy0xMTAwOiAjMTMxMzJiLFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMTYpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjQ4KSxcbik7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29zbWljLCBkYXJrKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbiR0aGVtZTogKFxuICBib3JkZXItcmFkaXVzOiAwLjE3cmVtLFxuICBzaGFkb3c6IG5vbmUsXG5cbiAgYnV0dG9uLWhlcm8tZ2xvdy1zaXplOiAwIDAgMjBweCAwLFxuXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcblxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIHRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXByaW1hcnktNTAwLFxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG5cbiAgcG9wb3Zlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgcG9wb3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIHRhYnNldC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICByb3V0ZS10YWJzZXQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdXNlci1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2hlY2tib3gtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgbW9kYWwtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcblxuICB0YWJzZXQtc2hhZG93OiBub25lLFxuICByb3V0ZS10YWJzZXQtc2hhZG93OiBub25lLFxuICBidXR0b24taGVyby1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LXNoYWRvdzogbm9uZSxcbiAgYWNjb3JkaW9uLXNoYWRvdzogbm9uZSxcbik7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29ycG9yYXRlLCBkZWZhdWx0KTtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL0B0aGVtZS9zdHlsZXMvdGhlbWVzJztcblxuQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gIG5neC1kMy1iYXIsXG4gIG5neC1kMy1waWUsXG4gIG5neC1kMy1hZHZhbmNlZC1waWUsXG4gIG5neC1kMy1hcmVhLXN0YWNrLFxuICBuZ3gtZDMtbGluZSxcbiAgbmd4LWQzLXBvbGFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IG5iLXRoZW1lKGNhcmQtaGVpZ2h0LW1lZGl1bSk7XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgLnBpZS1sYWJlbCB7XG4gICAgICAgIGZpbGw6IG5iLXRoZW1lKHRleHQtYmFzaWMtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0IHtcbiAgICAgICAgZmlsbDogbmItdGhlbWUodGV4dC1oaW50LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmNoYXJ0LWxlZ2VuZCB7XG4gICAgICAgIC5sZWdlbmQtbGFiZWxzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIpO1xuICAgICAgICB9XG4gICAgICAgIC5sZWdlbmQtbGFiZWwge1xuICAgICAgICAgIGNvbG9yOiBuYi10aGVtZSh0ZXh0LWhpbnQtY29sb3IpO1xuICAgICAgICAgIC5hY3RpdmUgLmxlZ2VuZC1sYWJlbC10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiBuYi10aGVtZSh0ZXh0LWJhc2ljLWNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRvdGFsLXZhbHVlLFxuICAgICAgLml0ZW0tdmFsdWUsXG4gICAgICAuaXRlbS1wZXJjZW50IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICB9XG5cbiAgICAgIC5sZWdlbmQtaXRlbXMge1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    25922:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/charts/echarts/echarts-area-stack.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EchartsAreaStackComponent": function EchartsAreaStackComponent() {
          return (
            /* binding */
            _EchartsAreaStackComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-echarts */
      93104);

      var _EchartsAreaStackComponent = /*#__PURE__*/function () {
        function _EchartsAreaStackComponent(theme) {
          _classCallCheck(this, _EchartsAreaStackComponent);

          this.theme = theme;
          this.options = {};
        }

        _createClass(_EchartsAreaStackComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this13 = this;

            this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
              var colors = config.variables;
              var echarts = config.variables.echarts;
              _this13.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'cross',
                    label: {
                      backgroundColor: echarts.tooltipBackgroundColor
                    }
                  }
                },
                legend: {
                  data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
                  textStyle: {
                    color: echarts.textColor
                  }
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                xAxis: [{
                  type: 'category',
                  boundaryGap: false,
                  data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  axisTick: {
                    alignWithLabel: true
                  },
                  axisLine: {
                    lineStyle: {
                      color: echarts.axisLineColor
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  }
                }],
                yAxis: [{
                  type: 'value',
                  axisLine: {
                    lineStyle: {
                      color: echarts.axisLineColor
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: echarts.splitLineColor
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  }
                }],
                series: [{
                  name: 'Mail marketing',
                  type: 'line',
                  stack: 'Total amount',
                  areaStyle: {
                    normal: {
                      opacity: echarts.areaOpacity
                    }
                  },
                  data: [120, 132, 101, 134, 90, 230, 210]
                }, {
                  name: 'Affiliate advertising',
                  type: 'line',
                  stack: 'Total amount',
                  areaStyle: {
                    normal: {
                      opacity: echarts.areaOpacity
                    }
                  },
                  data: [220, 182, 191, 234, 290, 330, 310]
                }, {
                  name: 'Video ad',
                  type: 'line',
                  stack: 'Total amount',
                  areaStyle: {
                    normal: {
                      opacity: echarts.areaOpacity
                    }
                  },
                  data: [150, 232, 201, 154, 190, 330, 410]
                }, {
                  name: 'Direct interview',
                  type: 'line',
                  stack: 'Total amount',
                  areaStyle: {
                    normal: {
                      opacity: echarts.areaOpacity
                    }
                  },
                  data: [320, 332, 301, 334, 390, 330, 320]
                }, {
                  name: 'Search engine',
                  type: 'line',
                  stack: 'Total amount',
                  label: {
                    normal: {
                      show: true,
                      position: 'top',
                      textStyle: {
                        color: echarts.textColor
                      }
                    }
                  },
                  areaStyle: {
                    normal: {
                      opacity: echarts.areaOpacity
                    }
                  },
                  data: [820, 932, 901, 934, 1290, 1330, 1320]
                }]
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _EchartsAreaStackComponent;
      }();

      _EchartsAreaStackComponent.ɵfac = function EchartsAreaStackComponent_Factory(t) {
        return new (t || _EchartsAreaStackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _EchartsAreaStackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EchartsAreaStackComponent,
        selectors: [["ngx-echarts-area-stack"]],
        decls: 1,
        vars: 1,
        consts: [["echarts", "", 1, "echart", 3, "options"]],
        template: function EchartsAreaStackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
          }
        },
        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    82019:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/charts/echarts/echarts-bar-animation.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EchartsBarAnimationComponent": function EchartsBarAnimationComponent() {
          return (
            /* binding */
            _EchartsBarAnimationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-echarts */
      93104);

      var _EchartsBarAnimationComponent = /*#__PURE__*/function () {
        function _EchartsBarAnimationComponent(theme) {
          _classCallCheck(this, _EchartsBarAnimationComponent);

          this.theme = theme;
          this.options = {};
        }

        _createClass(_EchartsBarAnimationComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this14 = this;

            this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
              var xAxisData = [];
              var data1 = [];
              var data2 = [];
              var colors = config.variables;
              var echarts = config.variables.echarts;
              _this14.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight, colors.infoLight],
                legend: {
                  data: ['bar', 'bar2'],
                  align: 'left',
                  textStyle: {
                    color: echarts.textColor
                  }
                },
                xAxis: [{
                  data: xAxisData,
                  silent: false,
                  axisTick: {
                    alignWithLabel: true
                  },
                  axisLine: {
                    lineStyle: {
                      color: echarts.axisLineColor
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  }
                }],
                yAxis: [{
                  axisLine: {
                    lineStyle: {
                      color: echarts.axisLineColor
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: echarts.splitLineColor
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  }
                }],
                series: [{
                  name: 'bar',
                  type: 'bar',
                  data: data1,
                  animationDelay: function animationDelay(idx) {
                    return idx * 10;
                  }
                }, {
                  name: 'bar2',
                  type: 'bar',
                  data: data2,
                  animationDelay: function animationDelay(idx) {
                    return idx * 10 + 100;
                  }
                }],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function animationDelayUpdate(idx) {
                  return idx * 5;
                }
              };

              for (var i = 0; i < 100; i++) {
                xAxisData.push('Category ' + i);
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _EchartsBarAnimationComponent;
      }();

      _EchartsBarAnimationComponent.ɵfac = function EchartsBarAnimationComponent_Factory(t) {
        return new (t || _EchartsBarAnimationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _EchartsBarAnimationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EchartsBarAnimationComponent,
        selectors: [["ngx-echarts-bar-animation"]],
        decls: 1,
        vars: 1,
        consts: [["echarts", "", 1, "echart", 3, "options"]],
        template: function EchartsBarAnimationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
          }
        },
        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    99401:
    /*!***************************************************************!*\
      !*** ./src/app/pages/charts/echarts/echarts-bar.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EchartsBarComponent": function EchartsBarComponent() {
          return (
            /* binding */
            _EchartsBarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-echarts */
      93104);

      var _EchartsBarComponent = /*#__PURE__*/function () {
        function _EchartsBarComponent(theme) {
          _classCallCheck(this, _EchartsBarComponent);

          this.theme = theme;
          this.options = {};
        }

        _createClass(_EchartsBarComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this15 = this;

            this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
              var colors = config.variables;
              var echarts = config.variables.echarts;
              _this15.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight],
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'shadow'
                  }
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                xAxis: [{
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  axisTick: {
                    alignWithLabel: true
                  },
                  axisLine: {
                    lineStyle: {
                      color: echarts.axisLineColor
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  }
                }],
                yAxis: [{
                  type: 'value',
                  axisLine: {
                    lineStyle: {
                      color: echarts.axisLineColor
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: echarts.splitLineColor
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  }
                }],
                series: [{
                  name: 'Score',
                  type: 'bar',
                  barWidth: '60%',
                  data: [10, 52, 200, 334, 390, 330, 220]
                }]
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _EchartsBarComponent;
      }();

      _EchartsBarComponent.ɵfac = function EchartsBarComponent_Factory(t) {
        return new (t || _EchartsBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _EchartsBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EchartsBarComponent,
        selectors: [["ngx-echarts-bar"]],
        decls: 1,
        vars: 1,
        consts: [["echarts", "", 1, "echart", 3, "options"]],
        template: function EchartsBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
          }
        },
        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    48625:
    /*!****************************************************************!*\
      !*** ./src/app/pages/charts/echarts/echarts-line.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EchartsLineComponent": function EchartsLineComponent() {
          return (
            /* binding */
            _EchartsLineComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-echarts */
      93104);

      var _EchartsLineComponent = /*#__PURE__*/function () {
        function _EchartsLineComponent(theme) {
          _classCallCheck(this, _EchartsLineComponent);

          this.theme = theme;
          this.options = {};
        }

        _createClass(_EchartsLineComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this16 = this;

            this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
              var colors = config.variables;
              var echarts = config.variables.echarts;
              _this16.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.primary, colors.info],
                tooltip: {
                  trigger: 'item',
                  formatter: '{a} <br/>{b} : {c}'
                },
                legend: {
                  left: 'left',
                  data: ['Line 1', 'Line 2', 'Line 3'],
                  textStyle: {
                    color: echarts.textColor
                  }
                },
                xAxis: [{
                  type: 'category',
                  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                  axisTick: {
                    alignWithLabel: true
                  },
                  axisLine: {
                    lineStyle: {
                      color: echarts.axisLineColor
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  }
                }],
                yAxis: [{
                  type: 'log',
                  axisLine: {
                    lineStyle: {
                      color: echarts.axisLineColor
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: echarts.splitLineColor
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  }
                }],
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                series: [{
                  name: 'Line 1',
                  type: 'line',
                  data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
                }, {
                  name: 'Line 2',
                  type: 'line',
                  data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
                }, {
                  name: 'Line 3',
                  type: 'line',
                  data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
                }]
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _EchartsLineComponent;
      }();

      _EchartsLineComponent.ɵfac = function EchartsLineComponent_Factory(t) {
        return new (t || _EchartsLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _EchartsLineComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EchartsLineComponent,
        selectors: [["ngx-echarts-line"]],
        decls: 1,
        vars: 1,
        consts: [["echarts", "", 1, "echart", 3, "options"]],
        template: function EchartsLineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
          }
        },
        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    4581:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EchartsMultipleXaxisComponent": function EchartsMultipleXaxisComponent() {
          return (
            /* binding */
            _EchartsMultipleXaxisComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-echarts */
      93104);

      var _EchartsMultipleXaxisComponent = /*#__PURE__*/function () {
        function _EchartsMultipleXaxisComponent(theme) {
          _classCallCheck(this, _EchartsMultipleXaxisComponent);

          this.theme = theme;
          this.options = {};
        }

        _createClass(_EchartsMultipleXaxisComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this17 = this;

            this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
              var colors = config.variables;
              var echarts = config.variables.echarts;
              _this17.options = {
                backgroundColor: echarts.bg,
                color: [colors.success, colors.info],
                tooltip: {
                  trigger: 'none',
                  axisPointer: {
                    type: 'cross'
                  }
                },
                legend: {
                  data: ['2015 Precipitation', '2016 Precipitation'],
                  textStyle: {
                    color: echarts.textColor
                  }
                },
                grid: {
                  top: 70,
                  bottom: 50
                },
                xAxis: [{
                  type: 'category',
                  axisTick: {
                    alignWithLabel: true
                  },
                  axisLine: {
                    onZero: false,
                    lineStyle: {
                      color: colors.info
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  },
                  axisPointer: {
                    label: {
                      formatter: function formatter(params) {
                        return 'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                      }
                    }
                  },
                  data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
                }, {
                  type: 'category',
                  axisTick: {
                    alignWithLabel: true
                  },
                  axisLine: {
                    onZero: false,
                    lineStyle: {
                      color: colors.success
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  },
                  axisPointer: {
                    label: {
                      formatter: function formatter(params) {
                        return 'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                      }
                    }
                  },
                  data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
                }],
                yAxis: [{
                  type: 'value',
                  axisLine: {
                    lineStyle: {
                      color: echarts.axisLineColor
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: echarts.splitLineColor
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  }
                }],
                series: [{
                  name: '2015 Precipitation',
                  type: 'line',
                  xAxisIndex: 1,
                  smooth: true,
                  data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                }, {
                  name: '2016 Precipitation',
                  type: 'line',
                  smooth: true,
                  data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                }]
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _EchartsMultipleXaxisComponent;
      }();

      _EchartsMultipleXaxisComponent.ɵfac = function EchartsMultipleXaxisComponent_Factory(t) {
        return new (t || _EchartsMultipleXaxisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _EchartsMultipleXaxisComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EchartsMultipleXaxisComponent,
        selectors: [["ngx-echarts-multiple-xaxis"]],
        decls: 1,
        vars: 1,
        consts: [["echarts", "", 1, "echart", 3, "options"]],
        template: function EchartsMultipleXaxisComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
          }
        },
        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    43771:
    /*!***************************************************************!*\
      !*** ./src/app/pages/charts/echarts/echarts-pie.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EchartsPieComponent": function EchartsPieComponent() {
          return (
            /* binding */
            _EchartsPieComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-echarts */
      93104);

      var _EchartsPieComponent = /*#__PURE__*/function () {
        function _EchartsPieComponent(theme) {
          _classCallCheck(this, _EchartsPieComponent);

          this.theme = theme;
          this.options = {};
        }

        _createClass(_EchartsPieComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this18 = this;

            this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
              var colors = config.variables;
              var echarts = config.variables.echarts;
              _this18.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                  trigger: 'item',
                  formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                  orient: 'vertical',
                  left: 'left',
                  data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
                  textStyle: {
                    color: echarts.textColor
                  }
                },
                series: [{
                  name: 'Countries',
                  type: 'pie',
                  radius: '80%',
                  center: ['50%', '50%'],
                  data: [{
                    value: 335,
                    name: 'Germany'
                  }, {
                    value: 310,
                    name: 'France'
                  }, {
                    value: 234,
                    name: 'Canada'
                  }, {
                    value: 135,
                    name: 'Russia'
                  }, {
                    value: 1548,
                    name: 'USA'
                  }],
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: echarts.itemHoverShadowColor
                    }
                  },
                  label: {
                    normal: {
                      textStyle: {
                        color: echarts.textColor
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      lineStyle: {
                        color: echarts.axisLineColor
                      }
                    }
                  }
                }]
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _EchartsPieComponent;
      }();

      _EchartsPieComponent.ɵfac = function EchartsPieComponent_Factory(t) {
        return new (t || _EchartsPieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _EchartsPieComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EchartsPieComponent,
        selectors: [["ngx-echarts-pie"]],
        decls: 1,
        vars: 1,
        consts: [["echarts", "", 1, "echart", 3, "options"]],
        template: function EchartsPieComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
          }
        },
        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    97685:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/charts/echarts/echarts-radar.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EchartsRadarComponent": function EchartsRadarComponent() {
          return (
            /* binding */
            _EchartsRadarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-echarts */
      93104);

      var _EchartsRadarComponent = /*#__PURE__*/function () {
        function _EchartsRadarComponent(theme) {
          _classCallCheck(this, _EchartsRadarComponent);

          this.theme = theme;
          this.options = {};
        }

        _createClass(_EchartsRadarComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this19 = this;

            this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
              var colors = config.variables;
              var echarts = config.variables.echarts;
              _this19.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.warning],
                tooltip: {},
                legend: {
                  data: ['Allocated Budget', 'Actual Spending'],
                  textStyle: {
                    color: echarts.textColor
                  }
                },
                radar: {
                  name: {
                    textStyle: {
                      color: echarts.textColor
                    }
                  },
                  indicator: [{
                    name: 'Sales',
                    max: 6500
                  }, {
                    name: 'Administration',
                    max: 16000
                  }, {
                    name: 'Information Techology',
                    max: 30000
                  }, {
                    name: 'Customer Support',
                    max: 38000
                  }, {
                    name: 'Development',
                    max: 52000
                  }, {
                    name: 'Marketing',
                    max: 25000
                  }],
                  splitArea: {
                    areaStyle: {
                      color: 'transparent'
                    }
                  }
                },
                series: [{
                  name: 'Budget vs Spending',
                  type: 'radar',
                  data: [{
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: 'Allocated Budget'
                  }, {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: 'Actual Spending'
                  }]
                }]
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.themeSubscription.unsubscribe();
          }
        }]);

        return _EchartsRadarComponent;
      }();

      _EchartsRadarComponent.ɵfac = function EchartsRadarComponent_Factory(t) {
        return new (t || _EchartsRadarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbThemeService));
      };

      _EchartsRadarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EchartsRadarComponent,
        selectors: [["ngx-echarts-radar"]],
        decls: 1,
        vars: 1,
        consts: [["echarts", "", 1, "echart", 3, "options"]],
        template: function EchartsRadarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
          }
        },
        directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["ɵa"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    1241:
    /*!***********************************************************!*\
      !*** ./src/app/pages/charts/echarts/echarts.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EchartsComponent": function EchartsComponent() {
          return (
            /* binding */
            _EchartsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _echarts_pie_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./echarts-pie.component */
      43771);
      /* harmony import */


      var _echarts_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./echarts-bar.component */
      99401);
      /* harmony import */


      var _echarts_line_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./echarts-line.component */
      48625);
      /* harmony import */


      var _echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./echarts-multiple-xaxis.component */
      4581);
      /* harmony import */


      var _echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./echarts-area-stack.component */
      25922);
      /* harmony import */


      var _echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./echarts-bar-animation.component */
      82019);
      /* harmony import */


      var _echarts_radar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./echarts-radar.component */
      97685);

      var _EchartsComponent = function _EchartsComponent() {
        _classCallCheck(this, _EchartsComponent);
      };

      _EchartsComponent.ɵfac = function EchartsComponent_Factory(t) {
        return new (t || _EchartsComponent)();
      };

      _EchartsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _EchartsComponent,
        selectors: [["ngx-echarts"]],
        decls: 43,
        vars: 0,
        consts: [[1, "row"], [1, "col-lg-6"]],
        template: function EchartsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Pie");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ngx-echarts-pie");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ngx-echarts-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Line");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "ngx-echarts-line");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Multiple x-axis");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "ngx-echarts-multiple-xaxis");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Area Stack");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "ngx-echarts-area-stack");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Bar Animation");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "ngx-echarts-bar-animation");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Radar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "ngx-echarts-radar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _echarts_pie_component__WEBPACK_IMPORTED_MODULE_0__.EchartsPieComponent, _echarts_bar_component__WEBPACK_IMPORTED_MODULE_1__.EchartsBarComponent, _echarts_line_component__WEBPACK_IMPORTED_MODULE_2__.EchartsLineComponent, _echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_3__.EchartsMultipleXaxisComponent, _echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_4__.EchartsAreaStackComponent, _echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_5__.EchartsBarAnimationComponent, _echarts_radar_component__WEBPACK_IMPORTED_MODULE_6__.EchartsRadarComponent],
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_charts_charts_module_ts-es5.js.map