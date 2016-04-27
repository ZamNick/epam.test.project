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
	
	/**
	 * A class represent a main instance of application, the part
	 * of the application that handles user interaction.
	 * A controller is the link between a user and system. It represents
	 * a main point of entry.
	 * @class
	 * 
	 * @requires config.js
	 * @requires connector.js
	 * @requires factory.js
	 * @requires DOMManipulator.js
	 * @author Nikolay Zamulov <zamulov8@gmail.com> 
	 */
	
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
	
				/**
	    * If the Enter keyboard button was pressed.
	    */
				if (13 === event.keyCode) {
	
					_DOMManipulator.DOM.get("left-list").hide();
					_DOMManipulator.DOM.get("right-list").hide();
					_DOMManipulator.DOM.get("section-name").hide();
	
					_DOMManipulator.DOM.get("current-page").setHTML(1);
					_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
	
					_DOMManipulator.DOM.get("preloader").show();
	
					_DOMManipulator.DOM.get("search-line").attr('pure', "true");
	
					_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getValue(), 0, Controller.updateSearches);
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
	
				_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getValue(), 0, Controller.updateSearches);
	
				event.stopPropagation();
			}
		}, {
			key: 'previousPageButtonClickHandler',
			value: function previousPageButtonClickHandler(event) {
	
				if ("false" === _DOMManipulator.DOM.get("search-line").attr("pure")) {
	
					_DOMManipulator.DOM.get("search-line").attr("pure", "true");
	
					_DOMManipulator.DOM.get("current-page").setHTML(1);
					_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
	
					_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getValue(), 0, Controller.updateSearches);
				} else {
	
					var page = +_DOMManipulator.DOM.get("current-page").getHTML();
	
					page = page - 1;
	
					if (1 === page) {
						_DOMManipulator.DOM.get("previous-page-button").setClass("disabled");
					}
	
					_DOMManipulator.DOM.get("current-page").setHTML(page);
					_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getValue(), page - 1, Controller.updateSearches);
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
	
					_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getValue(), 0, Controller.updateSearches);
				} else {
	
					var page = +_DOMManipulator.DOM.get("current-page").getHTML();
	
					page = page + 1;
	
					_DOMManipulator.DOM.get("previous-page-button").setClass("");
					_DOMManipulator.DOM.get("current-page").setHTML(page);
	
					_connector2.default.searchQuery(_DOMManipulator.DOM.get("search-line").getValue(), page - 1, Controller.updateSearches);
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
	
	/**
	 * Major functionality of this object related to
	 * manipulating with DOM elements. Needed for incapsulate
	 * DOM manipulation logic. Situated between View and Controller
	 * into class hierarchy of current test project.
	 *
	 * Based on closure principle and module programming style.
	 * 
	 * @author Nikolay Zamulov <zamulov8@gmail.com> 
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var DOMManipulator = function () {
	
		var _currentElement = void 0;
	
		return {
	
			/**
	   * @param {String} id - ID of current DOM element.
	   * @returns {Object} this - Needed for chaining trick.
	   */
			get: function get(id) {
				_currentElement = document.getElementById(id);
				return this;
			},
	
			/**
	   * @returns {DOMElement} _currentElement - Working just like a get method.
	   */
			getElement: function getElement() {
				return _currentElement;
			},
	
			getBody: function getBody() {
				_currentElement = document.body;
				return this;
			},
	
			getValue: function getValue() {
				return _currentElement.value;
			},
	
			/**
	   * @param {Function} handler - Callback function that will be triggered when event will be occured.
	   * @returns {Object} this - Needed for chaining trick.
	   */
			click: function click(handler) {
				_currentElement.addEventListener('click', handler, false);
				return this;
			},
	
			/**
	   * @param {String} tagname - The name of needed tag that must to be created.
	   * @returns {Object} this - Needed for chaining trick.
	   */
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
	
			/**
	   * @param {String} classname - The name of class that must be setted to current DOM element.
	   * @returns {Object} this - Needed for chaining trick.
	   */
			setClass: function setClass(classname) {
				_currentElement.className = classname;
				return this;
			},
	
			setHTML: function setHTML(html) {
				_currentElement.innerHTML = html;
				return this;
			},
	
			/**
	   * @param {DOMElement} [element] - Current element.
	   * @returns {String} element.innerHTML - HTML code that containing inside the current DOM element.
	   */
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
	
			/**
	   * @param {DOMElement} child - DOM element that must be inserted into the current element.
	   * @returns {Object} this - Needed for chaining trick.
	   */
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
	
			/**
	   * Function works in two mode:
	   * 1) If the second argument is was not passed then return value of needed attribute.
	   * 2) If the second argument was passed then setting up passed attribute into passed value.
	   * 
	   * @function
	   * @param {String} attribute - The name of attribute that must be setted to current element.
	   * @param {String | undefined} value - Inserting value into attribute.
	   * @returns {Object | String} - Value of needed attribute or current object for chaining.
	   **/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWQ5MGVmYTgwZjM2YjFjZWUyNzAiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ET01NYW5pcHVsYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdCTSxVO0FBRUwsd0JBQWM7QUFBQTs7QUFFYix1QkFBSSxPQUFKLEdBQWMsS0FBZCxDQUFvQixLQUFLLGdCQUF6Qjs7QUFFQSx1QkFBSSxHQUFKLENBQVEsaUJBQVIsRUFBMkIsS0FBM0IsQ0FBaUMsS0FBSywwQkFBdEM7QUFDQSx1QkFBSSxHQUFKLENBQVEsZUFBUixFQUF5QixLQUF6QixDQUErQixLQUFLLHdCQUFwQztBQUNBLHVCQUFJLEdBQUosQ0FBUSxlQUFSLEVBQXlCLEtBQXpCLENBQStCLEtBQUssd0JBQXBDO0FBQ0EsdUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDO0FBQ0EsdUJBQUksR0FBSixDQUFRLHNCQUFSLEVBQWdDLEtBQWhDLENBQXNDLEtBQUssOEJBQTNDO0FBQ0EsdUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDOztBQUVB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LFNBQWhCLEdBQTRCLE1BQTVCO0FBQ0EsS0FGRCxNQUVPO0FBQ04scUJBQWdCLFNBQWhCLEdBQTRCLE1BQTVCO0FBQ0E7QUFDRCxXQUFPLElBQVA7QUFDQSxJQWpJSzs7Ozs7Ozs7Ozs7O0FBOElOLFNBQU0sY0FBUyxTQUFULEVBQW9CLEtBQXBCLEVBQTJCO0FBQ2hDLFFBQUcsY0FBYyxLQUFqQixFQUF3QjtBQUN2QixZQUFPLGdCQUFnQixZQUFoQixDQUE2QixTQUE3QixDQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ04scUJBQWdCLFlBQWhCLENBQTZCLFNBQTdCLEVBQXdDLEtBQXhDO0FBQ0EsWUFBTyxJQUFQO0FBQ0E7QUFDRCxJQXJKSzs7QUF3Sk4sYUFBVSxrQkFBUyxPQUFULEVBQWtCO0FBQzNCLG9CQUFnQixnQkFBaEIsQ0FBaUMsVUFBakMsRUFBNkMsT0FBN0MsRUFBc0QsS0FBdEQ7QUFDQSxXQUFPLElBQVA7QUFDQTtBQTNKSyxHQUFQO0FBOEpBLEVBbEtvQixFQUFyQjs7U0FvSzJCLEcsR0FBbEIsYyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZWQ5MGVmYTgwZjM2YjFjZWUyNzBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XHJcbmltcG9ydCBGYWN0b3J5IGZyb20gJy4vZmFjdG9yeS5qcyc7XHJcbmltcG9ydCB7IERPTSB9IGZyb20gJy4vRE9NTWFuaXB1bGF0b3IuanMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIHJlcHJlc2VudCBhIG1haW4gaW5zdGFuY2Ugb2YgYXBwbGljYXRpb24sIHRoZSBwYXJ0XHJcbiAqIG9mIHRoZSBhcHBsaWNhdGlvbiB0aGF0IGhhbmRsZXMgdXNlciBpbnRlcmFjdGlvbi5cclxuICogQSBjb250cm9sbGVyIGlzIHRoZSBsaW5rIGJldHdlZW4gYSB1c2VyIGFuZCBzeXN0ZW0uIEl0IHJlcHJlc2VudHNcclxuICogYSBtYWluIHBvaW50IG9mIGVudHJ5LlxyXG4gKiBAY2xhc3NcclxuICogXHJcbiAqIEByZXF1aXJlcyBjb25maWcuanNcclxuICogQHJlcXVpcmVzIGNvbm5lY3Rvci5qc1xyXG4gKiBAcmVxdWlyZXMgZmFjdG9yeS5qc1xyXG4gKiBAcmVxdWlyZXMgRE9NTWFuaXB1bGF0b3IuanNcclxuICogQGF1dGhvciBOaWtvbGF5IFphbXVsb3YgPHphbXVsb3Y4QGdtYWlsLmNvbT4gXHJcbiAqL1xyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0RE9NLmdldEJvZHkoKS5jbGljayh0aGlzLmJvZHlDbGlja0hhbmRsZXIpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWN0aW9ucy1idXR0b25cIikuY2xpY2sodGhpcy5zZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWJ1dHRvblwiKS5jbGljayh0aGlzLnNlYXJjaEJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwiZ2l0aHViLWJ1dHRvblwiKS5jbGljayh0aGlzLmdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWdvLWJ1dHRvblwiKS5jbGljayh0aGlzLnNlYXJjaEdvQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5jbGljayh0aGlzLnByZXZpb3VzUGFnZUJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwibmV4dC1wYWdlLWJ1dHRvblwiKS5jbGljayh0aGlzLm5leHRQYWdlQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuY2xpY2soKGV2ZW50KSA9PiB7IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9KTtcclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5rZXlwcmVzcyh0aGlzLnNlYXJjaExpbmVLZXlQcmVzc0hhbmRsZXIpO1xyXG5cclxuXHRcdGZvcihsZXQgc2VjdGlvbiBvZiBjb25maWcuc2VjdGlvbnMpIHtcclxuXHJcblx0XHRcdGxldCBlbGVtZW50ID0gRE9NXHJcblx0XHRcdFx0XHRcdFx0LmNyZWF0ZShcImxpXCIpXHJcblx0XHRcdFx0XHRcdFx0LnNldEhUTUwoc2VjdGlvbilcclxuXHRcdFx0XHRcdFx0XHQuY2xpY2sodGhpcy5zZWN0aW9uc01lbnVJdGVtQ2xpY2tIYW5kbGVyKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRFbGVtZW50KCk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudS1pdGVtc1wiKS5hcHBlbmQoZWxlbWVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0Q29ubmVjdG9yLmdldFRvcFN0b3JpZXMoXCJob21lXCIsIENvbnRyb2xsZXIudXBkYXRlVG9wU3Rvcmllcyk7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdHNlYXJjaExpbmVLZXlQcmVzc0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cigncHVyZScsIFwiZmFsc2VcIik7XHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSWYgdGhlIEVudGVyIGtleWJvYXJkIGJ1dHRvbiB3YXMgcHJlc3NlZC5cclxuXHRcdCAqL1xyXG5cdFx0aWYoMTMgPT09IGV2ZW50LmtleUNvZGUpIHtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9uLW5hbWVcIikuaGlkZSgpO1xyXG5cclxuXHRcdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHRcdFx0XHJcblx0XHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoJ3B1cmUnLCBcInRydWVcIik7XHJcblxyXG5cdFx0XHRDb25uZWN0b3Iuc2VhcmNoUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldFZhbHVlKCksIDAsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHJcblx0Ym9keUNsaWNrSGFuZGxlcigpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuc2V0Q2xhc3MoXCJoaWRlXCIpO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHRzZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwic2hvd1wiID09PSBET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuZ2V0Q2xhc3MoKSkge1xyXG5cdFx0XHRET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuc2V0Q2xhc3MoXCJoaWRlXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS50b2dnbGUoKTtcclxuXHRcdFx0fSwgNTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNlYXJjaEJ1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwic2hvd1wiID09PSBET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5nZXRDbGFzcygpKSB7XHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnNldENsYXNzKFwiaGlkZVwiKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0XHR9LCA1MDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblxyXG5cdGdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcigpIHtcclxuXHRcdGxvY2F0aW9uLmhyZWYgPSBjb25maWcuR2l0SHViUmVmZXJlbmNlO1xyXG5cdH1cclxuXHJcblxyXG5cdHNlY3Rpb25zTWVudUl0ZW1DbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLmhpZGUoKTtcclxuXHJcblx0XHRET00uZ2V0KFwicGFnaW5nLW1lbnVcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0Q29ubmVjdG9yLmdldFRvcFN0b3JpZXMoRE9NLmdldEhUTUwodGhpcyksIENvbnRyb2xsZXIudXBkYXRlVG9wU3Rvcmllcyk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRzZWFyY2hHb0J1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5oaWRlKCk7XHJcblxyXG5cdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblx0XHRcclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKCdwdXJlJywgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZWFyY2hRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0VmFsdWUoKSwgMCwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHJcblx0c3RhdGljIHVwZGF0ZVRvcFN0b3JpZXMoZGF0YSkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuY2xlYXIoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmNsZWFyKCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLmNsZWFyKCkuc2V0SFRNTChkYXRhLnNlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkYXRhLnNlY3Rpb24uc2xpY2UoMSkpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYoaSAlIDIgPT09IDApIHtcclxuXHRcdFx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmFwcGVuZEhUTUwoRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5hcHBlbmRIVE1MKEZhY3RvcnkuY3JlYXRlTm90ZShkYXRhLnJlc3VsdHNbaV0sIChpIDwgNCkgPyBcIm1haW5cIiA6IFwibGlzdFwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuc2hvdygpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuc2hvdygpO1xyXG5cdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHJcblx0c3RhdGljIHVwZGF0ZVNlYXJjaGVzKGRhdGEpIHtcclxuXHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmNsZWFyKCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5jbGVhcigpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLnJlc3BvbnNlLmRvY3MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYoaSAlIDIgPT09IDApIHtcclxuXHRcdFx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmFwcGVuZEhUTUwoRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzcG9uc2UuZG9jc1tpXSwgXCJzZWFyY2hcIikpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmFwcGVuZEhUTUwoRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzcG9uc2UuZG9jc1tpXSwgXCJzZWFyY2hcIikpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLnNob3coKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLnNob3coKTtcclxuXHJcblx0XHRET00uZ2V0KFwicGFnaW5nLW1lbnVcIikuc2hvdygpO1xyXG5cdH1cclxuXHJcblxyXG5cdHByZXZpb3VzUGFnZUJ1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwiZmFsc2VcIiA9PT0gRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoXCJwdXJlXCIpKSB7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cihcInB1cmVcIiwgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHJcblx0XHRcdENvbm5lY3Rvci5zZWFyY2hRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0VmFsdWUoKSwgMCwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGxldCBwYWdlID0gK0RPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuZ2V0SFRNTCgpO1xyXG5cclxuXHRcdFx0cGFnZSA9IHBhZ2UgLSAxO1xyXG5cclxuXHRcdFx0aWYoMSA9PT0gcGFnZSkge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5zZXRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwocGFnZSk7XHJcblx0XHRcdENvbm5lY3Rvci5zZWFyY2hRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0VmFsdWUoKSwgcGFnZSAtIDEsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblxyXG5cdG5leHRQYWdlQnV0dG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYoXCJmYWxzZVwiID09PSBET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cihcInB1cmVcIikpIHtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKFwicHVyZVwiLCBcInRydWVcIik7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwoMSk7XHJcblx0XHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5zZXRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cclxuXHRcdFx0Q29ubmVjdG9yLnNlYXJjaFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRWYWx1ZSgpLCAwLCBDb250cm9sbGVyLnVwZGF0ZVNlYXJjaGVzKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0bGV0IHBhZ2UgPSArRE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5nZXRIVE1MKCk7XHJcblxyXG5cdFx0XHRwYWdlID0gcGFnZSArIDE7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJcIik7XHJcblx0XHRcdERPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuc2V0SFRNTChwYWdlKTtcclxuXHJcblx0XHRcdENvbm5lY3Rvci5zZWFyY2hRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0VmFsdWUoKSwgcGFnZSAtIDEsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblx0Y29uc3QgX2luc3RhbmNlID0gbmV3IENvbnRyb2xsZXIoKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0J1RvcFN0b3JpZXNBUElrZXknIDogJ2I1MTcxYzBmNjY3NmQ3NGRhNmNiOTlmN2NjZmM2YWFhOjA6NzUwNTk5MzMnLFxyXG5cdCdBcnRpY2xlU2VhcmNoQVBJa2V5JyA6ICc1ODU4M2NhMjllMGI1YTI5MTZkZDVjN2JmZmQ0NTE4ZDoxNDo3NTA1OTkzMycsXHJcblx0J3NlY3Rpb25zJyA6IFsnSG9tZScsICdXb3JsZCcsICdOYXRpb25hbCcsICdQb2xpdGljcycsICdOeXJlZ2lvbicsICdCdXNpbmVzcycsICdPcGluaW9uJywgJ1RlY2hub2xvZ3knLFxyXG5cdFx0XHRcdCAgJ1NjaWVuY2UnLCAnSGVhbHRoJywgJ1Nwb3J0cycsICdBcnRzJywgJ0Zhc2hpb24nLCAnRGluaW5nJywgJ1RyYXZlbCcsICdNYWdhemluZScsICdSZWFsZXN0YXRlJ10sXHJcblx0J0dpdEh1YlJlZmVyZW5jZSc6ICdodHRwczovL2dpdGh1Yi5jb20vWmFtTmljay9lcGFtLnRlc3QucHJvamVjdCdcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29uZmlnLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG4vKipcclxuICogQSBjbGFzcyByZXByZXNlbnQgYW4gaW5zdGFuY2UgZm9yIG1ha2UgY29ubmVjdGlvbiB0byBcclxuICogVGhlIE5ldyBZb3JrIFRpbWVzIHNlcnZlciBmb3IgZ3JhYmluZyBuZWNlc3NhcnkgZGF0YS5cclxuICogQGNsYXNzXHJcbiAqXHJcbiAqIEByZXF1aXJlcyBjb25maWcuanNcclxuICogQGF1dGhvciBOaWtvbGF5IFphbXVsb3YgPHphbXVsb3Y4QGdtYWlsLmNvbT4gXHJcbiAqL1xyXG5jbGFzcyBDb25uZWN0b3Ige1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZ1bmN0aW9uIGluaXRpYWxpemluZyAndXJsJyBhbmQgJ29wdGlvbnMnIHNldHRpbmdzIHZhcmlhYmxlcyB0aGF0XHJcblx0ICogbmVlZGVkIGZvciBtYWtpbmcgcmVxdWVzdCB0byBzZXJ2ZXIgZm9yIGdyYWJpbmcgdGhlIHRvcCBzdG9yaWVzIGRhdGEuXHJcblx0ICogXHJcblx0ICogQGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtzZWN0aW9uTmFtZV0gLSBUaGUgbmFtZSBvZiBuZWVkZWQgc2VjdGlvbiBvZiBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBxdWVyeSB3aWxsIGJlIHNlbmRlZC5cclxuXHQgKiBAc3RhdGljXHJcblx0ICovXHJcblx0c3RhdGljIGdldFRvcFN0b3JpZXMoc2VjdGlvbk5hbWUsIGNhbGxiYWNrKSB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAZGVmYXVsdCBcImhvbWVcIlxyXG5cdFx0ICovXHJcblx0XHRzZWN0aW9uTmFtZSA9IHNlY3Rpb25OYW1lIHx8IFwiaG9tZVwiO1xyXG5cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRsZXQgdXJsID0gYGh0dHA6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3RvcHN0b3JpZXMvdjEvJHtzZWN0aW9uTmFtZX0uanNvbj9hcGkta2V5PSR7Y29uZmlnLlRvcFN0b3JpZXNBUElrZXl9YDtcclxuXHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0bW9kZTogJ2NvcnMnXHJcblx0XHR9O1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZW5kUmVxdWVzdCh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZ1bmN0aW9uIGluaXRpYWxpemluZyAndXJsJyBhbmQgJ29wdGlvbnMnIHNldHRpbmdzIHZhcmlhYmxlcyB0aGF0XHJcblx0ICogbmVlZGVkIGZvciBtYWtpbmcgcmVxdWVzdCB0byBzZXJ2ZXIgZm9yIHNlYXJjaGluZyBzb21lIGRhdGEgaW4gYXJ0aWNsZXNcclxuXHQgKiBhbmQgcmVhbGl6ZSBzZXJ2ZXIgcGFnaW5nIGxvZ2ljLlxyXG5cdCAqXHJcblx0ICogQGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IC0gU3RyaW5nIG9mIHNlYXJjaCBsaW5lIHRoYXQgd2FzIHR5cGVkIGJ5IHVzZXIuXHJcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBwYWdlIC0gTmVlZGVkIHBhZ2Ugb2YgZGF0YS5cclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gcXVlcnkgd2lsbCBiZSBzZW5kZWQuXHJcblx0ICogQHN0YXRpY1xyXG5cdCAqL1xyXG5cdHN0YXRpYyBzZWFyY2hRdWVyeShxdWVyeSwgcGFnZSwgY2FsbGJhY2spIHtcclxuXHJcblx0XHRsZXQgdXJsID0gYGh0dHA6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3NlYXJjaC92Mi9hcnRpY2xlc2VhcmNoLmpzb24/cT0ke3F1ZXJ5fSZwYWdlPSR7cGFnZX0mYXBpLWtleT0ke2NvbmZpZy5BcnRpY2xlU2VhcmNoQVBJa2V5fWA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdG1vZGU6ICdjb3JzJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRDb25uZWN0b3Iuc2VuZFJlcXVlc3QodXJsLCBvcHRpb25zLCBjYWxsYmFjayk7XHJcblx0XHRcdFxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTZW5kIGEgcmVxdWVzdCB0byByZW1vdGUgc2VydmVyIGZvciBuZWVkZWQgZGF0YS5cclxuXHQgKiBcclxuXHQgKiBAZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdXJsIC0gVXJsIG9mIHRoZSByZW1vdGUgc2VydmVyLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU2V0dGluZ3MgZm9yIHJlcXVlc3QuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMubWV0aG9kIC0gTWV0aG9kIG9mIEhUVFAgcmVxdWVzdCB0aGF0IHdpbGwgYmUgc2VuZGVkLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLm1vZGUgLSBNb2RlIG9mIGNyb3NzLWRvbWFpbiByZXF1ZXN0LlxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBxdWVyeSB3aWxsIGJlIHNlbmRlZC5cclxuXHQgKiBAc3RhdGljXHJcblx0ICovXHJcblx0c3RhdGljIHNlbmRSZXF1ZXN0KHVybCwgb3B0aW9ucywgY2FsbGJhY2spIHtcclxuXHJcblx0XHRmZXRjaCh1cmwsIG9wdGlvbnMpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcblx0XHRcdFx0XHRlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRjYWxsYmFjayhkYXRhKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOiBcIiArIGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RvcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Nvbm5lY3Rvci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBOb3RlIGZyb20gJy4vbm90ZS5qcyc7XHJcblxyXG4vKipcclxuICogQSBjbGFzcyByZXByZXNlbnQgYW4gaW5zdGFuY2UgdGhhdCBjcmVhdGUgbmVlZGVkXHJcbiAqIG5ld3Mgbm90ZSB1c2luZyBwYXNzZWQgbWV0YWRhdGEgb2YgY3VycmVudCBvbmUgbmV3c1xyXG4gKiBhbmQgbmVlZGVkIHR5cGUgb2Ygbm90ZS5cclxuICogQGNsYXNzXHJcbiAqXHJcbiAqIEByZXF1aXJlcyBub3RlLmpzXHJcbiAqIEBhdXRob3IgTmlrb2xheSBaYW11bG92IDx6YW11bG92OEBnbWFpbC5jb20+IFxyXG4gKi9cclxuY2xhc3MgRmFjdG9yeSB7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gY3JlYXRlIGEgbmVlZGVkIHR5cGUgb2YgY3VycmVudCBvbmUgbmV3cyBub3RlLlxyXG5cdCAqIFJlcHJlc2VudCBhIHNpbXBsZSBmYWN0b3J5IHBhdHRlcm4uXHJcblx0ICogXHJcblx0ICogQGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBNZXRhZGF0YSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gTmVlZGVkIHR5cGUgZm9yIGN1cnJlbnQgb25lIG5ld3Mgbm90ZS5cclxuXHQgKiBAc3RhdGljXHJcblx0ICogQHJldHVybnMge1N0cmluZyB8IEVycm9yfSAtIEhUTUwgY29kZSBvZiBjdXJyZW50IG9uZSBuZXdzIGZvciBhZGRpbmcgaXQgaW50byBcclxuXHQgKiB3ZWItc2l0ZSBjb250ZW50IG9yIGVycm9yIGZvciB1bmtub3cgdHlwZSBub3RlLlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBjcmVhdGVOb3RlKGRhdGEsIHR5cGUpIHtcclxuXHRcdGlmKFwibWFpblwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLmdldE1haW5Ob3RlKGRhdGEpO1xyXG5cdFx0fSBlbHNlIGlmKFwibGlzdFwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLmdldExpc3ROb3RlKGRhdGEpO1xyXG5cdFx0fSBlbHNlIGlmKFwic2VhcmNoXCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUuZ2V0U2VhcmNoTm90ZShkYXRhKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vdyB0eXBlIG9mIG5vdGUuXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mYWN0b3J5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIHJlcHJlc2VudCBhbiBpbnN0YW5jZSBvZiBub3RlXHJcbiAqIHRoYXQgZGlzcGxheSBvbiB1c2VyIG1vbml0b3IgYW5kIGNvbnRhaW5cclxuICogbmV3cyBkYXRhIGZyb20gc29tZSBuZXdzIHNlY3Rpb24uXHJcbiAqIEBjbGFzc1xyXG4gKiBcclxuICogQGF1dGhvciBOaWtvbGF5IFphbXVsb3YgPHphbXVsb3Y4QGdtYWlsLmNvbT4gXHJcbiAqL1xyXG5jbGFzcyBOb3RlIHtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGdW5jdGlvbiBjcmVhdGUgYSBtYWluIG5vdGUgdGhhdCByZXByZXNlbnRlZCBvbiB3ZWItc2l0ZVxyXG5cdCAqIGxpa2UgYSBub3RlIHdpdGggYmlnIHNpemUgaW1hZ2UgYW5kIHRoaXMgbm90ZSBjb3JyZXNwb25kaW5nIFxyXG5cdCAqIGZvciBtb3JlIGltcG9ydGFudCBuZXdzLlxyXG5cdCAqIFxyXG5cdCAqIEBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ld3MgbWV0YWRhdGEuXHJcblx0ICogQHBhcmFtIHtBcnJheX0gZGF0YS5tdWx0aW1lZGlhIC0gQ29udGFpbmVyIG9mIG11bHRpbWVkaWEgZGF0YS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5tdWx0aW1lZGlhW10udXJsIC0gUmVtb3RlIGFkZHJlc3Mgb2YgY3VycmVudCBvbmUgbmV3cyBpbWFnZS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5tdWx0aW1lZGlhW10uY29weXJpZ2h0IC0gVGhlIGF1dGhvciBvZiBjdXJyZW50IG9uZSBuZXdzIGltYWdlLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnVybCAtIFJlbW90ZSBhZGRyZXNzIG9mIGNvcnJlc3BvbmRpbmcgYXJ0aWNsZSBvbiBtYWluIHNpdGUuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudGl0bGUgLSBUaXRsZSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmJ5bGluZSAtIFRoZSBhdXRob3Igb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5hYnN0cmFjdCAtIFNob3J0IGFydGljbGUgc3Rvcnkgb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAc3RhdGljXHJcblx0ICogQHJldHVybnMge1N0cmluZ30gLSBIVE1MIGNvZGUgb2YgY3VycmVudCBvbmUgbmV3cyBmb3IgYWRkaW5nIGl0IGludG8gd2ViLXNpdGUgY29udGVudC5cclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0TWFpbk5vdGUoZGF0YSkge1xyXG5cclxuXHRcdGxldCBpbWcgPSAoXCJcIiAhPT0gZGF0YS5tdWx0aW1lZGlhKSA/XHRgPGRpdiBjbGFzcz1cIm1haW4tbm90ZS13cmFwcGVyLWltYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzNdLnVybCB9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PmAgOiBgYDtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibWFpbi1ub3RlXCI+XHJcblx0XHRcdFx0XHRcdDxoMj48YSBocmVmPVwiJHsgZGF0YS51cmwgfVwiPiR7IGRhdGEudGl0bGUgfTwvYT48L2gyPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgZGF0YS5ieWxpbmUgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQkeyBpbWcgfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3JlZGl0XCI+JHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVszXS5jb3B5cmlnaHQgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLmFic3RyYWN0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGdW5jdGlvbiBjcmVhdGUgYSBsaXN0IG5vdGUgdGhhdCByZXByZXNlbnRlZCBvbiB3ZWItc2l0ZVxyXG5cdCAqIGxpa2UgYSBub3RlIHdpdGggc21hbGwgc2l6ZSBpbWFnZSBhbmQgdGhhdCBub3RlIGNvbnRhaW5zIGludG9cclxuXHQgKiBsZWZ0IG9yIHJpZ2h0IGxpc3Qgb2Ygbm90ZXMuIFRoaXMgbm90ZSBjb3JyZXNwb25kaW5nXHJcblx0ICogZm9yIHNlY29uZGFyeSBuZXdzLlxyXG5cdCAqXHJcblx0ICogQGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgbmV3cyBtZXRhZGF0YS5cclxuXHQgKiBAcGFyYW0ge0FycmF5fSBkYXRhLm11bHRpbWVkaWEgLSBDb250YWluZXIgb2YgbXVsdGltZWRpYSBkYXRhLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLm11bHRpbWVkaWFbXS51cmwgLSBSZW1vdGUgYWRkcmVzcyBvZiBjdXJyZW50IG9uZSBuZXdzIGltYWdlLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnVybCAtIFJlbW90ZSBhZGRyZXNzIG9mIGNvcnJlc3BvbmRpbmcgYXJ0aWNsZSBvbiBtYWluIHNpdGUuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudGl0bGUgLSBUaXRsZSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmJ5bGluZSAtIFRoZSBhdXRob3Igb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5hYnN0cmFjdCAtIFNob3J0IGFydGljbGUgc3Rvcnkgb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAc3RhdGljXHJcblx0ICogQHJldHVybnMge1N0cmluZ30gLSBIVE1MIGNvZGUgb2YgY3VycmVudCBvbmUgbmV3cyBmb3IgYWRkaW5nIGl0IGludG8gd2ViLXNpdGUgY29udGVudC5cclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0TGlzdE5vdGUoZGF0YSkge1xyXG5cclxuXHRcdGxldCBub3RlID0gYDxkaXYgY2xhc3M9XCJsaXN0LW5vdGVcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzBdLnVybCB9XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz48YSBocmVmPVwiJHsgZGF0YS51cmwgfVwiPiR7IGRhdGEudGl0bGUgfTwvYT48L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IGRhdGEuYnlsaW5lIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFic3RyYWN0XCI+JHsgZGF0YS5hYnN0cmFjdCB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBub3RlO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gY3JlYXRlIGEgc2VhcmNoIG5vdGUgdGhhdCByZXByZXNlbnRlZCBvbiB3ZWItc2l0ZVxyXG5cdCAqIGxpa2UgYSBub3RlIHdpdGggbWVkaXVtIHNpemUgaW1hZ2UgYW5kIHRoYXQgbm90ZSBjb250YWlucyBpbnRvXHJcblx0ICogbGVmdCBvciByaWdodCBsaXN0IG9mIG5vdGVzLiBUaGlzIG5vdGUgY29ycmVzcG9uZGluZ1xyXG5cdCAqIGZvciBzZWFyY2hpbmcgbmV3cy5cclxuXHQgKiBcclxuXHQgKiBAZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBuZXdzIG1ldGFkYXRhLlxyXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGRhdGEubXVsdGltZWRpYSAtIENvbnRhaW5lciBvZiBtdWx0aW1lZGlhIGRhdGEuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubXVsdGltZWRpYVtdLnVybCAtIFJlbW90ZSBhZGRyZXNzIG9mIGN1cnJlbnQgb25lIG5ld3MgaW1hZ2UuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEud2ViX3VybCAtIFJlbW90ZSBhZGRyZXNzIG9mIGNvcnJlc3BvbmRpbmcgYXJ0aWNsZSBvbiBtYWluIHNpdGUuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEuaGVhZGxpbmUgLSBNZXRhZGF0YSBvZiB0aXRsZSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmhlYWRsaW5lLm1haW4gLSBUaXRsZSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLmJ5bGluZSAtIE1ldGFkYXRhIG9mIGF1dGhvciBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmJ5bGluZS5vcmlnaW5hbCAtIFRoZSBhdXRob3Igb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5zbmlwcGV0IC0gU2hvcnQgYXJ0aWNsZSBzdG9yeSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBzdGF0aWNcclxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSAtIEhUTUwgY29kZSBvZiBjdXJyZW50IG9uZSBuZXdzIGZvciBhZGRpbmcgaXQgaW50byB3ZWItc2l0ZSBjb250ZW50LlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRTZWFyY2hOb3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgaW1nID0gKDAgIT09IGRhdGEubXVsdGltZWRpYS5sZW5ndGgpID8gYHN0eWxlPVwibWluLWhlaWdodDogMTUwcHg7XCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsoXCJodHRwOi8vc3RhdGljMDEubnl0LmNvbS9cIiArIGRhdGEubXVsdGltZWRpYVswXS51cmwpfVwiIHN0eWxlPVwiaGVpZ2h0OiAxMzBweDsgd2lkdGg6IDE5MHB4O1wiPmAgOiBgPmA7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cImxpc3Qtbm90ZVwiJHsgaW1nIH1cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgzPjxhIGhyZWY9XCIkeyBkYXRhLndlYl91cmwgfVwiPiR7IGRhdGEuaGVhZGxpbmUubWFpbiB9PC9hPjwvaDM+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgbnVsbCA9PT0gZGF0YS5ieWxpbmUgPyBcIlwiIDogZGF0YS5ieWxpbmUub3JpZ2luYWwgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLnNuaXBwZXQgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+YDtcclxuXHJcblx0XHRyZXR1cm4gbm90ZTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vdGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5cclxuLyoqXHJcbiAqIE1ham9yIGZ1bmN0aW9uYWxpdHkgb2YgdGhpcyBvYmplY3QgcmVsYXRlZCB0b1xyXG4gKiBtYW5pcHVsYXRpbmcgd2l0aCBET00gZWxlbWVudHMuIE5lZWRlZCBmb3IgaW5jYXBzdWxhdGVcclxuICogRE9NIG1hbmlwdWxhdGlvbiBsb2dpYy4gU2l0dWF0ZWQgYmV0d2VlbiBWaWV3IGFuZCBDb250cm9sbGVyXHJcbiAqIGludG8gY2xhc3MgaGllcmFyY2h5IG9mIGN1cnJlbnQgdGVzdCBwcm9qZWN0LlxyXG4gKlxyXG4gKiBCYXNlZCBvbiBjbG9zdXJlIHByaW5jaXBsZSBhbmQgbW9kdWxlIHByb2dyYW1taW5nIHN0eWxlLlxyXG4gKiBcclxuICogQGF1dGhvciBOaWtvbGF5IFphbXVsb3YgPHphbXVsb3Y4QGdtYWlsLmNvbT4gXHJcbiAqL1xyXG5sZXQgRE9NTWFuaXB1bGF0b3IgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5cdGxldCBfY3VycmVudEVsZW1lbnQ7XHJcblxyXG5cdHJldHVybiB7XHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gSUQgb2YgY3VycmVudCBET00gZWxlbWVudC5cclxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3R9IHRoaXMgLSBOZWVkZWQgZm9yIGNoYWluaW5nIHRyaWNrLlxyXG5cdFx0ICovXHJcblx0XHRnZXQ6IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEByZXR1cm5zIHtET01FbGVtZW50fSBfY3VycmVudEVsZW1lbnQgLSBXb3JraW5nIGp1c3QgbGlrZSBhIGdldCBtZXRob2QuXHJcblx0XHQgKi9cclxuXHRcdGdldEVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gX2N1cnJlbnRFbGVtZW50O1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0Z2V0Qm9keTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRWYWx1ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBfY3VycmVudEVsZW1lbnQudmFsdWU7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgLSBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gZXZlbnQgd2lsbCBiZSBvY2N1cmVkLlxyXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gdGhpcyAtIE5lZWRlZCBmb3IgY2hhaW5pbmcgdHJpY2suXHJcblx0XHQgKi9cclxuXHRcdGNsaWNrOiBmdW5jdGlvbihoYW5kbGVyKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0YWduYW1lIC0gVGhlIG5hbWUgb2YgbmVlZGVkIHRhZyB0aGF0IG11c3QgdG8gYmUgY3JlYXRlZC5cclxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3R9IHRoaXMgLSBOZWVkZWQgZm9yIGNoYWluaW5nIHRyaWNrLlxyXG5cdFx0ICovXHJcblx0XHRjcmVhdGU6IGZ1bmN0aW9uKHRhZ25hbWUpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWduYW1lKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRjbGVhcjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHdoaWxlKF9jdXJyZW50RWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKF9jdXJyZW50RWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGdldENsYXNzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWU7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc25hbWUgLSBUaGUgbmFtZSBvZiBjbGFzcyB0aGF0IG11c3QgYmUgc2V0dGVkIHRvIGN1cnJlbnQgRE9NIGVsZW1lbnQuXHJcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGlzIC0gTmVlZGVkIGZvciBjaGFpbmluZyB0cmljay5cclxuXHRcdCAqL1xyXG5cdFx0c2V0Q2xhc3M6IGZ1bmN0aW9uKGNsYXNzbmFtZSkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NuYW1lO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdHNldEhUTUw6IGZ1bmN0aW9uKGh0bWwpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IFtlbGVtZW50XSAtIEN1cnJlbnQgZWxlbWVudC5cclxuXHRcdCAqIEByZXR1cm5zIHtTdHJpbmd9IGVsZW1lbnQuaW5uZXJIVE1MIC0gSFRNTCBjb2RlIHRoYXQgY29udGFpbmluZyBpbnNpZGUgdGhlIGN1cnJlbnQgRE9NIGVsZW1lbnQuXHJcblx0XHQgKi9cclxuXHRcdGdldEhUTUw6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQgfHwgX2N1cnJlbnRFbGVtZW50O1xyXG5cdFx0XHRyZXR1cm4gZWxlbWVudC5pbm5lckhUTUw7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRhcHBlbmRIVE1MOiBmdW5jdGlvbihodG1sKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5pbm5lckhUTUwgKz0gaHRtbDtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRzaG93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoXCJsaXN0LW9mLW5vdGVzXCIgPT09IF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUpIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRoaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSB7RE9NRWxlbWVudH0gY2hpbGQgLSBET00gZWxlbWVudCB0aGF0IG11c3QgYmUgaW5zZXJ0ZWQgaW50byB0aGUgY3VycmVudCBlbGVtZW50LlxyXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gdGhpcyAtIE5lZWRlZCBmb3IgY2hhaW5pbmcgdHJpY2suXHJcblx0XHQgKi9cclxuXHRcdGFwcGVuZDogZnVuY3Rpb24oY2hpbGQpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHR0b2dnbGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZihcImhpZGVcIiA9PT0gX2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUgPSBcInNob3dcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lID0gXCJoaWRlXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEZ1bmN0aW9uIHdvcmtzIGluIHR3byBtb2RlOlxyXG5cdFx0ICogMSkgSWYgdGhlIHNlY29uZCBhcmd1bWVudCBpcyB3YXMgbm90IHBhc3NlZCB0aGVuIHJldHVybiB2YWx1ZSBvZiBuZWVkZWQgYXR0cmlidXRlLlxyXG5cdFx0ICogMikgSWYgdGhlIHNlY29uZCBhcmd1bWVudCB3YXMgcGFzc2VkIHRoZW4gc2V0dGluZyB1cCBwYXNzZWQgYXR0cmlidXRlIGludG8gcGFzc2VkIHZhbHVlLlxyXG5cdFx0ICogXHJcblx0XHQgKiBAZnVuY3Rpb25cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyaWJ1dGUgLSBUaGUgbmFtZSBvZiBhdHRyaWJ1dGUgdGhhdCBtdXN0IGJlIHNldHRlZCB0byBjdXJyZW50IGVsZW1lbnQuXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZyB8IHVuZGVmaW5lZH0gdmFsdWUgLSBJbnNlcnRpbmcgdmFsdWUgaW50byBhdHRyaWJ1dGUuXHJcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0IHwgU3RyaW5nfSAtIFZhbHVlIG9mIG5lZWRlZCBhdHRyaWJ1dGUgb3IgY3VycmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG5cdFx0ICoqL1xyXG5cdFx0YXR0cjogZnVuY3Rpb24oYXR0cmlidXRlLCB2YWx1ZSkge1xyXG5cdFx0XHRpZih1bmRlZmluZWQgPT09IHZhbHVlKSB7XHJcblx0XHRcdFx0cmV0dXJuIF9jdXJyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRrZXlwcmVzczogZnVuY3Rpb24oaGFuZGxlcikge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVyLCBmYWxzZSk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBET01NYW5pcHVsYXRvciBhcyBET00gfTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0RPTU1hbmlwdWxhdG9yLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==