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
	
	/**
	 * A class represent an instance that create needed
	 * news note using passed metadata of current one news
	 * and needed type of note.
	 * @class
	 *
	 * @requires note.js
	 * @author Nikolay Zamulov <zamulov8@gmail.com> 
	 */
	
	var Factory = function () {
		function Factory() {
			_classCallCheck(this, Factory);
		}
	
		_createClass(Factory, null, [{
			key: 'createNote',
	
	
			/**
	   * Function create a needed type of current one news note.
	   * Represent a simple factory pattern.
	   * 
	   * @function
	   * @param {Object} data - Metadata of current one news.
	   * @param {String} type - Needed type for current one news note.
	   * @static
	   * @returns {String | Error} - HTML code of current one news for adding it into 
	   * web-site content or error for unknow type note.
	   */
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
	
	/**
	 * A class represent an instance of note
	 * that display on user monitor and contain
	 * news data from some news section.
	 * @class
	 * 
	 * @author Nikolay Zamulov <zamulov8@gmail.com> 
	 */
	
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
	
	
			/**
	   * Function create a main note that represented on web-site
	   * like a note with big size image and this note corresponding 
	   * for more important news.
	   * 
	   * @function
	   * @param {Object} data - The news metadata.
	   * @param {Array} data.multimedia - Container of multimedia data.
	   * @param {String} data.multimedia[].url - Remote address of current one news image.
	   * @param {String} data.multimedia[].copyright - The author of current one news image.
	   * @param {String} data.url - Remote address of corresponding article on main site.
	   * @param {String} data.title - Title of current one news.
	   * @param {String} data.byline - The author of current one news.
	   * @param {String} data.abstract - Short article story of current one news.
	   * @static
	   * @returns {String} - HTML code of current one news for adding it into web-site content.
	   */
			value: function getMainNote(data) {
	
				var img = "" !== data.multimedia ? "<div class=\"main-note-wrapper-image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"" + ("" === data.multimedia ? "" : data.multimedia[3].url) + "\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>" : "";
	
				var note = "<div class=\"main-note\">\n\t\t\t\t\t\t<h2><a href=\"" + data.url + "\">" + data.title + "</a></h2>\n\t\t\t\t\t\t<div class=\"byline\">" + data.byline + "</div>\n\t\t\t\t\t\t" + img + "\n\t\t\t\t\t\t<div class=\"credit\">" + ("" === data.multimedia ? "" : data.multimedia[3].copyright) + "</div>\n\t\t\t\t\t\t<div class=\"abstract\">" + data.abstract + "</div>\n\t\t\t\t\t</div>";
	
				return note;
			}
	
			/**
	   * Function create a list note that represented on web-site
	   * like a note with small size image and that note contains into
	   * left or right list of notes. This note corresponding
	   * for secondary news.
	   *
	   * @function
	   * @param {Object} data - The news metadata.
	   * @param {Array} data.multimedia - Container of multimedia data.
	   * @param {String} data.multimedia[].url - Remote address of current one news image.
	   * @param {String} data.url - Remote address of corresponding article on main site.
	   * @param {String} data.title - Title of current one news.
	   * @param {String} data.byline - The author of current one news.
	   * @param {String} data.abstract - Short article story of current one news.
	   * @static
	   * @returns {String} - HTML code of current one news for adding it into web-site content.
	   */
	
		}, {
			key: "getListNote",
			value: function getListNote(data) {
	
				var note = "<div class=\"list-note\">\n\t\t\t\t\t\t<img src=\"" + ("" === data.multimedia ? "" : data.multimedia[0].url) + "\">\n\t\t\t\t\t\t<div class=\"headline\">\n\t\t\t\t\t\t\t<h3><a href=\"" + data.url + "\">" + data.title + "</a></h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"byline\">" + data.byline + "</div>\n\t\t\t\t\t\t<div class=\"abstract\">" + data.abstract + "</div>\n\t\t\t\t\t</div>";
	
				return note;
			}
	
			/**
	   * Function create a search note that represented on web-site
	   * like a note with medium size image and that note contains into
	   * left or right list of notes. This note corresponding
	   * for searching news.
	   * 
	   * @function
	   * @param {Object} data - The news metadata.
	   * @param {Array} data.multimedia - Container of multimedia data.
	   * @param {String} data.multimedia[].url - Remote address of current one news image.
	   * @param {String} data.web_url - Remote address of corresponding article on main site.
	   * @param {Object} data.headline - Metadata of title of current one news.
	   * @param {String} data.headline.main - Title of current one news.
	   * @param {Object} data.byline - Metadata of author of current one news.
	   * @param {String} data.byline.original - The author of current one news.
	   * @param {String} data.snippet - Short article story of current one news.
	   * @static
	   * @returns {String} - HTML code of current one news for adding it into web-site content.
	   */
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWUxYjc4ZWIzMjczZTgwYzk4YzMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ET01NYW5pcHVsYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7S0FFTSxVO0FBRUwseUJBQWM7QUFBQTs7QUFFYix5QkFBSSxPQUFKLEdBQWMsS0FBZCxDQUFvQixLQUFLLGdCQUF6Qjs7QUFFQSx5QkFBSSxHQUFKLENBQVEsaUJBQVIsRUFBMkIsS0FBM0IsQ0FBaUMsS0FBSywwQkFBdEM7QUFDQSx5QkFBSSxHQUFKLENBQVEsZUFBUixFQUF5QixLQUF6QixDQUErQixLQUFLLHdCQUFwQztBQUNBLHlCQUFJLEdBQUosQ0FBUSxlQUFSLEVBQXlCLEtBQXpCLENBQStCLEtBQUssd0JBQXBDO0FBQ0EseUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDO0FBQ0EseUJBQUksR0FBSixDQUFRLHNCQUFSLEVBQWdDLEtBQWhDLENBQXNDLEtBQUssOEJBQTNDO0FBQ0EseUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDOztBQUVBLHlCQUFJLEdBQUosQ0FB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LE1BQTVCO0FBQ0EsS0FGRCxNQUVPO0FBQ04scUJBQWdCLFNBQWhCLEdBQTRCLE1BQTVCO0FBQ0E7QUFDRCxXQUFPLElBQVA7QUFDQSxJQWxGSzs7QUFvRk4sU0FBTSxjQUFTLFNBQVQsRUFBb0IsS0FBcEIsRUFBMkI7QUFDaEMsUUFBRyxjQUFjLEtBQWpCLEVBQXdCO0FBQ3ZCLFlBQU8sZ0JBQWdCLFlBQWhCLENBQTZCLFNBQTdCLENBQVA7QUFDQSxLQUZELE1BRU87QUFDTixxQkFBZ0IsWUFBaEIsQ0FBNkIsU0FBN0IsRUFBd0MsS0FBeEM7QUFDQSxZQUFPLElBQVA7QUFDQTtBQUNELElBM0ZLOztBQTZGTixhQUFVLGtCQUFTLE9BQVQsRUFBa0I7QUFDM0Isb0JBQWdCLGdCQUFoQixDQUFpQyxVQUFqQyxFQUE2QyxPQUE3QyxFQUFzRCxLQUF0RDtBQUNBLFdBQU8sSUFBUDtBQUNBO0FBaEdLLEdBQVA7QUFtR0EsRUF2R29CLEVBQXJCOztTQXlHMkIsRyxHQUFsQixjIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZTFiNzhlYjMyNzNlODBjOThjM1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuanMnO1xyXG5pbXBvcnQgQ29ubmVjdG9yIGZyb20gJy4vY29ubmVjdG9yLmpzJztcclxuaW1wb3J0IEZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5LmpzJztcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9ET01NYW5pcHVsYXRvci5qcyc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0RE9NLmdldEJvZHkoKS5jbGljayh0aGlzLmJvZHlDbGlja0hhbmRsZXIpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWN0aW9ucy1idXR0b25cIikuY2xpY2sodGhpcy5zZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWJ1dHRvblwiKS5jbGljayh0aGlzLnNlYXJjaEJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwiZ2l0aHViLWJ1dHRvblwiKS5jbGljayh0aGlzLmdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWdvLWJ1dHRvblwiKS5jbGljayh0aGlzLnNlYXJjaEdvQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5jbGljayh0aGlzLnByZXZpb3VzUGFnZUJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwibmV4dC1wYWdlLWJ1dHRvblwiKS5jbGljayh0aGlzLm5leHRQYWdlQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuY2xpY2soKGV2ZW50KSA9PiB7IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9KTtcclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5rZXlwcmVzcyh0aGlzLnNlYXJjaExpbmVLZXlQcmVzc0hhbmRsZXIpO1xyXG5cclxuXHRcdGZvcihsZXQgc2VjdGlvbiBvZiBjb25maWcuc2VjdGlvbnMpIHtcclxuXHJcblx0XHRcdGxldCBlbGVtZW50ID0gRE9NXHJcblx0XHRcdFx0XHRcdFx0LmNyZWF0ZShcImxpXCIpXHJcblx0XHRcdFx0XHRcdFx0LnNldEhUTUwoc2VjdGlvbilcclxuXHRcdFx0XHRcdFx0XHQuY2xpY2sodGhpcy5zZWN0aW9uc01lbnVJdGVtQ2xpY2tIYW5kbGVyKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRFbGVtZW50KCk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudS1pdGVtc1wiKS5hcHBlbmQoZWxlbWVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0Q29ubmVjdG9yLmdldFRvcFN0b3JpZXMoXCJob21lXCIsIENvbnRyb2xsZXIudXBkYXRlVG9wU3Rvcmllcyk7XHJcblxyXG5cdH1cclxuXHJcblx0c2VhcmNoTGluZUtleVByZXNzSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKCdwdXJlJywgXCJmYWxzZVwiKTtcclxuXHJcblx0XHRpZigxMyA9PT0gZXZlbnQua2V5Q29kZSkge1xyXG5cclxuXHRcdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5oaWRlKCk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwoMSk7XHJcblx0XHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5zZXRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cdFx0XHRcclxuXHRcdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cigncHVyZScsIFwidHJ1ZVwiKTtcclxuXHJcblx0XHRcdENvbm5lY3Rvci5zZWFyY2hRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0RWxlbWVudCgpLnZhbHVlLCAwLCBDb250cm9sbGVyLnVwZGF0ZVNlYXJjaGVzKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Ym9keUNsaWNrSGFuZGxlcigpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuc2V0Q2xhc3MoXCJoaWRlXCIpO1xyXG5cclxuXHR9XHJcblxyXG5cdHNlY3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYoXCJzaG93XCIgPT09IERPTS5nZXQoXCJzZWFyY2gtbWVudVwiKS5nZXRDbGFzcygpKSB7XHJcblx0XHRcdERPTS5nZXQoXCJzZWFyY2gtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0XHR9LCA1MDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0RE9NLmdldChcInNlY3Rpb25zLW1lbnVcIikudG9nZ2xlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRzZWFyY2hCdXR0b25DbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRpZihcInNob3dcIiA9PT0gRE9NLmdldChcInNlY3Rpb25zLW1lbnVcIikuZ2V0Q2xhc3MoKSkge1xyXG5cdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJzZWFyY2gtbWVudVwiKS50b2dnbGUoKTtcclxuXHRcdFx0fSwgNTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdERPTS5nZXQoXCJzZWFyY2gtbWVudVwiKS50b2dnbGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblxyXG5cdGdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcigpIHtcclxuXHRcdGxvY2F0aW9uLmhyZWYgPSBjb25maWcuR2l0SHViUmVmZXJlbmNlO1xyXG5cdH1cclxuXHJcblxyXG5cdHNlY3Rpb25zTWVudUl0ZW1DbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLmhpZGUoKTtcclxuXHJcblx0XHRET00uZ2V0KFwicGFnaW5nLW1lbnVcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0Q29ubmVjdG9yLmdldFRvcFN0b3JpZXMoRE9NLmdldEhUTUwodGhpcyksIENvbnRyb2xsZXIudXBkYXRlVG9wU3Rvcmllcyk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRzZWFyY2hHb0J1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5oaWRlKCk7XHJcblxyXG5cdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblx0XHRcclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKCdwdXJlJywgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZWFyY2hRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0RWxlbWVudCgpLnZhbHVlLCAwLCBDb250cm9sbGVyLnVwZGF0ZVNlYXJjaGVzKTtcclxuXHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB1cGRhdGVUb3BTdG9yaWVzKGRhdGEpIHtcclxuXHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmNsZWFyKCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5jbGVhcigpO1xyXG5cdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5jbGVhcigpLnNldEhUTUwoZGF0YS5zZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGF0YS5zZWN0aW9uLnNsaWNlKDEpKTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdGlmKGkgJSAyID09PSAwKSB7XHJcblx0XHRcdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5hcHBlbmRIVE1MKEZhY3RvcnkuY3JlYXRlTm90ZShkYXRhLnJlc3VsdHNbaV0sIChpIDwgNCkgPyBcIm1haW5cIiA6IFwibGlzdFwiKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuYXBwZW5kSFRNTChGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YS5yZXN1bHRzW2ldLCAoaSA8IDQpID8gXCJtYWluXCIgOiBcImxpc3RcIikpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLnNob3coKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLnNob3coKTtcclxuXHRcdERPTS5nZXQoXCJzZWN0aW9uLW5hbWVcIikuc2hvdygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHVwZGF0ZVNlYXJjaGVzKGRhdGEpIHtcclxuXHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmNsZWFyKCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5jbGVhcigpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLnJlc3BvbnNlLmRvY3MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYoaSAlIDIgPT09IDApIHtcclxuXHRcdFx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmFwcGVuZEhUTUwoRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzcG9uc2UuZG9jc1tpXSwgXCJzZWFyY2hcIikpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmFwcGVuZEhUTUwoRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzcG9uc2UuZG9jc1tpXSwgXCJzZWFyY2hcIikpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLnNob3coKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLnNob3coKTtcclxuXHJcblx0XHRET00uZ2V0KFwicGFnaW5nLW1lbnVcIikuc2hvdygpO1xyXG5cdH1cclxuXHJcblx0cHJldmlvdXNQYWdlQnV0dG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYoXCJmYWxzZVwiID09PSBET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cihcInB1cmVcIikpIHtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKFwicHVyZVwiLCBcInRydWVcIik7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwoMSk7XHJcblx0XHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5zZXRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cclxuXHRcdFx0Q29ubmVjdG9yLnNlYXJjaFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRFbGVtZW50KCkudmFsdWUsIDAsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRsZXQgcGFnZSA9ICtET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLmdldEhUTUwoKTtcclxuXHJcblx0XHRcdHBhZ2UgPSBwYWdlIC0gMTtcclxuXHJcblx0XHRcdGlmKDEgPT09IHBhZ2UpIHtcclxuXHRcdFx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKHBhZ2UpO1xyXG5cdFx0XHRDb25uZWN0b3Iuc2VhcmNoUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldEVsZW1lbnQoKS52YWx1ZSwgcGFnZSAtIDEsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblx0bmV4dFBhZ2VCdXR0b25DbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRpZihcImZhbHNlXCIgPT09IERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKFwicHVyZVwiKSkge1xyXG5cclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoXCJwdXJlXCIsIFwidHJ1ZVwiKTtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuc2V0SFRNTCgxKTtcclxuXHRcdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblxyXG5cdFx0XHRDb25uZWN0b3Iuc2VhcmNoUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldEVsZW1lbnQoKS52YWx1ZSwgMCwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGxldCBwYWdlID0gK0RPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuZ2V0SFRNTCgpO1xyXG5cclxuXHRcdFx0cGFnZSA9IHBhZ2UgKyAxO1xyXG5cclxuXHRcdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiXCIpO1xyXG5cdFx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwocGFnZSk7XHJcblxyXG5cdFx0XHRDb25uZWN0b3Iuc2VhcmNoUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldEVsZW1lbnQoKS52YWx1ZSwgcGFnZSAtIDEsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblx0Y29uc3QgX2luc3RhbmNlID0gbmV3IENvbnRyb2xsZXIoKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0J1RvcFN0b3JpZXNBUElrZXknIDogJ2I1MTcxYzBmNjY3NmQ3NGRhNmNiOTlmN2NjZmM2YWFhOjA6NzUwNTk5MzMnLFxyXG5cdCdBcnRpY2xlU2VhcmNoQVBJa2V5JyA6ICc1ODU4M2NhMjllMGI1YTI5MTZkZDVjN2JmZmQ0NTE4ZDoxNDo3NTA1OTkzMycsXHJcblx0J3NlY3Rpb25zJyA6IFsnSG9tZScsICdXb3JsZCcsICdOYXRpb25hbCcsICdQb2xpdGljcycsICdOeXJlZ2lvbicsICdCdXNpbmVzcycsICdPcGluaW9uJywgJ1RlY2hub2xvZ3knLFxyXG5cdFx0XHRcdCAgJ1NjaWVuY2UnLCAnSGVhbHRoJywgJ1Nwb3J0cycsICdBcnRzJywgJ0Zhc2hpb24nLCAnRGluaW5nJywgJ1RyYXZlbCcsICdNYWdhemluZScsICdSZWFsZXN0YXRlJ10sXHJcblx0J0dpdEh1YlJlZmVyZW5jZSc6ICdodHRwczovL2dpdGh1Yi5jb20vWmFtTmljay9lcGFtLnRlc3QucHJvamVjdCdcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29uZmlnLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG4vKipcclxuICogQSBjbGFzcyByZXByZXNlbnQgYW4gaW5zdGFuY2UgZm9yIG1ha2UgY29ubmVjdGlvbiB0byBcclxuICogVGhlIE5ldyBZb3JrIFRpbWVzIHNlcnZlciBmb3IgZ3JhYmluZyBuZWNlc3NhcnkgZGF0YS5cclxuICogQGNsYXNzXHJcbiAqXHJcbiAqIEByZXF1aXJlcyBjb25maWcuanNcclxuICogQGF1dGhvciBOaWtvbGF5IFphbXVsb3YgPHphbXVsb3Y4QGdtYWlsLmNvbT4gXHJcbiAqL1xyXG5jbGFzcyBDb25uZWN0b3Ige1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZ1bmN0aW9uIGluaXRpYWxpemluZyAndXJsJyBhbmQgJ29wdGlvbnMnIHNldHRpbmdzIHZhcmlhYmxlcyB0aGF0XHJcblx0ICogbmVlZGVkIGZvciBtYWtpbmcgcmVxdWVzdCB0byBzZXJ2ZXIgZm9yIGdyYWJpbmcgdGhlIHRvcCBzdG9yaWVzIGRhdGEuXHJcblx0ICogXHJcblx0ICogQGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtzZWN0aW9uTmFtZV0gLSBUaGUgbmFtZSBvZiBuZWVkZWQgc2VjdGlvbiBvZiBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBxdWVyeSB3aWxsIGJlIHNlbmRlZC5cclxuXHQgKiBAc3RhdGljXHJcblx0ICovXHJcblx0c3RhdGljIGdldFRvcFN0b3JpZXMoc2VjdGlvbk5hbWUsIGNhbGxiYWNrKSB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAZGVmYXVsdCBcImhvbWVcIlxyXG5cdFx0ICovXHJcblx0XHRzZWN0aW9uTmFtZSA9IHNlY3Rpb25OYW1lIHx8IFwiaG9tZVwiO1xyXG5cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRsZXQgdXJsID0gYGh0dHA6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3RvcHN0b3JpZXMvdjEvJHtzZWN0aW9uTmFtZX0uanNvbj9hcGkta2V5PSR7Y29uZmlnLlRvcFN0b3JpZXNBUElrZXl9YDtcclxuXHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcclxuXHRcdFx0fSxcclxuXHRcdFx0bW9kZTogJ2NvcnMnXHJcblx0XHR9O1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZW5kUmVxdWVzdCh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZ1bmN0aW9uIGluaXRpYWxpemluZyAndXJsJyBhbmQgJ29wdGlvbnMnIHNldHRpbmdzIHZhcmlhYmxlcyB0aGF0XHJcblx0ICogbmVlZGVkIGZvciBtYWtpbmcgcmVxdWVzdCB0byBzZXJ2ZXIgZm9yIHNlYXJjaGluZyBzb21lIGRhdGEgaW4gYXJ0aWNsZXNcclxuXHQgKiBhbmQgcmVhbGl6ZSBzZXJ2ZXIgcGFnaW5nIGxvZ2ljLlxyXG5cdCAqXHJcblx0ICogQGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IC0gU3RyaW5nIG9mIHNlYXJjaCBsaW5lIHRoYXQgd2FzIHR5cGVkIGJ5IHVzZXIuXHJcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBwYWdlIC0gTmVlZGVkIHBhZ2Ugb2YgZGF0YS5cclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gcXVlcnkgd2lsbCBiZSBzZW5kZWQuXHJcblx0ICogQHN0YXRpY1xyXG5cdCAqL1xyXG5cdHN0YXRpYyBzZWFyY2hRdWVyeShxdWVyeSwgcGFnZSwgY2FsbGJhY2spIHtcclxuXHJcblx0XHRsZXQgdXJsID0gYGh0dHA6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3NlYXJjaC92Mi9hcnRpY2xlc2VhcmNoLmpzb24/cT0ke3F1ZXJ5fSZwYWdlPSR7cGFnZX0mYXBpLWtleT0ke2NvbmZpZy5BcnRpY2xlU2VhcmNoQVBJa2V5fWA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGU6ICdjb3JzJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRDb25uZWN0b3Iuc2VuZFJlcXVlc3QodXJsLCBvcHRpb25zLCBjYWxsYmFjayk7XHJcblx0XHRcdFxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTZW5kIGEgcmVxdWVzdCB0byByZW1vdGUgc2VydmVyIGZvciBuZWVkZWQgZGF0YS5cclxuXHQgKiBcclxuXHQgKiBAZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdXJsIC0gVXJsIG9mIHRoZSByZW1vdGUgc2VydmVyLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU2V0dGluZ3MgZm9yIHJlcXVlc3QuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMubWV0aG9kIC0gTWV0aG9kIG9mIEhUVFAgcmVxdWVzdCB0aGF0IHdpbGwgYmUgc2VuZGVkLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLm1vZGUgLSBNb2RlIG9mIGNyb3NzLWRvbWFpbiByZXF1ZXN0LlxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBxdWVyeSB3aWxsIGJlIHNlbmRlZC5cclxuXHQgKiBAc3RhdGljXHJcblx0ICovXHJcblx0c3RhdGljIHNlbmRSZXF1ZXN0KHVybCwgb3B0aW9ucywgY2FsbGJhY2spIHtcclxuXHJcblx0XHRmZXRjaCh1cmwsIG9wdGlvbnMpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcblx0XHRcdFx0XHRlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRjYWxsYmFjayhkYXRhKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOiBcIiArIGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RvcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Nvbm5lY3Rvci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBOb3RlIGZyb20gJy4vbm90ZS5qcyc7XHJcblxyXG4vKipcclxuICogQSBjbGFzcyByZXByZXNlbnQgYW4gaW5zdGFuY2UgdGhhdCBjcmVhdGUgbmVlZGVkXHJcbiAqIG5ld3Mgbm90ZSB1c2luZyBwYXNzZWQgbWV0YWRhdGEgb2YgY3VycmVudCBvbmUgbmV3c1xyXG4gKiBhbmQgbmVlZGVkIHR5cGUgb2Ygbm90ZS5cclxuICogQGNsYXNzXHJcbiAqXHJcbiAqIEByZXF1aXJlcyBub3RlLmpzXHJcbiAqIEBhdXRob3IgTmlrb2xheSBaYW11bG92IDx6YW11bG92OEBnbWFpbC5jb20+IFxyXG4gKi9cclxuY2xhc3MgRmFjdG9yeSB7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gY3JlYXRlIGEgbmVlZGVkIHR5cGUgb2YgY3VycmVudCBvbmUgbmV3cyBub3RlLlxyXG5cdCAqIFJlcHJlc2VudCBhIHNpbXBsZSBmYWN0b3J5IHBhdHRlcm4uXHJcblx0ICogXHJcblx0ICogQGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBNZXRhZGF0YSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gTmVlZGVkIHR5cGUgZm9yIGN1cnJlbnQgb25lIG5ld3Mgbm90ZS5cclxuXHQgKiBAc3RhdGljXHJcblx0ICogQHJldHVybnMge1N0cmluZyB8IEVycm9yfSAtIEhUTUwgY29kZSBvZiBjdXJyZW50IG9uZSBuZXdzIGZvciBhZGRpbmcgaXQgaW50byBcclxuXHQgKiB3ZWItc2l0ZSBjb250ZW50IG9yIGVycm9yIGZvciB1bmtub3cgdHlwZSBub3RlLlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBjcmVhdGVOb3RlKGRhdGEsIHR5cGUpIHtcclxuXHRcdGlmKFwibWFpblwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLmdldE1haW5Ob3RlKGRhdGEpO1xyXG5cdFx0fSBlbHNlIGlmKFwibGlzdFwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLmdldExpc3ROb3RlKGRhdGEpO1xyXG5cdFx0fSBlbHNlIGlmKFwic2VhcmNoXCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUuZ2V0U2VhcmNoTm90ZShkYXRhKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vdyB0eXBlIG9mIG5vdGUuXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mYWN0b3J5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIHJlcHJlc2VudCBhbiBpbnN0YW5jZSBvZiBub3RlXHJcbiAqIHRoYXQgZGlzcGxheSBvbiB1c2VyIG1vbml0b3IgYW5kIGNvbnRhaW5cclxuICogbmV3cyBkYXRhIGZyb20gc29tZSBuZXdzIHNlY3Rpb24uXHJcbiAqIEBjbGFzc1xyXG4gKiBcclxuICogQGF1dGhvciBOaWtvbGF5IFphbXVsb3YgPHphbXVsb3Y4QGdtYWlsLmNvbT4gXHJcbiAqL1xyXG5jbGFzcyBOb3RlIHtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGdW5jdGlvbiBjcmVhdGUgYSBtYWluIG5vdGUgdGhhdCByZXByZXNlbnRlZCBvbiB3ZWItc2l0ZVxyXG5cdCAqIGxpa2UgYSBub3RlIHdpdGggYmlnIHNpemUgaW1hZ2UgYW5kIHRoaXMgbm90ZSBjb3JyZXNwb25kaW5nIFxyXG5cdCAqIGZvciBtb3JlIGltcG9ydGFudCBuZXdzLlxyXG5cdCAqIFxyXG5cdCAqIEBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ld3MgbWV0YWRhdGEuXHJcblx0ICogQHBhcmFtIHtBcnJheX0gZGF0YS5tdWx0aW1lZGlhIC0gQ29udGFpbmVyIG9mIG11bHRpbWVkaWEgZGF0YS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5tdWx0aW1lZGlhW10udXJsIC0gUmVtb3RlIGFkZHJlc3Mgb2YgY3VycmVudCBvbmUgbmV3cyBpbWFnZS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5tdWx0aW1lZGlhW10uY29weXJpZ2h0IC0gVGhlIGF1dGhvciBvZiBjdXJyZW50IG9uZSBuZXdzIGltYWdlLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnVybCAtIFJlbW90ZSBhZGRyZXNzIG9mIGNvcnJlc3BvbmRpbmcgYXJ0aWNsZSBvbiBtYWluIHNpdGUuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudGl0bGUgLSBUaXRsZSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmJ5bGluZSAtIFRoZSBhdXRob3Igb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5hYnN0cmFjdCAtIFNob3J0IGFydGljbGUgc3Rvcnkgb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAc3RhdGljXHJcblx0ICogQHJldHVybnMge1N0cmluZ30gLSBIVE1MIGNvZGUgb2YgY3VycmVudCBvbmUgbmV3cyBmb3IgYWRkaW5nIGl0IGludG8gd2ViLXNpdGUgY29udGVudC5cclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0TWFpbk5vdGUoZGF0YSkge1xyXG5cclxuXHRcdGxldCBpbWcgPSAoXCJcIiAhPT0gZGF0YS5tdWx0aW1lZGlhKSA/XHRgPGRpdiBjbGFzcz1cIm1haW4tbm90ZS13cmFwcGVyLWltYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzNdLnVybCB9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PmAgOiBgYDtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibWFpbi1ub3RlXCI+XHJcblx0XHRcdFx0XHRcdDxoMj48YSBocmVmPVwiJHsgZGF0YS51cmwgfVwiPiR7IGRhdGEudGl0bGUgfTwvYT48L2gyPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgZGF0YS5ieWxpbmUgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQkeyBpbWcgfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3JlZGl0XCI+JHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVszXS5jb3B5cmlnaHQgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLmFic3RyYWN0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGdW5jdGlvbiBjcmVhdGUgYSBsaXN0IG5vdGUgdGhhdCByZXByZXNlbnRlZCBvbiB3ZWItc2l0ZVxyXG5cdCAqIGxpa2UgYSBub3RlIHdpdGggc21hbGwgc2l6ZSBpbWFnZSBhbmQgdGhhdCBub3RlIGNvbnRhaW5zIGludG9cclxuXHQgKiBsZWZ0IG9yIHJpZ2h0IGxpc3Qgb2Ygbm90ZXMuIFRoaXMgbm90ZSBjb3JyZXNwb25kaW5nXHJcblx0ICogZm9yIHNlY29uZGFyeSBuZXdzLlxyXG5cdCAqXHJcblx0ICogQGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgbmV3cyBtZXRhZGF0YS5cclxuXHQgKiBAcGFyYW0ge0FycmF5fSBkYXRhLm11bHRpbWVkaWEgLSBDb250YWluZXIgb2YgbXVsdGltZWRpYSBkYXRhLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLm11bHRpbWVkaWFbXS51cmwgLSBSZW1vdGUgYWRkcmVzcyBvZiBjdXJyZW50IG9uZSBuZXdzIGltYWdlLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnVybCAtIFJlbW90ZSBhZGRyZXNzIG9mIGNvcnJlc3BvbmRpbmcgYXJ0aWNsZSBvbiBtYWluIHNpdGUuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudGl0bGUgLSBUaXRsZSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmJ5bGluZSAtIFRoZSBhdXRob3Igb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5hYnN0cmFjdCAtIFNob3J0IGFydGljbGUgc3Rvcnkgb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAc3RhdGljXHJcblx0ICogQHJldHVybnMge1N0cmluZ30gLSBIVE1MIGNvZGUgb2YgY3VycmVudCBvbmUgbmV3cyBmb3IgYWRkaW5nIGl0IGludG8gd2ViLXNpdGUgY29udGVudC5cclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0TGlzdE5vdGUoZGF0YSkge1xyXG5cclxuXHRcdGxldCBub3RlID0gYDxkaXYgY2xhc3M9XCJsaXN0LW5vdGVcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzBdLnVybCB9XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz48YSBocmVmPVwiJHsgZGF0YS51cmwgfVwiPiR7IGRhdGEudGl0bGUgfTwvYT48L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IGRhdGEuYnlsaW5lIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFic3RyYWN0XCI+JHsgZGF0YS5hYnN0cmFjdCB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBub3RlO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gY3JlYXRlIGEgc2VhcmNoIG5vdGUgdGhhdCByZXByZXNlbnRlZCBvbiB3ZWItc2l0ZVxyXG5cdCAqIGxpa2UgYSBub3RlIHdpdGggbWVkaXVtIHNpemUgaW1hZ2UgYW5kIHRoYXQgbm90ZSBjb250YWlucyBpbnRvXHJcblx0ICogbGVmdCBvciByaWdodCBsaXN0IG9mIG5vdGVzLiBUaGlzIG5vdGUgY29ycmVzcG9uZGluZ1xyXG5cdCAqIGZvciBzZWFyY2hpbmcgbmV3cy5cclxuXHQgKiBcclxuXHQgKiBAZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBuZXdzIG1ldGFkYXRhLlxyXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGRhdGEubXVsdGltZWRpYSAtIENvbnRhaW5lciBvZiBtdWx0aW1lZGlhIGRhdGEuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubXVsdGltZWRpYVtdLnVybCAtIFJlbW90ZSBhZGRyZXNzIG9mIGN1cnJlbnQgb25lIG5ld3MgaW1hZ2UuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEud2ViX3VybCAtIFJlbW90ZSBhZGRyZXNzIG9mIGNvcnJlc3BvbmRpbmcgYXJ0aWNsZSBvbiBtYWluIHNpdGUuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEuaGVhZGxpbmUgLSBNZXRhZGF0YSBvZiB0aXRsZSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmhlYWRsaW5lLm1haW4gLSBUaXRsZSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLmJ5bGluZSAtIE1ldGFkYXRhIG9mIGF1dGhvciBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmJ5bGluZS5vcmlnaW5hbCAtIFRoZSBhdXRob3Igb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5zbmlwcGV0IC0gU2hvcnQgYXJ0aWNsZSBzdG9yeSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBzdGF0aWNcclxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSAtIEhUTUwgY29kZSBvZiBjdXJyZW50IG9uZSBuZXdzIGZvciBhZGRpbmcgaXQgaW50byB3ZWItc2l0ZSBjb250ZW50LlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRTZWFyY2hOb3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgaW1nID0gKDAgIT09IGRhdGEubXVsdGltZWRpYS5sZW5ndGgpID8gYHN0eWxlPVwibWluLWhlaWdodDogMTUwcHg7XCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsoXCJodHRwOi8vc3RhdGljMDEubnl0LmNvbS9cIiArIGRhdGEubXVsdGltZWRpYVswXS51cmwpfVwiIHN0eWxlPVwiaGVpZ2h0OiAxMzBweDsgd2lkdGg6IDE5MHB4O1wiPmAgOiBgPmA7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cImxpc3Qtbm90ZVwiJHsgaW1nIH1cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgzPjxhIGhyZWY9XCIkeyBkYXRhLndlYl91cmwgfVwiPiR7IGRhdGEuaGVhZGxpbmUubWFpbiB9PC9hPjwvaDM+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgbnVsbCA9PT0gZGF0YS5ieWxpbmUgPyBcIlwiIDogZGF0YS5ieWxpbmUub3JpZ2luYWwgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLnNuaXBwZXQgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+YDtcclxuXHJcblx0XHRyZXR1cm4gbm90ZTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vdGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgRE9NTWFuaXB1bGF0b3IgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5cdGxldCBfY3VycmVudEVsZW1lbnQ7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRnZXQ6IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gX2N1cnJlbnRFbGVtZW50O1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRCb2R5OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNyZWF0ZTogZnVuY3Rpb24odGFnbmFtZSkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ25hbWUpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2xlYXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR3aGlsZShfY3VycmVudEVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5yZW1vdmVDaGlsZChfY3VycmVudEVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldENsYXNzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWU7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldENsYXNzOiBmdW5jdGlvbihjbGFzc25hbWUpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzbmFtZTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldEhUTUw6IGZ1bmN0aW9uKGh0bWwpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRIVE1MOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdGVsZW1lbnQgPSBlbGVtZW50IHx8IF9jdXJyZW50RWxlbWVudDtcclxuXHRcdFx0cmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhcHBlbmRIVE1MOiBmdW5jdGlvbihodG1sKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5pbm5lckhUTUwgKz0gaHRtbDtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNob3c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZihcImxpc3Qtb2Ytbm90ZXNcIiA9PT0gX2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0aGlkZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhcHBlbmQ6IGZ1bmN0aW9uKGNoaWxkKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHR0b2dnbGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZihcImhpZGVcIiA9PT0gX2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUgPSBcInNob3dcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lID0gXCJoaWRlXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGF0dHI6IGZ1bmN0aW9uKGF0dHJpYnV0ZSwgdmFsdWUpIHtcclxuXHRcdFx0aWYodW5kZWZpbmVkID09PSB2YWx1ZSkge1xyXG5cdFx0XHRcdHJldHVybiBfY3VycmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRrZXlwcmVzczogZnVuY3Rpb24oaGFuZGxlcikge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVyLCBmYWxzZSk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBET01NYW5pcHVsYXRvciBhcyBET00gfTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0RPTU1hbmlwdWxhdG9yLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==