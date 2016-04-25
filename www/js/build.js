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
	
	var _DOMManipulator = __webpack_require__(3);
	
	var _DOMManipulator2 = _interopRequireDefault(_DOMManipulator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Factory = __webpack_require__(4);
	
	var DOM = void 0;
	
	var Controller = function () {
			function Controller() {
					_classCallCheck(this, Controller);
	
					DOM = new _DOMManipulator2.default();
	
					var sectionsButton = DOM.get('sections-button');
					var githubButton = document.getElementById('github-button');
					var sectionsMenuItems = document.getElementById('sections-menu-items');
					var preloader = document.querySelector('.cssload-loader');
	
					sectionsButton.addEventListener('click', this.sectionsButtonClickHandler, false);
					githubButton.addEventListener('click', this.githubButtonClickHandler, false);
	
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;
	
					try {
							for (var _iterator = _config2.default.sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									var section = _step.value;
	
	
									var li = document.createElement('li');
	
									li.innerHTML = section;
	
									li.addEventListener('click', this.sectionsMenuItemClickHandler, false);
	
									sectionsMenuItems.appendChild(li);
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
	
							var sectionsMenu = document.getElementById('sections-menu');
	
							/*if("block" === sectionsMenu.style.display) {
	      	sectionsMenu.style.display = "none";
	      } else {
	      	sectionsMenu.style.display = "block";
	      }*/
	
							if ("hide" === sectionsMenu.className) {
									sectionsMenu.className = "show";
							} else {
									sectionsMenu.className = "hide";
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
	
							var section = this.innerHTML;
	
							var sectionsMenu = document.getElementById('sections-menu');
	
							//sectionsMenu.style.display = "none";
							sectionsMenu.className = "hide";
	
							var leftList = document.getElementById('left-list');
							var rightList = document.getElementById('right-list');
							var sectionName = document.getElementById('section-name');
	
							leftList.style.display = "none";
							rightList.style.display = "none";
							sectionName.style.display = "none";
	
							var preloader = document.querySelector('.cssload-loader');
	
							preloader.style.display = "block";
	
							_connector2.default.sendRequestToServer(section, Controller.updateDataOnPage);
					}
			}], [{
					key: 'updateDataOnPage',
					value: function updateDataOnPage(data) {
	
							var leftList = document.getElementById('left-list');
							var rightList = document.getElementById('right-list');
							var sectionName = document.getElementById('section-name');
							var preloader = document.querySelector('.cssload-loader');
	
							while (leftList.firstChild) {
									leftList.removeChild(leftList.firstChild);
							}
	
							while (rightList.firstChild) {
									rightList.removeChild(rightList.firstChild);
							}
	
							sectionName.removeChild(sectionName.firstChild);
	
							sectionName.innerHTML = data.section.charAt(0).toUpperCase() + data.section.slice(1);
	
							for (var i = 0; i < data.results.length; ++i) {
									if (i % 2 === 0) {
											leftList.innerHTML += Factory.createNote(data.results[i], i < 4 ? "main" : "list");
									} else {
											rightList.innerHTML += Factory.createNote(data.results[i], i < 4 ? "main" : "list");
									}
							}
	
							preloader.style.display = "none";
							leftList.style.display = "inline-block";
							rightList.style.display = "inline-block";
							sectionName.style.display = "block";
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
	
	// exports.sendRequestToServer = Connector.sendRequestToServer;
	
	
	exports.default = Connector;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DOMManipulator = function () {
		function DOMManipulator() {
			_classCallCheck(this, DOMManipulator);
		}
	
		_createClass(DOMManipulator, [{
			key: 'get',
			value: function get(id) {
				return document.getElementById(id);
			}
		}, {
			key: 'click',
			value: function click(element, handler) {
				element.addEventListener('click', handler, false);
			}
		}, {
			key: 'create',
			value: function create(tagname) {
				return document.createElement(tagname);
			}
		}, {
			key: 'clear',
			value: function clear(element) {
				while (element.firstChild) {
					element.removeChild(element.firstChild);
				}
			}
		}, {
			key: 'getClass',
			value: function getClass(element) {
				return element.className;
			}
		}, {
			key: 'setClass',
			value: function setClass(element, classname) {
				element.className = classname;
			}
		}, {
			key: 'setHTML',
			value: function setHTML(element, html) {
				element.innerHTML = html;
			}
		}, {
			key: 'appendHTML',
			value: function appendHTML(element, html) {
				element.innerHTML += html;
			}
		}, {
			key: 'show',
			value: function show(element) {
				if ("list-of-notes" === getClass(element)) {
					element.style.display = "inline-block";
				} else {
					element.style.display = "block";
				}
			}
		}, {
			key: 'hide',
			value: function hide(element) {
				element.style.display = "none";
			}
		}, {
			key: 'append',
			value: function append(parent, child) {
				parent.appendChild(child);
			}
		}]);
	
		return DOMManipulator;
	}();
	
	exports.default = DOMManipulator;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Note = __webpack_require__(5);
	
	var Factory = function () {
		function Factory() {
			_classCallCheck(this, Factory);
		}
	
		_createClass(Factory, null, [{
			key: 'createNote',
			value: function createNote(data, type) {
				if ("main" === type) {
					return Note.methods.getMainNote(data);
				} else if ("list" === type) {
					return Note.methods.getListNote(data);
				} else {
					throw new Error("Unknow type of note.");
				}
			}
		}]);
	
		return Factory;
	}();
	
	exports.createNote = Factory.createNote;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
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
	
	exports.methods = {
		getMainNote: Note.getMainNote,
		getListNote: Note.getListNote
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODM3NjUwYTY4OGExMzMzN2IyNDYiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL0RPTU1hbmlwdWxhdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7QUFGQSxLQUFNLFVBQVUsb0JBQVEsQ0FBUixDQUFoQjs7QUFJQSxLQUFJLFlBQUo7O0tBRU0sVTtBQUVMLHlCQUFjO0FBQUE7O0FBRWIsV0FBTSw4QkFBTjs7QUFFQSxTQUFJLGlCQUFpQixJQUFJLEdBQUosQ0FBUSxpQkFBUixDQUFyQjtBQUNBLFNBQUksZUFBZSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBbkI7QUFDQSxTQUFJLG9CQUFvQixTQUFTLGNBQVQsQ0FBd0IscUJBQXhCLENBQXhCO0FBQ0EsU0FBSSxZQUFZLFNBQVMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBaEI7O0FBRUEsb0JBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsS0FBSywwQkFBOUMsRUFBMEUsS0FBMUU7QUFDQSxrQkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxLQUFLLHdCQUE1QyxFQUFzRSxLQUF0RTs7QUFWYTtBQUFBO0FBQUE7O0FBQUE7QUFZYiw0QkFBbUIsaUJBQU8sUUFBMUIsOEhB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S0FBSyxNQUY1Qiw0QkFHRyxHQUhILDZDQUl1QixPQUFPLEtBQUssVUFBWixHQUF5QixFQUF6QixHQUE4QixLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsU0FKeEUscURBS3lCLEtBQUssUUFMOUIsNkJBQUo7O0FBUUEsV0FBTyxJQUFQO0FBRUE7OzsrQkFFa0IsSSxFQUFNOztBQUV4QixRQUFJLCtEQUNhLE9BQU8sS0FBSyxVQUFaLEdBQXlCLEVBQXpCLEdBQThCLEtBQUssVUFBTCxDQUFnQixDQUFoQixFQUFtQixHQUQ5RCxnRkFHaUIsS0FBSyxHQUh0QixXQUdnQyxLQUFLLEtBSHJDLHlFQUt1QixLQUFLLE1BTDVCLG9EQU15QixLQUFLLFFBTjlCLDZCQUFKOztBQVNBLFdBQU8sSUFBUDtBQUVBOzs7Ozs7QUFJRixTQUFRLE9BQVIsR0FBa0I7QUFDakIsZUFBYSxLQUFLLFdBREQ7QUFFakIsZUFBYSxLQUFLO0FBRkQsRUFBbEIsQyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODM3NjUwYTY4OGExMzMzN2IyNDZcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmltcG9ydCBDb25uZWN0b3IgZnJvbSAnLi9jb25uZWN0b3IuanMnO1xyXG5jb25zdCBGYWN0b3J5ID0gcmVxdWlyZSgnLi9mYWN0b3J5LmpzJyk7XHJcblxyXG5pbXBvcnQgRE9NTWFuaXB1bGF0b3IgZnJvbSAnLi9ET01NYW5pcHVsYXRvci5qcyc7XHJcblxyXG5sZXQgRE9NO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdERPTSA9IG5ldyBET01NYW5pcHVsYXRvcigpO1xyXG5cdFx0XHJcblx0XHRsZXQgc2VjdGlvbnNCdXR0b24gPSBET00uZ2V0KCdzZWN0aW9ucy1idXR0b24nKTtcclxuXHRcdGxldCBnaXRodWJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViLWJ1dHRvbicpO1xyXG5cdFx0bGV0IHNlY3Rpb25zTWVudUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zLW1lbnUtaXRlbXMnKTtcclxuXHRcdGxldCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3NzbG9hZC1sb2FkZXInKTtcclxuXHJcblx0XHRzZWN0aW9uc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIsIGZhbHNlKTtcclxuXHRcdGdpdGh1YkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG5cdFx0Zm9yKGxldCBzZWN0aW9uIG9mIGNvbmZpZy5zZWN0aW9ucykge1xyXG5cclxuXHRcdFx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcblx0XHRcdGxpLmlubmVySFRNTCA9IHNlY3Rpb247XHJcblxyXG5cdFx0XHRsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VjdGlvbnNNZW51SXRlbUNsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuXHRcdFx0c2VjdGlvbnNNZW51SXRlbXMuYXBwZW5kQ2hpbGQobGkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHByZWxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZW5kUmVxdWVzdFRvU2VydmVyKFwiaG9tZVwiLCBDb250cm9sbGVyLnVwZGF0ZURhdGFPblBhZ2UpO1xyXG5cclxuXHR9XHJcblxyXG5cdHNlY3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgc2VjdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zLW1lbnUnKTtcclxuXHJcblx0XHQvKmlmKFwiYmxvY2tcIiA9PT0gc2VjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkpIHtcclxuXHRcdFx0c2VjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlY3Rpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0fSovXHJcblxyXG5cdFx0aWYoXCJoaWRlXCIgPT09IHNlY3Rpb25zTWVudS5jbGFzc05hbWUpIHtcclxuXHRcdFx0c2VjdGlvbnNNZW51LmNsYXNzTmFtZSA9IFwic2hvd1wiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2VjdGlvbnNNZW51LmNsYXNzTmFtZSA9IFwiaGlkZVwiO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcigpIHtcclxuXHRcdGxvY2F0aW9uLmhyZWYgPSBjb25maWcuR2l0SHViUmVmZXJlbmNlO1xyXG5cdH1cclxuXHJcblxyXG5cdHNlY3Rpb25zTWVudUl0ZW1DbGlja0hhbmRsZXIoKSB7XHJcblx0XHRcclxuXHRcdGxldCBzZWN0aW9uID0gdGhpcy5pbm5lckhUTUw7XHJcblxyXG5cdFx0bGV0IHNlY3Rpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1tZW51Jyk7XHJcblxyXG5cdFx0Ly9zZWN0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0c2VjdGlvbnNNZW51LmNsYXNzTmFtZSA9IFwiaGlkZVwiO1xyXG5cclxuXHRcdGxldCBsZWZ0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWxpc3QnKTtcclxuXHRcdGxldCByaWdodExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtbGlzdCcpO1xyXG5cdFx0bGV0IHNlY3Rpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tbmFtZScpO1xyXG5cclxuXHRcdGxlZnRMaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdHJpZ2h0TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRzZWN0aW9uTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG5cdFx0bGV0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jc3Nsb2FkLWxvYWRlcicpO1xyXG5cclxuXHRcdHByZWxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuXHRcdENvbm5lY3Rvci5zZW5kUmVxdWVzdFRvU2VydmVyKHNlY3Rpb24sIENvbnRyb2xsZXIudXBkYXRlRGF0YU9uUGFnZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgdXBkYXRlRGF0YU9uUGFnZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IGxlZnRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtbGlzdCcpO1xyXG5cdFx0bGV0IHJpZ2h0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1saXN0Jyk7XHJcblx0XHRsZXQgc2VjdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbi1uYW1lJyk7XHJcblx0XHRsZXQgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNzc2xvYWQtbG9hZGVyJyk7XHJcblxyXG5cdFx0d2hpbGUobGVmdExpc3QuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRsZWZ0TGlzdC5yZW1vdmVDaGlsZChsZWZ0TGlzdC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHJcblx0XHR3aGlsZShyaWdodExpc3QuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRyaWdodExpc3QucmVtb3ZlQ2hpbGQocmlnaHRMaXN0LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNlY3Rpb25OYW1lLnJlbW92ZUNoaWxkKHNlY3Rpb25OYW1lLmZpcnN0Q2hpbGQpO1xyXG5cclxuXHRcdHNlY3Rpb25OYW1lLmlubmVySFRNTCA9IGRhdGEuc2VjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRhdGEuc2VjdGlvbi5zbGljZSgxKTtcclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdGlmKGkgJSAyID09PSAwKSB7XHJcblx0XHRcdFx0bGVmdExpc3QuaW5uZXJIVE1MICs9IEZhY3RvcnkuY3JlYXRlTm90ZShkYXRhLnJlc3VsdHNbaV0sIChpIDwgNCkgPyBcIm1haW5cIiA6IFwibGlzdFwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyaWdodExpc3QuaW5uZXJIVE1MICs9IEZhY3RvcnkuY3JlYXRlTm90ZShkYXRhLnJlc3VsdHNbaV0sIChpIDwgNCkgPyBcIm1haW5cIiA6IFwibGlzdFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHByZWxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRsZWZ0TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdHJpZ2h0TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdHNlY3Rpb25OYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0fVxyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHRjb25zdCBfaW5zdGFuY2UgPSBuZXcgQ29udHJvbGxlcigpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHQnQVBJa2V5JyA6ICdiNTE3MWMwZjY2NzZkNzRkYTZjYjk5ZjdjY2ZjNmFhYTowOjc1MDU5OTMzJyxcclxuXHQnc2VjdGlvbnMnIDogWydIb21lJywgJ1dvcmxkJywgJ05hdGlvbmFsJywgJ1BvbGl0aWNzJywgJ055cmVnaW9uJywgJ0J1c2luZXNzJywgJ09waW5pb24nLCAnVGVjaG5vbG9neScsXHJcblx0XHRcdFx0ICAnU2NpZW5jZScsICdIZWFsdGgnLCAnU3BvcnRzJywgJ0FydHMnLCAnRmFzaGlvbicsICdEaW5pbmcnLCAnVHJhdmVsJywgJ01hZ2F6aW5lJywgJ1JlYWxlc3RhdGUnXSxcclxuXHQnR2l0SHViUmVmZXJlbmNlJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9aYW1OaWNrL2VwYW0udGVzdC5wcm9qZWN0J1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25maWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmNsYXNzIENvbm5lY3RvciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdHN0YXRpYyBzZW5kUmVxdWVzdFRvU2VydmVyKHNlY3Rpb25OYW1lLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUgfHwgXCJob21lXCI7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGxldCB1cmwgPSBgaHR0cDovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92MS8ke3NlY3Rpb25OYW1lfS5qc29uP2FwaS1rZXk9JHtjb25maWcuQVBJa2V5fWA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGU6ICdjb3JzJ1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0ZmV0Y2godXJsLCBvcHRpb25zKVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG5cdFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuXHRcdFx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soZGF0YSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDogXCIgKyBlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG4vLyBleHBvcnRzLnNlbmRSZXF1ZXN0VG9TZXJ2ZXIgPSBDb25uZWN0b3Iuc2VuZFJlcXVlc3RUb1NlcnZlcjtcclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29ubmVjdG9yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgRE9NTWFuaXB1bGF0b3Ige1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRnZXQoaWQpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0fVxyXG5cclxuXHRjbGljayhlbGVtZW50LCBoYW5kbGVyKSB7XHJcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlKHRhZ25hbWUpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ25hbWUpO1xyXG5cdH1cclxuXHJcblx0Y2xlYXIoZWxlbWVudCkge1xyXG5cdFx0d2hpbGUoZWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldENsYXNzKGVsZW1lbnQpIHtcclxuXHRcdHJldHVybiBlbGVtZW50LmNsYXNzTmFtZTtcclxuXHR9XHJcblxyXG5cdHNldENsYXNzKGVsZW1lbnQsIGNsYXNzbmFtZSkge1xyXG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc25hbWU7XHJcblx0fVxyXG5cclxuXHRzZXRIVE1MKGVsZW1lbnQsIGh0bWwpIHtcclxuXHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuXHR9XHJcblxyXG5cdGFwcGVuZEhUTUwoZWxlbWVudCwgaHRtbCkge1xyXG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgKz0gaHRtbDtcclxuXHR9XHJcblxyXG5cdHNob3coZWxlbWVudCkge1xyXG5cdFx0aWYoXCJsaXN0LW9mLW5vdGVzXCIgPT09IGdldENsYXNzKGVsZW1lbnQpKSB7XHJcblx0XHRcdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoaWRlKGVsZW1lbnQpIHtcclxuXHRcdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH1cclxuXHJcblx0YXBwZW5kKHBhcmVudCwgY2hpbGQpIHtcclxuXHRcdHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBET01NYW5pcHVsYXRvcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0RPTU1hbmlwdWxhdG9yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTm90ZSA9IHJlcXVpcmUoJy4vbm90ZS5qcycpO1xyXG5cclxuY2xhc3MgRmFjdG9yeSB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGVOb3RlKGRhdGEsIHR5cGUpIHtcclxuXHRcdGlmKFwibWFpblwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLm1ldGhvZHMuZ2V0TWFpbk5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2UgaWYoXCJsaXN0XCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUubWV0aG9kcy5nZXRMaXN0Tm90ZShkYXRhKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vdyB0eXBlIG9mIG5vdGUuXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydHMuY3JlYXRlTm90ZSA9IEZhY3RvcnkuY3JlYXRlTm90ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ZhY3RvcnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBOb3RlIHtcclxuXHJcblx0c3RhdGljIGdldE1haW5Ob3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgaW1nID0gKFwiXCIgIT09IGRhdGEubXVsdGltZWRpYSkgP1x0YDxkaXYgY2xhc3M9XCJtYWluLW5vdGUtd3JhcHBlci1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVszXS51cmwgfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5gIDogYGA7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cIm1haW4tbm90ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+PGEgaHJlZj1cIiR7IGRhdGEudXJsIH1cIj4keyBkYXRhLnRpdGxlIH08L2E+PC9oMj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IGRhdGEuYnlsaW5lIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0JHsgaW1nIH1cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNyZWRpdFwiPiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbM10uY29weXJpZ2h0IH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFic3RyYWN0XCI+JHsgZGF0YS5hYnN0cmFjdCB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBub3RlO1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRMaXN0Tm90ZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cImxpc3Qtbm90ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbMF0udXJsIH1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgzPjxhIGhyZWY9XCIkeyBkYXRhLnVybCB9XCI+JHsgZGF0YS50aXRsZSB9PC9hPjwvaDM+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgZGF0YS5ieWxpbmUgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLmFic3RyYWN0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydHMubWV0aG9kcyA9IHtcclxuXHRnZXRNYWluTm90ZTogTm90ZS5nZXRNYWluTm90ZSxcclxuXHRnZXRMaXN0Tm90ZTogTm90ZS5nZXRMaXN0Tm90ZVxyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbm90ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=