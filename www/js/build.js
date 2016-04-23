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
	
	var Controller = function () {
		function Controller() {
			_classCallCheck(this, Controller);
	
			var sectionsButton = document.getElementById('sections-button');
			var githubButton = document.getElementById('github-button');
	
			sectionsButton.addEventListener('click', this.sectionsButtonClickHandler, false);
			githubButton.addEventListener('click', this.githubButtonClickHandler, false);
	
			var sectionsMenu = document.getElementById('sections-menu-items');
	
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;
	
			try {
				for (var _iterator = _config2.default.sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var section = _step.value;
	
	
					var li = document.createElement('li');
	
					li.innerHTML = section;
	
					li.addEventListener('click', this.sectionsMenuItemClickHandler, false);
	
					sectionsMenu.appendChild(li);
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
	
				var seactionsMenu = document.getElementById('sections-menu');
	
				if ("block" === seactionsMenu.style.display) {
					seactionsMenu.style.display = "none";
				} else {
					seactionsMenu.style.display = "block";
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
	
				Connector.sendRequestToServer(section);
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
					console.log(data);
				}).catch(function (error) {
					console.error("Request failed: " + error);
				});
			}
		}]);
	
		return Connector;
	}();
	
	exports.sendRequestToServer = Connector.sendRequestToServer;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTMxNmY2ZWQ4NTAzYmY4ZmU1ZjYiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOzs7O0FBRUE7Ozs7Ozs7O0FBRUEsS0FBTSxZQUFZLG9CQUFRLENBQVIsQ0FBbEI7O0tBRU0sVTtBQUVMLHdCQUFjO0FBQUE7O0FBRWIsT0FBSSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLGlCQUF4QixDQUFyQjtBQUNBLE9BQUksZUFBZSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBbkI7O0FBRUEsa0JBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsS0FBSywwQkFBOUMsRUFBMEUsS0FBMUU7QUFDQSxnQkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxLQUFLLHdCQUE1QyxFQUFzRSxLQUF0RTs7QUFFQSxPQUFJLGVBQWUsU0FBUyxjQUFULENBQXdCLHFCQUF4QixDQUFuQjs7QUFSYTtBQUFBO0FBQUE7O0FBQUE7QUFVYix5QkFBbUIsaUJBQU8sUUFBMUIsOEhBQW9DO0FBQUEsU0FBNUIsT0FBNEI7OztBQUVuQyxTQUFJLEtBQUssU0FBUyxhQUFULENBQXVCLElBQXZCLENBQVQ7O0FBRUEsUUFBRyxTQUFILEdBQWUsT0FBZjs7QUFFQSxRQUFHLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLEtBQUssNEJBQWxDLEVBQWdFLEtBQWhFOztBQUVBLGtCQUFhLFdBQWIsQ0FBeUIsRUFBekI7QUFDQTtBQW5CWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUJiOzs7O2dEQUU0Qjs7QUFFNUIsUUFBSSxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBQXBCOztBQUVBLFFBQUcsWUFBWSxjQUFjLEtBQWQsQ0FBb0IsT0FBbkMsRUFBNEM7QUFDM0MsbUJBQWMsS0FBZCxDQUFvQixPQUFwQixHQUE4QixNQUE5QjtBQUNBLEtBRkQsTUFFTztBQUNOLG1CQUFjLEtBQWQsQ0FBb0IsT0FBcEIsR0FBOEIsT0FBOUI7QUFDQTtBQUVEOzs7OENBRTBCO0FBQzFCLGFBQVMsSUFBVCxHQUFnQiw4Q0FBaEI7QUFDQTs7O2tEQUc4Qjs7QUFFOUIsUUFBSSxVQUFVLEtBQUssU0FBbkI7O0FBRUEsY0FBVSxtQkFBVixDQUE4QixPQUE5QjtBQUVBOzs7Ozs7QUFJRixRQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNyQixNQUFNLFlBQVksSUFBSSxVQUFKLEVBQWxCO0FBQ0EsRUFGRCxDOzs7Ozs7Ozs7OzttQkMxRGU7QUFDZCxZQUFXLDZDQURHO0FBRWQsY0FBYSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFVBQWxCLEVBQThCLFVBQTlCLEVBQTBDLFVBQTFDLEVBQXNELFVBQXRELEVBQWtFLFNBQWxFLEVBQTZFLFlBQTdFLEVBQ1IsU0FEUSxFQUNHLFFBREgsRUFDYSxRQURiLEVBQ3VCLE1BRHZCLEVBQytCLFNBRC9CLEVBQzBDLFFBRDFDLEVBQ29ELFFBRHBELEVBQzhELFVBRDlELEVBQzBFLFlBRDFFO0FBRkMsRTs7Ozs7O0FDQWY7Ozs7QUFFQTs7Ozs7Ozs7S0FFTSxTO0FBRUwsdUJBQWM7QUFBQTtBQUFHOzs7O3VDQUVVLFcsRUFBYSxRLEVBQVU7O0FBRWpELGtCQUFjLGVBQWUsTUFBN0I7O0FBRUEsa0JBQWMsWUFBWSxXQUFaLEVBQWQ7O0FBRUEsUUFBSSxvREFBa0QsV0FBbEQsc0JBQThFLGlCQUFPLE1BQXpGOztBQUVBLFFBQUksVUFBVTtBQUNiLGFBQVEsS0FESztBQUViLGNBQVM7QUFDUixzQkFBZ0I7QUFEUixNQUZJO0FBS2IsV0FBTTtBQUxPLEtBQWQ7O0FBU0EsVUFBTSxHQUFOLEVBQVcsT0FBWCxFQUNFLElBREYsQ0FDTyxVQUFTLFFBQVQsRUFBbUI7QUFDeEIsU0FBRyxTQUFTLE1BQVQsSUFBbUIsR0FBbkIsSUFBMEIsU0FBUyxNQUFULEdBQWtCLEdBQS9DLEVBQW9EO0FBQ25ELGFBQU8sUUFBUDtBQUNBLE1BRkQsTUFFTzs7QUFFTixVQUFJLFFBQVEsSUFBSSxLQUFKLENBQVUsU0FBUyxVQUFuQixDQUFaO0FBQ0EsWUFBTSxRQUFOLEdBQWlCLFFBQWpCO0FBQ0EsWUFBTSxLQUFOO0FBQ0E7QUFDRCxLQVZGLEVBV0UsSUFYRixDQVdPLFVBQVMsUUFBVCxFQUFtQjtBQUN4QixZQUFPLFNBQVMsSUFBVCxFQUFQO0FBQ0EsS0FiRixFQWNFLElBZEYsQ0FjTyxVQUFTLElBQVQsRUFBZTtBQUNwQixhQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsS0FoQkYsRUFpQkUsS0FqQkYsQ0FpQlEsVUFBUyxLQUFULEVBQWdCO0FBQ3RCLGFBQVEsS0FBUixDQUFjLHFCQUFxQixLQUFuQztBQUNBLEtBbkJGO0FBcUJBOzs7Ozs7QUFJRixTQUFRLG1CQUFSLEdBQThCLFVBQVUsbUJBQXhDLEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDkzMTZmNmVkODUwM2JmOGZlNWY2XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qcyc7XHJcblxyXG5jb25zdCBDb25uZWN0b3IgPSByZXF1aXJlKCcuL2Nvbm5lY3Rvci5qcycpO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgc2VjdGlvbnNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbnMtYnV0dG9uJyk7XHJcblx0XHRsZXQgZ2l0aHViQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpdGh1Yi1idXR0b24nKTtcclxuXHJcblx0XHRzZWN0aW9uc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIsIGZhbHNlKTtcclxuXHRcdGdpdGh1YkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG5cdFx0bGV0IHNlY3Rpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1tZW51LWl0ZW1zJyk7XHJcblxyXG5cdFx0Zm9yKGxldCBzZWN0aW9uIG9mIGNvbmZpZy5zZWN0aW9ucykge1xyXG5cclxuXHRcdFx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcblx0XHRcdGxpLmlubmVySFRNTCA9IHNlY3Rpb247XHJcblxyXG5cdFx0XHRsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VjdGlvbnNNZW51SXRlbUNsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuXHRcdFx0c2VjdGlvbnNNZW51LmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRzZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHNlYWN0aW9uc01lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbnMtbWVudScpO1xyXG5cclxuXHRcdGlmKFwiYmxvY2tcIiA9PT0gc2VhY3Rpb25zTWVudS5zdHlsZS5kaXNwbGF5KSB7XHJcblx0XHRcdHNlYWN0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2VhY3Rpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlcigpIHtcclxuXHRcdGxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9aYW1OaWNrL2VwYW0udGVzdC5wcm9qZWN0XCI7XHJcblx0fVxyXG5cclxuXHJcblx0c2VjdGlvbnNNZW51SXRlbUNsaWNrSGFuZGxlcigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHNlY3Rpb24gPSB0aGlzLmlubmVySFRNTDtcclxuXHJcblx0XHRDb25uZWN0b3Iuc2VuZFJlcXVlc3RUb1NlcnZlcihzZWN0aW9uKTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHRjb25zdCBfaW5zdGFuY2UgPSBuZXcgQ29udHJvbGxlcigpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHQnQVBJa2V5JyA6ICdiNTE3MWMwZjY2NzZkNzRkYTZjYjk5ZjdjY2ZjNmFhYTowOjc1MDU5OTMzJyxcclxuXHQnc2VjdGlvbnMnIDogWydIb21lJywgJ1dvcmxkJywgJ05hdGlvbmFsJywgJ1BvbGl0aWNzJywgJ055cmVnaW9uJywgJ0J1c2luZXNzJywgJ09waW5pb24nLCAnVGVjaG5vbG9neScsXHJcblx0XHRcdFx0ICAnU2NpZW5jZScsICdIZWFsdGgnLCAnU3BvcnRzJywgJ0FydHMnLCAnRmFzaGlvbicsICdEaW5pbmcnLCAnVHJhdmVsJywgJ01hZ2F6aW5lJywgJ1JlYWxlc3RhdGUnXVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25maWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJztcclxuXHJcbmNsYXNzIENvbm5lY3RvciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdHN0YXRpYyBzZW5kUmVxdWVzdFRvU2VydmVyKHNlY3Rpb25OYW1lLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUgfHwgXCJob21lXCI7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGxldCB1cmwgPSBgaHR0cDovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92MS8ke3NlY3Rpb25OYW1lfS5qc29uP2FwaS1rZXk9JHtjb25maWcuQVBJa2V5fWA7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGU6ICdjb3JzJ1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0ZmV0Y2godXJsLCBvcHRpb25zKVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG5cdFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuXHRcdFx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDogXCIgKyBlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnRzLnNlbmRSZXF1ZXN0VG9TZXJ2ZXIgPSBDb25uZWN0b3Iuc2VuZFJlcXVlc3RUb1NlcnZlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Nvbm5lY3Rvci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=