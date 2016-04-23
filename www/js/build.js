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
	
	var Connector = __webpack_require__(1);
	
	var Controller = function () {
		function Controller() {
			_classCallCheck(this, Controller);
	
			var sectionsButton = document.getElementById('sections-button');
			var searchButton = document.getElementById('search-button');
			var githubButton = document.getElementById('github-button');
	
			sectionsButton.addEventListener('click', this.sectionsButtonClickHandler, false);
			githubButton.addEventListener('click', this.githubButtonClickHandler, false);
	
			var sectionsMenuItems = document.getElementById('sections-menu-items').getElementsByTagName('li');
	
			console.log(sectionsMenuItems);
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
			key: 'sectionsMenuItemClickHandler',
			value: function sectionsMenuItemClickHandler() {
	
				console.log(this);
			}
		}, {
			key: 'githubButtonClickHandler',
			value: function githubButtonClickHandler() {
				location.href = "https://github.com/ZamNick/epam.test.project";
			}
		}]);
	
		return Controller;
	}();
	
	window.onload = function () {
		var _instance = new Controller();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var config = __webpack_require__(2);
	
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
		'APIkey': 'b5171c0f6676d74da6cb99f7ccfc6aaa:0:75059933'
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTUyYzFmZDE2YjhjZWUyYTZhZjciLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOzs7Ozs7QUFFQSxLQUFNLFlBQVksb0JBQVEsQ0FBUixDQUFsQjs7S0FFTSxVO0FBRUwsd0JBQWM7QUFBQTs7QUFFYixPQUFJLGlCQUFpQixTQUFTLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXJCO0FBQ0EsT0FBSSxlQUFlLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQUFuQjtBQUNBLE9BQUksZUFBZSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBbkI7O0FBRUEsa0JBQWUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsS0FBSywwQkFBOUMsRUFBMEUsS0FBMUU7QUFDQSxnQkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxLQUFLLHdCQUE1QyxFQUFzRSxLQUF0RTs7QUFFQSxPQUFJLG9CQUFvQixTQUFTLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDLG9CQUEvQyxDQUFvRSxJQUFwRSxDQUF4Qjs7QUFFQSxXQUFRLEdBQVIsQ0FBWSxpQkFBWjtBQUNBOzs7O2dEQUU0Qjs7QUFFNUIsUUFBSSxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBQXBCOztBQUVBLFFBQUcsWUFBWSxjQUFjLEtBQWQsQ0FBb0IsT0FBbkMsRUFBNEM7QUFDM0MsbUJBQWMsS0FBZCxDQUFvQixPQUFwQixHQUE4QixNQUE5QjtBQUNBLEtBRkQsTUFFTztBQUNOLG1CQUFjLEtBQWQsQ0FBb0IsT0FBcEIsR0FBOEIsT0FBOUI7QUFDQTtBQUNEOzs7a0RBRThCOztBQUU5QixZQUFRLEdBQVIsQ0FBWSxJQUFaO0FBRUE7Ozs4Q0FFMEI7QUFDMUIsYUFBUyxJQUFULEdBQWdCLDhDQUFoQjtBQUNBOzs7Ozs7QUFJRixRQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNyQixNQUFNLFlBQVksSUFBSSxVQUFKLEVBQWxCO0FBQ0EsRUFGRCxDOzs7Ozs7QUMzQ0E7Ozs7OztBQUVBLEtBQU0sU0FBUyxvQkFBUSxDQUFSLENBQWY7O0tBRU0sUztBQUVMLHVCQUFjO0FBQUE7QUFBRzs7Ozt1Q0FFVSxXLEVBQWEsUSxFQUFVOztBQUVqRCxrQkFBYyxlQUFlLE1BQTdCOztBQUVBLGtCQUFjLFlBQVksV0FBWixFQUFkOztBQUVBLFFBQUksTUFBTSw4Q0FDSCxXQURHLEdBRUgsZ0JBRkcsR0FHSCxPQUFPLE1BSGQ7O0FBS0EsUUFBSSxVQUFVO0FBQ2IsYUFBUSxLQURLO0FBRWIsY0FBUztBQUNSLHNCQUFnQjtBQURSLE1BRkk7QUFLYixXQUFNO0FBTE8sS0FBZDs7QUFTQSxVQUFNLEdBQU4sRUFBVyxPQUFYLEVBQ0UsSUFERixDQUNPLFVBQVMsUUFBVCxFQUFtQjtBQUN4QixTQUFHLFNBQVMsTUFBVCxJQUFtQixHQUFuQixJQUEwQixTQUFTLE1BQVQsR0FBa0IsR0FBL0MsRUFBb0Q7QUFDbkQsYUFBTyxRQUFQO0FBQ0EsTUFGRCxNQUVPOztBQUVOLFVBQUksUUFBUSxJQUFJLEtBQUosQ0FBVSxTQUFTLFVBQW5CLENBQVo7QUFDQSxZQUFNLFFBQU4sR0FBaUIsUUFBakI7QUFDQSxZQUFNLEtBQU47QUFDQTtBQUNELEtBVkYsRUFXRSxJQVhGLENBV08sVUFBUyxRQUFULEVBQW1CO0FBQ3hCLFlBQU8sU0FBUyxJQUFULEVBQVA7QUFDQSxLQWJGLEVBY0UsSUFkRixDQWNPLFVBQVMsSUFBVCxFQUFlO0FBQ3BCLGFBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxLQWhCRixFQWlCRSxLQWpCRixDQWlCUSxVQUFTLEtBQVQsRUFBZ0I7QUFDdEIsYUFBUSxLQUFSLENBQWMscUJBQXFCLEtBQW5DO0FBQ0EsS0FuQkY7QUFxQkE7Ozs7OztBQUlGLFNBQVEsbUJBQVIsR0FBOEIsVUFBVSxtQkFBeEMsQzs7Ozs7Ozs7QUNyREEsUUFBTyxPQUFQLEdBQWlCO0FBQ2hCLFlBQVc7QUFESyxFQUFqQixDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlNTJjMWZkMTZiOGNlZTJhNmFmN1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbm5lY3RvciA9IHJlcXVpcmUoJy4vY29ubmVjdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRcclxuXHRcdGxldCBzZWN0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1idXR0b24nKTtcclxuXHRcdGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG5cdFx0bGV0IGdpdGh1YkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXRodWItYnV0dG9uJyk7XHJcblxyXG5cdFx0c2VjdGlvbnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlY3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcblx0XHRnaXRodWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdpdGh1YkJ1dHRvbkNsaWNrSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuXHRcdGxldCBzZWN0aW9uc01lbnVJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1tZW51LWl0ZW1zJykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coc2VjdGlvbnNNZW51SXRlbXMpO1xyXG5cdH1cclxuXHJcblx0c2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIoKSB7XHJcblx0XHRcclxuXHRcdGxldCBzZWFjdGlvbnNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25zLW1lbnUnKTtcclxuXHJcblx0XHRpZihcImJsb2NrXCIgPT09IHNlYWN0aW9uc01lbnUuc3R5bGUuZGlzcGxheSkge1xyXG5cdFx0XHRzZWFjdGlvbnNNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlYWN0aW9uc01lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNlY3Rpb25zTWVudUl0ZW1DbGlja0hhbmRsZXIoKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2codGhpcyk7XHJcblxyXG5cdH1cclxuXHJcblx0Z2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyKCkge1xyXG5cdFx0bG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1phbU5pY2svZXBhbS50ZXN0LnByb2plY3RcIjtcclxuXHR9XHJcblxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cdGNvbnN0IF9pbnN0YW5jZSA9IG5ldyBDb250cm9sbGVyKCk7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanMnKTtcclxuXHJcbmNsYXNzIENvbm5lY3RvciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdHN0YXRpYyBzZW5kUmVxdWVzdFRvU2VydmVyKHNlY3Rpb25OYW1lLCBjYWxsYmFjaykge1xyXG5cclxuXHRcdHNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWUgfHwgXCJob21lXCI7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGxldCB1cmwgPSBcImh0dHA6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL3RvcHN0b3JpZXMvdjEvXCJcclxuXHRcdFx0ICAgICsgc2VjdGlvbk5hbWUgXHJcblx0XHRcdCAgICArIFwiLmpzb24/YXBpLWtleT1cIiBcclxuXHRcdFx0ICAgICsgY29uZmlnLkFQSWtleTtcclxuXHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcclxuXHRcdFx0fSxcclxuXHRcdFx0bW9kZTogJ2NvcnMnXHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHRmZXRjaCh1cmwsIG9wdGlvbnMpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcblx0XHRcdFx0XHRlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOiBcIiArIGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydHMuc2VuZFJlcXVlc3RUb1NlcnZlciA9IENvbm5lY3Rvci5zZW5kUmVxdWVzdFRvU2VydmVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29ubmVjdG9yLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0J0FQSWtleScgOiAnYjUxNzFjMGY2Njc2ZDc0ZGE2Y2I5OWY3Y2NmYzZhYWE6MDo3NTA1OTkzMydcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29uZmlnLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==