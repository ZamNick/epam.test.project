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
	
							_DOMManipulator.DOM.get("section-name").clear().setHTML(data.section.charAt(0).toUpperCase() + data.section.slice(1));
	
							Controller.updateAndShowListsOfNotes(data.results, false);
	
							_DOMManipulator.DOM.get("section-name").show();
					}
			}, {
					key: 'updateSearches',
					value: function updateSearches(data) {
	
							Controller.updateAndShowListsOfNotes(data.response.docs, true);
	
							_DOMManipulator.DOM.get("paging-menu").show();
					}
			}, {
					key: 'updateAndShowListsOfNotes',
					value: function updateAndShowListsOfNotes(data, search) {
	
							_DOMManipulator.DOM.get("left-list").clear();
							_DOMManipulator.DOM.get("right-list").clear();
	
							for (var i = 0; i < data.length; ++i) {
									_DOMManipulator.DOM.get(i % 2 === 0 ? "left-list" : "right-list").appendHTML(_factory2.default.createNote(data[i], true === search ? "search" : i < 4 ? "main" : "list"));
									/*if(i % 2 === 0) {
	        	DOM.get("left-list").appendHTML(Factory.createNote(data[i], (true === search ? "search" : (i < 4 ? "main" : "list"))));
	        } else {
	        	DOM.get("right-list").appendHTML(Factory.createNote(data[i], (true === search ? "search" : (i < 4 ? "main" : "list"))));
	        }*/
							}
	
							_DOMManipulator.DOM.get("preloader").hide();
							_DOMManipulator.DOM.get("left-list").show();
							_DOMManipulator.DOM.get("right-list").show();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2I1ZGM5NGJhNzUzOWQ5NmViZjYiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ET01NYW5pcHVsYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdCTSxVO0FBRUwseUJBQWM7QUFBQTs7QUFFYix5QkFBSSxPQUFKLEdBQWMsS0FBZCxDQUFvQixLQUFLLGdCQUF6Qjs7QUFFQSx5QkFBSSxHQUFKLENBQVEsaUJBQVIsRUFBMkIsS0FBM0IsQ0FBaUMsS0FBSywwQkFBdEM7QUFDQSx5QkFBSSxHQUFKLENBQVEsZUFBUixFQUF5QixLQUF6QixDQUErQixLQUFLLHdCQUFwQztBQUNBLHlCQUFJLEdBQUosQ0FBUSxlQUFSLEVBQXlCLEtBQXpCLENBQStCLEtBQUssd0JBQXBDO0FBQ0EseUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDO0FBQ0EseUJBQUksR0FBSixDQUFRLHNCQUFSLEVBQWdDLEtBQWhDLENBQXNDLEtBQUssOEJBQTNDO0FBQ0EseUJBQUksR0FBSixDQUFRLGtCQUFSLEVBQTRCLEtBQTVCLENBQWtDLEtBQUssMEJBQXZDOztBQUVBLHlCQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLEtBQXZCLENBQTZCLFVBQUMsS0FBRCxFQUFXO0FBQUUsYUFBTSxlQUFOO0FBQTBCLE1BQXBFO0FBQ0EseUJBQUksR0FBSixDQUFRLGFBQVIsRUFBdUIsUUFBdkIsQ0FBZ0MsS0FBSyx5QkFBckM7O0FBWmE7QUFBQTtBQUFBOztBQUFBO0FBY2IsNEJBQW1CLGlCQUFPLFFBQTFCLDhIQUFvQztBQUFBLGFBQTVCLE9BQTRCOzs7QUFFbkMsYUFBSSxVQUFVLG9CQUNULE1BRFMsQ0FDRixJQURFLEVBRVQsT0FGUyxDQUVELE9BRkMsRUFHVCxLQUhTLENBR0gsS0FBSyw0QkFIRixFQUlULFVBSlMsRUFBZDs7QUFNQSw2QkFBSSxHQUFKLENBQVEscUJBQVIsRUFBK0IsTUFBL0IsQ0FBc0MsT0FBdEM7QUFDQTtBQXZCWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXlCYix5QkFBSSxHQUFKLENBQVEsV0FBUixFQUFxQixJQUFyQjs7QUFFQSx5QkFBVSxhQUFWLENBQXdCLE1BQXhCLEVBQWdDLFdBQVcsZ0JBQTNDO0FBRUE7Ozs7K0NBR3lCLEssRUFBTzs7QUFFaEMsMkJBQUksR0FBSixDQUFRLGFBQVIsRUFBdUIsSUFBdkIsQ0FBNEIsTUFBNUIsRUFBb0MsT0FBcEM7Ozs7O0FBTUEsV0FBRyxPQUFPLE1BQU0sT0FBaEIsRUFBeUI7O0FBRXhCLDZCQUFJLEdBQUosQ0FBUSxXQUFSLEVBQXFCLElBQXJCO0FBQ0EsNkJBQUksR0FBSixDQUFRLFlBQVIsRUFBc0IsSUFBdEI7QUFDQSw2QkFBSSxHQUFKLENBQVEsY0FBUixFQUF3QixJQUF4Qjs7QUFFQSw2QkFBSSxHQUFKLENBQVEsY0FBUixFQUF3QixPQUF4QixDQUFnQyxDQUFoQztBQUNBLDZCQUFJLEdBQUosQ0FBUSxzQkFBUixFQUFnQyxRQUFoQyxDQUF5QyxVQUF6Qzs7QUFFQSw2QkFBSSxHQUFKLENBQVEsV0FBUixFQUFxQixJQUFyQjs7QUFFQSw2QkFBSSxHQUFKLENBQVEsYUFBUixFQUF1QixJQUF2QixDQUE0QixNQUE1QixFQUFvQyxNQUFwQzs7QUFFQSw2QkFBVSxXQUFWLENBQXNCLG9CQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLFFBQXZCLEVBQXRCLEVBQXlELENBQXpELEVBQTRELFdBQVcsY0FBdkU7QUFFQTtBQUVEOzs7d0NBR2tCOztBQUVsQiwyQkFBSSxHQUFKLENBQVEsZUFBUixFQUF5QixRQUF6QixDQUFrQyxNQUFsQztBQUNBLDJCQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLFFBQXZCLENBQWdDLE1BQWhDO0FBRUE7OztnREFHMEIsSyxFQUFPOztBQUVqQyxXQUFHLFdBQVcsb0JBQUksR0FBSixDQUFRLGFBQVIsRUFBdUIsUUFBdkIsRUFBZCxFQUFpRDtBQUNoRCw2QkFBSSxHQUFKLENBQVEsYUFBUixFQUF1QixRQUF2QixDQUFnQyxNQUFoQztBQUNBLG9CQUFXLFlBQU07QUFDaEIsK0JBQUksR0FBSixDQUFRLGVBQVIsRUFBeUIsTUFBekI7QUFDQSxVQUZELEVBRUcsR0FGSDtBQUdBLFFBTEQsTUFLTztBQUNOLDZCQUFJLEdBQUosQ0FBUSxlQUFSLEVBQXlCLE1BQXpCO0FBQ0E7O0FBRUQsYUFBTSxlQUFOO0FBQ0E7Ozs4Q0FHd0IsSyxFQUFPOztBQUUvQixXQUFHLFdBQVcsb0JBQUksR0FBSixDQUFRLGVBQVIsRUFBeUIsUUFBekIsRUFBZCxFQUFtRDtBQUNsRCw2QkFBSSxHQUFKLENBQVEsZUFBUixFQUF5QixRQUF6QixDQUFrQyxNQUFsQztBQUNBLG9CQUFXLFlBQU07QUFDaEIsK0JBQUksR0FBSixDQUFRLGFBQVIsRUFBdUIsTUFBdkI7QUFDQSxVQUZELEVBRUcsR0FGSDtBQUdBLFFBTEQsTUFLTztBQUNOLDZCQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLE1BQXZCO0FBQ0E7O0FBRUQsYUFBTSxlQUFOO0FBQ0E7OztnREFHMEI7QUFDMUIsZ0JBQVMsSUFBVCxHQUFnQixpQkFBTyxlQUF2QjtBQUNBOzs7a0RBRzRCLEssRUFBTzs7QUFFbkMsMkJBQUksR0FBSixDQUFRLGVBQVIsRUFBeUIsUUFBekIsQ0FBa0MsTUFBbEM7O0FBRUEsMkJBQUksR0FBSixDQUFRLFdBQVIsRUFBcUIsSUFBckI7QUFDQSwyQkFBSSxHQUFKLENBQVEsWUFBUixFQUFzQixJQUF0QjtBQUNBLDJCQUFJLEdBQUosQ0FBUSxjQUFSLEVBQXdCLElBQXhCOztBQUVBLDJCQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLElBQXZCO0FBQ0EsMkJBQUksR0FBSixDQUFRLGNBQVIsRUFBd0IsT0FBeEIsQ0FBZ0MsQ0FBaEM7QUFDQSwyQkFBSSxHQUFKLENBQVEsc0JBQVIsRUFBZ0MsUUFBaEMsQ0FBeUMsVUFBekM7O0FBRUEsMkJBQUksR0FBSixDQUFRLFdBQVIsRUFBcUIsSUFBckI7O0FBRUEsMkJBQVUsYUFBVixDQUF3QixvQkFBSSxPQUFKLENBQVksSUFBWixDQUF4QixFQUEyQyxXQUFXLGdCQUF0RDs7QUFFQSxhQUFNLGVBQU47QUFDQTs7O2dEQUcwQixLLEVBQU87O0FBRWpDLDJCQUFJLEdBQUosQ0FBUSxXQUFSLEVBQXFCLElBQXJCO0FBQ0EsMkJBQUksR0FBSixDQUFRLFlBQVIsRUFBc0IsSUFBdEI7QUFDQSwyQkFBSSxHQUFKLENBQVEsY0FBUixFQUF3QixJQUF4Qjs7QUFFQSwyQkFBSSxHQUFKLENBQVEsY0FBUixFQUF3QixPQUF4QixDQUFnQyxDQUFoQztBQUNBLDJCQUFJLEdBQUosQ0FBUSxzQkFBUixFQUFnQyxRQUFoQyxDQUF5QyxVQUF6Qzs7QUFFQSwyQkFBSSxHQUFKLENBQVEsV0FBUixFQUFxQixJQUFyQjs7QUFFQSwyQkFBSSxHQUFKLENBQVEsYUFBUixFQUF1QixJQUF2QixDQUE0QixNQUE1QixFQUFvQyxNQUFwQzs7QUFFQSwyQkFBVSxXQUFWLENBQXNCLG9CQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLFFBQXZCLEVBQXRCLEVBQXlELENBQXpELEVBQTRELFdBQVcsY0FBdkU7O0FBRUEsYUFBTSxlQUFOO0FBQ0E7OztvREF5QzhCLEssRUFBTzs7QUFFckMsV0FBRyxZQUFZLG9CQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLElBQXZCLENBQTRCLE1BQTVCLENBQWYsRUFBb0Q7O0FBRW5ELDZCQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLElBQXZCLENBQTRCLE1BQTVCLEVBQW9DLE1BQXBDOztBQUVBLDZCQUFJLEdBQUosQ0FBUSxjQUFSLEVBQXdCLE9BQXhCLENBQWdDLENBQWhDO0FBQ0EsNkJBQUksR0FBSixDQUFRLHNCQUFSLEVBQWdDLFFBQWhDLENBQXlDLFVBQXpDOztBQUVBLDZCQUFVLFdBQVYsQ0FBc0Isb0JBQUksR0FBSixDQUFRLGFBQVIsRUFBdUIsUUFBdkIsRUFBdEIsRUFBeUQsQ0FBekQsRUFBNEQsV0FBVyxjQUF2RTtBQUVBLFFBVEQsTUFTTzs7QUFFTixhQUFJLE9BQU8sQ0FBQyxvQkFBSSxHQUFKLENBQVEsY0FBUixFQUF3QixPQUF4QixFQUFaOztBQUVBLGdCQUFPLE9BQU8sQ0FBZDs7QUFFQSxhQUFHLE1BQU0sSUFBVCxFQUFlO0FBQ2QsK0JBQUksR0FBSixDQUFRLHNCQUFSLEVBQWdDLFFBQWhDLENBQXlDLFVBQXpDO0FBQ0E7O0FBRUQsNkJBQUksR0FBSixDQUFRLGNBQVIsRUFBd0IsT0FBeEIsQ0FBZ0MsSUFBaEM7QUFDQSw2QkFBVSxXQUFWLENBQXNCLG9CQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLFFBQXZCLEVBQXRCLEVBQXlELE9BQU8sQ0FBaEUsRUFBbUUsV0FBVyxjQUE5RTtBQUVBOztBQUVELDJCQUFJLEdBQUosQ0FBUSxXQUFSLEVBQXFCLElBQXJCO0FBQ0EsMkJBQUksR0FBSixDQUFRLFlBQVIsRUFBc0IsSUFBdEI7QUFDQSwyQkFBSSxHQUFKLENBQVEsV0FBUixFQUFxQixJQUFyQjs7QUFFQSxhQUFNLGVBQU47QUFDQTs7O2dEQUcwQixLLEVBQU87O0FBRWpDLFdBQUcsWUFBWSxvQkFBSSxHQUFKLENBQVEsYUFBUixFQUF1QixJQUF2QixDQUE0QixNQUE1QixDQUFmLEVBQW9EOztBQUVuRCw2QkFBSSxHQUFKLENBQVEsYUFBUixFQUF1QixJQUF2QixDQUE0QixNQUE1QixFQUFvQyxNQUFwQzs7QUFFQSw2QkFBSSxHQUFKLENBQVEsY0FBUixFQUF3QixPQUF4QixDQUFnQyxDQUFoQztBQUNBLDZCQUFJLEdBQUosQ0FBUSxzQkFBUixFQUFnQyxRQUFoQyxDQUF5QyxVQUF6Qzs7QUFFQSw2QkFBVSxXQUFWLENBQXNCLG9CQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLFFBQXZCLEVBQXRCLEVBQXlELENBQXpELEVBQTRELFdBQVcsY0FBdkU7QUFFQSxRQVRELE1BU087O0FBRU4sYUFBSSxPQUFPLENBQUMsb0JBQUksR0FBSixDQUFRLGNBQVIsRUFBd0IsT0FBeEIsRUFBWjs7QUFFQSxnQkFBTyxPQUFPLENBQWQ7O0FBRUEsNkJBQUksR0FBSixDQUFRLHNCQUFSLEVBQWdDLFFBQWhDLENBQXlDLEVBQXpDO0FBQ0EsNkJBQUksR0FBSixDQUFRLGNBQVIsRUFBd0IsT0FBeEIsQ0FBZ0MsSUFBaEM7O0FBRUEsNkJBQVUsV0FBVixDQUFzQixvQkFBSSxHQUFKLENBQVEsYUFBUixFQUF1QixRQUF2QixFQUF0QixFQUF5RCxPQUFPLENBQWhFLEVBQW1FLFdBQVcsY0FBOUU7QUFFQTs7QUFFRCwyQkFBSSxHQUFKLENBQVEsV0FBUixFQUFxQixJQUFyQjtBQUNBLDJCQUFJLEdBQUosQ0FBUSxZQUFSLEVBQXNCLElBQXRCO0FBQ0EsMkJBQUksR0FBSixDQUFRLFdBQVIsRUFBcUIsSUFBckI7O0FBRUEsYUFBTSxlQUFOO0FBQ0E7OztzQ0FyR3VCLEksRUFBTTs7QUFFN0IsMkJBQUksR0FBSixDQUFRLGNBQVIsRUFBd0IsS0FBeEIsR0FBZ0MsT0FBaEMsQ0FBd0MsS0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixDQUFwQixFQUF1QixXQUF2QixLQUF1QyxLQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLENBQW5CLENBQS9FOztBQUVBLGtCQUFXLHlCQUFYLENBQXFDLEtBQUssT0FBMUMsRUFBbUQsS0FBbkQ7O0FBRUEsMkJBQUksR0FBSixDQUFRLGNBQVIsRUFBd0IsSUFBeEI7QUFDQTs7O29DQUdxQixJLEVBQU07O0FBRTNCLGtCQUFXLHlCQUFYLENBQXFDLEtBQUssUUFBTCxDQUFjLElBQW5ELEVBQXlELElBQXpEOztBQUVBLDJCQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLElBQXZCO0FBQ0E7OzsrQ0FFZ0MsSSxFQUFNLE0sRUFBUTs7QUFFOUMsMkJBQUksR0FBSixDQUFRLFdBQVIsRUFBcUIsS0FBckI7QUFDQSwyQkFBSSxHQUFKLENBQVEsWUFBUixFQUFzQixLQUF0Qjs7QUFFQSxZQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxLQUFLLE1BQXhCLEVBQWdDLEVBQUUsQ0FBbEMsRUFBcUM7QUFDcEMsNkJBQ0csR0FESCxDQUNPLElBQUksQ0FBSixLQUFVLENBQVYsR0FBYyxXQUFkLEdBQTRCLFlBRG5DLEVBRUcsVUFGSCxDQUVjLGtCQUFRLFVBQVIsQ0FBbUIsS0FBSyxDQUFMLENBQW5CLEVBQTZCLFNBQVMsTUFBVCxHQUFrQixRQUFsQixHQUE4QixJQUFJLENBQUosR0FBUSxNQUFSLEdBQWlCLE1BQTVFLENBRmQ7Ozs7OztBQVFBOztBQUVELDJCQUFJLEdBQUosQ0FBUSxXQUFSLEVBQXFCLElBQXJCO0FBQ0EsMkJBQUksR0FBSixDQUFRLFdBQVIsRUFBcUIsSUFBckI7QUFDQSwyQkFBSSxHQUFKLENBQVEsWUFBUixFQUFzQixJQUF0QjtBQUNBOzs7Ozs7QUFxRUYsUUFBTyxNQUFQLEdBQWdCLFlBQU07QUFDckIsT0FBTSxZQUFZLElBQUksVUFBSixFQUFsQjtBQUNBLEVBRkQsQzs7Ozs7Ozs7Ozs7bUJDOVFlO0FBQ2Qsc0JBQXFCLDZDQURQO0FBRWQseUJBQXdCLDhDQUZWO0FBR2QsY0FBYSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFVBQWxCLEVBQThCLFVBQTlCLEVBQTBDLFVBQTFDLEVBQXNELFVBQXRELEVBQWtFLFNBQWxFLEVBQTZFLFlBQTdFLEVBQ1IsU0FEUSxFQUNHLFFBREgsRUFDYSxRQURiLEVBQ3VCLE1BRHZCLEVBQytCLFNBRC9CLEVBQzBDLFFBRDFDLEVBQ29ELFFBRHBELEVBQzhELFVBRDlELEVBQzBFLFlBRDFFLENBSEM7QUFLZCxxQkFBbUI7QUFMTCxFOzs7Ozs7QUNBZjs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FVTSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBYWdCLFcsRUFBYSxRLEVBQVU7Ozs7O0FBSzNDLGtCQUFjLGVBQWUsTUFBN0I7O0FBRUEsa0JBQWMsWUFBWSxXQUFaLEVBQWQ7O0FBRUEsUUFBSSxvREFBa0QsV0FBbEQsc0JBQThFLGlCQUFPLGdCQUF6Rjs7QUFFQSxRQUFJLFVBQVU7QUFDYixhQUFRLEtBREs7QUFFYixXQUFNO0FBRk8sS0FBZDs7QUFLQSxjQUFVLFdBQVYsQ0FBc0IsR0FBdEIsRUFBMkIsT0FBM0IsRUFBb0MsUUFBcEM7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OzsrQkFla0IsSyxFQUFPLEksRUFBTSxRLEVBQVU7O0FBRXpDLFFBQUkscUVBQW1FLEtBQW5FLGNBQWlGLElBQWpGLGlCQUFpRyxpQkFBTyxtQkFBNUc7O0FBRUEsUUFBSSxVQUFVO0FBQ2IsYUFBUSxLQURLO0FBRWIsV0FBTTtBQUZPLEtBQWQ7O0FBS0EsY0FBVSxXQUFWLENBQXNCLEdBQXRCLEVBQTJCLE9BQTNCLEVBQW9DLFFBQXBDO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBZWtCLEcsRUFBSyxPLEVBQVMsUSxFQUFVOztBQUUxQyxVQUFNLEdBQU4sRUFBVyxPQUFYLEVBQ0UsSUFERixDQUNPLFVBQVMsUUFBVCxFQUFtQjtBQUN4QixTQUFHLFNBQVMsTUFBVCxJQUFtQixHQUFuQixJQUEwQixTQUFTLE1BQVQsR0FBa0IsR0FBL0MsRUFBb0Q7QUFDbkQsYUFBTyxRQUFQO0FBQ0EsTUFGRCxNQUVPOztBQUVOLFVBQUksUUFBUSxJQUFJLEtBQUosQ0FBVSxTQUFTLFVBQW5CLENBQVo7QUFDQSxZQUFNLFFBQU4sR0FBaUIsUUFBakI7QUFDQSxZQUFNLEtBQU47QUFDQTtBQUNELEtBVkYsRUFXRSxJQVhGLENBV08sVUFBUyxRQUFULEVBQW1CO0FBQ3hCLFlBQU8sU0FBUyxJQUFULEVBQVA7QUFDQSxLQWJGLEVBY0UsSUFkRixDQWNPLFVBQVMsSUFBVCxFQUFlO0FBQ3BCLGNBQVMsSUFBVDtBQUNBLEtBaEJGLEVBaUJFLEtBakJGLENBaUJRLFVBQVMsS0FBVCxFQUFnQjtBQUN0QixhQUFRLEtBQVIsQ0FBYyxxQkFBcUIsS0FBbkM7QUFDQSxLQW5CRjtBQXFCQTs7Ozs7O21CQUlhLFM7Ozs7OztBQy9HZjs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBV00sTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBZWEsSSxFQUFNLEksRUFBTTtBQUM3QixRQUFHLFdBQVcsSUFBZCxFQUFvQjtBQUNuQixZQUFPLGVBQUssV0FBTCxDQUFpQixJQUFqQixDQUFQO0FBQ0EsS0FGRCxNQUVPLElBQUcsV0FBVyxJQUFkLEVBQW9CO0FBQzFCLFlBQU8sZUFBSyxXQUFMLENBQWlCLElBQWpCLENBQVA7QUFDQSxLQUZNLE1BRUEsSUFBRyxhQUFhLElBQWhCLEVBQXNCO0FBQzVCLFlBQU8sZUFBSyxhQUFMLENBQW1CLElBQW5CLENBQVA7QUFDQSxLQUZNLE1BRUE7QUFDTixXQUFNLElBQUksS0FBSixDQUFVLHNCQUFWLENBQU47QUFDQTtBQUNEOzs7Ozs7bUJBSWEsTzs7Ozs7O0FDMUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBV00sSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBcUJjLEksRUFBTTs7QUFFeEIsUUFBSSxNQUFPLE9BQU8sS0FBSyxVQUFiLHVGQUNjLE9BQU8sS0FBSyxVQUFaLEdBQXlCLEVBQXpCLEdBQThCLEtBQUssVUFBTCxDQUFnQixDQUFoQixFQUFtQixHQUQvRCw4Q0FBVjs7QUFJQSxRQUFJLGlFQUNnQixLQUFLLEdBRHJCLFdBQytCLEtBQUssS0FEcEMscURBRXVCLEtBQUssTUFGNUIsNEJBR0csR0FISCw2Q0FJdUIsT0FBTyxLQUFLLFVBQVosR0FBeUIsRUFBekIsR0FBOEIsS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLFNBSnhFLHFEQUt5QixLQUFLLFFBTDlCLDZCQUFKOztBQVFBLFdBQU8sSUFBUDtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQXFCa0IsSSxFQUFNOztBQUV4QixRQUFJLCtEQUNhLE9BQU8sS0FBSyxVQUFaLEdBQXlCLEVBQXpCLEdBQThCLEtBQUssVUFBTCxDQUFnQixDQUFoQixFQUFtQixHQUQ5RCxnRkFHaUIsS0FBSyxHQUh0QixXQUdnQyxLQUFLLEtBSHJDLHlFQUt1QixLQUFLLE1BTDVCLG9EQU15QixLQUFLLFFBTjlCLDZCQUFKOztBQVNBLFdBQU8sSUFBUDtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBdUJvQixJLEVBQU07O0FBRTFCLFFBQUksTUFBTyxNQUFNLEtBQUssVUFBTCxDQUFnQixNQUF2QiwrREFDTyw2QkFBNkIsS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLEdBRHZELHNEQUFWOztBQUdBLFFBQUksb0NBQWlDLEdBQWpDLDRFQUVpQixLQUFLLE9BRnRCLFdBRW9DLEtBQUssUUFBTCxDQUFjLElBRmxELDBFQUl1QixTQUFTLEtBQUssTUFBZCxHQUF1QixFQUF2QixHQUE0QixLQUFLLE1BQUwsQ0FBWSxRQUovRCxxREFLeUIsS0FBSyxPQUw5Qiw2QkFBSjs7QUFRQSxXQUFPLElBQVA7QUFFQTs7Ozs7O21CQUlhLEk7Ozs7OztBQzVIZjs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLEtBQUksaUJBQWtCLFlBQVc7O0FBRWhDLE1BQUksd0JBQUo7O0FBRUEsU0FBTzs7Ozs7O0FBT04sUUFBSyxhQUFTLEVBQVQsRUFBYTtBQUNqQixzQkFBa0IsU0FBUyxjQUFULENBQXdCLEVBQXhCLENBQWxCO0FBQ0EsV0FBTyxJQUFQO0FBQ0EsSUFWSzs7Ozs7QUFnQk4sZUFBWSxzQkFBVztBQUN0QixXQUFPLGVBQVA7QUFDQSxJQWxCSzs7QUFxQk4sWUFBUyxtQkFBVztBQUNuQixzQkFBa0IsU0FBUyxJQUEzQjtBQUNBLFdBQU8sSUFBUDtBQUNBLElBeEJLOztBQTBCTixhQUFVLG9CQUFXO0FBQ3BCLFdBQU8sZ0JBQWdCLEtBQXZCO0FBQ0EsSUE1Qks7Ozs7OztBQW1DTixVQUFPLGVBQVMsT0FBVCxFQUFrQjtBQUN4QixvQkFBZ0IsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLE9BQTFDLEVBQW1ELEtBQW5EO0FBQ0EsV0FBTyxJQUFQO0FBQ0EsSUF0Q0s7Ozs7OztBQTZDTixXQUFRLGdCQUFTLE9BQVQsRUFBa0I7QUFDekIsc0JBQWtCLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFsQjtBQUNBLFdBQU8sSUFBUDtBQUNBLElBaERLOztBQW1ETixVQUFPLGlCQUFXO0FBQ2pCLFdBQU0sZ0JBQWdCLFVBQXRCLEVBQWtDO0FBQ2pDLHFCQUFnQixXQUFoQixDQUE0QixnQkFBZ0IsVUFBNUM7QUFDQTtBQUNELFdBQU8sSUFBUDtBQUNBLElBeERLOztBQTJETixhQUFVLG9CQUFXO0FBQ3BCLFdBQU8sZ0JBQWdCLFNBQXZCO0FBQ0EsSUE3REs7Ozs7OztBQW9FTixhQUFVLGtCQUFTLFNBQVQsRUFBb0I7QUFDN0Isb0JBQWdCLFNBQWhCLEdBQTRCLFNBQTVCO0FBQ0EsV0FBTyxJQUFQO0FBQ0EsSUF2RUs7O0FBMEVOLFlBQVMsaUJBQVMsSUFBVCxFQUFlO0FBQ3ZCLG9CQUFnQixTQUFoQixHQUE0QixJQUE1QjtBQUNBLFdBQU8sSUFBUDtBQUNBLElBN0VLOzs7Ozs7QUFvRk4sWUFBUyxpQkFBUyxPQUFULEVBQWtCO0FBQzFCLGNBQVUsV0FBVyxlQUFyQjtBQUNBLFdBQU8sUUFBUSxTQUFmO0FBQ0EsSUF2Rks7O0FBMEZOLGVBQVksb0JBQVMsSUFBVCxFQUFlO0FBQzFCLG9CQUFnQixTQUFoQixJQUE2QixJQUE3QjtBQUNBLFdBQU8sSUFBUDtBQUNBLElBN0ZLOztBQWdHTixTQUFNLGdCQUFXO0FBQ2hCLFFBQUcsb0JBQW9CLGdCQUFnQixTQUF2QyxFQUFrRDtBQUNqRCxxQkFBZ0IsS0FBaEIsQ0FBc0IsT0FBdEIsR0FBZ0MsY0FBaEM7QUFDQSxLQUZELE1BRU87QUFDTixxQkFBZ0IsS0FBaEIsQ0FBc0IsT0FBdEIsR0FBZ0MsT0FBaEM7QUFDQTtBQUNELFdBQU8sSUFBUDtBQUNBLElBdkdLOztBQTBHTixTQUFNLGdCQUFXO0FBQ2hCLG9CQUFnQixLQUFoQixDQUFzQixPQUF0QixHQUFnQyxNQUFoQztBQUNBLFdBQU8sSUFBUDtBQUNBLElBN0dLOzs7Ozs7QUFvSE4sV0FBUSxnQkFBUyxLQUFULEVBQWdCO0FBQ3ZCLG9CQUFnQixXQUFoQixDQUE0QixLQUE1QjtBQUNBLFdBQU8sSUFBUDtBQUNBLElBdkhLOztBQTBITixXQUFRLGtCQUFXO0FBQ2xCLFFBQUcsV0FBVyxnQkFBZ0IsU0FBOUIsRUFBeUM7QUFDeEMscUJBQWdCLFNBQWhCLEdBQTRCLE1BQTVCO0FBQ0EsS0FGRCxNQUVPO0FBQ04scUJBQWdCLFNBQWhCLEdBQTRCLE1BQTVCO0FBQ0E7QUFDRCxXQUFPLElBQVA7QUFDQSxJQWpJSzs7Ozs7Ozs7Ozs7O0FBOElOLFNBQU0sY0FBUyxTQUFULEVBQW9CLEtBQXBCLEVBQTJCO0FBQ2hDLFFBQUcsY0FBYyxLQUFqQixFQUF3QjtBQUN2QixZQUFPLGdCQUFnQixZQUFoQixDQUE2QixTQUE3QixDQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ04scUJBQWdCLFlBQWhCLENBQTZCLFNBQTdCLEVBQXdDLEtBQXhDO0FBQ0EsWUFBTyxJQUFQO0FBQ0E7QUFDRCxJQXJKSzs7QUF3Sk4sYUFBVSxrQkFBUyxPQUFULEVBQWtCO0FBQzNCLG9CQUFnQixnQkFBaEIsQ0FBaUMsVUFBakMsRUFBNkMsT0FBN0MsRUFBc0QsS0FBdEQ7QUFDQSxXQUFPLElBQVA7QUFDQTtBQTNKSyxHQUFQO0FBOEpBLEVBbEtvQixFQUFyQjs7U0FvSzJCLEcsR0FBbEIsYyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgN2I1ZGM5NGJhNzUzOWQ5NmViZjZcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XHJcbmltcG9ydCBGYWN0b3J5IGZyb20gJy4vZmFjdG9yeS5qcyc7XHJcbmltcG9ydCB7IERPTSB9IGZyb20gJy4vRE9NTWFuaXB1bGF0b3IuanMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIHJlcHJlc2VudCBhIG1haW4gaW5zdGFuY2Ugb2YgYXBwbGljYXRpb24sIHRoZSBwYXJ0XHJcbiAqIG9mIHRoZSBhcHBsaWNhdGlvbiB0aGF0IGhhbmRsZXMgdXNlciBpbnRlcmFjdGlvbi5cclxuICogQSBjb250cm9sbGVyIGlzIHRoZSBsaW5rIGJldHdlZW4gYSB1c2VyIGFuZCBzeXN0ZW0uIEl0IHJlcHJlc2VudHNcclxuICogYSBtYWluIHBvaW50IG9mIGVudHJ5LlxyXG4gKiBAY2xhc3NcclxuICogXHJcbiAqIEByZXF1aXJlcyBjb25maWcuanNcclxuICogQHJlcXVpcmVzIGNvbm5lY3Rvci5qc1xyXG4gKiBAcmVxdWlyZXMgZmFjdG9yeS5qc1xyXG4gKiBAcmVxdWlyZXMgRE9NTWFuaXB1bGF0b3IuanNcclxuICogQGF1dGhvciBOaWtvbGF5IFphbXVsb3YgPHphbXVsb3Y4QGdtYWlsLmNvbT4gXHJcbiAqL1xyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0RE9NLmdldEJvZHkoKS5jbGljayh0aGlzLmJvZHlDbGlja0hhbmRsZXIpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWN0aW9ucy1idXR0b25cIikuY2xpY2sodGhpcy5zZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWJ1dHRvblwiKS5jbGljayh0aGlzLnNlYXJjaEJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwiZ2l0aHViLWJ1dHRvblwiKS5jbGljayh0aGlzLmdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWdvLWJ1dHRvblwiKS5jbGljayh0aGlzLnNlYXJjaEdvQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5jbGljayh0aGlzLnByZXZpb3VzUGFnZUJ1dHRvbkNsaWNrSGFuZGxlcik7XHJcblx0XHRET00uZ2V0KFwibmV4dC1wYWdlLWJ1dHRvblwiKS5jbGljayh0aGlzLm5leHRQYWdlQnV0dG9uQ2xpY2tIYW5kbGVyKTtcclxuXHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuY2xpY2soKGV2ZW50KSA9PiB7IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9KTtcclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5rZXlwcmVzcyh0aGlzLnNlYXJjaExpbmVLZXlQcmVzc0hhbmRsZXIpO1xyXG5cclxuXHRcdGZvcihsZXQgc2VjdGlvbiBvZiBjb25maWcuc2VjdGlvbnMpIHtcclxuXHJcblx0XHRcdGxldCBlbGVtZW50ID0gRE9NXHJcblx0XHRcdFx0XHRcdFx0LmNyZWF0ZShcImxpXCIpXHJcblx0XHRcdFx0XHRcdFx0LnNldEhUTUwoc2VjdGlvbilcclxuXHRcdFx0XHRcdFx0XHQuY2xpY2sodGhpcy5zZWN0aW9uc01lbnVJdGVtQ2xpY2tIYW5kbGVyKVxyXG5cdFx0XHRcdFx0XHRcdC5nZXRFbGVtZW50KCk7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudS1pdGVtc1wiKS5hcHBlbmQoZWxlbWVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0Q29ubmVjdG9yLmdldFRvcFN0b3JpZXMoXCJob21lXCIsIENvbnRyb2xsZXIudXBkYXRlVG9wU3Rvcmllcyk7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdHNlYXJjaExpbmVLZXlQcmVzc0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cigncHVyZScsIFwiZmFsc2VcIik7XHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSWYgdGhlIEVudGVyIGtleWJvYXJkIGJ1dHRvbiB3YXMgcHJlc3NlZC5cclxuXHRcdCAqL1xyXG5cdFx0aWYoMTMgPT09IGV2ZW50LmtleUNvZGUpIHtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9uLW5hbWVcIikuaGlkZSgpO1xyXG5cclxuXHRcdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0XHRET00uZ2V0KFwicHJldmlvdXMtcGFnZS1idXR0b25cIikuc2V0Q2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHRcdFx0XHJcblx0XHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoJ3B1cmUnLCBcInRydWVcIik7XHJcblxyXG5cdFx0XHRDb25uZWN0b3Iuc2VhcmNoUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldFZhbHVlKCksIDAsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHJcblx0Ym9keUNsaWNrSGFuZGxlcigpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblx0XHRET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuc2V0Q2xhc3MoXCJoaWRlXCIpO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHRzZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwic2hvd1wiID09PSBET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuZ2V0Q2xhc3MoKSkge1xyXG5cdFx0XHRET00uZ2V0KFwic2VhcmNoLW1lbnVcIikuc2V0Q2xhc3MoXCJoaWRlXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS50b2dnbGUoKTtcclxuXHRcdFx0fSwgNTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNlYXJjaEJ1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdGlmKFwic2hvd1wiID09PSBET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5nZXRDbGFzcygpKSB7XHJcblx0XHRcdERPTS5nZXQoXCJzZWN0aW9ucy1tZW51XCIpLnNldENsYXNzKFwiaGlkZVwiKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0XHR9LCA1MDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1tZW51XCIpLnRvZ2dsZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH1cclxuXHJcblxyXG5cdGdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcigpIHtcclxuXHRcdGxvY2F0aW9uLmhyZWYgPSBjb25maWcuR2l0SHViUmVmZXJlbmNlO1xyXG5cdH1cclxuXHJcblxyXG5cdHNlY3Rpb25zTWVudUl0ZW1DbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRET00uZ2V0KFwic2VjdGlvbnMtbWVudVwiKS5zZXRDbGFzcyhcImhpZGVcIik7XHJcblxyXG5cdFx0RE9NLmdldChcImxlZnQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5oaWRlKCk7XHJcblx0XHRET00uZ2V0KFwic2VjdGlvbi1uYW1lXCIpLmhpZGUoKTtcclxuXHJcblx0XHRET00uZ2V0KFwicGFnaW5nLW1lbnVcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblxyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0Q29ubmVjdG9yLmdldFRvcFN0b3JpZXMoRE9NLmdldEhUTUwodGhpcyksIENvbnRyb2xsZXIudXBkYXRlVG9wU3Rvcmllcyk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRzZWFyY2hHb0J1dHRvbkNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInNlY3Rpb24tbmFtZVwiKS5oaWRlKCk7XHJcblxyXG5cdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKDEpO1xyXG5cdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblx0XHRcclxuXHRcdERPTS5nZXQoXCJwcmVsb2FkZXJcIikuc2hvdygpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKCdwdXJlJywgXCJ0cnVlXCIpO1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZWFyY2hRdWVyeShET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuZ2V0VmFsdWUoKSwgMCwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHJcblx0c3RhdGljIHVwZGF0ZVRvcFN0b3JpZXMoZGF0YSkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWN0aW9uLW5hbWVcIikuY2xlYXIoKS5zZXRIVE1MKGRhdGEuc2VjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRhdGEuc2VjdGlvbi5zbGljZSgxKSk7XHJcblxyXG5cdFx0Q29udHJvbGxlci51cGRhdGVBbmRTaG93TGlzdHNPZk5vdGVzKGRhdGEucmVzdWx0cywgZmFsc2UpO1xyXG5cclxuXHRcdERPTS5nZXQoXCJzZWN0aW9uLW5hbWVcIikuc2hvdygpO1xyXG5cdH1cclxuXHJcblxyXG5cdHN0YXRpYyB1cGRhdGVTZWFyY2hlcyhkYXRhKSB7XHJcblxyXG5cdFx0Q29udHJvbGxlci51cGRhdGVBbmRTaG93TGlzdHNPZk5vdGVzKGRhdGEucmVzcG9uc2UuZG9jcywgdHJ1ZSk7XHJcblxyXG5cdFx0RE9NLmdldChcInBhZ2luZy1tZW51XCIpLnNob3coKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB1cGRhdGVBbmRTaG93TGlzdHNPZk5vdGVzKGRhdGEsIHNlYXJjaCkge1xyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuY2xlYXIoKTtcclxuXHRcdERPTS5nZXQoXCJyaWdodC1saXN0XCIpLmNsZWFyKCk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0RE9NXHJcblx0XHRcdCAgLmdldChpICUgMiA9PT0gMCA/IFwibGVmdC1saXN0XCIgOiBcInJpZ2h0LWxpc3RcIilcclxuXHRcdFx0ICAuYXBwZW5kSFRNTChGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YVtpXSwgKHRydWUgPT09IHNlYXJjaCA/IFwic2VhcmNoXCIgOiAoaSA8IDQgPyBcIm1haW5cIiA6IFwibGlzdFwiKSkpKTtcclxuXHRcdFx0LyppZihpICUgMiA9PT0gMCkge1xyXG5cdFx0XHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuYXBwZW5kSFRNTChGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YVtpXSwgKHRydWUgPT09IHNlYXJjaCA/IFwic2VhcmNoXCIgOiAoaSA8IDQgPyBcIm1haW5cIiA6IFwibGlzdFwiKSkpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRET00uZ2V0KFwicmlnaHQtbGlzdFwiKS5hcHBlbmRIVE1MKEZhY3RvcnkuY3JlYXRlTm90ZShkYXRhW2ldLCAodHJ1ZSA9PT0gc2VhcmNoID8gXCJzZWFyY2hcIiA6IChpIDwgNCA/IFwibWFpblwiIDogXCJsaXN0XCIpKSkpO1xyXG5cdFx0XHR9Ki9cclxuXHRcdH1cclxuXHJcblx0XHRET00uZ2V0KFwicHJlbG9hZGVyXCIpLmhpZGUoKTtcclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuc2hvdygpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuc2hvdygpO1xyXG5cdH1cclxuXHJcblx0cHJldmlvdXNQYWdlQnV0dG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYoXCJmYWxzZVwiID09PSBET00uZ2V0KFwic2VhcmNoLWxpbmVcIikuYXR0cihcInB1cmVcIikpIHtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKFwicHVyZVwiLCBcInRydWVcIik7XHJcblxyXG5cdFx0XHRET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLnNldEhUTUwoMSk7XHJcblx0XHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5zZXRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG5cclxuXHRcdFx0Q29ubmVjdG9yLnNlYXJjaFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRWYWx1ZSgpLCAwLCBDb250cm9sbGVyLnVwZGF0ZVNlYXJjaGVzKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0bGV0IHBhZ2UgPSArRE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5nZXRIVE1MKCk7XHJcblxyXG5cdFx0XHRwYWdlID0gcGFnZSAtIDE7XHJcblxyXG5cdFx0XHRpZigxID09PSBwYWdlKSB7XHJcblx0XHRcdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdERPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuc2V0SFRNTChwYWdlKTtcclxuXHRcdFx0Q29ubmVjdG9yLnNlYXJjaFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRWYWx1ZSgpLCBwYWdlIC0gMSwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHJcblx0bmV4dFBhZ2VCdXR0b25DbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcblx0XHRpZihcImZhbHNlXCIgPT09IERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5hdHRyKFwicHVyZVwiKSkge1xyXG5cclxuXHRcdFx0RE9NLmdldChcInNlYXJjaC1saW5lXCIpLmF0dHIoXCJwdXJlXCIsIFwidHJ1ZVwiKTtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJjdXJyZW50LXBhZ2VcIikuc2V0SFRNTCgxKTtcclxuXHRcdFx0RE9NLmdldChcInByZXZpb3VzLXBhZ2UtYnV0dG9uXCIpLnNldENsYXNzKFwiZGlzYWJsZWRcIik7XHJcblxyXG5cdFx0XHRDb25uZWN0b3Iuc2VhcmNoUXVlcnkoRE9NLmdldChcInNlYXJjaC1saW5lXCIpLmdldFZhbHVlKCksIDAsIENvbnRyb2xsZXIudXBkYXRlU2VhcmNoZXMpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRsZXQgcGFnZSA9ICtET00uZ2V0KFwiY3VycmVudC1wYWdlXCIpLmdldEhUTUwoKTtcclxuXHJcblx0XHRcdHBhZ2UgPSBwYWdlICsgMTtcclxuXHJcblx0XHRcdERPTS5nZXQoXCJwcmV2aW91cy1wYWdlLWJ1dHRvblwiKS5zZXRDbGFzcyhcIlwiKTtcclxuXHRcdFx0RE9NLmdldChcImN1cnJlbnQtcGFnZVwiKS5zZXRIVE1MKHBhZ2UpO1xyXG5cclxuXHRcdFx0Q29ubmVjdG9yLnNlYXJjaFF1ZXJ5KERPTS5nZXQoXCJzZWFyY2gtbGluZVwiKS5nZXRWYWx1ZSgpLCBwYWdlIC0gMSwgQ29udHJvbGxlci51cGRhdGVTZWFyY2hlcyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdERPTS5nZXQoXCJsZWZ0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInJpZ2h0LWxpc3RcIikuaGlkZSgpO1xyXG5cdFx0RE9NLmdldChcInByZWxvYWRlclwiKS5zaG93KCk7XHJcblxyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHRjb25zdCBfaW5zdGFuY2UgPSBuZXcgQ29udHJvbGxlcigpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHQnVG9wU3Rvcmllc0FQSWtleScgOiAnYjUxNzFjMGY2Njc2ZDc0ZGE2Y2I5OWY3Y2NmYzZhYWE6MDo3NTA1OTkzMycsXHJcblx0J0FydGljbGVTZWFyY2hBUElrZXknIDogJzU4NTgzY2EyOWUwYjVhMjkxNmRkNWM3YmZmZDQ1MThkOjE0Ojc1MDU5OTMzJyxcclxuXHQnc2VjdGlvbnMnIDogWydIb21lJywgJ1dvcmxkJywgJ05hdGlvbmFsJywgJ1BvbGl0aWNzJywgJ055cmVnaW9uJywgJ0J1c2luZXNzJywgJ09waW5pb24nLCAnVGVjaG5vbG9neScsXHJcblx0XHRcdFx0ICAnU2NpZW5jZScsICdIZWFsdGgnLCAnU3BvcnRzJywgJ0FydHMnLCAnRmFzaGlvbicsICdEaW5pbmcnLCAnVHJhdmVsJywgJ01hZ2F6aW5lJywgJ1JlYWxlc3RhdGUnXSxcclxuXHQnR2l0SHViUmVmZXJlbmNlJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9aYW1OaWNrL2VwYW0udGVzdC5wcm9qZWN0J1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25maWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIHJlcHJlc2VudCBhbiBpbnN0YW5jZSBmb3IgbWFrZSBjb25uZWN0aW9uIHRvIFxyXG4gKiBUaGUgTmV3IFlvcmsgVGltZXMgc2VydmVyIGZvciBncmFiaW5nIG5lY2Vzc2FyeSBkYXRhLlxyXG4gKiBAY2xhc3NcclxuICpcclxuICogQHJlcXVpcmVzIGNvbmZpZy5qc1xyXG4gKiBAYXV0aG9yIE5pa29sYXkgWmFtdWxvdiA8emFtdWxvdjhAZ21haWwuY29tPiBcclxuICovXHJcbmNsYXNzIENvbm5lY3RvciB7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gaW5pdGlhbGl6aW5nICd1cmwnIGFuZCAnb3B0aW9ucycgc2V0dGluZ3MgdmFyaWFibGVzIHRoYXRcclxuXHQgKiBuZWVkZWQgZm9yIG1ha2luZyByZXF1ZXN0IHRvIHNlcnZlciBmb3IgZ3JhYmluZyB0aGUgdG9wIHN0b3JpZXMgZGF0YS5cclxuXHQgKiBcclxuXHQgKiBAZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3NlY3Rpb25OYW1lXSAtIFRoZSBuYW1lIG9mIG5lZWRlZCBzZWN0aW9uIG9mIG5ld3MuXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHF1ZXJ5IHdpbGwgYmUgc2VuZGVkLlxyXG5cdCAqIEBzdGF0aWNcclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0VG9wU3RvcmllcyhzZWN0aW9uTmFtZSwgY2FsbGJhY2spIHtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBkZWZhdWx0IFwiaG9tZVwiXHJcblx0XHQgKi9cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUgfHwgXCJob21lXCI7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGxldCB1cmwgPSBgaHR0cDovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92MS8ke3NlY3Rpb25OYW1lfS5qc29uP2FwaS1rZXk9JHtjb25maWcuVG9wU3Rvcmllc0FQSWtleX1gO1xyXG5cclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRtb2RlOiAnY29ycydcclxuXHRcdH07XHJcblxyXG5cdFx0Q29ubmVjdG9yLnNlbmRSZXF1ZXN0KHVybCwgb3B0aW9ucywgY2FsbGJhY2spO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gaW5pdGlhbGl6aW5nICd1cmwnIGFuZCAnb3B0aW9ucycgc2V0dGluZ3MgdmFyaWFibGVzIHRoYXRcclxuXHQgKiBuZWVkZWQgZm9yIG1ha2luZyByZXF1ZXN0IHRvIHNlcnZlciBmb3Igc2VhcmNoaW5nIHNvbWUgZGF0YSBpbiBhcnRpY2xlc1xyXG5cdCAqIGFuZCByZWFsaXplIHNlcnZlciBwYWdpbmcgbG9naWMuXHJcblx0ICpcclxuXHQgKiBAZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgLSBTdHJpbmcgb2Ygc2VhcmNoIGxpbmUgdGhhdCB3YXMgdHlwZWQgYnkgdXNlci5cclxuXHQgKiBAcGFyYW0ge0ludGVnZXJ9IHBhZ2UgLSBOZWVkZWQgcGFnZSBvZiBkYXRhLlxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBxdWVyeSB3aWxsIGJlIHNlbmRlZC5cclxuXHQgKiBAc3RhdGljXHJcblx0ICovXHJcblx0c3RhdGljIHNlYXJjaFF1ZXJ5KHF1ZXJ5LCBwYWdlLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdGxldCB1cmwgPSBgaHR0cDovL2FwaS5ueXRpbWVzLmNvbS9zdmMvc2VhcmNoL3YyL2FydGljbGVzZWFyY2guanNvbj9xPSR7cXVlcnl9JnBhZ2U9JHtwYWdlfSZhcGkta2V5PSR7Y29uZmlnLkFydGljbGVTZWFyY2hBUElrZXl9YDtcclxuXHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0bW9kZTogJ2NvcnMnXHJcblx0XHR9O1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZW5kUmVxdWVzdCh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuXHRcdFx0XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNlbmQgYSByZXF1ZXN0IHRvIHJlbW90ZSBzZXJ2ZXIgZm9yIG5lZWRlZCBkYXRhLlxyXG5cdCAqIFxyXG5cdCAqIEBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgLSBVcmwgb2YgdGhlIHJlbW90ZSBzZXJ2ZXIuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBTZXR0aW5ncyBmb3IgcmVxdWVzdC5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5tZXRob2QgLSBNZXRob2Qgb2YgSFRUUCByZXF1ZXN0IHRoYXQgd2lsbCBiZSBzZW5kZWQuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMubW9kZSAtIE1vZGUgb2YgY3Jvc3MtZG9tYWluIHJlcXVlc3QuXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHF1ZXJ5IHdpbGwgYmUgc2VuZGVkLlxyXG5cdCAqIEBzdGF0aWNcclxuXHQgKi9cclxuXHRzdGF0aWMgc2VuZFJlcXVlc3QodXJsLCBvcHRpb25zLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdGZldGNoKHVybCwgb3B0aW9ucylcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuXHRcdFx0XHRcdGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGNhbGxiYWNrKGRhdGEpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVxdWVzdCBmYWlsZWQ6IFwiICsgZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29ubmVjdG9yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IE5vdGUgZnJvbSAnLi9ub3RlLmpzJztcclxuXHJcbi8qKlxyXG4gKiBBIGNsYXNzIHJlcHJlc2VudCBhbiBpbnN0YW5jZSB0aGF0IGNyZWF0ZSBuZWVkZWRcclxuICogbmV3cyBub3RlIHVzaW5nIHBhc3NlZCBtZXRhZGF0YSBvZiBjdXJyZW50IG9uZSBuZXdzXHJcbiAqIGFuZCBuZWVkZWQgdHlwZSBvZiBub3RlLlxyXG4gKiBAY2xhc3NcclxuICpcclxuICogQHJlcXVpcmVzIG5vdGUuanNcclxuICogQGF1dGhvciBOaWtvbGF5IFphbXVsb3YgPHphbXVsb3Y4QGdtYWlsLmNvbT4gXHJcbiAqL1xyXG5jbGFzcyBGYWN0b3J5IHtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGdW5jdGlvbiBjcmVhdGUgYSBuZWVkZWQgdHlwZSBvZiBjdXJyZW50IG9uZSBuZXdzIG5vdGUuXHJcblx0ICogUmVwcmVzZW50IGEgc2ltcGxlIGZhY3RvcnkgcGF0dGVybi5cclxuXHQgKiBcclxuXHQgKiBAZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIE1ldGFkYXRhIG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBOZWVkZWQgdHlwZSBmb3IgY3VycmVudCBvbmUgbmV3cyBub3RlLlxyXG5cdCAqIEBzdGF0aWNcclxuXHQgKiBAcmV0dXJucyB7U3RyaW5nIHwgRXJyb3J9IC0gSFRNTCBjb2RlIG9mIGN1cnJlbnQgb25lIG5ld3MgZm9yIGFkZGluZyBpdCBpbnRvIFxyXG5cdCAqIHdlYi1zaXRlIGNvbnRlbnQgb3IgZXJyb3IgZm9yIHVua25vdyB0eXBlIG5vdGUuXHJcblx0ICovXHJcblx0c3RhdGljIGNyZWF0ZU5vdGUoZGF0YSwgdHlwZSkge1xyXG5cdFx0aWYoXCJtYWluXCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUuZ2V0TWFpbk5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2UgaWYoXCJsaXN0XCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUuZ2V0TGlzdE5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2UgaWYoXCJzZWFyY2hcIiA9PT0gdHlwZSkge1xyXG5cdFx0XHRyZXR1cm4gTm90ZS5nZXRTZWFyY2hOb3RlKGRhdGEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93IHR5cGUgb2Ygbm90ZS5cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdG9yeTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ZhY3RvcnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEEgY2xhc3MgcmVwcmVzZW50IGFuIGluc3RhbmNlIG9mIG5vdGVcclxuICogdGhhdCBkaXNwbGF5IG9uIHVzZXIgbW9uaXRvciBhbmQgY29udGFpblxyXG4gKiBuZXdzIGRhdGEgZnJvbSBzb21lIG5ld3Mgc2VjdGlvbi5cclxuICogQGNsYXNzXHJcbiAqIFxyXG4gKiBAYXV0aG9yIE5pa29sYXkgWmFtdWxvdiA8emFtdWxvdjhAZ21haWwuY29tPiBcclxuICovXHJcbmNsYXNzIE5vdGUge1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZ1bmN0aW9uIGNyZWF0ZSBhIG1haW4gbm90ZSB0aGF0IHJlcHJlc2VudGVkIG9uIHdlYi1zaXRlXHJcblx0ICogbGlrZSBhIG5vdGUgd2l0aCBiaWcgc2l6ZSBpbWFnZSBhbmQgdGhpcyBub3RlIGNvcnJlc3BvbmRpbmcgXHJcblx0ICogZm9yIG1vcmUgaW1wb3J0YW50IG5ld3MuXHJcblx0ICogXHJcblx0ICogQGZ1bmN0aW9uXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgbmV3cyBtZXRhZGF0YS5cclxuXHQgKiBAcGFyYW0ge0FycmF5fSBkYXRhLm11bHRpbWVkaWEgLSBDb250YWluZXIgb2YgbXVsdGltZWRpYSBkYXRhLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLm11bHRpbWVkaWFbXS51cmwgLSBSZW1vdGUgYWRkcmVzcyBvZiBjdXJyZW50IG9uZSBuZXdzIGltYWdlLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLm11bHRpbWVkaWFbXS5jb3B5cmlnaHQgLSBUaGUgYXV0aG9yIG9mIGN1cnJlbnQgb25lIG5ld3MgaW1hZ2UuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudXJsIC0gUmVtb3RlIGFkZHJlc3Mgb2YgY29ycmVzcG9uZGluZyBhcnRpY2xlIG9uIG1haW4gc2l0ZS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS50aXRsZSAtIFRpdGxlIG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYnlsaW5lIC0gVGhlIGF1dGhvciBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmFic3RyYWN0IC0gU2hvcnQgYXJ0aWNsZSBzdG9yeSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBzdGF0aWNcclxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSAtIEhUTUwgY29kZSBvZiBjdXJyZW50IG9uZSBuZXdzIGZvciBhZGRpbmcgaXQgaW50byB3ZWItc2l0ZSBjb250ZW50LlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRNYWluTm90ZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IGltZyA9IChcIlwiICE9PSBkYXRhLm11bHRpbWVkaWEpID9cdGA8ZGl2IGNsYXNzPVwibWFpbi1ub3RlLXdyYXBwZXItaW1hZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbM10udXJsIH1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+YCA6IGBgO1xyXG5cclxuXHRcdGxldCBub3RlID0gYDxkaXYgY2xhc3M9XCJtYWluLW5vdGVcIj5cclxuXHRcdFx0XHRcdFx0PGgyPjxhIGhyZWY9XCIkeyBkYXRhLnVybCB9XCI+JHsgZGF0YS50aXRsZSB9PC9hPjwvaDI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieWxpbmVcIj4keyBkYXRhLmJ5bGluZSB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdCR7IGltZyB9XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjcmVkaXRcIj4keyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzNdLmNvcHlyaWdodCB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPiR7IGRhdGEuYWJzdHJhY3QgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+YDtcclxuXHJcblx0XHRyZXR1cm4gbm90ZTtcclxuXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZ1bmN0aW9uIGNyZWF0ZSBhIGxpc3Qgbm90ZSB0aGF0IHJlcHJlc2VudGVkIG9uIHdlYi1zaXRlXHJcblx0ICogbGlrZSBhIG5vdGUgd2l0aCBzbWFsbCBzaXplIGltYWdlIGFuZCB0aGF0IG5vdGUgY29udGFpbnMgaW50b1xyXG5cdCAqIGxlZnQgb3IgcmlnaHQgbGlzdCBvZiBub3Rlcy4gVGhpcyBub3RlIGNvcnJlc3BvbmRpbmdcclxuXHQgKiBmb3Igc2Vjb25kYXJ5IG5ld3MuXHJcblx0ICpcclxuXHQgKiBAZnVuY3Rpb25cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBuZXdzIG1ldGFkYXRhLlxyXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGRhdGEubXVsdGltZWRpYSAtIENvbnRhaW5lciBvZiBtdWx0aW1lZGlhIGRhdGEuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubXVsdGltZWRpYVtdLnVybCAtIFJlbW90ZSBhZGRyZXNzIG9mIGN1cnJlbnQgb25lIG5ld3MgaW1hZ2UuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudXJsIC0gUmVtb3RlIGFkZHJlc3Mgb2YgY29ycmVzcG9uZGluZyBhcnRpY2xlIG9uIG1haW4gc2l0ZS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS50aXRsZSAtIFRpdGxlIG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYnlsaW5lIC0gVGhlIGF1dGhvciBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmFic3RyYWN0IC0gU2hvcnQgYXJ0aWNsZSBzdG9yeSBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBzdGF0aWNcclxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSAtIEhUTUwgY29kZSBvZiBjdXJyZW50IG9uZSBuZXdzIGZvciBhZGRpbmcgaXQgaW50byB3ZWItc2l0ZSBjb250ZW50LlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRMaXN0Tm90ZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cImxpc3Qtbm90ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbMF0udXJsIH1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgzPjxhIGhyZWY9XCIkeyBkYXRhLnVybCB9XCI+JHsgZGF0YS50aXRsZSB9PC9hPjwvaDM+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgZGF0YS5ieWxpbmUgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLmFic3RyYWN0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGdW5jdGlvbiBjcmVhdGUgYSBzZWFyY2ggbm90ZSB0aGF0IHJlcHJlc2VudGVkIG9uIHdlYi1zaXRlXHJcblx0ICogbGlrZSBhIG5vdGUgd2l0aCBtZWRpdW0gc2l6ZSBpbWFnZSBhbmQgdGhhdCBub3RlIGNvbnRhaW5zIGludG9cclxuXHQgKiBsZWZ0IG9yIHJpZ2h0IGxpc3Qgb2Ygbm90ZXMuIFRoaXMgbm90ZSBjb3JyZXNwb25kaW5nXHJcblx0ICogZm9yIHNlYXJjaGluZyBuZXdzLlxyXG5cdCAqIFxyXG5cdCAqIEBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ld3MgbWV0YWRhdGEuXHJcblx0ICogQHBhcmFtIHtBcnJheX0gZGF0YS5tdWx0aW1lZGlhIC0gQ29udGFpbmVyIG9mIG11bHRpbWVkaWEgZGF0YS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5tdWx0aW1lZGlhW10udXJsIC0gUmVtb3RlIGFkZHJlc3Mgb2YgY3VycmVudCBvbmUgbmV3cyBpbWFnZS5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS53ZWJfdXJsIC0gUmVtb3RlIGFkZHJlc3Mgb2YgY29ycmVzcG9uZGluZyBhcnRpY2xlIG9uIG1haW4gc2l0ZS5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5oZWFkbGluZSAtIE1ldGFkYXRhIG9mIHRpdGxlIG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaGVhZGxpbmUubWFpbiAtIFRpdGxlIG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEuYnlsaW5lIC0gTWV0YWRhdGEgb2YgYXV0aG9yIG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYnlsaW5lLm9yaWdpbmFsIC0gVGhlIGF1dGhvciBvZiBjdXJyZW50IG9uZSBuZXdzLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnNuaXBwZXQgLSBTaG9ydCBhcnRpY2xlIHN0b3J5IG9mIGN1cnJlbnQgb25lIG5ld3MuXHJcblx0ICogQHN0YXRpY1xyXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IC0gSFRNTCBjb2RlIG9mIGN1cnJlbnQgb25lIG5ld3MgZm9yIGFkZGluZyBpdCBpbnRvIHdlYi1zaXRlIGNvbnRlbnQuXHJcblx0ICovXHJcblx0c3RhdGljIGdldFNlYXJjaE5vdGUoZGF0YSkge1xyXG5cclxuXHRcdGxldCBpbWcgPSAoMCAhPT0gZGF0YS5tdWx0aW1lZGlhLmxlbmd0aCkgPyBgc3R5bGU9XCJtaW4taGVpZ2h0OiAxNTBweDtcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyhcImh0dHA6Ly9zdGF0aWMwMS5ueXQuY29tL1wiICsgZGF0YS5tdWx0aW1lZGlhWzBdLnVybCl9XCIgc3R5bGU9XCJoZWlnaHQ6IDEzMHB4OyB3aWR0aDogMTkwcHg7XCI+YCA6IGA+YDtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibGlzdC1ub3RlXCIkeyBpbWcgfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+PGEgaHJlZj1cIiR7IGRhdGEud2ViX3VybCB9XCI+JHsgZGF0YS5oZWFkbGluZS5tYWluIH08L2E+PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieWxpbmVcIj4keyBudWxsID09PSBkYXRhLmJ5bGluZSA/IFwiXCIgOiBkYXRhLmJ5bGluZS5vcmlnaW5hbCB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPiR7IGRhdGEuc25pcHBldCB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBub3RlO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbm90ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4vKipcclxuICogTWFqb3IgZnVuY3Rpb25hbGl0eSBvZiB0aGlzIG9iamVjdCByZWxhdGVkIHRvXHJcbiAqIG1hbmlwdWxhdGluZyB3aXRoIERPTSBlbGVtZW50cy4gTmVlZGVkIGZvciBpbmNhcHN1bGF0ZVxyXG4gKiBET00gbWFuaXB1bGF0aW9uIGxvZ2ljLiBTaXR1YXRlZCBiZXR3ZWVuIFZpZXcgYW5kIENvbnRyb2xsZXJcclxuICogaW50byBjbGFzcyBoaWVyYXJjaHkgb2YgY3VycmVudCB0ZXN0IHByb2plY3QuXHJcbiAqXHJcbiAqIEJhc2VkIG9uIGNsb3N1cmUgcHJpbmNpcGxlIGFuZCBtb2R1bGUgcHJvZ3JhbW1pbmcgc3R5bGUuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIE5pa29sYXkgWmFtdWxvdiA8emFtdWxvdjhAZ21haWwuY29tPiBcclxuICovXHJcbmxldCBET01NYW5pcHVsYXRvciA9IChmdW5jdGlvbigpIHtcclxuXHJcblx0bGV0IF9jdXJyZW50RWxlbWVudDtcclxuXHJcblx0cmV0dXJuIHtcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBJRCBvZiBjdXJyZW50IERPTSBlbGVtZW50LlxyXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gdGhpcyAtIE5lZWRlZCBmb3IgY2hhaW5pbmcgdHJpY2suXHJcblx0XHQgKi9cclxuXHRcdGdldDogZnVuY3Rpb24oaWQpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHJldHVybnMge0RPTUVsZW1lbnR9IF9jdXJyZW50RWxlbWVudCAtIFdvcmtpbmcganVzdCBsaWtlIGEgZ2V0IG1ldGhvZC5cclxuXHRcdCAqL1xyXG5cdFx0Z2V0RWxlbWVudDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBfY3VycmVudEVsZW1lbnQ7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRnZXRCb2R5OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldFZhbHVlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIF9jdXJyZW50RWxlbWVudC52YWx1ZTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciAtIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiBldmVudCB3aWxsIGJlIG9jY3VyZWQuXHJcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGlzIC0gTmVlZGVkIGZvciBjaGFpbmluZyB0cmljay5cclxuXHRcdCAqL1xyXG5cdFx0Y2xpY2s6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHRhZ25hbWUgLSBUaGUgbmFtZSBvZiBuZWVkZWQgdGFnIHRoYXQgbXVzdCB0byBiZSBjcmVhdGVkLlxyXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gdGhpcyAtIE5lZWRlZCBmb3IgY2hhaW5pbmcgdHJpY2suXHJcblx0XHQgKi9cclxuXHRcdGNyZWF0ZTogZnVuY3Rpb24odGFnbmFtZSkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ25hbWUpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGNsZWFyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0d2hpbGUoX2N1cnJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoX2N1cnJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0Z2V0Q2xhc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gX2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzbmFtZSAtIFRoZSBuYW1lIG9mIGNsYXNzIHRoYXQgbXVzdCBiZSBzZXR0ZWQgdG8gY3VycmVudCBET00gZWxlbWVudC5cclxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3R9IHRoaXMgLSBOZWVkZWQgZm9yIGNoYWluaW5nIHRyaWNrLlxyXG5cdFx0ICovXHJcblx0XHRzZXRDbGFzczogZnVuY3Rpb24oY2xhc3NuYW1lKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc25hbWU7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0c2V0SFRNTDogZnVuY3Rpb24oaHRtbCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSB7RE9NRWxlbWVudH0gW2VsZW1lbnRdIC0gQ3VycmVudCBlbGVtZW50LlxyXG5cdFx0ICogQHJldHVybnMge1N0cmluZ30gZWxlbWVudC5pbm5lckhUTUwgLSBIVE1MIGNvZGUgdGhhdCBjb250YWluaW5nIGluc2lkZSB0aGUgY3VycmVudCBET00gZWxlbWVudC5cclxuXHRcdCAqL1xyXG5cdFx0Z2V0SFRNTDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRlbGVtZW50ID0gZWxlbWVudCB8fCBfY3VycmVudEVsZW1lbnQ7XHJcblx0XHRcdHJldHVybiBlbGVtZW50LmlubmVySFRNTDtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGFwcGVuZEhUTUw6IGZ1bmN0aW9uKGh0bWwpIHtcclxuXHRcdFx0X2N1cnJlbnRFbGVtZW50LmlubmVySFRNTCArPSBodG1sO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdHNob3c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZihcImxpc3Qtb2Ytbm90ZXNcIiA9PT0gX2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfY3VycmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGhpZGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIHtET01FbGVtZW50fSBjaGlsZCAtIERPTSBlbGVtZW50IHRoYXQgbXVzdCBiZSBpbnNlcnRlZCBpbnRvIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGlzIC0gTmVlZGVkIGZvciBjaGFpbmluZyB0cmljay5cclxuXHRcdCAqL1xyXG5cdFx0YXBwZW5kOiBmdW5jdGlvbihjaGlsZCkge1xyXG5cdFx0XHRfY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdHRvZ2dsZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmKFwiaGlkZVwiID09PSBfY3VycmVudEVsZW1lbnQuY2xhc3NOYW1lKSB7XHJcblx0XHRcdFx0X2N1cnJlbnRFbGVtZW50LmNsYXNzTmFtZSA9IFwic2hvd1wiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5jbGFzc05hbWUgPSBcImhpZGVcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRnVuY3Rpb24gd29ya3MgaW4gdHdvIG1vZGU6XHJcblx0XHQgKiAxKSBJZiB0aGUgc2Vjb25kIGFyZ3VtZW50IGlzIHdhcyBub3QgcGFzc2VkIHRoZW4gcmV0dXJuIHZhbHVlIG9mIG5lZWRlZCBhdHRyaWJ1dGUuXHJcblx0XHQgKiAyKSBJZiB0aGUgc2Vjb25kIGFyZ3VtZW50IHdhcyBwYXNzZWQgdGhlbiBzZXR0aW5nIHVwIHBhc3NlZCBhdHRyaWJ1dGUgaW50byBwYXNzZWQgdmFsdWUuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBmdW5jdGlvblxyXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IGF0dHJpYnV0ZSAtIFRoZSBuYW1lIG9mIGF0dHJpYnV0ZSB0aGF0IG11c3QgYmUgc2V0dGVkIHRvIGN1cnJlbnQgZWxlbWVudC5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nIHwgdW5kZWZpbmVkfSB2YWx1ZSAtIEluc2VydGluZyB2YWx1ZSBpbnRvIGF0dHJpYnV0ZS5cclxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3QgfCBTdHJpbmd9IC0gVmFsdWUgb2YgbmVlZGVkIGF0dHJpYnV0ZSBvciBjdXJyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXHJcblx0XHQgKiovXHJcblx0XHRhdHRyOiBmdW5jdGlvbihhdHRyaWJ1dGUsIHZhbHVlKSB7XHJcblx0XHRcdGlmKHVuZGVmaW5lZCA9PT0gdmFsdWUpIHtcclxuXHRcdFx0XHRyZXR1cm4gX2N1cnJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF9jdXJyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGtleXByZXNzOiBmdW5jdGlvbihoYW5kbGVyKSB7XHJcblx0XHRcdF9jdXJyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IERPTU1hbmlwdWxhdG9yIGFzIERPTSB9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vRE9NTWFuaXB1bGF0b3IuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9