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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Connector = __webpack_require__(2);
	var Factory = __webpack_require__(3);
	
	var Controller = function () {
			function Controller() {
					_classCallCheck(this, Controller);
	
					var sectionsButton = document.getElementById('sections-button');
					var githubButton = document.getElementById('github-button');
	
					sectionsButton.addEventListener('click', this.sectionsButtonClickHandler, false);
					githubButton.addEventListener('click', this.githubButtonClickHandler, false);
	
					var sectionsMenuItems = document.getElementById('sections-menu-items');
	
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
			}
	
			_createClass(Controller, [{
					key: 'sectionsButtonClickHandler',
					value: function sectionsButtonClickHandler() {
	
							var sectionsMenu = document.getElementById('sections-menu');
	
							if ("block" === sectionsMenu.style.display) {
									sectionsMenu.style.display = "none";
							} else {
									sectionsMenu.style.display = "block";
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
	
							sectionsMenu.style.display = "none";
	
							var leftList = document.getElementById('left-list');
							var rightList = document.getElementById('right-list');
							var sectionName = document.getElementById('section-name');
	
							leftList.style.display = "none";
							rightList.style.display = "none";
							sectionName.style.display = "none";
	
							var preloader = document.querySelector('.cssload-loader');
	
							preloader.style.display = "block";
	
							Connector.sendRequestToServer(section, Controller.updateDataOnPage);
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
									if (i % 2 == 0) {
											leftList.innerHTML += Factory.getNote(data.results[i], i < 4 ? "main" : "list");
									} else {
											rightList.innerHTML += Factory.getNote(data.results[i], i < 4 ? "main" : "list");
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
	
	exports.sendRequestToServer = Connector.sendRequestToServer;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Note = __webpack_require__(4);
	
	var Factory = function () {
		function Factory() {
			_classCallCheck(this, Factory);
		}
	
		_createClass(Factory, null, [{
			key: 'getNote',
			value: function getNote(data, type) {
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
	
	exports.getNote = Factory.getNote;

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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDI5MDk3ZjBhM2MwYWZlMzQ5OGEiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7Ozs7OztBQUVBLEtBQU0sWUFBWSxvQkFBUSxDQUFSLENBQWxCO0FBQ0EsS0FBTSxVQUFVLG9CQUFRLENBQVIsQ0FBaEI7O0tBRU0sVTtBQUVMLHlCQUFjO0FBQUE7O0FBRWIsU0FBSSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLGlCQUF4QixDQUFyQjtBQUNBLFNBQUksZUFBZSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBbkI7O0FBRUEsb0JBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsS0FBSywwQkFBOUMsRUFBMEUsS0FBMUU7QUFDQSxrQkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxLQUFLLHdCQUE1QyxFQUFzRSxLQUF0RTs7QUFFQSxTQUFJLG9CQUFvQixTQUFTLGNBQVQsQ0FBd0IscUJBQXhCLENBQXhCOztBQVJhO0FBQUE7QUFBQTs7QUFBQTtBQVViLDRCQUFtQixpQkFBTyxRQUExQiw4SEFBb0M7QUFBQSxhQUE1QixPQUE0Qjs7O0FBRW5DLGFBQUksS0FBSyxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDs7QUFFQSxZQUFHLFNBQUgsR0FBZSxPQUFm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QU8sS0FBSyxVQUFaLEdBQXlCLEVBQXpCLEdBQThCLEtBQUssVUFBTCxDQUFnQixDQUFoQixFQUFtQixTQUp4RSxxREFLeUIsS0FBSyxRQUw5Qiw2QkFBSjs7QUFRQSxXQUFPLElBQVA7QUFFQTs7OytCQUVrQixJLEVBQU07O0FBRXhCLFFBQUksK0RBQ2EsT0FBTyxLQUFLLFVBQVosR0FBeUIsRUFBekIsR0FBOEIsS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLEdBRDlELGdGQUdpQixLQUFLLEdBSHRCLFdBR2dDLEtBQUssS0FIckMseUVBS3VCLEtBQUssTUFMNUIsb0RBTXlCLEtBQUssUUFOOUIsNkJBQUo7O0FBU0EsV0FBTyxJQUFQO0FBRUE7Ozs7OztBQUlGLFNBQVEsT0FBUixHQUFrQjtBQUNqQixlQUFhLEtBQUssV0FERDtBQUVqQixlQUFhLEtBQUs7QUFGRCxFQUFsQixDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0MjkwOTdmMGEzYzBhZmUzNDk4YVxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuY29uc3QgQ29ubmVjdG9yID0gcmVxdWlyZSgnLi9jb25uZWN0b3IuanMnKTtcclxuY29uc3QgRmFjdG9yeSA9IHJlcXVpcmUoJy4vZmFjdG9yeS5qcycpO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgc2VjdGlvbnNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbnMtYnV0dG9uJyk7XHJcblx0XHRsZXQgZ2l0aHViQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpdGh1Yi1idXR0b24nKTtcclxuXHJcblx0XHRzZWN0aW9uc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIsIGZhbHNlKTtcclxuXHRcdGdpdGh1YkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG5cdFx0bGV0IHNlY3Rpb25zTWVudUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zLW1lbnUtaXRlbXMnKTtcclxuXHJcblx0XHRmb3IobGV0IHNlY3Rpb24gb2YgY29uZmlnLnNlY3Rpb25zKSB7XHJcblxyXG5cdFx0XHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuXHRcdFx0bGkuaW5uZXJIVE1MID0gc2VjdGlvbjtcclxuXHJcblx0XHRcdGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZWN0aW9uc01lbnVJdGVtQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRzZWN0aW9uc01lbnVJdGVtcy5hcHBlbmRDaGlsZChsaSk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0c2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIoKSB7XHJcblx0XHRcclxuXHRcdGxldCBzZWN0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbnMtbWVudScpO1xyXG5cclxuXHRcdGlmKFwiYmxvY2tcIiA9PT0gc2VjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkpIHtcclxuXHRcdFx0c2VjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlY3Rpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcigpIHtcclxuXHRcdGxvY2F0aW9uLmhyZWYgPSBjb25maWcuR2l0SHViUmVmZXJlbmNlO1xyXG5cdH1cclxuXHJcblxyXG5cdHNlY3Rpb25zTWVudUl0ZW1DbGlja0hhbmRsZXIoKSB7XHJcblx0XHRcclxuXHRcdGxldCBzZWN0aW9uID0gdGhpcy5pbm5lckhUTUw7XHJcblxyXG5cdFx0bGV0IHNlY3Rpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1tZW51Jyk7XHJcblxyXG5cdFx0c2VjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcblx0XHRsZXQgbGVmdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1saXN0Jyk7XHJcblx0XHRsZXQgcmlnaHRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LWxpc3QnKTtcclxuXHRcdGxldCBzZWN0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLW5hbWUnKTtcclxuXHJcblx0XHRsZWZ0TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRyaWdodExpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0c2VjdGlvbk5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuXHRcdGxldCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3NzbG9hZC1sb2FkZXInKTtcclxuXHJcblx0XHRwcmVsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcblx0XHRDb25uZWN0b3Iuc2VuZFJlcXVlc3RUb1NlcnZlcihzZWN0aW9uLCBDb250cm9sbGVyLnVwZGF0ZURhdGFPblBhZ2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHVwZGF0ZURhdGFPblBhZ2UoZGF0YSkge1xyXG5cclxuXHRcdGxldCBsZWZ0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWxpc3QnKTtcclxuXHRcdGxldCByaWdodExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtbGlzdCcpO1xyXG5cdFx0bGV0IHNlY3Rpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tbmFtZScpO1xyXG5cdFx0bGV0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jc3Nsb2FkLWxvYWRlcicpO1xyXG5cclxuXHRcdHdoaWxlKGxlZnRMaXN0LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0bGVmdExpc3QucmVtb3ZlQ2hpbGQobGVmdExpc3QuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0d2hpbGUocmlnaHRMaXN0LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0cmlnaHRMaXN0LnJlbW92ZUNoaWxkKHJpZ2h0TGlzdC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZWN0aW9uTmFtZS5yZW1vdmVDaGlsZChzZWN0aW9uTmFtZS5maXJzdENoaWxkKTtcclxuXHJcblx0XHRzZWN0aW9uTmFtZS5pbm5lckhUTUwgPSBkYXRhLnNlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkYXRhLnNlY3Rpb24uc2xpY2UoMSk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZihpICUgMiA9PSAwKSB7XHJcblx0XHRcdFx0bGVmdExpc3QuaW5uZXJIVE1MICs9IEZhY3RvcnkuZ2V0Tm90ZShkYXRhLnJlc3VsdHNbaV0sIChpIDwgNCkgPyBcIm1haW5cIiA6IFwibGlzdFwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyaWdodExpc3QuaW5uZXJIVE1MICs9IEZhY3RvcnkuZ2V0Tm90ZShkYXRhLnJlc3VsdHNbaV0sIChpIDwgNCkgPyBcIm1haW5cIiA6IFwibGlzdFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHByZWxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRsZWZ0TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdHJpZ2h0TGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRcdHNlY3Rpb25OYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0fVxyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHRjb25zdCBfaW5zdGFuY2UgPSBuZXcgQ29udHJvbGxlcigpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHQnQVBJa2V5JyA6ICdiNTE3MWMwZjY2NzZkNzRkYTZjYjk5ZjdjY2ZjNmFhYTowOjc1MDU5OTMzJyxcclxuXHQnc2VjdGlvbnMnIDogWydIb21lJywgJ1dvcmxkJywgJ05hdGlvbmFsJywgJ1BvbGl0aWNzJywgJ055cmVnaW9uJywgJ0J1c2luZXNzJywgJ09waW5pb24nLCAnVGVjaG5vbG9neScsXHJcblx0XHRcdFx0ICAnU2NpZW5jZScsICdIZWFsdGgnLCAnU3BvcnRzJywgJ0FydHMnLCAnRmFzaGlvbicsICdEaW5pbmcnLCAnVHJhdmVsJywgJ01hZ2F6aW5lJywgJ1JlYWxlc3RhdGUnXSxcclxuXHQnR2l0SHViUmVmZXJlbmNlJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9aYW1OaWNrL2VwYW0udGVzdC5wcm9qZWN0J1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25maWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmNsYXNzIENvbm5lY3RvciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdHN0YXRpYyBzZW5kUmVxdWVzdFRvU2VydmVyKHNlY3Rpb25OYW1lLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUgfHwgXCJob21lXCI7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGxldCB1cmwgPSBgaHR0cDovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92MS8ke3NlY3Rpb25OYW1lfS5qc29uP2FwaS1rZXk9JHtjb25maWcuQVBJa2V5fWA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGU6ICdjb3JzJ1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0ZmV0Y2godXJsLCBvcHRpb25zKVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG5cdFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuXHRcdFx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soZGF0YSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDogXCIgKyBlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnRzLnNlbmRSZXF1ZXN0VG9TZXJ2ZXIgPSBDb25uZWN0b3Iuc2VuZFJlcXVlc3RUb1NlcnZlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Nvbm5lY3Rvci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IE5vdGUgPSByZXF1aXJlKCcuL25vdGUuanMnKTtcclxuXHJcbmNsYXNzIEZhY3Rvcnkge1xyXG5cclxuXHRzdGF0aWMgZ2V0Tm90ZShkYXRhLCB0eXBlKSB7XHJcblx0XHRpZihcIm1haW5cIiA9PT0gdHlwZSkge1xyXG5cdFx0XHRyZXR1cm4gTm90ZS5tZXRob2RzLmdldE1haW5Ob3RlKGRhdGEpO1xyXG5cdFx0fSBlbHNlIGlmKFwibGlzdFwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLm1ldGhvZHMuZ2V0TGlzdE5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3cgdHlwZSBvZiBub3RlLlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnRzLmdldE5vdGUgPSBGYWN0b3J5LmdldE5vdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mYWN0b3J5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgTm90ZSB7XHJcblxyXG5cdHN0YXRpYyBnZXRNYWluTm90ZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IGltZyA9IChcIlwiICE9PSBkYXRhLm11bHRpbWVkaWEpID9cdGA8ZGl2IGNsYXNzPVwibWFpbi1ub3RlLXdyYXBwZXItaW1hZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbM10udXJsIH1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+YCA6IGBgO1xyXG5cclxuXHRcdGxldCBub3RlID0gYDxkaXYgY2xhc3M9XCJtYWluLW5vdGVcIj5cclxuXHRcdFx0XHRcdFx0PGgyPjxhIGhyZWY9XCIkeyBkYXRhLnVybCB9XCI+JHsgZGF0YS50aXRsZSB9PC9hPjwvaDI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieWxpbmVcIj4keyBkYXRhLmJ5bGluZSB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdCR7IGltZyB9XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjcmVkaXRcIj4keyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzNdLmNvcHlyaWdodCB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPiR7IGRhdGEuYWJzdHJhY3QgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+YDtcclxuXHJcblx0XHRyZXR1cm4gbm90ZTtcclxuXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0TGlzdE5vdGUoZGF0YSkge1xyXG5cclxuXHRcdGxldCBub3RlID0gYDxkaXYgY2xhc3M9XCJsaXN0LW5vdGVcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzBdLnVybCB9XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz48YSBocmVmPVwiJHsgZGF0YS51cmwgfVwiPiR7IGRhdGEudGl0bGUgfTwvYT48L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IGRhdGEuYnlsaW5lIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFic3RyYWN0XCI+JHsgZGF0YS5hYnN0cmFjdCB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBub3RlO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnRzLm1ldGhvZHMgPSB7XHJcblx0Z2V0TWFpbk5vdGU6IE5vdGUuZ2V0TWFpbk5vdGUsXHJcblx0Z2V0TGlzdE5vdGU6IE5vdGUuZ2V0TGlzdE5vdGVcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vdGUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9