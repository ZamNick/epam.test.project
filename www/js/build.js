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
	
	var _DOMManipulator2 = _interopRequireDefault(_DOMManipulator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
			function Controller() {
					_classCallCheck(this, Controller);
	
					var sectionsButton = document.getElementById('sections-button');
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
											leftList.innerHTML += _factory2.default.createNote(data.results[i], i < 4 ? "main" : "list");
									} else {
											rightList.innerHTML += _factory2.default.createNote(data.results[i], i < 4 ? "main" : "list");
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODhmZTE0YjlkN2JiOGYzMmYyMzMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ET01NYW5pcHVsYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztLQUVNLFU7QUFFTCx5QkFBYztBQUFBOztBQUViLFNBQUksaUJBQWlCLFNBQVMsY0FBVCxDQUF3QixpQkFBeEIsQ0FBckI7QUFDQSxTQUFJLGVBQWUsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBQW5CO0FBQ0EsU0FBSSxvQkFBb0IsU0FBUyxjQUFULENBQXdCLHFCQUF4QixDQUF4QjtBQUNBLFNBQUksWUFBWSxTQUFTLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWhCOztBQUVBLG9CQUFlLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLEtBQUssMEJBQTlDLEVBQTBFLEtBQTFFO0FBQ0Esa0JBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsS0FBSyx3QkFBNUMsRUFBc0UsS0FBdEU7O0FBUmE7QUFBQTtBQUFBOztBQUFBO0FBVWIsNEJBQW1CLGlCQUFPLFFBQTFCLDhIQUFvQztBQUFBLGFBQTVCLE9BQTRCOzs7QUFFbkMsYUFBSSxLQUFLLFNBQVMsYUFBVCxDQUF1QixJ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QUF2QixFQUEwQztBQUN6QyxhQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLGNBQXhCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sYUFBUSxLQUFSLENBQWMsT0FBZCxHQUF3QixPQUF4QjtBQUNBO0FBQ0Q7Ozt3QkFFSSxPLEVBQVM7QUFDYixZQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0E7OzswQkFFTSxNLEVBQVEsSyxFQUFPO0FBQ3JCLFdBQU8sV0FBUCxDQUFtQixLQUFuQjtBQUNBOzs7Ozs7bUJBR2EsYyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODhmZTE0YjlkN2JiOGYzMmYyMzNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XHJcbmltcG9ydCBGYWN0b3J5IGZyb20gJy4vZmFjdG9yeS5qcyc7XHJcbmltcG9ydCBET01NYW5pcHVsYXRvciBmcm9tICcuL0RPTU1hbmlwdWxhdG9yLmpzJztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHNlY3Rpb25zQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zLWJ1dHRvbicpO1xyXG5cdFx0bGV0IGdpdGh1YkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXRodWItYnV0dG9uJyk7XHJcblx0XHRsZXQgc2VjdGlvbnNNZW51SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbnMtbWVudS1pdGVtcycpO1xyXG5cdFx0bGV0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jc3Nsb2FkLWxvYWRlcicpO1xyXG5cclxuXHRcdHNlY3Rpb25zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG5cdFx0Z2l0aHViQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5naXRodWJCdXR0b25DbGlja0hhbmRsZXIsIGZhbHNlKTtcclxuXHJcblx0XHRmb3IobGV0IHNlY3Rpb24gb2YgY29uZmlnLnNlY3Rpb25zKSB7XHJcblxyXG5cdFx0XHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuXHRcdFx0bGkuaW5uZXJIVE1MID0gc2VjdGlvbjtcclxuXHJcblx0XHRcdGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZWN0aW9uc01lbnVJdGVtQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRzZWN0aW9uc01lbnVJdGVtcy5hcHBlbmRDaGlsZChsaSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJlbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG5cdFx0Q29ubmVjdG9yLnNlbmRSZXF1ZXN0VG9TZXJ2ZXIoXCJob21lXCIsIENvbnRyb2xsZXIudXBkYXRlRGF0YU9uUGFnZSk7XHJcblxyXG5cdH1cclxuXHJcblx0c2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIoKSB7XHJcblx0XHRcclxuXHRcdGxldCBzZWN0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbnMtbWVudScpO1xyXG5cclxuXHRcdC8qaWYoXCJibG9ja1wiID09PSBzZWN0aW9uc01lbnUuc3R5bGUuZGlzcGxheSkge1xyXG5cdFx0XHRzZWN0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2VjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHR9Ki9cclxuXHJcblx0XHRpZihcImhpZGVcIiA9PT0gc2VjdGlvbnNNZW51LmNsYXNzTmFtZSkge1xyXG5cdFx0XHRzZWN0aW9uc01lbnUuY2xhc3NOYW1lID0gXCJzaG93XCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZWN0aW9uc01lbnUuY2xhc3NOYW1lID0gXCJoaWRlXCI7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Z2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0bG9jYXRpb24uaHJlZiA9IGNvbmZpZy5HaXRIdWJSZWZlcmVuY2U7XHJcblx0fVxyXG5cclxuXHJcblx0c2VjdGlvbnNNZW51SXRlbUNsaWNrSGFuZGxlcigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHNlY3Rpb24gPSB0aGlzLmlubmVySFRNTDtcclxuXHJcblx0XHRsZXQgc2VjdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zLW1lbnUnKTtcclxuXHJcblx0XHQvL3NlY3Rpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRzZWN0aW9uc01lbnUuY2xhc3NOYW1lID0gXCJoaWRlXCI7XHJcblxyXG5cdFx0bGV0IGxlZnRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtbGlzdCcpO1xyXG5cdFx0bGV0IHJpZ2h0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1saXN0Jyk7XHJcblx0XHRsZXQgc2VjdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbi1uYW1lJyk7XHJcblxyXG5cdFx0bGVmdExpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0cmlnaHRMaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdHNlY3Rpb25OYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcblx0XHRsZXQgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNzc2xvYWQtbG9hZGVyJyk7XHJcblxyXG5cdFx0cHJlbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG5cdFx0Q29ubmVjdG9yLnNlbmRSZXF1ZXN0VG9TZXJ2ZXIoc2VjdGlvbiwgQ29udHJvbGxlci51cGRhdGVEYXRhT25QYWdlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB1cGRhdGVEYXRhT25QYWdlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgbGVmdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1saXN0Jyk7XHJcblx0XHRsZXQgcmlnaHRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LWxpc3QnKTtcclxuXHRcdGxldCBzZWN0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLW5hbWUnKTtcclxuXHRcdGxldCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3NzbG9hZC1sb2FkZXInKTtcclxuXHJcblx0XHR3aGlsZShsZWZ0TGlzdC5maXJzdENoaWxkKSB7XHJcblx0XHRcdGxlZnRMaXN0LnJlbW92ZUNoaWxkKGxlZnRMaXN0LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHdoaWxlKHJpZ2h0TGlzdC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHJpZ2h0TGlzdC5yZW1vdmVDaGlsZChyaWdodExpc3QuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUucmVtb3ZlQ2hpbGQoc2VjdGlvbk5hbWUuZmlyc3RDaGlsZCk7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUuaW5uZXJIVE1MID0gZGF0YS5zZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGF0YS5zZWN0aW9uLnNsaWNlKDEpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYoaSAlIDIgPT09IDApIHtcclxuXHRcdFx0XHRsZWZ0TGlzdC5pbm5lckhUTUwgKz0gRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJpZ2h0TGlzdC5pbm5lckhUTUwgKz0gRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cHJlbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGxlZnRMaXN0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cdFx0cmlnaHRMaXN0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cdFx0c2VjdGlvbk5hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHR9XHJcblxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cdGNvbnN0IF9pbnN0YW5jZSA9IG5ldyBDb250cm9sbGVyKCk7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdCdBUElrZXknIDogJ2I1MTcxYzBmNjY3NmQ3NGRhNmNiOTlmN2NjZmM2YWFhOjA6NzUwNTk5MzMnLFxyXG5cdCdzZWN0aW9ucycgOiBbJ0hvbWUnLCAnV29ybGQnLCAnTmF0aW9uYWwnLCAnUG9saXRpY3MnLCAnTnlyZWdpb24nLCAnQnVzaW5lc3MnLCAnT3BpbmlvbicsICdUZWNobm9sb2d5JyxcclxuXHRcdFx0XHQgICdTY2llbmNlJywgJ0hlYWx0aCcsICdTcG9ydHMnLCAnQXJ0cycsICdGYXNoaW9uJywgJ0RpbmluZycsICdUcmF2ZWwnLCAnTWFnYXppbmUnLCAnUmVhbGVzdGF0ZSddLFxyXG5cdCdHaXRIdWJSZWZlcmVuY2UnOiAnaHR0cHM6Ly9naXRodWIuY29tL1phbU5pY2svZXBhbS50ZXN0LnByb2plY3QnXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbmZpZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuY2xhc3MgQ29ubmVjdG9yIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0c3RhdGljIHNlbmRSZXF1ZXN0VG9TZXJ2ZXIoc2VjdGlvbk5hbWUsIGNhbGxiYWNrKSB7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZSB8fCBcImhvbWVcIjtcclxuXHJcblx0XHRzZWN0aW9uTmFtZSA9IHNlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0bGV0IHVybCA9IGBodHRwOi8vYXBpLm55dGltZXMuY29tL3N2Yy90b3BzdG9yaWVzL3YxLyR7c2VjdGlvbk5hbWV9Lmpzb24/YXBpLWtleT0ke2NvbmZpZy5BUElrZXl9YDtcclxuXHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcclxuXHRcdFx0fSxcclxuXHRcdFx0bW9kZTogJ2NvcnMnXHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHRmZXRjaCh1cmwsIG9wdGlvbnMpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcblx0XHRcdFx0XHRlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRjYWxsYmFjayhkYXRhKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOiBcIiArIGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RvcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Nvbm5lY3Rvci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBOb3RlIGZyb20gJy4vbm90ZS5qcyc7XHJcblxyXG5jbGFzcyBGYWN0b3J5IHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZU5vdGUoZGF0YSwgdHlwZSkge1xyXG5cdFx0aWYoXCJtYWluXCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUuZ2V0TWFpbk5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2UgaWYoXCJsaXN0XCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUuZ2V0TGlzdE5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3cgdHlwZSBvZiBub3RlLlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN0b3J5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZmFjdG9yeS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIE5vdGUge1xyXG5cclxuXHRzdGF0aWMgZ2V0TWFpbk5vdGUoZGF0YSkge1xyXG5cclxuXHRcdGxldCBpbWcgPSAoXCJcIiAhPT0gZGF0YS5tdWx0aW1lZGlhKSA/XHRgPGRpdiBjbGFzcz1cIm1haW4tbm90ZS13cmFwcGVyLWltYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzNdLnVybCB9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PmAgOiBgYDtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibWFpbi1ub3RlXCI+XHJcblx0XHRcdFx0XHRcdDxoMj48YSBocmVmPVwiJHsgZGF0YS51cmwgfVwiPiR7IGRhdGEudGl0bGUgfTwvYT48L2gyPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgZGF0YS5ieWxpbmUgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQkeyBpbWcgfVxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3JlZGl0XCI+JHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVszXS5jb3B5cmlnaHQgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLmFic3RyYWN0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldExpc3ROb3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibGlzdC1ub3RlXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVswXS51cmwgfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+PGEgaHJlZj1cIiR7IGRhdGEudXJsIH1cIj4keyBkYXRhLnRpdGxlIH08L2E+PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieWxpbmVcIj4keyBkYXRhLmJ5bGluZSB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPiR7IGRhdGEuYWJzdHJhY3QgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+YDtcclxuXHJcblx0XHRyZXR1cm4gbm90ZTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vdGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBET01NYW5pcHVsYXRvciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdGdldChpZCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHR9XHJcblxyXG5cdGNsaWNrKGVsZW1lbnQsIGhhbmRsZXIpIHtcclxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGUodGFnbmFtZSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnbmFtZSk7XHJcblx0fVxyXG5cclxuXHRjbGVhcihlbGVtZW50KSB7XHJcblx0XHR3aGlsZShlbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0ZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q2xhc3MoZWxlbWVudCkge1xyXG5cdFx0cmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0Q2xhc3MoZWxlbWVudCwgY2xhc3NuYW1lKSB7XHJcblx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzbmFtZTtcclxuXHR9XHJcblxyXG5cdHNldEhUTUwoZWxlbWVudCwgaHRtbCkge1xyXG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdH1cclxuXHJcblx0YXBwZW5kSFRNTChlbGVtZW50LCBodG1sKSB7XHJcblx0XHRlbGVtZW50LmlubmVySFRNTCArPSBodG1sO1xyXG5cdH1cclxuXHJcblx0c2hvdyhlbGVtZW50KSB7XHJcblx0XHRpZihcImxpc3Qtb2Ytbm90ZXNcIiA9PT0gZ2V0Q2xhc3MoZWxlbWVudCkpIHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhpZGUoZWxlbWVudCkge1xyXG5cdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0fVxyXG5cclxuXHRhcHBlbmQocGFyZW50LCBjaGlsZCkge1xyXG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERPTU1hbmlwdWxhdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vRE9NTWFuaXB1bGF0b3IuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9