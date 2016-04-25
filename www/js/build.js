/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _connector = __webpack_require__(2);
	
	var _connector2 = _interopRequireDefault(_connector);
	
	var _factory = __webpack_require__(3);
	
	var _factory2 = _interopRequireDefault(_factory);
	
	var _DOMManipulator = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
			function Controller() {
					_classCallCheck(this, Controller);
	
					_DOMManipulator.DOM.get("sections-button").click(this.sectionsButtonClickHandler);
					_DOMManipulator.DOM.get("github-button").click(this.githubButtonClickHandler);
	
					var preloader = document.querySelector("#preloader");
	
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;
	
					try {
							for (var _iterator = _config2.default.sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									var section = _step.value;
	
	
									var element = _DOMManipulator.DOM.create("li").setHTML(section).click(this.sectionsMenuItemClickHandler).getElement();
	
									_DOMManipulator.DOM.get("sections-menu-items").append(element);
							}
					} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
					} finally {
							try {
									if (!_iteratorNormalCompletion && _iterator.return) {
											_iterator.return();
									}
							} finally {
									if (_didIteratorError) {
											throw _iteratorError;
									}
							}
					}
	
					preloader.style.display = "block";
	
					_connector2.default.sendRequestToServer("home", Controller.updateDataOnPage);
			}
	
			_createClass(Controller, [{
					key: 'sectionsButtonClickHandler',
					value: function sectionsButtonClickHandler() {
	
							var sectionsMenu = _DOMManipulator.DOM.get("sections-menu");
	
							if ("hide" === sectionsMenu.getClass()) {
									sectionsMenu.setClass("show");
							} else {
									sectionsMenu.setClass("hide");
							}
					}
			}, {
					key: 'githubButtonClickHandler',
					value: function githubButtonClickHandler() {
							location.href = _config2.default.GitHubReference;
					}
			}, {
					key: 'sectionsMenuItemClickHandler',
					value: function sectionsMenuItemClickHandler() {
	
							_DOMManipulator.DOM.get("sections-menu").setClass("hide");
	
							_DOMManipulator.DOM.get("left-list").hide();
							_DOMManipulator.DOM.get("right-list").hide();
							_DOMManipulator.DOM.get("section-name").hide();
	
							var preloader = document.querySelector("#preloader");
	
							preloader.style.display = "block";
	
							_connector2.default.sendRequestToServer(_DOMManipulator.DOM.getHTML(this), Controller.updateDataOnPage);
					}
			}], [{
					key: 'updateDataOnPage',
					value: function updateDataOnPage(data) {
	
							_DOMManipulator.DOM.get("left-list").clear();
							_DOMManipulator.DOM.get("right-list").clear();
							_DOMManipulator.DOM.get("section-name").clear().setHTML(data.section.charAt(0).toUpperCase() + data.section.slice(1));
	
							var preloader = document.querySelector("#preloader");
	
							for (var i = 0; i < data.results.length; ++i) {
									if (i % 2 === 0) {
											_DOMManipulator.DOM.get("left-list").appendHTML(_factory2.default.createNote(data.results[i], i < 4 ? "main" : "list"));
									} else {
											_DOMManipulator.DOM.get("right-list").appendHTML(_factory2.default.createNote(data.results[i], i < 4 ? "main" : "list"));
									}
							}
	
							preloader.style.display = "none";
	
							_DOMManipulator.DOM.get("left-list").show();
							_DOMManipulator.DOM.get("right-list").show();
							_DOMManipulator.DOM.get("section-name").show();
					}
			}]);
	
			return Controller;
	}();
	
	window.onload = function () {
			var _instance = new Controller();
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		'APIkey': 'b5171c0f6676d74da6cb99f7ccfc6aaa:0:75059933',
		'sections': ['Home', 'World', 'National', 'Politics', 'Nyregion', 'Business', 'Opinion', 'Technology', 'Science', 'Health', 'Sports', 'Arts', 'Fashion', 'Dining', 'Travel', 'Magazine', 'Realestate'],
		'GitHubReference': 'https://github.com/ZamNick/epam.test.project'
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Connector = function () {
		function Connector() {
			_classCallCheck(this, Connector);
		}
	
		_createClass(Connector, null, [{
			key: 'sendRequestToServer',
			value: function sendRequestToServer(sectionName, callback) {
	
				sectionName = sectionName || "home";
	
				sectionName = sectionName.toLowerCase();
	
				var url = 'http://api.nytimes.com/svc/topstories/v1/' + sectionName + '.json?api-key=' + _config2.default.APIkey;
	
				var options = {
					method: 'GET',
					headers: {
						'Content-Type': 'text/plain'
					},
					mode: 'cors'
				};
	
				fetch(url, options).then(function (response) {
					if (response.status >= 200 && response.status < 300) {
						return response;
					} else {
	
						var error = new Error(response.statusText);
						error.response = response;
						throw error;
					}
				}).then(function (response) {
					return response.json();
				}).then(function (data) {
					callback(data);
				}).catch(function (error) {
					console.error("Request failed: " + error);
				});
			}
		}]);
	
		return Connector;
	}();
	
	exports.default = Connector;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _note = __webpack_require__(4);
	
	var _note2 = _interopRequireDefault(_note);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Factory = function () {
		function Factory() {
			_classCallCheck(this, Factory);
		}
	
		_createClass(Factory, null, [{
			key: 'createNote',
			value: function createNote(data, type) {
				if ("main" === type) {
					return _note2.default.getMainNote(data);
				} else if ("list" === type) {
					return _note2.default.getListNote(data);
				} else {
					throw new Error("Unknow type of note.");
				}
			}
		}]);
	
		return Factory;
	}();
	
	exports.default = Factory;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Note = function () {
		function Note() {
			_classCallCheck(this, Note);
		}
	
		_createClass(Note, null, [{
			key: "getMainNote",
			value: function getMainNote(data) {
	
				var img = "" !== data.multimedia ? "<div class=\"main-note-wrapper-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"" + ("" === data.multimedia ? "" : data.multimedia[3].url) + "\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>" : "";
	
				var note = "<div class=\"main-note\">\n\t\t\t\t\t\t<h2><a href=\"" + data.url + "\">" + data.title + "</a></h2>\n\t\t\t\t\t\t<div class=\"byline\">" + data.byline + "</div>\n\t\t\t\t\t\t" + img + "\n\t\t\t\t\t\t<div class=\"credit\">" + ("" === data.multimedia ? "" : data.multimedia[3].copyright) + "</div>\n\t\t\t\t\t\t<div class=\"abstract\">" + data.abstract + "</div>\n\t\t\t\t\t</div>";
	
				return note;
			}
		}, {
			key: "getListNote",
			value: function getListNote(data) {
	
				var note = "<div class=\"list-note\">\n\t\t\t\t\t\t<img src=\"" + ("" === data.multimedia ? "" : data.multimedia[0].url) + "\">\n\t\t\t\t\t\t<div class=\"headline\">\n\t\t\t\t\t\t\t<h3><a href=\"" + data.url + "\">" + data.title + "</a></h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"byline\">" + data.byline + "</div>\n\t\t\t\t\t\t<div class=\"abstract\">" + data.abstract + "</div>\n\t\t\t\t\t</div>";
	
				return note;
			}
		}]);
	
		return Note;
	}();
	
	exports.default = Note;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var DOMManipulator = function () {
	
		var _currentElement = void 0;
	
		return {
			get: function get(id) {
				_currentElement = document.getElementById(id);
				return this;
			},
	
			getElement: function getElement() {
				return _currentElement;
			},
	
			click: function click(handler) {
				_currentElement.addEventListener('click', handler, false);
				return this;
			},
	
			create: function create(tagname) {
				_currentElement = document.createElement(tagname);
				return this;
			},
	
			clear: function clear() {
				while (_currentElement.firstChild) {
					_currentElement.removeChild(_currentElement.firstChild);
				}
				return this;
			},
	
			getClass: function getClass() {
				return _currentElement.className;
			},
	
			setClass: function setClass(classname) {
				_currentElement.className = classname;
				return this;
			},
	
			setHTML: function setHTML(html) {
				_currentElement.innerHTML = html;
				return this;
			},
	
			getHTML: function getHTML(element) {
				return element.innerHTML;
			},
	
			appendHTML: function appendHTML(html) {
				_currentElement.innerHTML += html;
				return this;
			},
	
			show: function show() {
				if ("list-of-notes" === _currentElement.className) {
					_currentElement.style.display = "inline-block";
				} else {
					_currentElement.style.display = "block";
				}
				return this;
			},
	
			hide: function hide() {
				_currentElement.style.display = "none";
				return this;
			},
	
			append: function append(child) {
				_currentElement.appendChild(child);
				return this;
			}
		};
	}();
	
	exports.DOM = DOMManipulator;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2M4YTM0MzM1MmM4YTVlNzQ3OWMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ET01NYW5pcHVsYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7S0FFTSxVO0FBRUwseUJBQWM7QUFBQTs7QUFFYix5QkFBSSxHQUFKLENBQVEsaUJBQVIsRUFBMkIsS0FBM0IsQ0FBaUMsS0FBSywwQkFBdEM7QUFDQSx5QkFBSSxHQUFKLENBQVEsZUFBUixFQUF5QixLQUF6QixDQUErQixLQUFLLHdCQUFwQzs7QUFFQSxTQUFJLFlBQVksU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQWhCOztBQUxhO0FBQUE7QUFBQTs7QUFBQTtBQU9iLDRCQUFtQixpQkFBTyxRQUExQiw4SEFBb0M7QUFBQSxhQUE1QixPQUE0Qjs7O0FBRW5DLGFBQUksVUFBVSxvQkFDVCxNQURTLENBQ0YsSUFERSxFQUVULE9BRlMsQ0FFRCxPQUZDLEVBR1QsS0FIUyxDQUdILEtBQUssNEJBSEYsRUFJVCxVQUpTLEVBQWQ7O0FBTUEsNkJBQUksR0FBSixDQUFRLHFCQUFSLEVBQStCLE1BQS9CLENBQXNDLE9BQXRDO0FBQ0E7QUFoQlk7QUFBQTtBQUFBO0FBQUE7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T0FBaEM7QUFDQTtBQUNELFdBQU8sSUFBUDtBQUNBLElBekRLOztBQTJETixTQUFNLGdCQUFXO0FBQ2hCLG9CQUFnQixLQUFoQixDQUFzQixPQUF0QixHQUFnQyxNQUFoQztBQUNBLFdBQU8sSUFBUDtBQUNBLElBOURLOztBQWdFTixXQUFRLGdCQUFTLEtBQVQsRUFBZ0I7QUFDdkIsb0JBQWdCLFdBQWhCLENBQTRCLEtBQTVCO0FBQ0EsV0FBTyxJQUFQO0FBQ0E7QUFuRUssR0FBUDtBQXNFQSxFQTFFb0IsRUFBckI7O1NBNEUyQixHLEdBQWxCLGMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDdjOGEzNDMzNTJjOGE1ZTc0NzljXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBDb25uZWN0b3IgZnJvbSAnLi9jb25uZWN0b3IuanMnO1xyXG5pbXBvcnQgRmFjdG9yeSBmcm9tICcuL2ZhY3RvcnkuanMnO1xyXG5pbXBvcnQgeyBET00gfSBmcm9tICcuL0RPTU1hbmlwdWxhdG9yLmpzJztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtYnV0dG9uXCIpLmNsaWNrKHRoaXMuc2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cdFx0RE9NLmdldChcImdpdGh1Yi1idXR0b25cIikuY2xpY2sodGhpcy5naXRodWJCdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cclxuXHRcdGxldCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKTtcclxuXHJcblx0XHRmb3IobGV0IHNlY3Rpb24gb2YgY29uZmlnLnNlY3Rpb25zKSB7XHJcblxyXG5cdFx0XHRsZXQgZWxlbWVudCA9IERPTVxyXG5cdFx0XHRcdFx0XHRcdC5jcmVhdGUoXCJsaVwiKVxyXG5cdFx0XHRcdFx0XHRcdC5zZXRIVE1MKHNlY3Rpb24pXHJcblx0XHRcdFx0XHRcdFx0LmNsaWNrKHRoaXMuc2VjdGlvbnNNZW51SXRlbUNsaWNrSGFuZGxlcilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0RWxlbWVudCgpO1xyXG5cclxuXHRcdFx0RE9NLmdldChcInNlY3Rpb25zLW1lbnUtaXRlbXNcIikuYXBwZW5kKGVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHByZWxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZW5kUmVxdWVzdFRvU2VydmVyKFwiaG9tZVwiLCBDb250cm9sbGVyLnVwZGF0ZURhdGFPblBhZ2UpO1xyXG5cclxuXHR9XHJcblxyXG5cdHNlY3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cclxuXHRcdGxldCBzZWN0aW9uc01lbnUgPSBET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKTtcclxuXHJcblx0XHRpZihcImhpZGVcIiA9PT0gc2VjdGlvbnNNZW51LmdldENsYXNzKCkpIHtcclxuXHRcdFx0c2VjdGlvbnNNZW51LnNldENsYXNzKFwic2hvd1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlY3Rpb25zTWVudS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Z2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0bG9jYXRpb24uaHJlZiA9IGNvbmZpZy5HaXRIdWJSZWZlcmVuY2U7XHJcblx0fVxyXG5cclxuXHJcblx0c2VjdGlvbnNNZW51SXRlbUNsaWNrSGFuZGxlcigpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLmhpZGUoKTtcclxuXHJcblx0XHRsZXQgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVsb2FkZXJcIik7XHJcblxyXG5cdFx0cHJlbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG5cdFx0Q29ubmVjdG9yLnNlbmRSZXF1ZXN0VG9TZXJ2ZXIoRE9NLmdldEhUTUwodGhpcyksIENvbnRyb2xsZXIudXBkYXRlRGF0YU9uUGFnZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgdXBkYXRlRGF0YU9uUGFnZShkYXRhKSB7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5jbGVhcigpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuY2xlYXIoKTtcclxuXHRcdERPTS5nZXQoXCJzZWN0aW9uLW5hbWVcIikuY2xlYXIoKS5zZXRIVE1MKGRhdGEuc2VjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRhdGEuc2VjdGlvbi5zbGljZSgxKSk7XHJcblxyXG5cdFx0bGV0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlbG9hZGVyXCIpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYoaSAlIDIgPT09IDApIHtcclxuXHRcdFx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmFwcGVuZEhUTUwoRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5hcHBlbmRIVE1MKEZhY3RvcnkuY3JlYXRlTm90ZShkYXRhLnJlc3VsdHNbaV0sIChpIDwgNCkgPyBcIm1haW5cIiA6IFwibGlzdFwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRwcmVsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuc2hvdygpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuc2hvdygpO1xyXG5cdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5zaG93KCk7XHJcblx0fVxyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHRjb25zdCBfaW5zdGFuY2UgPSBuZXcgQ29udHJvbGxlcigpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHQnQVBJa2V5JyA6ICdiNTE3MWMwZjY2NzZkNzRkYTZjYjk5ZjdjY2ZjNmFhYTowOjc1MDU5OTMzJyxcclxuXHQnc2VjdGlvbnMnIDogWydIb21lJywgJ1dvcmxkJywgJ05hdGlvbmFsJywgJ1BvbGl0aWNzJywgJ055cmVnaW9uJywgJ0J1c2luZXNzJywgJ09waW5pb24nLCAnVGVjaG5vbG9neScsXHJcblx0XHRcdFx0ICAnU2NpZW5jZScsICdIZWFsdGgnLCAnU3BvcnRzJywgJ0FydHMnLCAnRmFzaGlvbicsICdEaW5pbmcnLCAnVHJhdmVsJywgJ01hZ2F6aW5lJywgJ1JlYWxlc3RhdGUnXSxcclxuXHQnR2l0SHViUmVmZXJlbmNlJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9aYW1OaWNrL2VwYW0udGVzdC5wcm9qZWN0J1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25maWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmNsYXNzIENvbm5lY3RvciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdHN0YXRpYyBzZW5kUmVxdWVzdFRvU2VydmVyKHNlY3Rpb25OYW1lLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUgfHwgXCJob21lXCI7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGxldCB1cmwgPSBgaHR0cDovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92MS8ke3NlY3Rpb25OYW1lfS5qc29uP2FwaS1rZXk9JHtjb25maWcuQVBJa2V5fWA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGU6ICdjb3JzJ1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0ZmV0Y2godXJsLCBvcHRpb25zKVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG5cdFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuXHRcdFx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soZGF0YSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDogXCIgKyBlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0b3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25uZWN0b3IuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnO1xyXG5cclxuY2xhc3MgRmFjdG9yeSB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGVOb3RlKGRhdGEsIHR5cGUpIHtcclxuXHRcdGlmKFwibWFpblwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLmdldE1haW5Ob3RlKGRhdGEpO1xyXG5cdFx0fSBlbHNlIGlmKFwibGlzdFwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLmdldExpc3ROb3RlKGRhdGEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93IHR5cGUgb2Ygbm90ZS5cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdG9yeTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ZhY3RvcnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBOb3RlIHtcclxuXHJcblx0c3RhdGljIGdldE1haW5Ob3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgaW1nID0gKFwiXCIgIT09IGRhdGEubXVsdGltZWRpYSkgP1x0YDxkaXYgY2xhc3M9XCJtYWluLW5vdGUtd3JhcHBlci1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVszXS51cmwgfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5gIDogYGA7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cIm1haW4tbm90ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+PGEgaHJlZj1cIiR7IGRhdGEudXJsIH1cIj4keyBkYXRhLnRpdGxlIH08L2E+PC9oMj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IGRhdGEuYnlsaW5lIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0JHsgaW1nIH1cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNyZWRpdFwiPiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbM10uY29weXJpZ2h0IH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFic3RyYWN0XCI+JHsgZGF0YS5hYnN0cmFjdCB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBub3RlO1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRMaXN0Tm90ZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cImxpc3Qtbm90ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbMF0udXJsIH1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgzPjxhIGhyZWY9XCIkeyBkYXRhLnVybCB9XCI+JHsgZGF0YS50aXRsZSB9PC9hPjwvaDM+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgZGF0YS5ieWxpbmUgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLmFic3RyYWN0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ub3RlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IERPTU1hbmlwdWxhdG9yID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRsZXQgX2N1cnJlbnRFbGVtZW50O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0OiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRFbGVtZW50OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIF9jdXJyZW50RWxlbWVudDtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Y3JlYXRlOiBmdW5jdGlvbih0YWduYW1lKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnbmFtZSk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjbGVhcjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHdoaWxlKF9jdXJyZW50RWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKF9jdXJyZW50RWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0Q2xhc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gX2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0Q2xhc3M6IGZ1bmN0aW9uKGNsYXNzbmFtZSkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NuYW1lO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0SFRNTDogZnVuY3Rpb24oaHRtbCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEhUTUw6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhcHBlbmRIVE1MOiBmdW5jdGlvbihodG1sKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5pbm5lckhUTUwgKz0gaHRtbDtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNob3c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZihcImxpc3Qtb2Ytbm90ZXNcIiA9PT0gX2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0aGlkZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhcHBlbmQ6IGZ1bmN0aW9uKGNoaWxkKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBET01NYW5pcHVsYXRvciBhcyBET00gfTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0RPTU1hbmlwdWxhdG9yLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==