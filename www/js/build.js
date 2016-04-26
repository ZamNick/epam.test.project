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
	
									_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getElement().value, 0, Controller.updateSearches);
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
	
							_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getElement().value, 0, Controller.updateSearches);
	
							event.stopPropagation();
					}
			}, {
					key: 'previousPageButtonClickHandler',
					value: function previousPageButtonClickHandler(event) {
	
							if ("false" === _DOMManipulator.DOM.get("search-line").attr("pure")) {
	
									_DOMManipulator.DOM.get("search-line").attr("pure", "true");
	
									_DOMManipulator.DOM.get("current-page").setHTML(1);
									_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
	
									_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getElement().value, 0, Controller.updateSearches);
							} else {
	
									var page = +_DOMManipulator.DOM.get("current-page").getHTML();
	
									page = page - 1;
	
									if (1 === page) {
											_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
									}
	
									_DOMManipulator.DOM.get("current-page").setHTML(page);
									_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getElement().value, page - 1, Controller.updateSearches);
							}
	
							_DOMManipulator.DOM.get("left-list").hide();
							_DOMManipulator.DOM.get("right-list").hide();
							_DOMManipulator.DOM.get("preloader").show();
	
							event.stopPropagation();
					}
			}, {
					key: 'nextPageButtonClickHandler',
					value: function nextPageButtonClickHandler(event) {
	
							if ("false" === _DOMManipulator.DOM.get("search-line").attr("pure")) {
	
									_DOMManipulator.DOM.get("search-line").attr("pure", "true");
	
									_DOMManipulator.DOM.get("current-page").setHTML(1);
									_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
	
									_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getElement().value, 0, Controller.updateSearches);
							} else {
	
									var page = +_DOMManipulator.DOM.get("current-page").getHTML();
	
									page = page + 1;
	
									_DOMManipulator.DOM.get("previous-page-button").setClass("");
									_DOMManipulator.DOM.get("current-page").setHTML(page);
	
									_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getElement().value, page - 1, Controller.updateSearches);
							}
	
							_DOMManipulator.DOM.get("left-list").hide();
							_DOMManipulator.DOM.get("right-list").hide();
							_DOMManipulator.DOM.get("preloader").show();
	
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
	
	/**
	 * A class represent an instance for make connection to 
	 * The New York Times server for grabing necessary data.
	 * @class
	 *
	 * @requires config.js
	 * @author Nikolay Zamulov <zamulov8@gmail.com> 
	 */
	
	var Connector = function () {
		function Connector() {
			_classCallCheck(this, Connector);
		}
	
		_createClass(Connector, null, [{
			key: 'getTopStories',
	
	
			/**
	   * Function initializing 'url' and 'options' settings variables that
	   * needed for making request to server for grabing the top stories data.
	   * 
	   * @function
	   * @param {String} [sectionName] - The name of needed section of news.
	   * @param {Function} callback - Function that will be invoked when query will be sended.
	   * @static
	   */
			value: function getTopStories(sectionName, callback) {
	
				/**
	    * @default "home"
	    */
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
	
				Connector.sendRequest(url, options, callback);
			}
	
			/**
	   * Function initializing 'url' and 'options' settings variables that
	   * needed for making request to server for searching some data in articles
	   * and realize server paging logic.
	   *
	   * @function
	   * @param {String} query - String of search line that was typed by user.
	   * @param {Integer} page - Needed page of data.
	   * @param {Function} callback - Function that will be invoked when query will be sended.
	   * @static
	   */
	
		}, {
			key: 'searchQuery',
			value: function searchQuery(query, page, callback) {
	
				var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&page=' + page + '&api-key=' + _config2.default.ArticleSearchAPIkey;
	
				var options = {
					method: 'GET',
					headers: {
						'Content-Type': 'text/plain'
					},
					mode: 'cors'
				};
	
				Connector.sendRequest(url, options, callback);
			}
	
			/**
	   * Send a request to remote server for needed data.
	   * 
	   * @function
	   * @param {String} url - Url of the remote server.
	   * @param {Object} options - Settings for request.
	   * @param {String} options.method - Method of HTTP request that will be sended.
	   * @param {String} options.mode - Mode of cross-domain request.
	   * @param {Function} callback - Function that will be invoked when query will be sended.
	   * @static
	   */
	
		}, {
			key: 'sendRequest',
			value: function sendRequest(url, options, callback) {
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjI0NDRlYjI1OWUxNTViMGE2OWUiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ET01NYW5pcHVsYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7S0FFTSxVO0FBRUwseUJBQWM7QUFBQTs7QUFFYix5QkFBSSxPQUFKLEdBQWMsS0FBZCxDQUFvQixLQUFLLGdCQUF6Qjs7QUFFQSx5QkFBSSxHQUFKLENBQVEsaUJBQVIsRUFBMkIsS0FBM0IsQ0FBaUMsS0FBSywwQkFBdEM7QUFDQSx5QkFBSSxHQUFKLENBQVEsZUFBUixFQUF5QixLQUF6QixDQUErQixLQUFLLHdCQUFwQztBQUNBLHlCQUFJLEdBQUosQ0FBUSxlQUFSLEVBQXlCLEtBQXpCLENBQStCLEtBQUssd0JBQXBDO0FBQ0EseUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDO0FBQ0EseUJBQUksR0FBSixDQUFRLHNCQUFSLEVBQWdDLEtBQWhDLENBQXNDLEtBQUssOEJBQTNDO0FBQ0EseUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDOztBQUVBLHlCQUFJLEdBQUosQ0FB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LGNBQVMsU0FBVCxFQUFvQixLQUFwQixFQUEyQjtBQUNoQyxRQUFHLGNBQWMsS0FBakIsRUFBd0I7QUFDdkIsWUFBTyxnQkFBZ0IsWUFBaEIsQ0FBNkIsU0FBN0IsQ0FBUDtBQUNBLEtBRkQsTUFFTztBQUNOLHFCQUFnQixZQUFoQixDQUE2QixTQUE3QixFQUF3QyxLQUF4QztBQUNBLFlBQU8sSUFBUDtBQUNBO0FBQ0QsSUEzRks7O0FBNkZOLGFBQVUsa0JBQVMsT0FBVCxFQUFrQjtBQUMzQixvQkFBZ0IsZ0JBQWhCLENBQWlDLFVBQWpDLEVBQTZDLE9BQTdDLEVBQXNELEtBQXREO0FBQ0EsV0FBTyxJQUFQO0FBQ0E7QUFoR0ssR0FBUDtBQW1HQSxFQXZHb0IsRUFBckI7O1NBeUcyQixHLEdBQWxCLGMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGYyNDQ0ZWIyNTllMTU1YjBhNjllXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBDb25uZWN0b3IgZnJvbSAnLi9jb25uZWN0b3IuanMnO1xyXG5pbXBvcnQgRmFjdG9yeSBmcm9tICcuL2ZhY3RvcnkuanMnO1xyXG5pbXBvcnQgeyBET00gfSBmcm9tICcuL0RPTU1hbmlwdWxhdG9yLmpzJztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHRET00uZ2V0Qm9keSgpLmNsaWNrKHRoaXMuYm9keUNsaWNrSGFuZGxlcik7XHJcblxyXG5cdFx0RE9NLmdldChcInNlY3Rpb25zLWJ1dHRvblwiKS5jbGljayh0aGlzLnNlY3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtYnV0dG9uXCIpLmNsaWNrKHRoaXMuc2VhcmNoQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHRcdERPTS5nZXQoXCJnaXRodWItYnV0dG9uXCIpLmNsaWNrKHRoaXMuZ2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtZ28tYnV0dG9uXCIpLmNsaWNrKHRoaXMuc2VhcmNoR29CdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLmNsaWNrKHRoaXMucHJldmlvdXNQYWdlQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHRcdERPTS5nZXQoXCJuZXh0LXBhZ2UtYnV0dG9uXCIpLmNsaWNrKHRoaXMubmV4dFBhZ2VCdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5jbGljaygoZXZlbnQpID0+IHsgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH0pO1xyXG5cdFx0RE9NLmdldChcInNlYXJjaC1saW5lXCIpLmtleXByZXNzKHRoaXMuc2VhcmNoTGluZUtleVByZXNzSGFuZGxlcik7XHJcblxyXG5cdFx0Zm9yKGxldCBzZWN0aW9uIG9mIGNvbmZpZy5zZWN0aW9ucykge1xyXG5cclxuXHRcdFx0bGV0IGVsZW1lbnQgPSBET01cclxuXHRcdFx0XHRcdFx0XHQuY3JlYXRlKFwibGlcIilcclxuXHRcdFx0XHRcdFx0XHQuc2V0SFRNTChzZWN0aW9uKVxyXG5cdFx0XHRcdFx0XHRcdC5jbGljayh0aGlzLnNlY3Rpb25zTWVudUl0ZW1DbGlja0hhbmRsZXIpXHJcblx0XHRcdFx0XHRcdFx0LmdldEVsZW1lbnQoKTtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51LWl0ZW1zXCIpLmFwcGVuZChlbGVtZW50KTtcclxuXHRcdH1cclxuXHJcblx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLnNob3coKTtcclxuXHJcblx0XHRDb25uZWN0b3IuZ2V0VG9wU3RvcmllcyhcImhvbWVcIiwgQ29udHJvbGxlci51cGRhdGVUb3BTdG9yaWVzKTtcclxuXHJcblx0fVxyXG5cclxuXHRzZWFyY2hMaW5lS2V5UHJlc3NIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0RE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoJ3B1cmUnLCBcImZhbHNlXCIpO1xyXG5cclxuXHRcdGlmKDEzID09PSBldmVudC5rZXlDb2RlKSB7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLmhpZGUoKTtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuc2V0SFRNTCgxKTtcclxuXHRcdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblx0XHRcdFxyXG5cdFx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLnNob3coKTtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKCdwdXJlJywgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdFx0Q29ubmVjdG9yLnNlYXJjaFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRFbGVtZW50KCkudmFsdWUsIDAsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRib2R5Q2xpY2tIYW5kbGVyKCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnNldENsYXNzKFwiaGlkZVwiKTtcclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblxyXG5cdH1cclxuXHJcblx0c2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRpZihcInNob3dcIiA9PT0gRE9NLmdldChcInNlYXJjaC1tZW51XCIpLmdldENsYXNzKCkpIHtcclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnNldENsYXNzKFwiaGlkZVwiKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0RE9NLmdldChcInNlY3Rpb25zLW1lbnVcIikudG9nZ2xlKCk7XHJcblx0XHRcdH0sIDUwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS50b2dnbGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblxyXG5cdHNlYXJjaEJ1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwic2hvd1wiID09PSBET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5nZXRDbGFzcygpKSB7XHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnNldENsYXNzKFwiaGlkZVwiKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0XHR9LCA1MDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblx0Z2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0bG9jYXRpb24uaHJlZiA9IGNvbmZpZy5HaXRIdWJSZWZlcmVuY2U7XHJcblx0fVxyXG5cclxuXHJcblx0c2VjdGlvbnNNZW51SXRlbUNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnNldENsYXNzKFwiaGlkZVwiKTtcclxuXHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJzZWN0aW9uLW5hbWVcIikuaGlkZSgpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJwYWdpbmctbWVudVwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwoMSk7XHJcblx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHJcblx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLnNob3coKTtcclxuXHJcblx0XHRDb25uZWN0b3IuZ2V0VG9wU3RvcmllcyhET00uZ2V0SFRNTCh0aGlzKSwgQ29udHJvbGxlci51cGRhdGVUb3BTdG9yaWVzKTtcclxuXHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblx0XHJcblxyXG5cdHNlYXJjaEdvQnV0dG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLmhpZGUoKTtcclxuXHJcblx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwoMSk7XHJcblx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHRcdFxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0RE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoJ3B1cmUnLCBcInRydWVcIik7XHJcblxyXG5cdFx0Q29ubmVjdG9yLnNlYXJjaFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRFbGVtZW50KCkudmFsdWUsIDAsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHVwZGF0ZVRvcFN0b3JpZXMoZGF0YSkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuY2xlYXIoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmNsZWFyKCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLmNsZWFyKCkuc2V0SFRNTChkYXRhLnNlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkYXRhLnNlY3Rpb24uc2xpY2UoMSkpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYoaSAlIDIgPT09IDApIHtcclxuXHRcdFx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmFwcGVuZEhUTUwoRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5hcHBlbmRIVE1MKEZhY3RvcnkuY3JlYXRlTm90ZShkYXRhLnJlc3VsdHNbaV0sIChpIDwgNCkgPyBcIm1haW5cIiA6IFwibGlzdFwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuc2hvdygpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuc2hvdygpO1xyXG5cdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgdXBkYXRlU2VhcmNoZXMoZGF0YSkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuY2xlYXIoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmNsZWFyKCk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGRhdGEucmVzcG9uc2UuZG9jcy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZihpICUgMiA9PT0gMCkge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuYXBwZW5kSFRNTChGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YS5yZXNwb25zZS5kb2NzW2ldLCBcInNlYXJjaFwiKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuYXBwZW5kSFRNTChGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YS5yZXNwb25zZS5kb2NzW2ldLCBcInNlYXJjaFwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuc2hvdygpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuc2hvdygpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJwYWdpbmctbWVudVwiKS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHRwcmV2aW91c1BhZ2VCdXR0b25DbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRpZihcImZhbHNlXCIgPT09IERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKFwicHVyZVwiKSkge1xyXG5cclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoXCJwdXJlXCIsIFwidHJ1ZVwiKTtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuc2V0SFRNTCgxKTtcclxuXHRcdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblxyXG5cdFx0XHRDb25uZWN0b3Iuc2VhcmNoUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldEVsZW1lbnQoKS52YWx1ZSwgMCwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGxldCBwYWdlID0gK0RPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuZ2V0SFRNTCgpO1xyXG5cclxuXHRcdFx0cGFnZSA9IHBhZ2UgLSAxO1xyXG5cclxuXHRcdFx0aWYoMSA9PT0gcGFnZSkge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5zZXRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwocGFnZSk7XHJcblx0XHRcdENvbm5lY3Rvci5zZWFyY2hRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0RWxlbWVudCgpLnZhbHVlLCBwYWdlIC0gMSwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRuZXh0UGFnZUJ1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwiZmFsc2VcIiA9PT0gRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoXCJwdXJlXCIpKSB7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cihcInB1cmVcIiwgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHJcblx0XHRcdENvbm5lY3Rvci5zZWFyY2hRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0RWxlbWVudCgpLnZhbHVlLCAwLCBDb250cm9sbGVyLnVwZGF0ZVNlYXJjaGVzKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0bGV0IHBhZ2UgPSArRE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5nZXRIVE1MKCk7XHJcblxyXG5cdFx0XHRwYWdlID0gcGFnZSArIDE7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJcIik7XHJcblx0XHRcdERPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuc2V0SFRNTChwYWdlKTtcclxuXHJcblx0XHRcdENvbm5lY3Rvci5zZWFyY2hRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0RWxlbWVudCgpLnZhbHVlLCBwYWdlIC0gMSwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHRjb25zdCBfaW5zdGFuY2UgPSBuZXcgQ29udHJvbGxlcigpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHQnVG9wU3Rvcmllc0FQSWtleScgOiAnYjUxNzFjMGY2Njc2ZDc0ZGE2Y2I5OWY3Y2NmYzZhYWE6MDo3NTA1OTkzMycsXHJcblx0J0FydGljbGVTZWFyY2hBUElrZXknIDogJzU4NTgzY2EyOWUwYjVhMjkxNmRkNWM3YmZmZDQ1MThkOjE0Ojc1MDU5OTMzJyxcclxuXHQnc2VjdGlvbnMnIDogWydIb21lJywgJ1dvcmxkJywgJ05hdGlvbmFsJywgJ1BvbGl0aWNzJywgJ055cmVnaW9uJywgJ0J1c2luZXNzJywgJ09waW5pb24nLCAnVGVjaG5vbG9neScsXHJcblx0XHRcdFx0ICAnU2NpZW5jZScsICdIZWFsdGgnLCAnU3BvcnRzJywgJ0FydHMnLCAnRmFzaGlvbicsICdEaW5pbmcnLCAnVHJhdmVsJywgJ01hZ2F6aW5lJywgJ1JlYWxlc3RhdGUnXSxcclxuXHQnR2l0SHViUmVmZXJlbmNlJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9aYW1OaWNrL2VwYW0udGVzdC5wcm9qZWN0J1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25maWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIHJlcHJlc2VudCBhbiBpbnN0YW5jZSBmb3IgbWFrZSBjb25uZWN0aW9uIHRvIFxyXG4gKiBUaGUgTmV3IFlvcmsgVGltZXMgc2VydmVyIGZvciBncmFiaW5nIG5lY2Vzc2FyeSBkYXRhLlxyXG4gKiBAY2xhc3NcclxuICpcclxuICogQHJlcXVpcmVzIGNvbmZpZy5qc1xyXG4gKiBAYXV0aG9yIE5pa29sYXkgWmFtdWxvdiA8emFtdWxvdjhAZ21haWwuY29tPiBcclxuICovXHJcbmNsYXNzIENvbm5lY3RvciB7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gaW5pdGlhbGl6aW5nICd1cmwnIGFuZCAnb3B0aW9ucycgc2V0dGluZ3MgdmFyaWFibGVzIHRoYXRcclxuXHQgKiBuZWVkZWQgZm9yIG1ha2luZyByZXF1ZXN0IHRvIHNlcnZlciBmb3IgZ3JhYmluZyB0aGUgdG9wIHN0b3JpZXMgZGF0YS5cclxuXHQgKiBcclxuXHQgKiBAZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3NlY3Rpb25OYW1lXSAtIFRoZSBuYW1lIG9mIG5lZWRlZCBzZWN0aW9uIG9mIG5ld3MuXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHF1ZXJ5IHdpbGwgYmUgc2VuZGVkLlxyXG5cdCAqIEBzdGF0aWNcclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0VG9wU3RvcmllcyhzZWN0aW9uTmFtZSwgY2FsbGJhY2spIHtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBkZWZhdWx0IFwiaG9tZVwiXHJcblx0XHQgKi9cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUgfHwgXCJob21lXCI7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGxldCB1cmwgPSBgaHR0cDovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92MS8ke3NlY3Rpb25OYW1lfS5qc29uP2FwaS1rZXk9JHtjb25maWcuVG9wU3Rvcmllc0FQSWtleX1gO1xyXG5cclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb2RlOiAnY29ycydcclxuXHRcdH07XHJcblxyXG5cdFx0Q29ubmVjdG9yLnNlbmRSZXF1ZXN0KHVybCwgb3B0aW9ucywgY2FsbGJhY2spO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gaW5pdGlhbGl6aW5nICd1cmwnIGFuZCAnb3B0aW9ucycgc2V0dGluZ3MgdmFyaWFibGVzIHRoYXRcclxuXHQgKiBuZWVkZWQgZm9yIG1ha2luZyByZXF1ZXN0IHRvIHNlcnZlciBmb3Igc2VhcmNoaW5nIHNvbWUgZGF0YSBpbiBhcnRpY2xlc1xyXG5cdCAqIGFuZCByZWFsaXplIHNlcnZlciBwYWdpbmcgbG9naWMuXHJcblx0ICpcclxuXHQgKiBAZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgLSBTdHJpbmcgb2Ygc2VhcmNoIGxpbmUgdGhhdCB3YXMgdHlwZWQgYnkgdXNlci5cclxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHBhZ2UgLSBOZWVkZWQgcGFnZSBvZiBkYXRhLlxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBxdWVyeSB3aWxsIGJlIHNlbmRlZC5cclxuXHQgKiBAc3RhdGljXHJcblx0ICovXHJcblx0c3RhdGljIHNlYXJjaFF1ZXJ5KHF1ZXJ5LCBwYWdlLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdGxldCB1cmwgPSBgaHR0cDovL2FwaS5ueXRpbWVzLmNvbS9zdmMvc2VhcmNoL3YyL2FydGljbGVzZWFyY2guanNvbj9xPSR7cXVlcnl9JnBhZ2U9JHtwYWdlfSZhcGkta2V5PSR7Y29uZmlnLkFydGljbGVTZWFyY2hBUElrZXl9YDtcclxuXHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcclxuXHRcdFx0fSxcclxuXHRcdFx0bW9kZTogJ2NvcnMnXHJcblx0XHR9O1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZW5kUmVxdWVzdCh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuXHRcdFx0XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNlbmQgYSByZXF1ZXN0IHRvIHJlbW90ZSBzZXJ2ZXIgZm9yIG5lZWRlZCBkYXRhLlxyXG5cdCAqIFxyXG5cdCAqIEBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgLSBVcmwgb2YgdGhlIHJlbW90ZSBzZXJ2ZXIuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBTZXR0aW5ncyBmb3IgcmVxdWVzdC5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5tZXRob2QgLSBNZXRob2Qgb2YgSFRUUCByZXF1ZXN0IHRoYXQgd2lsbCBiZSBzZW5kZWQuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMubW9kZSAtIE1vZGUgb2YgY3Jvc3MtZG9tYWluIHJlcXVlc3QuXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHF1ZXJ5IHdpbGwgYmUgc2VuZGVkLlxyXG5cdCAqIEBzdGF0aWNcclxuXHQgKi9cclxuXHRzdGF0aWMgc2VuZFJlcXVlc3QodXJsLCBvcHRpb25zLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdGZldGNoKHVybCwgb3B0aW9ucylcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuXHRcdFx0XHRcdGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGNhbGxiYWNrKGRhdGEpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVxdWVzdCBmYWlsZWQ6IFwiICsgZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29ubmVjdG9yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IE5vdGUgZnJvbSAnLi9ub3RlLmpzJztcclxuXHJcbmNsYXNzIEZhY3Rvcnkge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlTm90ZShkYXRhLCB0eXBlKSB7XHJcblx0XHRpZihcIm1haW5cIiA9PT0gdHlwZSkge1xyXG5cdFx0XHRyZXR1cm4gTm90ZS5nZXRNYWluTm90ZShkYXRhKTtcclxuXHRcdH0gZWxzZSBpZihcImxpc3RcIiA9PT0gdHlwZSkge1xyXG5cdFx0XHRyZXR1cm4gTm90ZS5nZXRMaXN0Tm90ZShkYXRhKTtcclxuXHRcdH0gZWxzZSBpZihcInNlYXJjaFwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLmdldFNlYXJjaE5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3cgdHlwZSBvZiBub3RlLlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN0b3J5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZmFjdG9yeS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIE5vdGUge1xyXG5cclxuXHRzdGF0aWMgZ2V0TWFpbk5vdGUoZGF0YSkge1xyXG5cclxuXHRcdGxldCBpbWcgPSAoXCJcIiAhPT0gZGF0YS5tdWx0aW1lZGlhKSA/XHRgPGRpdiBjbGFzcz1cIm1haW4tbm90ZS13cmFwcGVyLWltYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzNdLnVybCB9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PmAgOiBgYDtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibWFpbi1ub3RlXCI+XHJcblx0XHRcdFx0XHRcdDxoMj48YSBocmVmPVwiJHsgZGF0YS51cmwgfVwiPiR7IGRhdGEudGl0bGUgfTwvYT48L2gyPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgZGF0YS5ieWxpbmUgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQkeyBpbWcgfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3JlZGl0XCI+JHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVszXS5jb3B5cmlnaHQgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLmFic3RyYWN0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldExpc3ROb3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibGlzdC1ub3RlXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVswXS51cmwgfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+PGEgaHJlZj1cIiR7IGRhdGEudXJsIH1cIj4keyBkYXRhLnRpdGxlIH08L2E+PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieWxpbmVcIj4keyBkYXRhLmJ5bGluZSB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPiR7IGRhdGEuYWJzdHJhY3QgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+YDtcclxuXHJcblx0XHRyZXR1cm4gbm90ZTtcclxuXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0U2VhcmNoTm90ZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IGltZyA9ICgwICE9PSBkYXRhLm11bHRpbWVkaWEubGVuZ3RoKSA/IGBzdHlsZT1cIm1pbi1oZWlnaHQ6IDE1MHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7KFwiaHR0cDovL3N0YXRpYzAxLm55dC5jb20vXCIgKyBkYXRhLm11bHRpbWVkaWFbMF0udXJsKX1cIiBzdHlsZT1cImhlaWdodDogMTMwcHg7IHdpZHRoOiAxOTBweDtcIj5gIDogYD5gO1xyXG5cclxuXHRcdGxldCBub3RlID0gYDxkaXYgY2xhc3M9XCJsaXN0LW5vdGVcIiR7IGltZyB9XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz48YSBocmVmPVwiJHsgZGF0YS53ZWJfdXJsIH1cIj4keyBkYXRhLmhlYWRsaW5lLm1haW4gfTwvYT48L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IG51bGwgPT09IGRhdGEuYnlsaW5lID8gXCJcIiA6IGRhdGEuYnlsaW5lLm9yaWdpbmFsIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFic3RyYWN0XCI+JHsgZGF0YS5zbmlwcGV0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ub3RlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IERPTU1hbmlwdWxhdG9yID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRsZXQgX2N1cnJlbnRFbGVtZW50O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0OiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRFbGVtZW50OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIF9jdXJyZW50RWxlbWVudDtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0Qm9keTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjbGljazogZnVuY3Rpb24oaGFuZGxlcikge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjcmVhdGU6IGZ1bmN0aW9uKHRhZ25hbWUpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWduYW1lKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsZWFyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0d2hpbGUoX2N1cnJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoX2N1cnJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRDbGFzczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRDbGFzczogZnVuY3Rpb24oY2xhc3NuYW1lKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc25hbWU7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRIVE1MOiBmdW5jdGlvbihodG1sKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0SFRNTDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRlbGVtZW50ID0gZWxlbWVudCB8fCBfY3VycmVudEVsZW1lbnQ7XHJcblx0XHRcdHJldHVybiBlbGVtZW50LmlubmVySFRNTDtcclxuXHRcdH0sXHJcblxyXG5cdFx0YXBwZW5kSFRNTDogZnVuY3Rpb24oaHRtbCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuaW5uZXJIVE1MICs9IGh0bWw7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzaG93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoXCJsaXN0LW9mLW5vdGVzXCIgPT09IF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUpIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGhpZGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YXBwZW5kOiBmdW5jdGlvbihjaGlsZCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0dG9nZ2xlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoXCJoaWRlXCIgPT09IF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUpIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lID0gXCJzaG93XCI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSA9IFwiaGlkZVwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhdHRyOiBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlKSB7XHJcblx0XHRcdGlmKHVuZGVmaW5lZCA9PT0gdmFsdWUpIHtcclxuXHRcdFx0XHRyZXR1cm4gX2N1cnJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0a2V5cHJlc3M6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgaGFuZGxlciwgZmFsc2UpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9XHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgRE9NTWFuaXB1bGF0b3IgYXMgRE9NIH07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ET01NYW5pcHVsYXRvci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=