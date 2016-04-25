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
	
					_DOMManipulator.DOM.getBody().click(this.bodyClickHandler);
	
					_DOMManipulator.DOM.get("sections-button").click(this.sectionsButtonClickHandler);
					_DOMManipulator.DOM.get("search-button").click(this.searchButtonClickHandler);
					_DOMManipulator.DOM.get("github-button").click(this.githubButtonClickHandler);
					_DOMManipulator.DOM.get("search-go-button").click(this.searchGoButtonClickHandler);
	
					_DOMManipulator.DOM.get("search-line").click(function (event) {
							event.stopPropagation();
					});
	
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
	
					_DOMManipulator.DOM.get("preloader").show();
	
					_connector2.default.getTopStories("home", Controller.updateDataOnPage);
			}
	
			_createClass(Controller, [{
					key: 'bodyClickHandler',
					value: function bodyClickHandler() {
	
							_DOMManipulator.DOM.get("sections-menu").setClass("hide");
							_DOMManipulator.DOM.get("search-menu").setClass("hide");
					}
			}, {
					key: 'sectionsButtonClickHandler',
					value: function sectionsButtonClickHandler(event) {
	
							if ("show" === _DOMManipulator.DOM.get("search-menu").getClass()) {
	
									_DOMManipulator.DOM.get("search-menu").setClass("hide");
	
									setTimeout(function () {
	
											_DOMManipulator.DOM.get("sections-menu").toggle();
									}, 500);
							} else {
	
									_DOMManipulator.DOM.get("sections-menu").toggle();
							}
	
							event.stopPropagation();
					}
			}, {
					key: 'searchButtonClickHandler',
					value: function searchButtonClickHandler(event) {
	
							if ("show" === _DOMManipulator.DOM.get("sections-menu").getClass()) {
	
									_DOMManipulator.DOM.get("sections-menu").setClass("hide");
	
									setTimeout(function () {
	
											_DOMManipulator.DOM.get("search-menu").toggle();
									}, 500);
							} else {
	
									_DOMManipulator.DOM.get("search-menu").toggle();
							}
	
							event.stopPropagation();
					}
			}, {
					key: 'githubButtonClickHandler',
					value: function githubButtonClickHandler() {
							location.href = _config2.default.GitHubReference;
					}
			}, {
					key: 'sectionsMenuItemClickHandler',
					value: function sectionsMenuItemClickHandler(event) {
	
							_DOMManipulator.DOM.get("sections-menu").setClass("hide");
	
							_DOMManipulator.DOM.get("left-list").hide();
							_DOMManipulator.DOM.get("right-list").hide();
							_DOMManipulator.DOM.get("section-name").hide();
							_DOMManipulator.DOM.get("preloader").show();
	
							_connector2.default.getTopStories(_DOMManipulator.DOM.getHTML(this), Controller.updateDataOnPage);
	
							event.stopPropagation();
					}
			}, {
					key: 'searchGoButtonClickHandler',
					value: function searchGoButtonClickHandler(event) {
	
							_DOMManipulator.DOM.get("left-list").hide();
							_DOMManipulator.DOM.get("right-list").hide();
							_DOMManipulator.DOM.get("section-name").hide();
							_DOMManipulator.DOM.get("preloader").show();
	
							_connector2.default.sendQuery(_DOMManipulator.DOM.get("search-line").getElement().value, Controller.updateDataOnPage);
	
							event.stopPropagation();
					}
			}], [{
					key: 'updateDataOnPage',
					value: function updateDataOnPage(data) {
	
							_DOMManipulator.DOM.get("left-list").clear();
							_DOMManipulator.DOM.get("right-list").clear();
							_DOMManipulator.DOM.get("section-name").clear().setHTML(data.section.charAt(0).toUpperCase() + data.section.slice(1));
	
							for (var i = 0; i < data.results.length; ++i) {
									if (i % 2 === 0) {
											_DOMManipulator.DOM.get("left-list").appendHTML(_factory2.default.createNote(data.results[i], i < 4 ? "main" : "list"));
									} else {
											_DOMManipulator.DOM.get("right-list").appendHTML(_factory2.default.createNote(data.results[i], i < 4 ? "main" : "list"));
									}
							}
	
							_DOMManipulator.DOM.get("preloader").hide();
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
		'TopStoriesAPIkey': 'b5171c0f6676d74da6cb99f7ccfc6aaa:0:75059933',
		'ArticleSearchAPIkey': '58583ca29e0b5a2916dd5c7bffd4518d:14:75059933',
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
			key: 'getTopStories',
			value: function getTopStories(sectionName, callback) {
	
				sectionName = sectionName || "home";
	
				sectionName = sectionName.toLowerCase();
	
				var url = 'http://api.nytimes.com/svc/topstories/v1/' + sectionName + '.json?api-key=' + _config2.default.TopStoriesAPIkey;
	
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
		}, {
			key: 'sendQuery',
			value: function sendQuery(query, callback) {
	
				var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&api-key=' + _config2.default.ArticleSearchAPIkey;
	
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
	
			getBody: function getBody() {
				_currentElement = document.body;
				return this;
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
			},
	
			toggle: function toggle() {
				if ("hide" === _currentElement.className) {
					_currentElement.className = "show";
				} else {
					_currentElement.className = "hide";
				}
				return this;
			}
		};
	}();
	
	exports.DOM = DOMManipulator;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWRiNDE1MTYwMTI5NjVjYzNhMzUiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ET01NYW5pcHVsYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7S0FFTSxVO0FBRUwseUJBQWM7QUFBQTs7QUFFYix5QkFBSSxPQUFKLEdBQWMsS0FBZCxDQUFvQixLQUFLLGdCQUF6Qjs7QUFFQSx5QkFBSSxHQUFKLENBQVEsaUJBQVIsRUFBMkIsS0FBM0IsQ0FBaUMsS0FBSywwQkFBdEM7QUFDQSx5QkFBSSxHQUFKLENBQVEsZUFBUixFQUF5QixLQUF6QixDQUErQixLQUFLLHdCQUFwQztBQUNBLHlCQUFJLEdBQUosQ0FBUSxlQUFSLEVBQXlCLEtBQXpCLENBQStCLEtBQUssd0JBQXBDO0FBQ0EseUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDOztBQUVBLHlCQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLEtBQXZCLENBQTZCLFVBQUMsS0FBRCxFQUFXO0FBQUUsYUFBTSxlQUFOO0FBQTBCLE1BQXBFOztBQVRhO0FBQUE7QUFBQTs7QUFBQTtBQVdiLDRCQUFtQixpQkFBTyxRQUExQiw4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Q0FBNEIsS0FBNUI7QUFDQSxXQUFPLElBQVA7QUFDQSxJQXhFSzs7QUEwRU4sV0FBUSxrQkFBVztBQUNsQixRQUFHLFdBQVcsZ0JBQWdCLFNBQTlCLEVBQXlDO0FBQ3hDLHFCQUFnQixTQUFoQixHQUE0QixNQUE1QjtBQUNBLEtBRkQsTUFFTztBQUNOLHFCQUFnQixTQUFoQixHQUE0QixNQUE1QjtBQUNBO0FBQ0QsV0FBTyxJQUFQO0FBQ0E7QUFqRkssR0FBUDtBQW9GQSxFQXhGb0IsRUFBckI7O1NBMEYyQixHLEdBQWxCLGMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGVkYjQxNTE2MDEyOTY1Y2MzYTM1XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBDb25uZWN0b3IgZnJvbSAnLi9jb25uZWN0b3IuanMnO1xyXG5pbXBvcnQgRmFjdG9yeSBmcm9tICcuL2ZhY3RvcnkuanMnO1xyXG5pbXBvcnQgeyBET00gfSBmcm9tICcuL0RPTU1hbmlwdWxhdG9yLmpzJztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHRET00uZ2V0Qm9keSgpLmNsaWNrKHRoaXMuYm9keUNsaWNrSGFuZGxlcik7XHJcblxyXG5cdFx0RE9NLmdldChcInNlY3Rpb25zLWJ1dHRvblwiKS5jbGljayh0aGlzLnNlY3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtYnV0dG9uXCIpLmNsaWNrKHRoaXMuc2VhcmNoQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHRcdERPTS5nZXQoXCJnaXRodWItYnV0dG9uXCIpLmNsaWNrKHRoaXMuZ2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtZ28tYnV0dG9uXCIpLmNsaWNrKHRoaXMuc2VhcmNoR29CdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5jbGljaygoZXZlbnQpID0+IHsgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH0pO1xyXG5cclxuXHRcdGZvcihsZXQgc2VjdGlvbiBvZiBjb25maWcuc2VjdGlvbnMpIHtcclxuXHJcblx0XHRcdGxldCBlbGVtZW50ID0gRE9NXHJcblx0XHRcdFx0XHRcdFx0LmNyZWF0ZShcImxpXCIpXHJcblx0XHRcdFx0XHRcdFx0LnNldEhUTUwoc2VjdGlvbilcclxuXHRcdFx0XHRcdFx0XHQuY2xpY2sodGhpcy5zZWN0aW9uc01lbnVJdGVtQ2xpY2tIYW5kbGVyKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRFbGVtZW50KCk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudS1pdGVtc1wiKS5hcHBlbmQoZWxlbWVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0Q29ubmVjdG9yLmdldFRvcFN0b3JpZXMoXCJob21lXCIsIENvbnRyb2xsZXIudXBkYXRlRGF0YU9uUGFnZSk7XHJcblxyXG5cdH1cclxuXHJcblx0Ym9keUNsaWNrSGFuZGxlcigpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuc2V0Q2xhc3MoXCJoaWRlXCIpO1xyXG5cclxuXHR9XHJcblxyXG5cdHNlY3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYoXCJzaG93XCIgPT09IERPTS5nZXQoXCJzZWFyY2gtbWVudVwiKS5nZXRDbGFzcygpKSB7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuc2V0Q2xhc3MoXCJoaWRlXCIpO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG5cdFx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cclxuXHRcdFx0fSwgNTAwKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0RE9NLmdldChcInNlY3Rpb25zLW1lbnVcIikudG9nZ2xlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblx0c2VhcmNoQnV0dG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYoXCJzaG93XCIgPT09IERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLmdldENsYXNzKCkpIHtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnNldENsYXNzKFwiaGlkZVwiKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRET00uZ2V0KFwic2VhcmNoLW1lbnVcIikudG9nZ2xlKCk7XHJcblxyXG5cdFx0XHR9LCA1MDApO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VhcmNoLW1lbnVcIikudG9nZ2xlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblx0Z2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0bG9jYXRpb24uaHJlZiA9IGNvbmZpZy5HaXRIdWJSZWZlcmVuY2U7XHJcblx0fVxyXG5cclxuXHJcblx0c2VjdGlvbnNNZW51SXRlbUNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnNldENsYXNzKFwiaGlkZVwiKTtcclxuXHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJzZWN0aW9uLW5hbWVcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0Q29ubmVjdG9yLmdldFRvcFN0b3JpZXMoRE9NLmdldEhUTUwodGhpcyksIENvbnRyb2xsZXIudXBkYXRlRGF0YU9uUGFnZSk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRzZWFyY2hHb0J1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLnNob3coKTtcclxuXHJcblx0XHRDb25uZWN0b3Iuc2VuZFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRFbGVtZW50KCkudmFsdWUsIENvbnRyb2xsZXIudXBkYXRlRGF0YU9uUGFnZSk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgdXBkYXRlRGF0YU9uUGFnZShkYXRhKSB7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5jbGVhcigpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuY2xlYXIoKTtcclxuXHRcdERPTS5nZXQoXCJzZWN0aW9uLW5hbWVcIikuY2xlYXIoKS5zZXRIVE1MKGRhdGEuc2VjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRhdGEuc2VjdGlvbi5zbGljZSgxKSk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZihpICUgMiA9PT0gMCkge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuYXBwZW5kSFRNTChGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YS5yZXN1bHRzW2ldLCAoaSA8IDQpID8gXCJtYWluXCIgOiBcImxpc3RcIikpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmFwcGVuZEhUTUwoRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5zaG93KCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5zaG93KCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLnNob3coKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cdGNvbnN0IF9pbnN0YW5jZSA9IG5ldyBDb250cm9sbGVyKCk7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdCdUb3BTdG9yaWVzQVBJa2V5JyA6ICdiNTE3MWMwZjY2NzZkNzRkYTZjYjk5ZjdjY2ZjNmFhYTowOjc1MDU5OTMzJyxcclxuXHQnQXJ0aWNsZVNlYXJjaEFQSWtleScgOiAnNTg1ODNjYTI5ZTBiNWEyOTE2ZGQ1YzdiZmZkNDUxOGQ6MTQ6NzUwNTk5MzMnLFxyXG5cdCdzZWN0aW9ucycgOiBbJ0hvbWUnLCAnV29ybGQnLCAnTmF0aW9uYWwnLCAnUG9saXRpY3MnLCAnTnlyZWdpb24nLCAnQnVzaW5lc3MnLCAnT3BpbmlvbicsICdUZWNobm9sb2d5JyxcclxuXHRcdFx0XHQgICdTY2llbmNlJywgJ0hlYWx0aCcsICdTcG9ydHMnLCAnQXJ0cycsICdGYXNoaW9uJywgJ0RpbmluZycsICdUcmF2ZWwnLCAnTWFnYXppbmUnLCAnUmVhbGVzdGF0ZSddLFxyXG5cdCdHaXRIdWJSZWZlcmVuY2UnOiAnaHR0cHM6Ly9naXRodWIuY29tL1phbU5pY2svZXBhbS50ZXN0LnByb2plY3QnXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbmZpZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuY2xhc3MgQ29ubmVjdG9yIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0c3RhdGljIGdldFRvcFN0b3JpZXMoc2VjdGlvbk5hbWUsIGNhbGxiYWNrKSB7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZSB8fCBcImhvbWVcIjtcclxuXHJcblx0XHRzZWN0aW9uTmFtZSA9IHNlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0bGV0IHVybCA9IGBodHRwOi8vYXBpLm55dGltZXMuY29tL3N2Yy90b3BzdG9yaWVzL3YxLyR7c2VjdGlvbk5hbWV9Lmpzb24/YXBpLWtleT0ke2NvbmZpZy5Ub3BTdG9yaWVzQVBJa2V5fWA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGU6ICdjb3JzJ1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0ZmV0Y2godXJsLCBvcHRpb25zKVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG5cdFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuXHRcdFx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soZGF0YSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDogXCIgKyBlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzZW5kUXVlcnkocXVlcnksIGNhbGxiYWNrKSB7XHJcblxyXG5cdFx0bGV0IHVybCA9IGBodHRwOi8vYXBpLm55dGltZXMuY29tL3N2Yy9zZWFyY2gvdjIvYXJ0aWNsZXNlYXJjaC5qc29uP3E9JHtxdWVyeX0mYXBpLWtleT0ke2NvbmZpZy5BcnRpY2xlU2VhcmNoQVBJa2V5fWA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGU6ICdjb3JzJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRmZXRjaCh1cmwsIG9wdGlvbnMpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcblx0XHRcdFx0XHRlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRjYWxsYmFjayhkYXRhKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOiBcIiArIGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RvcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Nvbm5lY3Rvci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBOb3RlIGZyb20gJy4vbm90ZS5qcyc7XHJcblxyXG5jbGFzcyBGYWN0b3J5IHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZU5vdGUoZGF0YSwgdHlwZSkge1xyXG5cdFx0aWYoXCJtYWluXCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUuZ2V0TWFpbk5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2UgaWYoXCJsaXN0XCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUuZ2V0TGlzdE5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3cgdHlwZSBvZiBub3RlLlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN0b3J5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZmFjdG9yeS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIE5vdGUge1xyXG5cclxuXHRzdGF0aWMgZ2V0TWFpbk5vdGUoZGF0YSkge1xyXG5cclxuXHRcdGxldCBpbWcgPSAoXCJcIiAhPT0gZGF0YS5tdWx0aW1lZGlhKSA/XHRgPGRpdiBjbGFzcz1cIm1haW4tbm90ZS13cmFwcGVyLWltYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzNdLnVybCB9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PmAgOiBgYDtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibWFpbi1ub3RlXCI+XHJcblx0XHRcdFx0XHRcdDxoMj48YSBocmVmPVwiJHsgZGF0YS51cmwgfVwiPiR7IGRhdGEudGl0bGUgfTwvYT48L2gyPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgZGF0YS5ieWxpbmUgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQkeyBpbWcgfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3JlZGl0XCI+JHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVszXS5jb3B5cmlnaHQgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLmFic3RyYWN0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldExpc3ROb3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibGlzdC1ub3RlXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVswXS51cmwgfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+PGEgaHJlZj1cIiR7IGRhdGEudXJsIH1cIj4keyBkYXRhLnRpdGxlIH08L2E+PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieWxpbmVcIj4keyBkYXRhLmJ5bGluZSB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPiR7IGRhdGEuYWJzdHJhY3QgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+YDtcclxuXHJcblx0XHRyZXR1cm4gbm90ZTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vdGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgRE9NTWFuaXB1bGF0b3IgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5cdGxldCBfY3VycmVudEVsZW1lbnQ7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRnZXQ6IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gX2N1cnJlbnRFbGVtZW50O1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRCb2R5OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNyZWF0ZTogZnVuY3Rpb24odGFnbmFtZSkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ25hbWUpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2xlYXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR3aGlsZShfY3VycmVudEVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5yZW1vdmVDaGlsZChfY3VycmVudEVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldENsYXNzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWU7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldENsYXNzOiBmdW5jdGlvbihjbGFzc25hbWUpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzbmFtZTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldEhUTUw6IGZ1bmN0aW9uKGh0bWwpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRIVE1MOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiBlbGVtZW50LmlubmVySFRNTDtcclxuXHRcdH0sXHJcblxyXG5cdFx0YXBwZW5kSFRNTDogZnVuY3Rpb24oaHRtbCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuaW5uZXJIVE1MICs9IGh0bWw7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzaG93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoXCJsaXN0LW9mLW5vdGVzXCIgPT09IF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUpIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGhpZGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YXBwZW5kOiBmdW5jdGlvbihjaGlsZCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0dG9nZ2xlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoXCJoaWRlXCIgPT09IF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUpIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lID0gXCJzaG93XCI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSA9IFwiaGlkZVwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBET01NYW5pcHVsYXRvciBhcyBET00gfTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0RPTU1hbmlwdWxhdG9yLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==