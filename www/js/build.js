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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Note = __webpack_require__(4);
	
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
	
	exports.default = Factory;

/***/ },
/* 4 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODU4MjFlYzM4ZjEwMGRkMDY0NDEiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ET01NYW5pcHVsYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztLQUVNLFU7QUFFTCx5QkFBYztBQUFBOztBQUViLFNBQUksaUJBQWlCLFNBQVMsY0FBVCxDQUF3QixpQkFBeEIsQ0FBckI7QUFDQSxTQUFJLGVBQWUsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBQW5CO0FBQ0EsU0FBSSxvQkFBb0IsU0FBUyxjQUFULENBQXdCLHFCQUF4QixDQUF4QjtBQUNBLFNBQUksWUFBWSxTQUFTLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWhCOztBQUVBLG9CQUFlLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLEtBQUssMEJBQTlDLEVBQTBFLEtBQTFFO0FBQ0Esa0JBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsS0FBSyx3QkFBNUMsRUFBc0UsS0FBdEU7O0FBUmE7QUFBQTtBQUFBOztBQUFBO0FBVWIsNEJBQW1CLGlCQUFPLFFBQTFCLDhIQUFvQztBQUFBLGFBQTVCLE9BQTRCOzs7QUFFbkMsYUFBSSxLQUFLLFNBQVMsYUFBVCxDQUF1QixJ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Q0E7Ozs4QkFFVSxPLEVBQVMsSSxFQUFNO0FBQ3pCLFlBQVEsU0FBUixJQUFxQixJQUFyQjtBQUNBOzs7d0JBRUksTyxFQUFTO0FBQ2IsUUFBRyxvQkFBb0IsU0FBUyxPQUFULENBQXZCLEVBQTBDO0FBQ3pDLGFBQVEsS0FBUixDQUFjLE9BQWQsR0FBd0IsY0FBeEI7QUFDQSxLQUZELE1BRU87QUFDTixhQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0E7QUFDRDs7O3dCQUVJLE8sRUFBUztBQUNiLFlBQVEsS0FBUixDQUFjLE9BQWQsR0FBd0IsTUFBeEI7QUFDQTs7OzBCQUVNLE0sRUFBUSxLLEVBQU87QUFDckIsV0FBTyxXQUFQLENBQW1CLEtBQW5CO0FBQ0E7Ozs7OzttQkFHYSxjIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA4NTgyMWVjMzhmMTAwZGQwNjQ0MVxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuanMnO1xyXG5pbXBvcnQgQ29ubmVjdG9yIGZyb20gJy4vY29ubmVjdG9yLmpzJztcclxuaW1wb3J0IEZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5LmpzJztcclxuaW1wb3J0IERPTU1hbmlwdWxhdG9yIGZyb20gJy4vRE9NTWFuaXB1bGF0b3IuanMnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgc2VjdGlvbnNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbnMtYnV0dG9uJyk7XHJcblx0XHRsZXQgZ2l0aHViQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpdGh1Yi1idXR0b24nKTtcclxuXHRcdGxldCBzZWN0aW9uc01lbnVJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1tZW51LWl0ZW1zJyk7XHJcblx0XHRsZXQgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNzc2xvYWQtbG9hZGVyJyk7XHJcblxyXG5cdFx0c2VjdGlvbnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlY3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcblx0XHRnaXRodWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuXHRcdGZvcihsZXQgc2VjdGlvbiBvZiBjb25maWcuc2VjdGlvbnMpIHtcclxuXHJcblx0XHRcdGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG5cdFx0XHRsaS5pbm5lckhUTUwgPSBzZWN0aW9uO1xyXG5cclxuXHRcdFx0bGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlY3Rpb25zTWVudUl0ZW1DbGlja0hhbmRsZXIsIGZhbHNlKTtcclxuXHJcblx0XHRcdHNlY3Rpb25zTWVudUl0ZW1zLmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdH1cclxuXHJcblx0XHRwcmVsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcblx0XHRDb25uZWN0b3Iuc2VuZFJlcXVlc3RUb1NlcnZlcihcImhvbWVcIiwgQ29udHJvbGxlci51cGRhdGVEYXRhT25QYWdlKTtcclxuXHJcblx0fVxyXG5cclxuXHRzZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHNlY3Rpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1tZW51Jyk7XHJcblxyXG5cdFx0LyppZihcImJsb2NrXCIgPT09IHNlY3Rpb25zTWVudS5zdHlsZS5kaXNwbGF5KSB7XHJcblx0XHRcdHNlY3Rpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZWN0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdH0qL1xyXG5cclxuXHRcdGlmKFwiaGlkZVwiID09PSBzZWN0aW9uc01lbnUuY2xhc3NOYW1lKSB7XHJcblx0XHRcdHNlY3Rpb25zTWVudS5jbGFzc05hbWUgPSBcInNob3dcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlY3Rpb25zTWVudS5jbGFzc05hbWUgPSBcImhpZGVcIjtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRnaXRodWJCdXR0b25DbGlja0hhbmRsZXIoKSB7XHJcblx0XHRsb2NhdGlvbi5ocmVmID0gY29uZmlnLkdpdEh1YlJlZmVyZW5jZTtcclxuXHR9XHJcblxyXG5cclxuXHRzZWN0aW9uc01lbnVJdGVtQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgc2VjdGlvbiA9IHRoaXMuaW5uZXJIVE1MO1xyXG5cclxuXHRcdGxldCBzZWN0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbnMtbWVudScpO1xyXG5cclxuXHRcdC8vc2VjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdHNlY3Rpb25zTWVudS5jbGFzc05hbWUgPSBcImhpZGVcIjtcclxuXHJcblx0XHRsZXQgbGVmdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1saXN0Jyk7XHJcblx0XHRsZXQgcmlnaHRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LWxpc3QnKTtcclxuXHRcdGxldCBzZWN0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLW5hbWUnKTtcclxuXHJcblx0XHRsZWZ0TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRyaWdodExpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0c2VjdGlvbk5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuXHRcdGxldCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3NzbG9hZC1sb2FkZXInKTtcclxuXHJcblx0XHRwcmVsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcblx0XHRDb25uZWN0b3Iuc2VuZFJlcXVlc3RUb1NlcnZlcihzZWN0aW9uLCBDb250cm9sbGVyLnVwZGF0ZURhdGFPblBhZ2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHVwZGF0ZURhdGFPblBhZ2UoZGF0YSkge1xyXG5cclxuXHRcdGxldCBsZWZ0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWxpc3QnKTtcclxuXHRcdGxldCByaWdodExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtbGlzdCcpO1xyXG5cdFx0bGV0IHNlY3Rpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tbmFtZScpO1xyXG5cdFx0bGV0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jc3Nsb2FkLWxvYWRlcicpO1xyXG5cclxuXHRcdHdoaWxlKGxlZnRMaXN0LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0bGVmdExpc3QucmVtb3ZlQ2hpbGQobGVmdExpc3QuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0d2hpbGUocmlnaHRMaXN0LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0cmlnaHRMaXN0LnJlbW92ZUNoaWxkKHJpZ2h0TGlzdC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZWN0aW9uTmFtZS5yZW1vdmVDaGlsZChzZWN0aW9uTmFtZS5maXJzdENoaWxkKTtcclxuXHJcblx0XHRzZWN0aW9uTmFtZS5pbm5lckhUTUwgPSBkYXRhLnNlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkYXRhLnNlY3Rpb24uc2xpY2UoMSk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZihpICUgMiA9PT0gMCkge1xyXG5cdFx0XHRcdGxlZnRMaXN0LmlubmVySFRNTCArPSBGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YS5yZXN1bHRzW2ldLCAoaSA8IDQpID8gXCJtYWluXCIgOiBcImxpc3RcIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmlnaHRMaXN0LmlubmVySFRNTCArPSBGYWN0b3J5LmNyZWF0ZU5vdGUoZGF0YS5yZXN1bHRzW2ldLCAoaSA8IDQpID8gXCJtYWluXCIgOiBcImxpc3RcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRwcmVsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0bGVmdExpc3Quc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblx0XHRyaWdodExpc3Quc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblx0XHRzZWN0aW9uTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblx0Y29uc3QgX2luc3RhbmNlID0gbmV3IENvbnRyb2xsZXIoKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0J0FQSWtleScgOiAnYjUxNzFjMGY2Njc2ZDc0ZGE2Y2I5OWY3Y2NmYzZhYWE6MDo3NTA1OTkzMycsXHJcblx0J3NlY3Rpb25zJyA6IFsnSG9tZScsICdXb3JsZCcsICdOYXRpb25hbCcsICdQb2xpdGljcycsICdOeXJlZ2lvbicsICdCdXNpbmVzcycsICdPcGluaW9uJywgJ1RlY2hub2xvZ3knLFxyXG5cdFx0XHRcdCAgJ1NjaWVuY2UnLCAnSGVhbHRoJywgJ1Nwb3J0cycsICdBcnRzJywgJ0Zhc2hpb24nLCAnRGluaW5nJywgJ1RyYXZlbCcsICdNYWdhemluZScsICdSZWFsZXN0YXRlJ10sXHJcblx0J0dpdEh1YlJlZmVyZW5jZSc6ICdodHRwczovL2dpdGh1Yi5jb20vWmFtTmljay9lcGFtLnRlc3QucHJvamVjdCdcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29uZmlnLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG5jbGFzcyBDb25uZWN0b3Ige1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRzdGF0aWMgc2VuZFJlcXVlc3RUb1NlcnZlcihzZWN0aW9uTmFtZSwgY2FsbGJhY2spIHtcclxuXHJcblx0XHRzZWN0aW9uTmFtZSA9IHNlY3Rpb25OYW1lIHx8IFwiaG9tZVwiO1xyXG5cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRsZXQgdXJsID0gYGh0dHA6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3RvcHN0b3JpZXMvdjEvJHtzZWN0aW9uTmFtZX0uanNvbj9hcGkta2V5PSR7Y29uZmlnLkFQSWtleX1gO1xyXG5cclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb2RlOiAnY29ycydcclxuXHRcdH07XHJcblxyXG5cclxuXHRcdGZldGNoKHVybCwgb3B0aW9ucylcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuXHRcdFx0XHRcdGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGNhbGxiYWNrKGRhdGEpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVxdWVzdCBmYWlsZWQ6IFwiICsgZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29ubmVjdG9yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTm90ZSA9IHJlcXVpcmUoJy4vbm90ZS5qcycpO1xyXG5cclxuY2xhc3MgRmFjdG9yeSB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGVOb3RlKGRhdGEsIHR5cGUpIHtcclxuXHRcdGlmKFwibWFpblwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLm1ldGhvZHMuZ2V0TWFpbk5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2UgaWYoXCJsaXN0XCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUubWV0aG9kcy5nZXRMaXN0Tm90ZShkYXRhKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vdyB0eXBlIG9mIG5vdGUuXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mYWN0b3J5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgTm90ZSB7XHJcblxyXG5cdHN0YXRpYyBnZXRNYWluTm90ZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IGltZyA9IChcIlwiICE9PSBkYXRhLm11bHRpbWVkaWEpID9cdGA8ZGl2IGNsYXNzPVwibWFpbi1ub3RlLXdyYXBwZXItaW1hZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbM10udXJsIH1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+YCA6IGBgO1xyXG5cclxuXHRcdGxldCBub3RlID0gYDxkaXYgY2xhc3M9XCJtYWluLW5vdGVcIj5cclxuXHRcdFx0XHRcdFx0PGgyPjxhIGhyZWY9XCIkeyBkYXRhLnVybCB9XCI+JHsgZGF0YS50aXRsZSB9PC9hPjwvaDI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieWxpbmVcIj4keyBkYXRhLmJ5bGluZSB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdCR7IGltZyB9XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjcmVkaXRcIj4keyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzNdLmNvcHlyaWdodCB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPiR7IGRhdGEuYWJzdHJhY3QgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+YDtcclxuXHJcblx0XHRyZXR1cm4gbm90ZTtcclxuXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0TGlzdE5vdGUoZGF0YSkge1xyXG5cclxuXHRcdGxldCBub3RlID0gYDxkaXYgY2xhc3M9XCJsaXN0LW5vdGVcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzBdLnVybCB9XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz48YSBocmVmPVwiJHsgZGF0YS51cmwgfVwiPiR7IGRhdGEudGl0bGUgfTwvYT48L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IGRhdGEuYnlsaW5lIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFic3RyYWN0XCI+JHsgZGF0YS5hYnN0cmFjdCB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBub3RlO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnRzLm1ldGhvZHMgPSB7XHJcblx0Z2V0TWFpbk5vdGU6IE5vdGUuZ2V0TWFpbk5vdGUsXHJcblx0Z2V0TGlzdE5vdGU6IE5vdGUuZ2V0TGlzdE5vdGVcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vdGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBET01NYW5pcHVsYXRvciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdGdldChpZCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHR9XHJcblxyXG5cdGNsaWNrKGVsZW1lbnQsIGhhbmRsZXIpIHtcclxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGUodGFnbmFtZSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnbmFtZSk7XHJcblx0fVxyXG5cclxuXHRjbGVhcihlbGVtZW50KSB7XHJcblx0XHR3aGlsZShlbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0ZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q2xhc3MoZWxlbWVudCkge1xyXG5cdFx0cmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lO1xyXG5cdH1cclxuXHJcblx0c2V0Q2xhc3MoZWxlbWVudCwgY2xhc3NuYW1lKSB7XHJcblx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzbmFtZTtcclxuXHR9XHJcblxyXG5cdHNldEhUTUwoZWxlbWVudCwgaHRtbCkge1xyXG5cdFx0ZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdH1cclxuXHJcblx0YXBwZW5kSFRNTChlbGVtZW50LCBodG1sKSB7XHJcblx0XHRlbGVtZW50LmlubmVySFRNTCArPSBodG1sO1xyXG5cdH1cclxuXHJcblx0c2hvdyhlbGVtZW50KSB7XHJcblx0XHRpZihcImxpc3Qtb2Ytbm90ZXNcIiA9PT0gZ2V0Q2xhc3MoZWxlbWVudCkpIHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhpZGUoZWxlbWVudCkge1xyXG5cdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0fVxyXG5cclxuXHRhcHBlbmQocGFyZW50LCBjaGlsZCkge1xyXG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERPTU1hbmlwdWxhdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vRE9NTWFuaXB1bGF0b3IuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9