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
	
					Connector.sendRequestToServer("home", Controller.updateDataOnPage);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmZjZTc5Zjk5NGEyNmU1Mzc0M2UiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7Ozs7OztBQUVBLEtBQU0sWUFBWSxvQkFBUSxDQUFSLENBQWxCO0FBQ0EsS0FBTSxVQUFVLG9CQUFRLENBQVIsQ0FBaEI7O0tBRU0sVTtBQUVMLHlCQUFjO0FBQUE7O0FBRWIsU0FBSSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLGlCQUF4QixDQUFyQjtBQUNBLFNBQUksZUFBZSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBbkI7QUFDQSxTQUFJLG9CQUFvQixTQUFTLGNBQVQsQ0FBd0IscUJBQXhCLENBQXhCO0FBQ0EsU0FBSSxZQUFZLFNBQVMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBaEI7O0FBRUEsb0JBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsS0FBSywwQkFBOUMsRUFBMEUsS0FBMUU7QUFDQSxrQkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxLQUFLLHdCQUE1QyxFQUFzRSxLQUF0RTs7QUFSYTtBQUFBO0FBQUE7O0FBQUE7QUFVYiw0QkFBbUIsaUJBQU8sUUFBMUIsOEhBQW9DO0FBQUEsYUFBNUIsT0FBNEI7OztBQUVuQyxhQUFJLEtBQUssU0FBUyxhQUFU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LDhDQUFWOztBQUlBLFFBQUksaUVBQ2dCLEtBQUssR0FEckIsV0FDK0IsS0FBSyxLQURwQyxxREFFdUIsS0FBSyxNQUY1Qiw0QkFHRyxHQUhILDZDQUl1QixPQUFPLEtBQUssVUFBWixHQUF5QixFQUF6QixHQUE4QixLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsU0FKeEUscURBS3lCLEtBQUssUUFMOUIsNkJBQUo7O0FBUUEsV0FBTyxJQUFQO0FBRUE7OzsrQkFFa0IsSSxFQUFNOztBQUV4QixRQUFJLCtEQUNhLE9BQU8sS0FBSyxVQUFaLEdBQXlCLEVBQXpCLEdBQThCLEtBQUssVUFBTCxDQUFnQixDQUFoQixFQUFtQixHQUQ5RCxnRkFHaUIsS0FBSyxHQUh0QixXQUdnQyxLQUFLLEtBSHJDLHlFQUt1QixLQUFLLE1BTDVCLG9EQU15QixLQUFLLFFBTjlCLDZCQUFKOztBQVNBLFdBQU8sSUFBUDtBQUVBOzs7Ozs7QUFJRixTQUFRLE9BQVIsR0FBa0I7QUFDakIsZUFBYSxLQUFLLFdBREQ7QUFFakIsZUFBYSxLQUFLO0FBRkQsRUFBbEIsQyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYmZjZTc5Zjk5NGEyNmU1Mzc0M2VcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmNvbnN0IENvbm5lY3RvciA9IHJlcXVpcmUoJy4vY29ubmVjdG9yLmpzJyk7XHJcbmNvbnN0IEZhY3RvcnkgPSByZXF1aXJlKCcuL2ZhY3RvcnkuanMnKTtcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHNlY3Rpb25zQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zLWJ1dHRvbicpO1xyXG5cdFx0bGV0IGdpdGh1YkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXRodWItYnV0dG9uJyk7XHJcblx0XHRsZXQgc2VjdGlvbnNNZW51SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbnMtbWVudS1pdGVtcycpO1xyXG5cdFx0bGV0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jc3Nsb2FkLWxvYWRlcicpO1xyXG5cclxuXHRcdHNlY3Rpb25zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG5cdFx0Z2l0aHViQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5naXRodWJCdXR0b25DbGlja0hhbmRsZXIsIGZhbHNlKTtcclxuXHJcblx0XHRmb3IobGV0IHNlY3Rpb24gb2YgY29uZmlnLnNlY3Rpb25zKSB7XHJcblxyXG5cdFx0XHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuXHRcdFx0bGkuaW5uZXJIVE1MID0gc2VjdGlvbjtcclxuXHJcblx0XHRcdGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZWN0aW9uc01lbnVJdGVtQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRzZWN0aW9uc01lbnVJdGVtcy5hcHBlbmRDaGlsZChsaSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJlbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG5cdFx0Q29ubmVjdG9yLnNlbmRSZXF1ZXN0VG9TZXJ2ZXIoXCJob21lXCIsIENvbnRyb2xsZXIudXBkYXRlRGF0YU9uUGFnZSk7XHJcblxyXG5cdH1cclxuXHJcblx0c2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIoKSB7XHJcblx0XHRcclxuXHRcdGxldCBzZWN0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbnMtbWVudScpO1xyXG5cclxuXHRcdC8qaWYoXCJibG9ja1wiID09PSBzZWN0aW9uc01lbnUuc3R5bGUuZGlzcGxheSkge1xyXG5cdFx0XHRzZWN0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2VjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHR9Ki9cclxuXHJcblx0XHRpZihcImhpZGVcIiA9PT0gc2VjdGlvbnNNZW51LmNsYXNzTmFtZSkge1xyXG5cdFx0XHRzZWN0aW9uc01lbnUuY2xhc3NOYW1lID0gXCJzaG93XCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZWN0aW9uc01lbnUuY2xhc3NOYW1lID0gXCJoaWRlXCI7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Z2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0bG9jYXRpb24uaHJlZiA9IGNvbmZpZy5HaXRIdWJSZWZlcmVuY2U7XHJcblx0fVxyXG5cclxuXHJcblx0c2VjdGlvbnNNZW51SXRlbUNsaWNrSGFuZGxlcigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHNlY3Rpb24gPSB0aGlzLmlubmVySFRNTDtcclxuXHJcblx0XHRsZXQgc2VjdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zLW1lbnUnKTtcclxuXHJcblx0XHQvL3NlY3Rpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRzZWN0aW9uc01lbnUuY2xhc3NOYW1lID0gXCJoaWRlXCI7XHJcblxyXG5cdFx0bGV0IGxlZnRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtbGlzdCcpO1xyXG5cdFx0bGV0IHJpZ2h0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1saXN0Jyk7XHJcblx0XHRsZXQgc2VjdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbi1uYW1lJyk7XHJcblxyXG5cdFx0bGVmdExpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0cmlnaHRMaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdHNlY3Rpb25OYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcblx0XHRsZXQgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNzc2xvYWQtbG9hZGVyJyk7XHJcblxyXG5cdFx0cHJlbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG5cdFx0Q29ubmVjdG9yLnNlbmRSZXF1ZXN0VG9TZXJ2ZXIoc2VjdGlvbiwgQ29udHJvbGxlci51cGRhdGVEYXRhT25QYWdlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB1cGRhdGVEYXRhT25QYWdlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgbGVmdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1saXN0Jyk7XHJcblx0XHRsZXQgcmlnaHRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LWxpc3QnKTtcclxuXHRcdGxldCBzZWN0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLW5hbWUnKTtcclxuXHRcdGxldCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3NzbG9hZC1sb2FkZXInKTtcclxuXHJcblx0XHR3aGlsZShsZWZ0TGlzdC5maXJzdENoaWxkKSB7XHJcblx0XHRcdGxlZnRMaXN0LnJlbW92ZUNoaWxkKGxlZnRMaXN0LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHdoaWxlKHJpZ2h0TGlzdC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHJpZ2h0TGlzdC5yZW1vdmVDaGlsZChyaWdodExpc3QuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUucmVtb3ZlQ2hpbGQoc2VjdGlvbk5hbWUuZmlyc3RDaGlsZCk7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUuaW5uZXJIVE1MID0gZGF0YS5zZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGF0YS5zZWN0aW9uLnNsaWNlKDEpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLnJlc3VsdHMubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYoaSAlIDIgPT09IDApIHtcclxuXHRcdFx0XHRsZWZ0TGlzdC5pbm5lckhUTUwgKz0gRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJpZ2h0TGlzdC5pbm5lckhUTUwgKz0gRmFjdG9yeS5jcmVhdGVOb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cHJlbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGxlZnRMaXN0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cdFx0cmlnaHRMaXN0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cdFx0c2VjdGlvbk5hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHR9XHJcblxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cdGNvbnN0IF9pbnN0YW5jZSA9IG5ldyBDb250cm9sbGVyKCk7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250cm9sbGVyLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdCdBUElrZXknIDogJ2I1MTcxYzBmNjY3NmQ3NGRhNmNiOTlmN2NjZmM2YWFhOjA6NzUwNTk5MzMnLFxyXG5cdCdzZWN0aW9ucycgOiBbJ0hvbWUnLCAnV29ybGQnLCAnTmF0aW9uYWwnLCAnUG9saXRpY3MnLCAnTnlyZWdpb24nLCAnQnVzaW5lc3MnLCAnT3BpbmlvbicsICdUZWNobm9sb2d5JyxcclxuXHRcdFx0XHQgICdTY2llbmNlJywgJ0hlYWx0aCcsICdTcG9ydHMnLCAnQXJ0cycsICdGYXNoaW9uJywgJ0RpbmluZycsICdUcmF2ZWwnLCAnTWFnYXppbmUnLCAnUmVhbGVzdGF0ZSddLFxyXG5cdCdHaXRIdWJSZWZlcmVuY2UnOiAnaHR0cHM6Ly9naXRodWIuY29tL1phbU5pY2svZXBhbS50ZXN0LnByb2plY3QnXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbmZpZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuY2xhc3MgQ29ubmVjdG9yIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0c3RhdGljIHNlbmRSZXF1ZXN0VG9TZXJ2ZXIoc2VjdGlvbk5hbWUsIGNhbGxiYWNrKSB7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZSB8fCBcImhvbWVcIjtcclxuXHJcblx0XHRzZWN0aW9uTmFtZSA9IHNlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0bGV0IHVybCA9IGBodHRwOi8vYXBpLm55dGltZXMuY29tL3N2Yy90b3BzdG9yaWVzL3YxLyR7c2VjdGlvbk5hbWV9Lmpzb24/YXBpLWtleT0ke2NvbmZpZy5BUElrZXl9YDtcclxuXHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcclxuXHRcdFx0fSxcclxuXHRcdFx0bW9kZTogJ2NvcnMnXHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHRmZXRjaCh1cmwsIG9wdGlvbnMpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcblx0XHRcdFx0XHRlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRjYWxsYmFjayhkYXRhKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOiBcIiArIGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydHMuc2VuZFJlcXVlc3RUb1NlcnZlciA9IENvbm5lY3Rvci5zZW5kUmVxdWVzdFRvU2VydmVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29ubmVjdG9yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTm90ZSA9IHJlcXVpcmUoJy4vbm90ZS5qcycpO1xyXG5cclxuY2xhc3MgRmFjdG9yeSB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGVOb3RlKGRhdGEsIHR5cGUpIHtcclxuXHRcdGlmKFwibWFpblwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLm1ldGhvZHMuZ2V0TWFpbk5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2UgaWYoXCJsaXN0XCIgPT09IHR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIE5vdGUubWV0aG9kcy5nZXRMaXN0Tm90ZShkYXRhKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vdyB0eXBlIG9mIG5vdGUuXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydHMuY3JlYXRlTm90ZSA9IEZhY3RvcnkuY3JlYXRlTm90ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ZhY3RvcnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBOb3RlIHtcclxuXHJcblx0c3RhdGljIGdldE1haW5Ob3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgaW1nID0gKFwiXCIgIT09IGRhdGEubXVsdGltZWRpYSkgP1x0YDxkaXYgY2xhc3M9XCJtYWluLW5vdGUtd3JhcHBlci1pbWFnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVszXS51cmwgfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5gIDogYGA7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cIm1haW4tbm90ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+PGEgaHJlZj1cIiR7IGRhdGEudXJsIH1cIj4keyBkYXRhLnRpdGxlIH08L2E+PC9oMj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IGRhdGEuYnlsaW5lIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0JHsgaW1nIH1cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNyZWRpdFwiPiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbM10uY29weXJpZ2h0IH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImFic3RyYWN0XCI+JHsgZGF0YS5hYnN0cmFjdCB9PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5gO1xyXG5cclxuXHRcdHJldHVybiBub3RlO1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRMaXN0Tm90ZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cImxpc3Qtbm90ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7IFwiXCIgPT09IGRhdGEubXVsdGltZWRpYSA/IFwiXCIgOiBkYXRhLm11bHRpbWVkaWFbMF0udXJsIH1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgzPjxhIGhyZWY9XCIkeyBkYXRhLnVybCB9XCI+JHsgZGF0YS50aXRsZSB9PC9hPjwvaDM+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnlsaW5lXCI+JHsgZGF0YS5ieWxpbmUgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLmFic3RyYWN0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydHMubWV0aG9kcyA9IHtcclxuXHRnZXRNYWluTm90ZTogTm90ZS5nZXRNYWluTm90ZSxcclxuXHRnZXRMaXN0Tm90ZTogTm90ZS5nZXRMaXN0Tm90ZVxyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbm90ZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=