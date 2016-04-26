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
					_DOMManipulator.DOM.get("previous-page-button").click(this.previousPageButtonClickHandler);
					_DOMManipulator.DOM.get("next-page-button").click(this.nextPageButtonClickHandler);
	
					_DOMManipulator.DOM.get("search-line").click(function (event) {
							event.stopPropagation();
					});
					_DOMManipulator.DOM.get("search-line").keypress(this.searchLineKeyPressHandler);
	
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
	
					_connector2.default.getTopStories("home", Controller.updateTopStories);
			}
	
			_createClass(Controller, [{
					key: 'searchLineKeyPressHandler',
					value: function searchLineKeyPressHandler(event) {
	
							_DOMManipulator.DOM.get("search-line").attr('pure', "false");
	
							if (13 === event.keyCode) {
	
									_DOMManipulator.DOM.get("left-list").hide();
									_DOMManipulator.DOM.get("right-list").hide();
									_DOMManipulator.DOM.get("section-name").hide();
	
									_DOMManipulator.DOM.get("current-page").setHTML(1);
									_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
	
									_DOMManipulator.DOM.get("preloader").show();
	
									_DOMManipulator.DOM.get("search-line").attr('pure', "true");
	
									_connector2.default.sendQuery(_DOMManipulator.DOM.get("search-line").getElement().value, 0, Controller.updateSearches);
							}
					}
			}, {
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
	
							_DOMManipulator.DOM.get("paging-menu").hide();
							_DOMManipulator.DOM.get("current-page").setHTML(1);
							_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
	
							_DOMManipulator.DOM.get("preloader").show();
	
							_connector2.default.getTopStories(_DOMManipulator.DOM.getHTML(this), Controller.updateTopStories);
	
							event.stopPropagation();
					}
			}, {
					key: 'searchGoButtonClickHandler',
					value: function searchGoButtonClickHandler(event) {
	
							_DOMManipulator.DOM.get("left-list").hide();
							_DOMManipulator.DOM.get("right-list").hide();
							_DOMManipulator.DOM.get("section-name").hide();
	
							_DOMManipulator.DOM.get("current-page").setHTML(1);
							_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
	
							_DOMManipulator.DOM.get("preloader").show();
	
							_DOMManipulator.DOM.get("search-line").attr('pure', "true");
	
							_connector2.default.sendQuery(_DOMManipulator.DOM.get("search-line").getElement().value, 0, Controller.updateSearches);
	
							event.stopPropagation();
					}
			}, {
					key: 'previousPageButtonClickHandler',
					value: function previousPageButtonClickHandler(event) {
	
							if ("false" === _DOMManipulator.DOM.get("search-line").attr("pure")) {
	
									_DOMManipulator.DOM.get("search-line").attr("pure", "true");
	
									_DOMManipulator.DOM.get("current-page").setHTML(1);
									_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
	
									_connector2.default.sendQuery(_DOMManipulator.DOM.get("search-line").getElement().value, 0, Controller.updateSearches);
	
									_DOMManipulator.DOM.get("left-list").hide();
									_DOMManipulator.DOM.get("right-list").hide();
									_DOMManipulator.DOM.get("preloader").show();
							} else {
	
									var page = +_DOMManipulator.DOM.get("current-page").getHTML();
	
									page = page - 1;
	
									if (1 === page) {
											_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
									}
	
									_DOMManipulator.DOM.get("current-page").setHTML(page);
									_connector2.default.sendQuery(_DOMManipulator.DOM.get("search-line").getElement().value, page - 1, Controller.updateSearches);
	
									_DOMManipulator.DOM.get("left-list").hide();
									_DOMManipulator.DOM.get("right-list").hide();
									_DOMManipulator.DOM.get("preloader").show();
							}
	
							event.stopPropagation();
					}
			}, {
					key: 'nextPageButtonClickHandler',
					value: function nextPageButtonClickHandler(event) {
	
							if ("false" === _DOMManipulator.DOM.get("search-line").attr("pure")) {
	
									_DOMManipulator.DOM.get("search-line").attr("pure", "true");
	
									_DOMManipulator.DOM.get("current-page").setHTML(1);
									_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
	
									_connector2.default.sendQuery(_DOMManipulator.DOM.get("search-line").getElement().value, 0, Controller.updateSearches);
	
									_DOMManipulator.DOM.get("left-list").hide();
									_DOMManipulator.DOM.get("right-list").hide();
									_DOMManipulator.DOM.get("preloader").show();
							} else {
	
									var page = +_DOMManipulator.DOM.get("current-page").getHTML();
	
									page = page + 1;
	
									_DOMManipulator.DOM.get("previous-page-button").setClass("");
									_DOMManipulator.DOM.get("current-page").setHTML(page);
	
									_connector2.default.sendQuery(_DOMManipulator.DOM.get("search-line").getElement().value, page - 1, Controller.updateSearches);
	
									_DOMManipulator.DOM.get("left-list").hide();
									_DOMManipulator.DOM.get("right-list").hide();
									_DOMManipulator.DOM.get("preloader").show();
							}
	
							event.stopPropagation();
					}
			}], [{
					key: 'updateTopStories',
					value: function updateTopStories(data) {
	
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
			}, {
					key: 'updateSearches',
					value: function updateSearches(data) {
	
							_DOMManipulator.DOM.get("left-list").clear();
							_DOMManipulator.DOM.get("right-list").clear();
	
							for (var i = 0; i < data.response.docs.length; ++i) {
									if (i % 2 === 0) {
											_DOMManipulator.DOM.get("left-list").appendHTML(_factory2.default.createNote(data.response.docs[i], "search"));
									} else {
											_DOMManipulator.DOM.get("right-list").appendHTML(_factory2.default.createNote(data.response.docs[i], "search"));
									}
							}
	
							_DOMManipulator.DOM.get("preloader").hide();
							_DOMManipulator.DOM.get("left-list").show();
							_DOMManipulator.DOM.get("right-list").show();
	
							_DOMManipulator.DOM.get("paging-menu").show();
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
			value: function sendQuery(query, page, callback) {
	
				var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&page=' + page + '&api-key=' + _config2.default.ArticleSearchAPIkey;
	
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
				} else if ("search" === type) {
					return _note2.default.getSearchNote(data);
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
		}, {
			key: "getSearchNote",
			value: function getSearchNote(data) {
	
				var img = 0 !== data.multimedia.length ? "style=\"min-height: 150px;\">\n\t\t\t\t\t\t<img src=\"" + ("http://static01.nyt.com/" + data.multimedia[0].url) + "\" style=\"height: 130px; width: 190px;\">" : ">";
	
				var note = "<div class=\"list-note\"" + img + "\n\t\t\t\t\t\t<div class=\"headline\">\n\t\t\t\t\t\t\t<h3><a href=\"" + data.web_url + "\">" + data.headline.main + "</a></h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"byline\">" + (null === data.byline ? "" : data.byline.original) + "</div>\n\t\t\t\t\t\t<div class=\"abstract\">" + data.snippet + "</div>\n\t\t\t\t\t</div>";
	
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
				element = element || _currentElement;
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
			},
	
			attr: function attr(attribute, value) {
				if (undefined === value) {
					return _currentElement.getAttribute(attribute);
				} else {
					_currentElement.setAttribute(attribute, value);
					return this;
				}
			},
	
			keypress: function keypress(handler) {
				_currentElement.addEventListener('keypress', handler, false);
				return this;
			}
		};
	}();
	
	exports.DOM = DOMManipulator;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2UxMWMxNjQ4N2Q4NDAwZWJhMTgiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ET01NYW5pcHVsYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7S0FFTSxVO0FBRUwseUJBQWM7QUFBQTs7QUFFYix5QkFBSSxPQUFKLEdBQWMsS0FBZCxDQUFvQixLQUFLLGdCQUF6Qjs7QUFFQSx5QkFBSSxHQUFKLENBQVEsaUJBQVIsRUFBMkIsS0FBM0IsQ0FBaUMsS0FBSywwQkFBdEM7QUFDQSx5QkFBSSxHQUFKLENBQVEsZUFBUixFQUF5QixLQUF6QixDQUErQixLQUFLLHdCQUFwQztBQUNBLHlCQUFJLEdBQUosQ0FBUSxlQUFSLEVBQXlCLEtBQXpCLENBQStCLEtBQUssd0JBQXBDO0FBQ0EseUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDO0FBQ0EseUJBQUksR0FBSixDQUFRLHNCQUFSLEVBQWdDLEtBQWhDLENBQXNDLEtBQUssOEJBQTNDO0FBQ0EseUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDOztBQUVBLHlCQUFJLEdBQUosQ0FB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bnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzZTExYzE2NDg3ZDg0MDBlYmExOFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuanMnO1xyXG5pbXBvcnQgQ29ubmVjdG9yIGZyb20gJy4vY29ubmVjdG9yLmpzJztcclxuaW1wb3J0IEZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5LmpzJztcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9ET01NYW5pcHVsYXRvci5qcyc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0RE9NLmdldEJvZHkoKS5jbGljayh0aGlzLmJvZHlDbGlja0hhbmRsZXIpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWN0aW9ucy1idXR0b25cIikuY2xpY2sodGhpcy5zZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWJ1dHRvblwiKS5jbGljayh0aGlzLnNlYXJjaEJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwiZ2l0aHViLWJ1dHRvblwiKS5jbGljayh0aGlzLmdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWdvLWJ1dHRvblwiKS5jbGljayh0aGlzLnNlYXJjaEdvQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5jbGljayh0aGlzLnByZXZpb3VzUGFnZUJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwibmV4dC1wYWdlLWJ1dHRvblwiKS5jbGljayh0aGlzLm5leHRQYWdlQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuY2xpY2soKGV2ZW50KSA9PiB7IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9KTtcclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5rZXlwcmVzcyh0aGlzLnNlYXJjaExpbmVLZXlQcmVzc0hhbmRsZXIpO1xyXG5cclxuXHRcdGZvcihsZXQgc2VjdGlvbiBvZiBjb25maWcuc2VjdGlvbnMpIHtcclxuXHJcblx0XHRcdGxldCBlbGVtZW50ID0gRE9NXHJcblx0XHRcdFx0XHRcdFx0LmNyZWF0ZShcImxpXCIpXHJcblx0XHRcdFx0XHRcdFx0LnNldEhUTUwoc2VjdGlvbilcclxuXHRcdFx0XHRcdFx0XHQuY2xpY2sodGhpcy5zZWN0aW9uc01lbnVJdGVtQ2xpY2tIYW5kbGVyKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRFbGVtZW50KCk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudS1pdGVtc1wiKS5hcHBlbmQoZWxlbWVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0Q29ubmVjdG9yLmdldFRvcFN0b3JpZXMoXCJob21lXCIsIENvbnRyb2xsZXIudXBkYXRlVG9wU3Rvcmllcyk7XHJcblxyXG5cdH1cclxuXHJcblx0c2VhcmNoTGluZUtleVByZXNzSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKCdwdXJlJywgXCJmYWxzZVwiKTtcclxuXHJcblx0XHRpZigxMyA9PT0gZXZlbnQua2V5Q29kZSkge1xyXG5cclxuXHRcdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5oaWRlKCk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwoMSk7XHJcblx0XHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5zZXRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cdFx0XHRcclxuXHRcdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cigncHVyZScsIFwidHJ1ZVwiKTtcclxuXHJcblx0XHRcdENvbm5lY3Rvci5zZW5kUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldEVsZW1lbnQoKS52YWx1ZSwgMCwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGJvZHlDbGlja0hhbmRsZXIoKSB7XHJcblxyXG5cdFx0RE9NLmdldChcInNlY3Rpb25zLW1lbnVcIikuc2V0Q2xhc3MoXCJoaWRlXCIpO1xyXG5cdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnNldENsYXNzKFwiaGlkZVwiKTtcclxuXHJcblx0fVxyXG5cclxuXHRzZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwic2hvd1wiID09PSBET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuZ2V0Q2xhc3MoKSkge1xyXG5cclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnNldENsYXNzKFwiaGlkZVwiKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS50b2dnbGUoKTtcclxuXHJcblx0XHRcdH0sIDUwMCk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblxyXG5cdHNlYXJjaEJ1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwic2hvd1wiID09PSBET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5nZXRDbGFzcygpKSB7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcblx0XHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cclxuXHRcdFx0fSwgNTAwKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblxyXG5cdGdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcigpIHtcclxuXHRcdGxvY2F0aW9uLmhyZWYgPSBjb25maWcuR2l0SHViUmVmZXJlbmNlO1xyXG5cdH1cclxuXHJcblxyXG5cdHNlY3Rpb25zTWVudUl0ZW1DbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLmhpZGUoKTtcclxuXHJcblx0XHRET00uZ2V0KFwicGFnaW5nLW1lbnVcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0Q29ubmVjdG9yLmdldFRvcFN0b3JpZXMoRE9NLmdldEhUTUwodGhpcyksIENvbnRyb2xsZXIudXBkYXRlVG9wU3Rvcmllcyk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRzZWFyY2hHb0J1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5oaWRlKCk7XHJcblxyXG5cdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblx0XHRcclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKCdwdXJlJywgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZW5kUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldEVsZW1lbnQoKS52YWx1ZSwgMCwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgdXBkYXRlVG9wU3RvcmllcyhkYXRhKSB7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5jbGVhcigpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuY2xlYXIoKTtcclxuXHRcdERPTS5nZXQoXCJzZWN0aW9uLW5hbWVcIikuY2xlYXIoKS5zZXRIVE1MKGRhdGEuc2VjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRhdGEuc2VjdGlvbi5zbGljZSgxKSk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZihpICUgMiA9PT0gMCkge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuYXBwZW5kSFRNTChGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YS5yZXN1bHRzW2ldLCAoaSA8IDQpID8gXCJtYWluXCIgOiBcImxpc3RcIikpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmFwcGVuZEhUTUwoRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5zaG93KCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5zaG93KCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLnNob3coKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB1cGRhdGVTZWFyY2hlcyhkYXRhKSB7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5jbGVhcigpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuY2xlYXIoKTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5yZXNwb25zZS5kb2NzLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdGlmKGkgJSAyID09PSAwKSB7XHJcblx0XHRcdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5hcHBlbmRIVE1MKEZhY3RvcnkuY3JlYXRlTm90ZShkYXRhLnJlc3BvbnNlLmRvY3NbaV0sIFwic2VhcmNoXCIpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5hcHBlbmRIVE1MKEZhY3RvcnkuY3JlYXRlTm90ZShkYXRhLnJlc3BvbnNlLmRvY3NbaV0sIFwic2VhcmNoXCIpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5zaG93KCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5zaG93KCk7XHJcblxyXG5cdFx0RE9NLmdldChcInBhZ2luZy1tZW51XCIpLnNob3coKTtcclxuXHR9XHJcblxyXG5cdHByZXZpb3VzUGFnZUJ1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwiZmFsc2VcIiA9PT0gRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoXCJwdXJlXCIpKSB7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cihcInB1cmVcIiwgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHJcblx0XHRcdENvbm5lY3Rvci5zZW5kUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldEVsZW1lbnQoKS52YWx1ZSwgMCwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLnNob3coKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0bGV0IHBhZ2UgPSArRE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5nZXRIVE1MKCk7XHJcblxyXG5cdFx0XHRwYWdlID0gcGFnZSAtIDE7XHJcblxyXG5cdFx0XHRpZigxID09PSBwYWdlKSB7XHJcblx0XHRcdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdERPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuc2V0SFRNTChwYWdlKTtcclxuXHRcdFx0Q29ubmVjdG9yLnNlbmRRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0RWxlbWVudCgpLnZhbHVlLCBwYWdlIC0gMSwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLnNob3coKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRuZXh0UGFnZUJ1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwiZmFsc2VcIiA9PT0gRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoXCJwdXJlXCIpKSB7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cihcInB1cmVcIiwgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHJcblx0XHRcdENvbm5lY3Rvci5zZW5kUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldEVsZW1lbnQoKS52YWx1ZSwgMCwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLnNob3coKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0bGV0IHBhZ2UgPSArRE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5nZXRIVE1MKCk7XHJcblxyXG5cdFx0XHRwYWdlID0gcGFnZSArIDE7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJcIik7XHJcblx0XHRcdERPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuc2V0SFRNTChwYWdlKTtcclxuXHJcblx0XHRcdENvbm5lY3Rvci5zZW5kUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldEVsZW1lbnQoKS52YWx1ZSwgcGFnZSAtIDEsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblx0Y29uc3QgX2luc3RhbmNlID0gbmV3IENvbnRyb2xsZXIoKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0J1RvcFN0b3JpZXNBUElrZXknIDogJ2I1MTcxYzBmNjY3NmQ3NGRhNmNiOTlmN2NjZmM2YWFhOjA6NzUwNTk5MzMnLFxyXG5cdCdBcnRpY2xlU2VhcmNoQVBJa2V5JyA6ICc1ODU4M2NhMjllMGI1YTI5MTZkZDVjN2JmZmQ0NTE4ZDoxNDo3NTA1OTkzMycsXHJcblx0J3NlY3Rpb25zJyA6IFsnSG9tZScsICdXb3JsZCcsICdOYXRpb25hbCcsICdQb2xpdGljcycsICdOeXJlZ2lvbicsICdCdXNpbmVzcycsICdPcGluaW9uJywgJ1RlY2hub2xvZ3knLFxyXG5cdFx0XHRcdCAgJ1NjaWVuY2UnLCAnSGVhbHRoJywgJ1Nwb3J0cycsICdBcnRzJywgJ0Zhc2hpb24nLCAnRGluaW5nJywgJ1RyYXZlbCcsICdNYWdhemluZScsICdSZWFsZXN0YXRlJ10sXHJcblx0J0dpdEh1YlJlZmVyZW5jZSc6ICdodHRwczovL2dpdGh1Yi5jb20vWmFtTmljay9lcGFtLnRlc3QucHJvamVjdCdcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29uZmlnLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG5jbGFzcyBDb25uZWN0b3Ige1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRzdGF0aWMgZ2V0VG9wU3RvcmllcyhzZWN0aW9uTmFtZSwgY2FsbGJhY2spIHtcclxuXHJcblx0XHRzZWN0aW9uTmFtZSA9IHNlY3Rpb25OYW1lIHx8IFwiaG9tZVwiO1xyXG5cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRsZXQgdXJsID0gYGh0dHA6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3RvcHN0b3JpZXMvdjEvJHtzZWN0aW9uTmFtZX0uanNvbj9hcGkta2V5PSR7Y29uZmlnLlRvcFN0b3JpZXNBUElrZXl9YDtcclxuXHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcclxuXHRcdFx0fSxcclxuXHRcdFx0bW9kZTogJ2NvcnMnXHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHRmZXRjaCh1cmwsIG9wdGlvbnMpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcblx0XHRcdFx0XHRlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRjYWxsYmFjayhkYXRhKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOiBcIiArIGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0c3RhdGljIHNlbmRRdWVyeShxdWVyeSwgcGFnZSwgY2FsbGJhY2spIHtcclxuXHJcblx0XHRsZXQgdXJsID0gYGh0dHA6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3NlYXJjaC92Mi9hcnRpY2xlc2VhcmNoLmpzb24/cT0ke3F1ZXJ5fSZwYWdlPSR7cGFnZX0mYXBpLWtleT0ke2NvbmZpZy5BcnRpY2xlU2VhcmNoQVBJa2V5fWA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGU6ICdjb3JzJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRmZXRjaCh1cmwsIG9wdGlvbnMpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcblx0XHRcdFx0XHRlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRjYWxsYmFjayhkYXRhKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOiBcIiArIGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RvcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Nvbm5lY3Rvci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBOb3RlIGZyb20gJy4vbm90ZS5qcyc7XHJcblxyXG5jbGFzcyBGYWN0b3J5IHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZU5vdGUoZGF0YSwgdHlwZSkge1xyXG5cdFx0aWYoXCJtYWluXCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUuZ2V0TWFpbk5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2UgaWYoXCJsaXN0XCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUuZ2V0TGlzdE5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2UgaWYoXCJzZWFyY2hcIiA9PT0gdHlwZSkge1xyXG5cdFx0XHRyZXR1cm4gTm90ZS5nZXRTZWFyY2hOb3RlKGRhdGEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93IHR5cGUgb2Ygbm90ZS5cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdG9yeTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ZhY3RvcnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBOb3RlIHtcclxuXHJcblx0c3RhdGljIGdldE1haW5Ob3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgaW1nID0gKFwiXCIgIT09IGRhdGEubXVsdGltZWRpYSkgP1x0YDxkaXYgY2xhc3M9XCJtYWluLW5vdGUtd3JhcHBlci1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVszXS51cmwgfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5gIDogYGA7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cIm1haW4tbm90ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+PGEgaHJlZj1cIiR7IGRhdGEudXJsIH1cIj4keyBkYXRhLnRpdGxlIH08L2E+PC9oMj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IGRhdGEuYnlsaW5lIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0JHsgaW1nIH1cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNyZWRpdFwiPiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbM10uY29weXJpZ2h0IH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFic3RyYWN0XCI+JHsgZGF0YS5hYnN0cmFjdCB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBub3RlO1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRMaXN0Tm90ZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cImxpc3Qtbm90ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbMF0udXJsIH1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgzPjxhIGhyZWY9XCIkeyBkYXRhLnVybCB9XCI+JHsgZGF0YS50aXRsZSB9PC9hPjwvaDM+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgZGF0YS5ieWxpbmUgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLmFic3RyYWN0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFNlYXJjaE5vdGUoZGF0YSkge1xyXG5cclxuXHRcdGxldCBpbWcgPSAoMCAhPT0gZGF0YS5tdWx0aW1lZGlhLmxlbmd0aCkgPyBgc3R5bGU9XCJtaW4taGVpZ2h0OiAxNTBweDtcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyhcImh0dHA6Ly9zdGF0aWMwMS5ueXQuY29tL1wiICsgZGF0YS5tdWx0aW1lZGlhWzBdLnVybCl9XCIgc3R5bGU9XCJoZWlnaHQ6IDEzMHB4OyB3aWR0aDogMTkwcHg7XCI+YCA6IGA+YDtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibGlzdC1ub3RlXCIkeyBpbWcgfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+PGEgaHJlZj1cIiR7IGRhdGEud2ViX3VybCB9XCI+JHsgZGF0YS5oZWFkbGluZS5tYWluIH08L2E+PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieWxpbmVcIj4keyBudWxsID09PSBkYXRhLmJ5bGluZSA/IFwiXCIgOiBkYXRhLmJ5bGluZS5vcmlnaW5hbCB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPiR7IGRhdGEuc25pcHBldCB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBub3RlO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbm90ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBET01NYW5pcHVsYXRvciA9IChmdW5jdGlvbigpIHtcclxuXHJcblx0bGV0IF9jdXJyZW50RWxlbWVudDtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdldDogZnVuY3Rpb24oaWQpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0RWxlbWVudDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBfY3VycmVudEVsZW1lbnQ7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEJvZHk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Y3JlYXRlOiBmdW5jdGlvbih0YWduYW1lKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnbmFtZSk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjbGVhcjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHdoaWxlKF9jdXJyZW50RWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKF9jdXJyZW50RWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0Q2xhc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gX2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0Q2xhc3M6IGZ1bmN0aW9uKGNsYXNzbmFtZSkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NuYW1lO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0SFRNTDogZnVuY3Rpb24oaHRtbCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEhUTUw6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQgfHwgX2N1cnJlbnRFbGVtZW50O1xyXG5cdFx0XHRyZXR1cm4gZWxlbWVudC5pbm5lckhUTUw7XHJcblx0XHR9LFxyXG5cclxuXHRcdGFwcGVuZEhUTUw6IGZ1bmN0aW9uKGh0bWwpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmlubmVySFRNTCArPSBodG1sO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2hvdzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKFwibGlzdC1vZi1ub3Rlc1wiID09PSBfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lKSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRoaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGFwcGVuZDogZnVuY3Rpb24oY2hpbGQpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHRvZ2dsZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKFwiaGlkZVwiID09PSBfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lKSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSA9IFwic2hvd1wiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUgPSBcImhpZGVcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YXR0cjogZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZSkge1xyXG5cdFx0XHRpZih1bmRlZmluZWQgPT09IHZhbHVlKSB7XHJcblx0XHRcdFx0cmV0dXJuIF9jdXJyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGtleXByZXNzOiBmdW5jdGlvbihoYW5kbGVyKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IERPTU1hbmlwdWxhdG9yIGFzIERPTSB9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vRE9NTWFuaXB1bGF0b3IuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9