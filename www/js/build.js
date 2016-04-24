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
				location.href = "https://github.com/ZamNick/epam.test.project";
			}
		}, {
			key: 'sectionsMenuItemClickHandler',
			value: function sectionsMenuItemClickHandler() {
	
				var section = this.innerHTML;
	
				var sectionsMenu = document.getElementById('sections-menu');
	
				sectionsMenu.style.display = "none";
	
				Connector.sendRequestToServer(section, Controller.updateDataOnPage);
			}
		}], [{
			key: 'updateDataOnPage',
			value: function updateDataOnPage(data) {
	
				var leftList = document.getElementById('left-list');
				var rightList = document.getElementById('right-list');
	
				while (leftList.firstChild) {
					leftList.removeChild(leftList.firstChild);
				}
	
				while (rightList.firstChild) {
					rightList.removeChild(rightList.firstChild);
				}
	
				for (var i = 0; i < data.results.length; ++i) {
					if (i % 2 == 0) {
						leftList.innerHTML += Factory.getNote(data.results[i], i < 4 ? "main" : "list");
					} else {
						rightList.innerHTML += Factory.getNote(data.results[i], i < 4 ? "main" : "list");
					}
				}
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
		'sections': ['Home', 'World', 'National', 'Politics', 'Nyregion', 'Business', 'Opinion', 'Technology', 'Science', 'Health', 'Sports', 'Arts', 'Fashion', 'Dining', 'Travel', 'Magazine', 'Realestate']
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
	
				var note = "<div class=\"main-note\">\n\t\t\t\t\t\t<h2><a href=\"" + data.url + "\">" + data.title + "</a></h2>\n\t\t\t\t\t\t<div class=\"byline\">" + data.byline + "</div>\n\t\t\t\t\t\t<div class=\"main-note-wrapper-image\">\n\t\t\t\t\t\t\t<img src=\"" + ("" === data.multimedia ? "" : data.multimedia[3].url) + "\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"credit\">" + ("" === data.multimedia ? "" : data.multimedia[3].copyright) + "</div>\n\t\t\t\t\t\t<div class=\"abstract\">" + data.abstract + "</div>\n\t\t\t\t\t</div>";
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGQzYzBiMjY4OWJhNTUxZGJjMmQiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7OztBQUVBOzs7Ozs7OztBQUVBLEtBQU0sWUFBWSxvQkFBUSxDQUFSLENBQWxCO0FBQ0EsS0FBTSxVQUFVLG9CQUFRLENBQVIsQ0FBaEI7O0tBRU0sVTtBQUVMLHdCQUFjO0FBQUE7O0FBRWIsT0FBSSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLGlCQUF4QixDQUFyQjtBQUNBLE9BQUksZUFBZSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBbkI7O0FBRUEsa0JBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsS0FBSywwQkFBOUMsRUFBMEUsS0FBMUU7QUFDQSxnQkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxLQUFLLHdCQUE1QyxFQUFzRSxLQUF0RTs7QUFFQSxPQUFJLG9CQUFvQixTQUFTLGNBQVQsQ0FBd0IscUJBQXhCLENBQXhCOztBQVJhO0FBQUE7QUFBQTs7QUFBQTtBQVViLHlCQUFtQixpQkFBTyxRQUExQiw4SEFBb0M7QUFBQSxTQUE1QixPQUE0Qjs7O0FBRW5DLFNBQUksS0FBSyxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDs7QUFFQSxRQUFHLFNBQUgsR0FBZSxPQUFm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cURBRXVCLEtBQUssTUFGNUIsK0ZBSWMsT0FBTyxLQUFLLFVBQVosR0FBeUIsRUFBekIsR0FBOEIsS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLEdBSi9ELHFFQU11QixPQUFPLEtBQUssVUFBWixHQUF5QixFQUF6QixHQUE4QixLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsU0FOeEUscURBT3lCLEtBQUssUUFQOUIsNkJBQUo7O0FBVUEsV0FBTyxJQUFQO0FBRUE7OzsrQkFFa0IsSSxFQUFNOztBQUV4QixRQUFJLCtEQUNhLE9BQU8sS0FBSyxVQUFaLEdBQXlCLEVBQXpCLEdBQThCLEtBQUssVUFBTCxDQUFnQixDQUFoQixFQUFtQixHQUQ5RCxnRkFHaUIsS0FBSyxHQUh0QixXQUdnQyxLQUFLLEtBSHJDLHlFQUt1QixLQUFLLE1BTDVCLG9EQU15QixLQUFLLFFBTjlCLDZCQUFKOztBQVNBLFdBQU8sSUFBUDtBQUVBOzs7Ozs7QUFJRixTQUFRLE9BQVIsR0FBa0I7QUFDakIsZUFBYSxLQUFLLFdBREQ7QUFFakIsZUFBYSxLQUFLO0FBRkQsRUFBbEIsQyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZGQzYzBiMjY4OWJhNTUxZGJjMmRcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmNvbnN0IENvbm5lY3RvciA9IHJlcXVpcmUoJy4vY29ubmVjdG9yLmpzJyk7XHJcbmNvbnN0IEZhY3RvcnkgPSByZXF1aXJlKCcuL2ZhY3RvcnkuanMnKTtcclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHNlY3Rpb25zQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zLWJ1dHRvbicpO1xyXG5cdFx0bGV0IGdpdGh1YkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXRodWItYnV0dG9uJyk7XHJcblxyXG5cdFx0c2VjdGlvbnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlY3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcblx0XHRnaXRodWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuXHRcdGxldCBzZWN0aW9uc01lbnVJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1tZW51LWl0ZW1zJyk7XHJcblxyXG5cdFx0Zm9yKGxldCBzZWN0aW9uIG9mIGNvbmZpZy5zZWN0aW9ucykge1xyXG5cclxuXHRcdFx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcblx0XHRcdGxpLmlubmVySFRNTCA9IHNlY3Rpb247XHJcblxyXG5cdFx0XHRsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VjdGlvbnNNZW51SXRlbUNsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuXHRcdFx0c2VjdGlvbnNNZW51SXRlbXMuYXBwZW5kQ2hpbGQobGkpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdHNlY3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgc2VjdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zLW1lbnUnKTtcclxuXHJcblx0XHRpZihcImJsb2NrXCIgPT09IHNlY3Rpb25zTWVudS5zdHlsZS5kaXNwbGF5KSB7XHJcblx0XHRcdHNlY3Rpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZWN0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRnaXRodWJCdXR0b25DbGlja0hhbmRsZXIoKSB7XHJcblx0XHRsb2NhdGlvbi5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vWmFtTmljay9lcGFtLnRlc3QucHJvamVjdFwiO1xyXG5cdH1cclxuXHJcblxyXG5cdHNlY3Rpb25zTWVudUl0ZW1DbGlja0hhbmRsZXIoKSB7XHJcblx0XHRcclxuXHRcdGxldCBzZWN0aW9uID0gdGhpcy5pbm5lckhUTUw7XHJcblxyXG5cdFx0bGV0IHNlY3Rpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1tZW51Jyk7XHJcblxyXG5cdFx0c2VjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcblx0XHRDb25uZWN0b3Iuc2VuZFJlcXVlc3RUb1NlcnZlcihzZWN0aW9uLCBDb250cm9sbGVyLnVwZGF0ZURhdGFPblBhZ2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHVwZGF0ZURhdGFPblBhZ2UoZGF0YSkge1xyXG5cclxuXHRcdGxldCBsZWZ0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWxpc3QnKTtcclxuXHRcdGxldCByaWdodExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtbGlzdCcpO1xyXG5cclxuXHRcdHdoaWxlKGxlZnRMaXN0LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0bGVmdExpc3QucmVtb3ZlQ2hpbGQobGVmdExpc3QuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0d2hpbGUocmlnaHRMaXN0LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0cmlnaHRMaXN0LnJlbW92ZUNoaWxkKHJpZ2h0TGlzdC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdGlmKGkgJSAyID09IDApIHtcclxuXHRcdFx0XHRsZWZ0TGlzdC5pbm5lckhUTUwgKz0gRmFjdG9yeS5nZXROb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJpZ2h0TGlzdC5pbm5lckhUTUwgKz0gRmFjdG9yeS5nZXROb3RlKGRhdGEucmVzdWx0c1tpXSwgKGkgPCA0KSA/IFwibWFpblwiIDogXCJsaXN0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHRjb25zdCBfaW5zdGFuY2UgPSBuZXcgQ29udHJvbGxlcigpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHQnQVBJa2V5JyA6ICdiNTE3MWMwZjY2NzZkNzRkYTZjYjk5ZjdjY2ZjNmFhYTowOjc1MDU5OTMzJyxcclxuXHQnc2VjdGlvbnMnIDogWydIb21lJywgJ1dvcmxkJywgJ05hdGlvbmFsJywgJ1BvbGl0aWNzJywgJ055cmVnaW9uJywgJ0J1c2luZXNzJywgJ09waW5pb24nLCAnVGVjaG5vbG9neScsXHJcblx0XHRcdFx0ICAnU2NpZW5jZScsICdIZWFsdGgnLCAnU3BvcnRzJywgJ0FydHMnLCAnRmFzaGlvbicsICdEaW5pbmcnLCAnVHJhdmVsJywgJ01hZ2F6aW5lJywgJ1JlYWxlc3RhdGUnXVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25maWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmNsYXNzIENvbm5lY3RvciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdHN0YXRpYyBzZW5kUmVxdWVzdFRvU2VydmVyKHNlY3Rpb25OYW1lLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUgfHwgXCJob21lXCI7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGxldCB1cmwgPSBgaHR0cDovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92MS8ke3NlY3Rpb25OYW1lfS5qc29uP2FwaS1rZXk9JHtjb25maWcuQVBJa2V5fWA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGU6ICdjb3JzJ1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0ZmV0Y2godXJsLCBvcHRpb25zKVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG5cdFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuXHRcdFx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soZGF0YSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDogXCIgKyBlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnRzLnNlbmRSZXF1ZXN0VG9TZXJ2ZXIgPSBDb25uZWN0b3Iuc2VuZFJlcXVlc3RUb1NlcnZlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Nvbm5lY3Rvci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IE5vdGUgPSByZXF1aXJlKCcuL25vdGUuanMnKTtcclxuXHJcbmNsYXNzIEZhY3Rvcnkge1xyXG5cclxuXHRzdGF0aWMgZ2V0Tm90ZShkYXRhLCB0eXBlKSB7XHJcblx0XHRpZihcIm1haW5cIiA9PT0gdHlwZSkge1xyXG5cdFx0XHRyZXR1cm4gTm90ZS5tZXRob2RzLmdldE1haW5Ob3RlKGRhdGEpO1xyXG5cdFx0fSBlbHNlIGlmKFwibGlzdFwiID09PSB0eXBlKSB7XHJcblx0XHRcdHJldHVybiBOb3RlLm1ldGhvZHMuZ2V0TGlzdE5vdGUoZGF0YSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3cgdHlwZSBvZiBub3RlLlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnRzLmdldE5vdGUgPSBGYWN0b3J5LmdldE5vdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mYWN0b3J5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgTm90ZSB7XHJcblxyXG5cdHN0YXRpYyBnZXRNYWluTm90ZShkYXRhKSB7XHJcblxyXG5cdFx0bGV0IG5vdGUgPSBgPGRpdiBjbGFzcz1cIm1haW4tbm90ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+PGEgaHJlZj1cIiR7IGRhdGEudXJsIH1cIj4keyBkYXRhLnRpdGxlIH08L2E+PC9oMj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ5bGluZVwiPiR7IGRhdGEuYnlsaW5lIH08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW4tbm90ZS13cmFwcGVyLWltYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIkeyBcIlwiID09PSBkYXRhLm11bHRpbWVkaWEgPyBcIlwiIDogZGF0YS5tdWx0aW1lZGlhWzNdLnVybCB9XCI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3JlZGl0XCI+JHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVszXS5jb3B5cmlnaHQgfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWJzdHJhY3RcIj4keyBkYXRhLmFic3RyYWN0IH08L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PmA7XHJcblxyXG5cdFx0cmV0dXJuIG5vdGU7XHJcblxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldExpc3ROb3RlKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgbm90ZSA9IGA8ZGl2IGNsYXNzPVwibGlzdC1ub3RlXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHsgXCJcIiA9PT0gZGF0YS5tdWx0aW1lZGlhID8gXCJcIiA6IGRhdGEubXVsdGltZWRpYVswXS51cmwgfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+PGEgaHJlZj1cIiR7IGRhdGEudXJsIH1cIj4keyBkYXRhLnRpdGxlIH08L2E+PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieWxpbmVcIj4keyBkYXRhLmJ5bGluZSB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhYnN0cmFjdFwiPiR7IGRhdGEuYWJzdHJhY3QgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+YDtcclxuXHJcblx0XHRyZXR1cm4gbm90ZTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0cy5tZXRob2RzID0ge1xyXG5cdGdldE1haW5Ob3RlOiBOb3RlLmdldE1haW5Ob3RlLFxyXG5cdGdldExpc3ROb3RlOiBOb3RlLmdldExpc3ROb3RlXHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ub3RlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==