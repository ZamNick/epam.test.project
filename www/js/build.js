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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var config = __webpack_require__(1);
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
				for (var _iterator = config.sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
			value: function sectionsMenuItemClickHandler() {}
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
	
	module.exports = {
		'APIkey': 'b5171c0f6676d74da6cb99f7ccfc6aaa:0:75059933',
		'sections': ['Home', 'World', 'National', 'Politics', 'Nyregion', 'Business', 'Opinion', 'Technology', 'Science', 'Health', 'Sports', 'Arts', 'Fashion', 'Dining', 'Travel', 'Magazine', 'Realestate']
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var config = __webpack_require__(1);
	
	var Connector = function () {
		function Connector() {
			_classCallCheck(this, Connector);
		}
	
		_createClass(Connector, null, [{
			key: 'sendRequestToServer',
			value: function sendRequestToServer(sectionName, callback) {
	
				sectionName = sectionName || "home";
	
				sectionName = sectionName.toLowerCase();
	
				var url = "http://api.nytimes.com/svc/topstories/v1/" + sectionName + ".json?api-key=" + config.APIkey;
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2FhZDQ2MTEwMDIxYjg2NmIyNDYiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOzs7Ozs7QUFFQSxLQUFNLFNBQVMsb0JBQVEsQ0FBUixDQUFmO0FBQ0EsS0FBTSxZQUFZLG9CQUFRLENBQVIsQ0FBbEI7O0tBRU0sVTtBQUVMLHdCQUFjO0FBQUE7O0FBRWIsT0FBSSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLGlCQUF4QixDQUFyQjtBQUNBLE9BQUksZUFBZSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBbkI7O0FBRUEsa0JBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsS0FBSywwQkFBOUMsRUFBMEUsS0FBMUU7QUFDQSxnQkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxLQUFLLHdCQUE1QyxFQUFzRSxLQUF0RTs7QUFFQSxPQUFJLGVBQWUsU0FBUyxjQUFULENBQXdCLHFCQUF4QixDQUFuQjs7QUFSYTtBQUFBO0FBQUE7O0FBQUE7QUFVYix5QkFBbUIsT0FBTyxRQUExQiw4SEFBb0M7QUFBQSxTQUE1QixPQUE0Qjs7O0FBRW5DLFNBQUksS0FBSyxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDs7QUFFQSxRQUFHLFNBQUgsR0FBZSxPQUFmOztBQUVBLFFBQUcsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsS0FBSyw0QkFBbEMsRUFBZ0UsS0FBaEU7O0FBRUEsa0JBQWEsV0FBYixDQUF5QixFQUF6QjtBQUNBO0FBbkJZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQmI7Ozs7Z0RBRTRCOztBQUU1QixRQUFJLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBcEI7O0FBRUEsUUFBRyxZQUFZLGNBQWMsS0FBZCxDQUFvQixPQUFuQyxFQUE0QztBQUMzQyxtQkFBYyxLQUFkLENBQW9CLE9BQXBCLEdBQThCLE1BQTlCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sbUJBQWMsS0FBZCxDQUFvQixPQUFwQixHQUE4QixPQUE5QjtBQUNBO0FBRUQ7Ozs4Q0FFMEI7QUFDMUIsYUFBUyxJQUFULEdBQWdCLDhDQUFoQjtBQUNBOzs7a0RBRzhCLENBSTlCOzs7Ozs7QUFJRixRQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNyQixNQUFNLFlBQVksSUFBSSxVQUFKLEVBQWxCO0FBQ0EsRUFGRCxDOzs7Ozs7OztBQ3ZEQSxRQUFPLE9BQVAsR0FBaUI7QUFDaEIsWUFBVyw2Q0FESztBQUVoQixjQUFhLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsRUFBOEIsVUFBOUIsRUFBMEMsVUFBMUMsRUFBc0QsVUFBdEQsRUFBa0UsU0FBbEUsRUFBNkUsWUFBN0UsRUFDUixTQURRLEVBQ0csUUFESCxFQUNhLFFBRGIsRUFDdUIsTUFEdkIsRUFDK0IsU0FEL0IsRUFDMEMsUUFEMUMsRUFDb0QsUUFEcEQsRUFDOEQsVUFEOUQsRUFDMEUsWUFEMUU7QUFGRyxFQUFqQixDOzs7Ozs7QUNBQTs7Ozs7O0FBRUEsS0FBTSxTQUFTLG9CQUFRLENBQVIsQ0FBZjs7S0FFTSxTO0FBRUwsdUJBQWM7QUFBQTtBQUFHOzs7O3VDQUVVLFcsRUFBYSxRLEVBQVU7O0FBRWpELGtCQUFjLGVBQWUsTUFBN0I7O0FBRUEsa0JBQWMsWUFBWSxXQUFaLEVBQWQ7O0FBRUEsUUFBSSxNQUFNLDhDQUNILFdBREcsR0FFSCxnQkFGRyxHQUdILE9BQU8sTUFIZDs7QUFLQSxRQUFJLFVBQVU7QUFDYixhQUFRLEtBREs7QUFFYixjQUFTO0FBQ1Isc0JBQWdCO0FBRFIsTUFGSTtBQUtiLFdBQU07QUFMTyxLQUFkOztBQVNBLFVBQU0sR0FBTixFQUFXLE9BQVgsRUFDRSxJQURGLENBQ08sVUFBUyxRQUFULEVBQW1CO0FBQ3hCLFNBQUcsU0FBUyxNQUFULElBQW1CLEdBQW5CLElBQTBCLFNBQVMsTUFBVCxHQUFrQixHQUEvQyxFQUFvRDtBQUNuRCxhQUFPLFFBQVA7QUFDQSxNQUZELE1BRU87O0FBRU4sVUFBSSxRQUFRLElBQUksS0FBSixDQUFVLFNBQVMsVUFBbkIsQ0FBWjtBQUNBLFlBQU0sUUFBTixHQUFpQixRQUFqQjtBQUNBLFlBQU0sS0FBTjtBQUNBO0FBQ0QsS0FWRixFQVdFLElBWEYsQ0FXTyxVQUFTLFFBQVQsRUFBbUI7QUFDeEIsWUFBTyxTQUFTLElBQVQsRUFBUDtBQUNBLEtBYkYsRUFjRSxJQWRGLENBY08sVUFBUyxJQUFULEVBQWU7QUFDcEIsYUFBUSxHQUFSLENBQVksSUFBWjtBQUNBLEtBaEJGLEVBaUJFLEtBakJGLENBaUJRLFVBQVMsS0FBVCxFQUFnQjtBQUN0QixhQUFRLEtBQVIsQ0FBYyxxQkFBcUIsS0FBbkM7QUFDQSxLQW5CRjtBQXFCQTs7Ozs7O0FBSUYsU0FBUSxtQkFBUixHQUE4QixVQUFVLG1CQUF4QyxDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3YWFkNDYxMTAwMjFiODY2YjI0NlxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XHJcbmNvbnN0IENvbm5lY3RvciA9IHJlcXVpcmUoJy4vY29ubmVjdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRcclxuXHRcdGxldCBzZWN0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1idXR0b24nKTtcclxuXHRcdGxldCBnaXRodWJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViLWJ1dHRvbicpO1xyXG5cclxuXHRcdHNlY3Rpb25zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG5cdFx0Z2l0aHViQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5naXRodWJCdXR0b25DbGlja0hhbmRsZXIsIGZhbHNlKTtcclxuXHJcblx0XHRsZXQgc2VjdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zLW1lbnUtaXRlbXMnKTtcclxuXHJcblx0XHRmb3IobGV0IHNlY3Rpb24gb2YgY29uZmlnLnNlY3Rpb25zKSB7XHJcblxyXG5cdFx0XHRsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuXHRcdFx0bGkuaW5uZXJIVE1MID0gc2VjdGlvbjtcclxuXHJcblx0XHRcdGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZWN0aW9uc01lbnVJdGVtQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG5cdFx0XHRzZWN0aW9uc01lbnUuYXBwZW5kQ2hpbGQobGkpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdHNlY3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgc2VhY3Rpb25zTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1tZW51Jyk7XHJcblxyXG5cdFx0aWYoXCJibG9ja1wiID09PSBzZWFjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkpIHtcclxuXHRcdFx0c2VhY3Rpb25zTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZWFjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Z2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0bG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1phbU5pY2svZXBhbS50ZXN0LnByb2plY3RcIjtcclxuXHR9XHJcblxyXG5cclxuXHRzZWN0aW9uc01lbnVJdGVtQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblx0Y29uc3QgX2luc3RhbmNlID0gbmV3IENvbnRyb2xsZXIoKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbnRyb2xsZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHQnQVBJa2V5JyA6ICdiNTE3MWMwZjY2NzZkNzRkYTZjYjk5ZjdjY2ZjNmFhYTowOjc1MDU5OTMzJyxcclxuXHQnc2VjdGlvbnMnIDogWydIb21lJywgJ1dvcmxkJywgJ05hdGlvbmFsJywgJ1BvbGl0aWNzJywgJ055cmVnaW9uJywgJ0J1c2luZXNzJywgJ09waW5pb24nLCAnVGVjaG5vbG9neScsXHJcblx0XHRcdFx0ICAnU2NpZW5jZScsICdIZWFsdGgnLCAnU3BvcnRzJywgJ0FydHMnLCAnRmFzaGlvbicsICdEaW5pbmcnLCAnVHJhdmVsJywgJ01hZ2F6aW5lJywgJ1JlYWxlc3RhdGUnXVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25maWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy5qcycpO1xyXG5cclxuY2xhc3MgQ29ubmVjdG9yIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0c3RhdGljIHNlbmRSZXF1ZXN0VG9TZXJ2ZXIoc2VjdGlvbk5hbWUsIGNhbGxiYWNrKSB7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZSB8fCBcImhvbWVcIjtcclxuXHJcblx0XHRzZWN0aW9uTmFtZSA9IHNlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0bGV0IHVybCA9IFwiaHR0cDovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92MS9cIlxyXG5cdFx0XHQgICAgKyBzZWN0aW9uTmFtZSBcclxuXHRcdFx0ICAgICsgXCIuanNvbj9hcGkta2V5PVwiIFxyXG5cdFx0XHQgICAgKyBjb25maWcuQVBJa2V5O1xyXG5cclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb2RlOiAnY29ycydcclxuXHRcdH07XHJcblxyXG5cclxuXHRcdGZldGNoKHVybCwgb3B0aW9ucylcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuXHRcdFx0XHRcdGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVxdWVzdCBmYWlsZWQ6IFwiICsgZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0cy5zZW5kUmVxdWVzdFRvU2VydmVyID0gQ29ubmVjdG9yLnNlbmRSZXF1ZXN0VG9TZXJ2ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25uZWN0b3IuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9