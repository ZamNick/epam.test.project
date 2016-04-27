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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjhkNTA0MTY0M2M5NGE0NTg3ZjIiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ET01NYW5pcHVsYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdCTSxVO0FBRUwsd0JBQWM7QUFBQTs7QUFFYix1QkFBSSxPQUFKLEdBQWMsS0FBZCxDQUFvQixLQUFLLGdCQUF6Qjs7QUFFQSx1QkFBSSxHQUFKLENBQVEsaUJBQVIsRUFBMkIsS0FBM0IsQ0FBaUMsS0FBSywwQkFBdEM7QUFDQSx1QkFBSSxHQUFKLENBQVEsZUFBUixFQUF5QixLQUF6QixDQUErQixLQUFLLHdCQUFwQztBQUNBLHVCQUFJLEdBQUosQ0FBUSxlQUFSLEVBQXlCLEtBQXpCLENBQStCLEtBQUssd0JBQXBDO0FBQ0EsdUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDO0FBQ0EsdUJBQUksR0FBSixDQUFRLHNCQUFSLEVBQWdDLEtBQWhDLENBQXNDLEtBQUssOEJBQTNDO0FBQ0EsdUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDOztBQUVB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QjtBQUNBLEtBRkQsTUFFTztBQUNOLHFCQUFnQixTQUFoQixHQUE0QixNQUE1QjtBQUNBO0FBQ0QsV0FBTyxJQUFQO0FBQ0EsSUE3SEs7Ozs7Ozs7Ozs7OztBQTBJTixTQUFNLGNBQVMsU0FBVCxFQUFvQixLQUFwQixFQUEyQjtBQUNoQyxRQUFHLGNBQWMsS0FBakIsRUFBd0I7QUFDdkIsWUFBTyxnQkFBZ0IsWUFBaEIsQ0FBNkIsU0FBN0IsQ0FBUDtBQUNBLEtBRkQsTUFFTztBQUNOLHFCQUFnQixZQUFoQixDQUE2QixTQUE3QixFQUF3QyxLQUF4QztBQUNBLFlBQU8sSUFBUDtBQUNBO0FBQ0QsSUFqSks7O0FBb0pOLGFBQVUsa0JBQVMsT0FBVCxFQUFrQjtBQUMzQixvQkFBZ0IsZ0JBQWhCLENBQWlDLFVBQWpDLEVBQTZDLE9BQTdDLEVBQXNELEtBQXREO0FBQ0EsV0FBTyxJQUFQO0FBQ0E7QUF2SkssR0FBUDtBQTBKQSxFQTlKb0IsRUFBckI7O1NBZ0syQixHLEdBQWxCLGMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGI4ZDUwNDE2NDNjOTRhNDU4N2YyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBDb25uZWN0b3IgZnJvbSAnLi9jb25uZWN0b3IuanMnO1xyXG5pbXBvcnQgRmFjdG9yeSBmcm9tICcuL2ZhY3RvcnkuanMnO1xyXG5pbXBvcnQgeyBET00gfSBmcm9tICcuL0RPTU1hbmlwdWxhdG9yLmpzJztcclxuXHJcblxyXG4vKipcclxuICogQSBjbGFzcyByZXByZXNlbnQgYSBtYWluIGluc3RhbmNlIG9mIGFwcGxpY2F0aW9uLCB0aGUgcGFydFxyXG4gKiBvZiB0aGUgYXBwbGljYXRpb24gdGhhdCBoYW5kbGVzIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAqIEEgY29udHJvbGxlciBpcyB0aGUgbGluayBiZXR3ZWVuIGEgdXNlciBhbmQgc3lzdGVtLiBJdCByZXByZXNlbnRzXHJcbiAqIGEgbWFpbiBwb2ludCBvZiBlbnRyeS5cclxuICogQGNsYXNzXHJcbiAqIFxyXG4gKiBAcmVxdWlyZXMgY29uZmlnLmpzXHJcbiAqIEByZXF1aXJlcyBjb25uZWN0b3IuanNcclxuICogQHJlcXVpcmVzIGZhY3RvcnkuanNcclxuICogQHJlcXVpcmVzIERPTU1hbmlwdWxhdG9yLmpzXHJcbiAqIEBhdXRob3IgTmlrb2xheSBaYW11bG92IDx6YW11bG92OEBnbWFpbC5jb20+IFxyXG4gKi9cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdERPTS5nZXRCb2R5KCkuY2xpY2sodGhpcy5ib2R5Q2xpY2tIYW5kbGVyKTtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtYnV0dG9uXCIpLmNsaWNrKHRoaXMuc2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cdFx0RE9NLmdldChcInNlYXJjaC1idXR0b25cIikuY2xpY2sodGhpcy5zZWFyY2hCdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cdFx0RE9NLmdldChcImdpdGh1Yi1idXR0b25cIikuY2xpY2sodGhpcy5naXRodWJCdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cdFx0RE9NLmdldChcInNlYXJjaC1nby1idXR0b25cIikuY2xpY2sodGhpcy5zZWFyY2hHb0J1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuY2xpY2sodGhpcy5wcmV2aW91c1BhZ2VCdXR0b25DbGlja0hhbmRsZXIpO1xyXG5cdFx0RE9NLmdldChcIm5leHQtcGFnZS1idXR0b25cIikuY2xpY2sodGhpcy5uZXh0UGFnZUJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblxyXG5cdFx0RE9NLmdldChcInNlYXJjaC1saW5lXCIpLmNsaWNrKChldmVudCkgPT4geyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfSk7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikua2V5cHJlc3ModGhpcy5zZWFyY2hMaW5lS2V5UHJlc3NIYW5kbGVyKTtcclxuXHJcblx0XHRmb3IobGV0IHNlY3Rpb24gb2YgY29uZmlnLnNlY3Rpb25zKSB7XHJcblxyXG5cdFx0XHRsZXQgZWxlbWVudCA9IERPTVxyXG5cdFx0XHRcdFx0XHRcdC5jcmVhdGUoXCJsaVwiKVxyXG5cdFx0XHRcdFx0XHRcdC5zZXRIVE1MKHNlY3Rpb24pXHJcblx0XHRcdFx0XHRcdFx0LmNsaWNrKHRoaXMuc2VjdGlvbnNNZW51SXRlbUNsaWNrSGFuZGxlcilcclxuXHRcdFx0XHRcdFx0XHQuZ2V0RWxlbWVudCgpO1xyXG5cclxuXHRcdFx0RE9NLmdldChcInNlY3Rpb25zLW1lbnUtaXRlbXNcIikuYXBwZW5kKGVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdENvbm5lY3Rvci5nZXRUb3BTdG9yaWVzKFwiaG9tZVwiLCBDb250cm9sbGVyLnVwZGF0ZVRvcFN0b3JpZXMpO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHRzZWFyY2hMaW5lS2V5UHJlc3NIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0RE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoJ3B1cmUnLCBcImZhbHNlXCIpO1xyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIElmIHRoZSBFbnRlciBrZXlib2FyZCBidXR0b24gd2FzIHByZXNzZWQuXHJcblx0XHQgKi9cclxuXHRcdGlmKDEzID09PSBldmVudC5rZXlDb2RlKSB7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLmhpZGUoKTtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuc2V0SFRNTCgxKTtcclxuXHRcdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblx0XHRcdFxyXG5cdFx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLnNob3coKTtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKCdwdXJlJywgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdFx0Q29ubmVjdG9yLnNlYXJjaFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRFbGVtZW50KCkudmFsdWUsIDAsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHJcblx0Ym9keUNsaWNrSGFuZGxlcigpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuc2V0Q2xhc3MoXCJoaWRlXCIpO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHRzZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwic2hvd1wiID09PSBET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuZ2V0Q2xhc3MoKSkge1xyXG5cdFx0XHRET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuc2V0Q2xhc3MoXCJoaWRlXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS50b2dnbGUoKTtcclxuXHRcdFx0fSwgNTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNlYXJjaEJ1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwic2hvd1wiID09PSBET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5nZXRDbGFzcygpKSB7XHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnNldENsYXNzKFwiaGlkZVwiKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0XHR9LCA1MDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblxyXG5cdGdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcigpIHtcclxuXHRcdGxvY2F0aW9uLmhyZWYgPSBjb25maWcuR2l0SHViUmVmZXJlbmNlO1xyXG5cdH1cclxuXHJcblxyXG5cdHNlY3Rpb25zTWVudUl0ZW1DbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLmhpZGUoKTtcclxuXHJcblx0XHRET00uZ2V0KFwicGFnaW5nLW1lbnVcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0Q29ubmVjdG9yLmdldFRvcFN0b3JpZXMoRE9NLmdldEhUTUwodGhpcyksIENvbnRyb2xsZXIudXBkYXRlVG9wU3Rvcmllcyk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRzZWFyY2hHb0J1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5oaWRlKCk7XHJcblxyXG5cdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblx0XHRcclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKCdwdXJlJywgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZWFyY2hRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0RWxlbWVudCgpLnZhbHVlLCAwLCBDb250cm9sbGVyLnVwZGF0ZVNlYXJjaGVzKTtcclxuXHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblxyXG5cclxuXHRzdGF0aWMgdXBkYXRlVG9wU3RvcmllcyhkYXRhKSB7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5jbGVhcigpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuY2xlYXIoKTtcclxuXHRcdERPTS5nZXQoXCJzZWN0aW9uLW5hbWVcIikuY2xlYXIoKS5zZXRIVE1MKGRhdGEuc2VjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRhdGEuc2VjdGlvbi5zbGljZSgxKSk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZihpICUgMiA9PT0gMCkge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuYXBwZW5kSFRNTChGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YS5yZXN1bHRzW2ldLCAoaSA8IDQpID8gXCJtYWluXCIgOiBcImxpc3RcIikpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmFwcGVuZEhUTUwoRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5zaG93KCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5zaG93KCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLnNob3coKTtcclxuXHR9XHJcblxyXG5cclxuXHRzdGF0aWMgdXBkYXRlU2VhcmNoZXMoZGF0YSkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuY2xlYXIoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmNsZWFyKCk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGRhdGEucmVzcG9uc2UuZG9jcy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZihpICUgMiA9PT0gMCkge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuYXBwZW5kSFRNTChGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YS5yZXNwb25zZS5kb2NzW2ldLCBcInNlYXJjaFwiKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuYXBwZW5kSFRNTChGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YS5yZXNwb25zZS5kb2NzW2ldLCBcInNlYXJjaFwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuc2hvdygpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuc2hvdygpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJwYWdpbmctbWVudVwiKS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJldmlvdXNQYWdlQnV0dG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYoXCJmYWxzZVwiID09PSBET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cihcInB1cmVcIikpIHtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKFwicHVyZVwiLCBcInRydWVcIik7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwoMSk7XHJcblx0XHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5zZXRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cclxuXHRcdFx0Q29ubmVjdG9yLnNlYXJjaFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRFbGVtZW50KCkudmFsdWUsIDAsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRsZXQgcGFnZSA9ICtET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLmdldEhUTUwoKTtcclxuXHJcblx0XHRcdHBhZ2UgPSBwYWdlIC0gMTtcclxuXHJcblx0XHRcdGlmKDEgPT09IHBhZ2UpIHtcclxuXHRcdFx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKHBhZ2UpO1xyXG5cdFx0XHRDb25uZWN0b3Iuc2VhcmNoUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldEVsZW1lbnQoKS52YWx1ZSwgcGFnZSAtIDEsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRET00uZ2V0KFwibGVmdC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblxyXG5cdG5leHRQYWdlQnV0dG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYoXCJmYWxzZVwiID09PSBET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cihcInB1cmVcIikpIHtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKFwicHVyZVwiLCBcInRydWVcIik7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwoMSk7XHJcblx0XHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5zZXRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cclxuXHRcdFx0Q29ubmVjdG9yLnNlYXJjaFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRFbGVtZW50KCkudmFsdWUsIDAsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRsZXQgcGFnZSA9ICtET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLmdldEhUTUwoKTtcclxuXHJcblx0XHRcdHBhZ2UgPSBwYWdlICsgMTtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5zZXRDbGFzcyhcIlwiKTtcclxuXHRcdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKHBhZ2UpO1xyXG5cclxuXHRcdFx0Q29ubmVjdG9yLnNlYXJjaFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRFbGVtZW50KCkudmFsdWUsIHBhZ2UgLSAxLCBDb250cm9sbGVyLnVwZGF0ZVNlYXJjaGVzKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLnNob3coKTtcclxuXHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cdGNvbnN0IF9pbnN0YW5jZSA9IG5ldyBDb250cm9sbGVyKCk7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdCdUb3BTdG9yaWVzQVBJa2V5JyA6ICdiNTE3MWMwZjY2NzZkNzRkYTZjYjk5ZjdjY2ZjNmFhYTowOjc1MDU5OTMzJyxcclxuXHQnQXJ0aWNsZVNlYXJjaEFQSWtleScgOiAnNTg1ODNjYTI5ZTBiNWEyOTE2ZGQ1YzdiZmZkNDUxOGQ6MTQ6NzUwNTk5MzMnLFxyXG5cdCdzZWN0aW9ucycgOiBbJ0hvbWUnLCAnV29ybGQnLCAnTmF0aW9uYWwnLCAnUG9saXRpY3MnLCAnTnlyZWdpb24nLCAnQnVzaW5lc3MnLCAnT3BpbmlvbicsICdUZWNobm9sb2d5JyxcclxuXHRcdFx0XHQgICdTY2llbmNlJywgJ0hlYWx0aCcsICdTcG9ydHMnLCAnQXJ0cycsICdGYXNoaW9uJywgJ0RpbmluZycsICdUcmF2ZWwnLCAnTWFnYXppbmUnLCAnUmVhbGVzdGF0ZSddLFxyXG5cdCdHaXRIdWJSZWZlcmVuY2UnOiAnaHR0cHM6Ly9naXRodWIuY29tL1phbU5pY2svZXBhbS50ZXN0LnByb2plY3QnXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbmZpZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuLyoqXHJcbiAqIEEgY2xhc3MgcmVwcmVzZW50IGFuIGluc3RhbmNlIGZvciBtYWtlIGNvbm5lY3Rpb24gdG8gXHJcbiAqIFRoZSBOZXcgWW9yayBUaW1lcyBzZXJ2ZXIgZm9yIGdyYWJpbmcgbmVjZXNzYXJ5IGRhdGEuXHJcbiAqIEBjbGFzc1xyXG4gKlxyXG4gKiBAcmVxdWlyZXMgY29uZmlnLmpzXHJcbiAqIEBhdXRob3IgTmlrb2xheSBaYW11bG92IDx6YW11bG92OEBnbWFpbC5jb20+IFxyXG4gKi9cclxuY2xhc3MgQ29ubmVjdG9yIHtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGdW5jdGlvbiBpbml0aWFsaXppbmcgJ3VybCcgYW5kICdvcHRpb25zJyBzZXR0aW5ncyB2YXJpYWJsZXMgdGhhdFxyXG5cdCAqIG5lZWRlZCBmb3IgbWFraW5nIHJlcXVlc3QgdG8gc2VydmVyIGZvciBncmFiaW5nIHRoZSB0b3Agc3RvcmllcyBkYXRhLlxyXG5cdCAqIFxyXG5cdCAqIEBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbc2VjdGlvbk5hbWVdIC0gVGhlIG5hbWUgb2YgbmVlZGVkIHNlY3Rpb24gb2YgbmV3cy5cclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gcXVlcnkgd2lsbCBiZSBzZW5kZWQuXHJcblx0ICogQHN0YXRpY1xyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRUb3BTdG9yaWVzKHNlY3Rpb25OYW1lLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQGRlZmF1bHQgXCJob21lXCJcclxuXHRcdCAqL1xyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZSB8fCBcImhvbWVcIjtcclxuXHJcblx0XHRzZWN0aW9uTmFtZSA9IHNlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0bGV0IHVybCA9IGBodHRwOi8vYXBpLm55dGltZXMuY29tL3N2Yy90b3BzdG9yaWVzL3YxLyR7c2VjdGlvbk5hbWV9Lmpzb24/YXBpLWtleT0ke2NvbmZpZy5Ub3BTdG9yaWVzQVBJa2V5fWA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdG1vZGU6ICdjb3JzJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRDb25uZWN0b3Iuc2VuZFJlcXVlc3QodXJsLCBvcHRpb25zLCBjYWxsYmFjayk7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGdW5jdGlvbiBpbml0aWFsaXppbmcgJ3VybCcgYW5kICdvcHRpb25zJyBzZXR0aW5ncyB2YXJpYWJsZXMgdGhhdFxyXG5cdCAqIG5lZWRlZCBmb3IgbWFraW5nIHJlcXVlc3QgdG8gc2VydmVyIGZvciBzZWFyY2hpbmcgc29tZSBkYXRhIGluIGFydGljbGVzXHJcblx0ICogYW5kIHJlYWxpemUgc2VydmVyIHBhZ2luZyBsb2dpYy5cclxuXHQgKlxyXG5cdCAqIEBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSAtIFN0cmluZyBvZiBzZWFyY2ggbGluZSB0aGF0IHdhcyB0eXBlZCBieSB1c2VyLlxyXG5cdCAqIEBwYXJhbSB7SW50ZWdlcn0gcGFnZSAtIE5lZWRlZCBwYWdlIG9mIGRhdGEuXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHF1ZXJ5IHdpbGwgYmUgc2VuZGVkLlxyXG5cdCAqIEBzdGF0aWNcclxuXHQgKi9cclxuXHRzdGF0aWMgc2VhcmNoUXVlcnkocXVlcnksIHBhZ2UsIGNhbGxiYWNrKSB7XHJcblxyXG5cdFx0bGV0IHVybCA9IGBodHRwOi8vYXBpLm55dGltZXMuY29tL3N2Yy9zZWFyY2gvdjIvYXJ0aWNsZXNlYXJjaC5qc29uP3E9JHtxdWVyeX0mcGFnZT0ke3BhZ2V9JmFwaS1rZXk9JHtjb25maWcuQXJ0aWNsZVNlYXJjaEFQSWtleX1gO1xyXG5cclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRtb2RlOiAnY29ycydcclxuXHRcdH07XHJcblxyXG5cdFx0Q29ubmVjdG9yLnNlbmRSZXF1ZXN0KHVybCwgb3B0aW9ucywgY2FsbGJhY2spO1xyXG5cdFx0XHRcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2VuZCBhIHJlcXVlc3QgdG8gcmVtb3RlIHNlcnZlciBmb3IgbmVlZGVkIGRhdGEuXHJcblx0ICogXHJcblx0ICogQGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IHVybCAtIFVybCBvZiB0aGUgcmVtb3RlIHNlcnZlci5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNldHRpbmdzIGZvciByZXF1ZXN0LlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLm1ldGhvZCAtIE1ldGhvZCBvZiBIVFRQIHJlcXVlc3QgdGhhdCB3aWxsIGJlIHNlbmRlZC5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5tb2RlIC0gTW9kZSBvZiBjcm9zcy1kb21haW4gcmVxdWVzdC5cclxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gcXVlcnkgd2lsbCBiZSBzZW5kZWQuXHJcblx0ICogQHN0YXRpY1xyXG5cdCAqL1xyXG5cdHN0YXRpYyBzZW5kUmVxdWVzdCh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XHJcblxyXG5cdFx0ZmV0Y2godXJsLCBvcHRpb25zKVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG5cdFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuXHRcdFx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soZGF0YSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDogXCIgKyBlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0b3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25uZWN0b3IuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUuanMnO1xyXG5cclxuLyoqXHJcbiAqIEEgY2xhc3MgcmVwcmVzZW50IGFuIGluc3RhbmNlIHRoYXQgY3JlYXRlIG5lZWRlZFxyXG4gKiBuZXdzIG5vdGUgdXNpbmcgcGFzc2VkIG1ldGFkYXRhIG9mIGN1cnJlbnQgb25lIG5ld3NcclxuICogYW5kIG5lZWRlZCB0eXBlIG9mIG5vdGUuXHJcbiAqIEBjbGFzc1xyXG4gKlxyXG4gKiBAcmVxdWlyZXMgbm90ZS5qc1xyXG4gKiBAYXV0aG9yIE5pa29sYXkgWmFtdWxvdiA8emFtdWxvdjhAZ21haWwuY29tPiBcclxuICovXHJcbmNsYXNzIEZhY3Rvcnkge1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZ1bmN0aW9uIGNyZWF0ZSBhIG5lZWRlZCB0eXBlIG9mIGN1cnJlbnQgb25lIG5ld3Mgbm90ZS5cclxuXHQgKiBSZXByZXNlbnQgYSBzaW1wbGUgZmFjdG9yeSBwYXR0ZXJuLlxyXG5cdCAqIFxyXG5cdCAqIEBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gTWV0YWRhdGEgb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIE5lZWRlZCB0eXBlIGZvciBjdXJyZW50IG9uZSBuZXdzIG5vdGUuXHJcblx0ICogQHN0YXRpY1xyXG5cdCAqIEByZXR1cm5zIHtTdHJpbmcgfCBFcnJvcn0gLSBIVE1MIGNvZGUgb2YgY3VycmVudCBvbmUgbmV3cyBmb3IgYWRkaW5nIGl0IGludG8gXHJcblx0ICogd2ViLXNpdGUgY29udGVudCBvciBlcnJvciBmb3IgdW5rbm93IHR5cGUgbm90ZS5cclxuXHQgKi9cclxuXHRzdGF0aWMgY3JlYXRlTm90ZShkYXRhLCB0eXBlKSB7XHJcblx0XHRpZihcIm1haW5cIiA9PT0gdHlwZSkge1xyXG5cdFx0XHRyZXR1cm4gTm90ZS5nZXRNYWluTm90ZShkYXRhKTtcclxuXHRcdH0gZWxzZSBpZihcImxpc3RcIiA9PT0gdHlwZSkge1xyXG5cdFx0XHRyZXR1cm4gTm90ZS5nZXRMaXN0Tm90ZShkYXRhKTtcclxuXHRcdH0gZWxzZSBpZihcInNlYXJjaFwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLmdldFNlYXJjaE5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3cgdHlwZSBvZiBub3RlLlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN0b3J5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZmFjdG9yeS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4vKipcclxuICogQSBjbGFzcyByZXByZXNlbnQgYW4gaW5zdGFuY2Ugb2Ygbm90ZVxyXG4gKiB0aGF0IGRpc3BsYXkgb24gdXNlciBtb25pdG9yIGFuZCBjb250YWluXHJcbiAqIG5ld3MgZGF0YSBmcm9tIHNvbWUgbmV3cyBzZWN0aW9uLlxyXG4gKiBAY2xhc3NcclxuICogXHJcbiAqIEBhdXRob3IgTmlrb2xheSBaYW11bG92IDx6YW11bG92OEBnbWFpbC5jb20+IFxyXG4gKi9cclxuY2xhc3MgTm90ZSB7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gY3JlYXRlIGEgbWFpbiBub3RlIHRoYXQgcmVwcmVzZW50ZWQgb24gd2ViLXNpdGVcclxuXHQgKiBsaWtlIGEgbm90ZSB3aXRoIGJpZyBzaXplIGltYWdlIGFuZCB0aGlzIG5vdGUgY29ycmVzcG9uZGluZyBcclxuXHQgKiBmb3IgbW9yZSBpbXBvcnRhbnQgbmV3cy5cclxuXHQgKiBcclxuXHQgKiBAZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBuZXdzIG1ldGFkYXRhLlxyXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGRhdGEubXVsdGltZWRpYSAtIENvbnRhaW5lciBvZiBtdWx0aW1lZGlhIGRhdGEuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubXVsdGltZWRpYVtdLnVybCAtIFJlbW90ZSBhZGRyZXNzIG9mIGN1cnJlbnQgb25lIG5ld3MgaW1hZ2UuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubXVsdGltZWRpYVtdLmNvcHlyaWdodCAtIFRoZSBhdXRob3Igb2YgY3VycmVudCBvbmUgbmV3cyBpbWFnZS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS51cmwgLSBSZW1vdGUgYWRkcmVzcyBvZiBjb3JyZXNwb25kaW5nIGFydGljbGUgb24gbWFpbiBzaXRlLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnRpdGxlIC0gVGl0bGUgb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5ieWxpbmUgLSBUaGUgYXV0aG9yIG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYWJzdHJhY3QgLSBTaG9ydCBhcnRpY2xlIHN0b3J5IG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHN0YXRpY1xyXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IC0gSFRNTCBjb2RlIG9mIGN1cnJlbnQgb25lIG5ld3MgZm9yIGFkZGluZyBpdCBpbnRvIHdlYi1zaXRlIGNvbnRlbnQuXHJcblx0ICovXHJcblx0c3RhdGljIGdldE1haW5Ob3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgaW1nID0gKFwiXCIgIT09IGRhdGEubXVsdGltZWRpYSkgP1x0YDxkaXYgY2xhc3M9XCJtYWluLW5vdGUtd3JhcHBlci1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVszXS51cmwgfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5gIDogYGA7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cIm1haW4tbm90ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+PGEgaHJlZj1cIiR7IGRhdGEudXJsIH1cIj4keyBkYXRhLnRpdGxlIH08L2E+PC9oMj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IGRhdGEuYnlsaW5lIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0JHsgaW1nIH1cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNyZWRpdFwiPiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbM10uY29weXJpZ2h0IH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFic3RyYWN0XCI+JHsgZGF0YS5hYnN0cmFjdCB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBub3RlO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gY3JlYXRlIGEgbGlzdCBub3RlIHRoYXQgcmVwcmVzZW50ZWQgb24gd2ViLXNpdGVcclxuXHQgKiBsaWtlIGEgbm90ZSB3aXRoIHNtYWxsIHNpemUgaW1hZ2UgYW5kIHRoYXQgbm90ZSBjb250YWlucyBpbnRvXHJcblx0ICogbGVmdCBvciByaWdodCBsaXN0IG9mIG5vdGVzLiBUaGlzIG5vdGUgY29ycmVzcG9uZGluZ1xyXG5cdCAqIGZvciBzZWNvbmRhcnkgbmV3cy5cclxuXHQgKlxyXG5cdCAqIEBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ld3MgbWV0YWRhdGEuXHJcblx0ICogQHBhcmFtIHtBcnJheX0gZGF0YS5tdWx0aW1lZGlhIC0gQ29udGFpbmVyIG9mIG11bHRpbWVkaWEgZGF0YS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5tdWx0aW1lZGlhW10udXJsIC0gUmVtb3RlIGFkZHJlc3Mgb2YgY3VycmVudCBvbmUgbmV3cyBpbWFnZS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS51cmwgLSBSZW1vdGUgYWRkcmVzcyBvZiBjb3JyZXNwb25kaW5nIGFydGljbGUgb24gbWFpbiBzaXRlLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnRpdGxlIC0gVGl0bGUgb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5ieWxpbmUgLSBUaGUgYXV0aG9yIG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYWJzdHJhY3QgLSBTaG9ydCBhcnRpY2xlIHN0b3J5IG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHN0YXRpY1xyXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IC0gSFRNTCBjb2RlIG9mIGN1cnJlbnQgb25lIG5ld3MgZm9yIGFkZGluZyBpdCBpbnRvIHdlYi1zaXRlIGNvbnRlbnQuXHJcblx0ICovXHJcblx0c3RhdGljIGdldExpc3ROb3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibGlzdC1ub3RlXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVswXS51cmwgfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+PGEgaHJlZj1cIiR7IGRhdGEudXJsIH1cIj4keyBkYXRhLnRpdGxlIH08L2E+PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieWxpbmVcIj4keyBkYXRhLmJ5bGluZSB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPiR7IGRhdGEuYWJzdHJhY3QgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+YDtcclxuXHJcblx0XHRyZXR1cm4gbm90ZTtcclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZ1bmN0aW9uIGNyZWF0ZSBhIHNlYXJjaCBub3RlIHRoYXQgcmVwcmVzZW50ZWQgb24gd2ViLXNpdGVcclxuXHQgKiBsaWtlIGEgbm90ZSB3aXRoIG1lZGl1bSBzaXplIGltYWdlIGFuZCB0aGF0IG5vdGUgY29udGFpbnMgaW50b1xyXG5cdCAqIGxlZnQgb3IgcmlnaHQgbGlzdCBvZiBub3Rlcy4gVGhpcyBub3RlIGNvcnJlc3BvbmRpbmdcclxuXHQgKiBmb3Igc2VhcmNoaW5nIG5ld3MuXHJcblx0ICogXHJcblx0ICogQGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgbmV3cyBtZXRhZGF0YS5cclxuXHQgKiBAcGFyYW0ge0FycmF5fSBkYXRhLm11bHRpbWVkaWEgLSBDb250YWluZXIgb2YgbXVsdGltZWRpYSBkYXRhLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLm11bHRpbWVkaWFbXS51cmwgLSBSZW1vdGUgYWRkcmVzcyBvZiBjdXJyZW50IG9uZSBuZXdzIGltYWdlLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLndlYl91cmwgLSBSZW1vdGUgYWRkcmVzcyBvZiBjb3JyZXNwb25kaW5nIGFydGljbGUgb24gbWFpbiBzaXRlLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLmhlYWRsaW5lIC0gTWV0YWRhdGEgb2YgdGl0bGUgb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5oZWFkbGluZS5tYWluIC0gVGl0bGUgb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5ieWxpbmUgLSBNZXRhZGF0YSBvZiBhdXRob3Igb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5ieWxpbmUub3JpZ2luYWwgLSBUaGUgYXV0aG9yIG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuc25pcHBldCAtIFNob3J0IGFydGljbGUgc3Rvcnkgb2YgY3VycmVudCBvbmUgbmV3cy5cclxuXHQgKiBAc3RhdGljXHJcblx0ICogQHJldHVybnMge1N0cmluZ30gLSBIVE1MIGNvZGUgb2YgY3VycmVudCBvbmUgbmV3cyBmb3IgYWRkaW5nIGl0IGludG8gd2ViLXNpdGUgY29udGVudC5cclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0U2VhcmNoTm90ZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IGltZyA9ICgwICE9PSBkYXRhLm11bHRpbWVkaWEubGVuZ3RoKSA/IGBzdHlsZT1cIm1pbi1oZWlnaHQ6IDE1MHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7KFwiaHR0cDovL3N0YXRpYzAxLm55dC5jb20vXCIgKyBkYXRhLm11bHRpbWVkaWFbMF0udXJsKX1cIiBzdHlsZT1cImhlaWdodDogMTMwcHg7IHdpZHRoOiAxOTBweDtcIj5gIDogYD5gO1xyXG5cclxuXHRcdGxldCBub3RlID0gYDxkaXYgY2xhc3M9XCJsaXN0LW5vdGVcIiR7IGltZyB9XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz48YSBocmVmPVwiJHsgZGF0YS53ZWJfdXJsIH1cIj4keyBkYXRhLmhlYWRsaW5lLm1haW4gfTwvYT48L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IG51bGwgPT09IGRhdGEuYnlsaW5lID8gXCJcIiA6IGRhdGEuYnlsaW5lLm9yaWdpbmFsIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFic3RyYWN0XCI+JHsgZGF0YS5zbmlwcGV0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ub3RlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBNYWpvciBmdW5jdGlvbmFsaXR5IG9mIHRoaXMgb2JqZWN0IHJlbGF0ZWQgdG9cclxuICogbWFuaXB1bGF0aW5nIHdpdGggRE9NIGVsZW1lbnRzLiBOZWVkZWQgZm9yIGluY2Fwc3VsYXRlXHJcbiAqIERPTSBtYW5pcHVsYXRpb24gbG9naWMuIFNpdHVhdGVkIGJldHdlZW4gVmlldyBhbmQgQ29udHJvbGxlclxyXG4gKiBpbnRvIGNsYXNzIGhpZXJhcmNoeSBvZiBjdXJyZW50IHRlc3QgcHJvamVjdC5cclxuICpcclxuICogQmFzZWQgb24gY2xvc3VyZSBwcmluY2lwbGUgYW5kIG1vZHVsZSBwcm9ncmFtbWluZyBzdHlsZS5cclxuICogXHJcbiAqIEBhdXRob3IgTmlrb2xheSBaYW11bG92IDx6YW11bG92OEBnbWFpbC5jb20+IFxyXG4gKi9cclxubGV0IERPTU1hbmlwdWxhdG9yID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRsZXQgX2N1cnJlbnRFbGVtZW50O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIElEIG9mIGN1cnJlbnQgRE9NIGVsZW1lbnQuXHJcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGlzIC0gTmVlZGVkIGZvciBjaGFpbmluZyB0cmljay5cclxuXHRcdCAqL1xyXG5cdFx0Z2V0OiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcmV0dXJucyB7RE9NRWxlbWVudH0gX2N1cnJlbnRFbGVtZW50IC0gV29ya2luZyBqdXN0IGxpa2UgYSBnZXQgbWV0aG9kLlxyXG5cdFx0ICovXHJcblx0XHRnZXRFbGVtZW50OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIF9jdXJyZW50RWxlbWVudDtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGdldEJvZHk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciAtIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiBldmVudCB3aWxsIGJlIG9jY3VyZWQuXHJcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGlzIC0gTmVlZGVkIGZvciBjaGFpbmluZyB0cmljay5cclxuXHRcdCAqL1xyXG5cdFx0Y2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHRhZ25hbWUgLSBUaGUgbmFtZSBvZiBuZWVkZWQgdGFnIHRoYXQgbXVzdCB0byBiZSBjcmVhdGVkLlxyXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gdGhpcyAtIE5lZWRlZCBmb3IgY2hhaW5pbmcgdHJpY2suXHJcblx0XHQgKi9cclxuXHRcdGNyZWF0ZTogZnVuY3Rpb24odGFnbmFtZSkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ25hbWUpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGNsZWFyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0d2hpbGUoX2N1cnJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoX2N1cnJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0Z2V0Q2xhc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gX2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzbmFtZSAtIFRoZSBuYW1lIG9mIGNsYXNzIHRoYXQgbXVzdCBiZSBzZXR0ZWQgdG8gY3VycmVudCBET00gZWxlbWVudC5cclxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3R9IHRoaXMgLSBOZWVkZWQgZm9yIGNoYWluaW5nIHRyaWNrLlxyXG5cdFx0ICovXHJcblx0XHRzZXRDbGFzczogZnVuY3Rpb24oY2xhc3NuYW1lKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc25hbWU7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0c2V0SFRNTDogZnVuY3Rpb24oaHRtbCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSB7RE9NRWxlbWVudH0gW2VsZW1lbnRdIC0gQ3VycmVudCBlbGVtZW50LlxyXG5cdFx0ICogQHJldHVybnMge1N0cmluZ30gZWxlbWVudC5pbm5lckhUTUwgLSBIVE1MIGNvZGUgdGhhdCBjb250YWluaW5nIGluc2lkZSB0aGUgY3VycmVudCBET00gZWxlbWVudC5cclxuXHRcdCAqL1xyXG5cdFx0Z2V0SFRNTDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRlbGVtZW50ID0gZWxlbWVudCB8fCBfY3VycmVudEVsZW1lbnQ7XHJcblx0XHRcdHJldHVybiBlbGVtZW50LmlubmVySFRNTDtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGFwcGVuZEhUTUw6IGZ1bmN0aW9uKGh0bWwpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmlubmVySFRNTCArPSBodG1sO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdHNob3c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZihcImxpc3Qtb2Ytbm90ZXNcIiA9PT0gX2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGhpZGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIHtET01FbGVtZW50fSBjaGlsZCAtIERPTSBlbGVtZW50IHRoYXQgbXVzdCBiZSBpbnNlcnRlZCBpbnRvIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGlzIC0gTmVlZGVkIGZvciBjaGFpbmluZyB0cmljay5cclxuXHRcdCAqL1xyXG5cdFx0YXBwZW5kOiBmdW5jdGlvbihjaGlsZCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdHRvZ2dsZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKFwiaGlkZVwiID09PSBfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lKSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSA9IFwic2hvd1wiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUgPSBcImhpZGVcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRnVuY3Rpb24gd29ya3MgaW4gdHdvIG1vZGU6XHJcblx0XHQgKiAxKSBJZiB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIHdhcyBub3QgcGFzc2VkIHRoZW4gcmV0dXJuIHZhbHVlIG9mIG5lZWRlZCBhdHRyaWJ1dGUuXHJcblx0XHQgKiAyKSBJZiB0aGUgc2Vjb25kIGFyZ3VtZW50IHdhcyBwYXNzZWQgdGhlbiBzZXR0aW5nIHVwIHBhc3NlZCBhdHRyaWJ1dGUgaW50byBwYXNzZWQgdmFsdWUuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBmdW5jdGlvblxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGF0dHJpYnV0ZSAtIFRoZSBuYW1lIG9mIGF0dHJpYnV0ZSB0aGF0IG11c3QgYmUgc2V0dGVkIHRvIGN1cnJlbnQgZWxlbWVudC5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nIHwgdW5kZWZpbmVkfSB2YWx1ZSAtIEluc2VydGluZyB2YWx1ZSBpbnRvIGF0dHJpYnV0ZS5cclxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3QgfCBTdHJpbmd9IC0gVmFsdWUgb2YgbmVlZGVkIGF0dHJpYnV0ZSBvciBjdXJyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKiovXHJcblx0XHRhdHRyOiBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlKSB7XHJcblx0XHRcdGlmKHVuZGVmaW5lZCA9PT0gdmFsdWUpIHtcclxuXHRcdFx0XHRyZXR1cm4gX2N1cnJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGtleXByZXNzOiBmdW5jdGlvbihoYW5kbGVyKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IERPTU1hbmlwdWxhdG9yIGFzIERPTSB9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vRE9NTWFuaXB1bGF0b3IuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9