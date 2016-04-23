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
			var sections = document.getElementsByClassName('section-item');
	
			sectionsButton.addEventListener('click', this.sectionsButtonClickHandler, false);
			githubButton.addEventListener('click', this.githubButtonClickHandler, false);
		}
	
		_createClass(Controller, [{
			key: 'sectionsButtonClickHandler',
			value: function sectionsButtonClickHandler() {
				console.log("Sections button.");
				Connector.sendRequestToServer("Arts");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTUxZjYxYTA1NGJmYTViZjVlNTciLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOzs7Ozs7QUFFQSxLQUFNLFlBQVksb0JBQVEsQ0FBUixDQUFsQjs7S0FFTSxVO0FBRUwsd0JBQWM7QUFBQTs7QUFFYixPQUFJLGlCQUFpQixTQUFTLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXJCO0FBQ0EsT0FBSSxlQUFlLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQUFuQjtBQUNBLE9BQUksZUFBZSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBbkI7QUFDQSxPQUFJLFdBQVcsU0FBUyxzQkFBVCxDQUFnQyxjQUFoQyxDQUFmOztBQUVBLGtCQUFlLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLEtBQUssMEJBQTlDLEVBQTBFLEtBQTFFO0FBQ0EsZ0JBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsS0FBSyx3QkFBNUMsRUFBc0UsS0FBdEU7QUFFQTs7OztnREFFNEI7QUFDNUIsWUFBUSxHQUFSLENBQVksa0JBQVo7QUFDQSxjQUFVLG1CQUFWLENBQThCLE1BQTlCO0FBQ0E7Ozs4Q0FFMEI7QUFDMUIsYUFBUyxJQUFULEdBQWdCLDhDQUFoQjtBQUNBOzs7Ozs7QUFJRixRQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNyQixNQUFNLFlBQVksSUFBSSxVQUFKLEVBQWxCO0FBQ0EsRUFGRCxDOzs7Ozs7QUM3QkE7Ozs7OztBQUVBLEtBQU0sU0FBUyxvQkFBUSxDQUFSLENBQWY7O0tBRU0sUztBQUVMLHVCQUFjO0FBQUE7QUFBRzs7Ozt1Q0FFVSxXLEVBQWEsUSxFQUFVOztBQUVqRCxrQkFBYyxlQUFlLE1BQTdCOztBQUVBLGtCQUFjLFlBQVksV0FBWixFQUFkOztBQUVBLFFBQUksTUFBTSw4Q0FDSCxXQURHLEdBRUgsZ0JBRkcsR0FHSCxPQUFPLE1BSGQ7O0FBS0EsUUFBSSxVQUFVO0FBQ2IsYUFBUSxLQURLO0FBRWIsY0FBUztBQUNSLHNCQUFnQjtBQURSLE1BRkk7QUFLYixXQUFNO0FBTE8sS0FBZDs7QUFTQSxVQUFNLEdBQU4sRUFBVyxPQUFYLEVBQ0UsSUFERixDQUNPLFVBQVMsUUFBVCxFQUFtQjtBQUN4QixTQUFHLFNBQVMsTUFBVCxJQUFtQixHQUFuQixJQUEwQixTQUFTLE1BQVQsR0FBa0IsR0FBL0MsRUFBb0Q7QUFDbkQsYUFBTyxRQUFQO0FBQ0EsTUFGRCxNQUVPOztBQUVOLFVBQUksUUFBUSxJQUFJLEtBQUosQ0FBVSxTQUFTLFVBQW5CLENBQVo7QUFDQSxZQUFNLFFBQU4sR0FBaUIsUUFBakI7QUFDQSxZQUFNLEtBQU47QUFDQTtBQUNELEtBVkYsRUFXRSxJQVhGLENBV08sVUFBUyxRQUFULEVBQW1CO0FBQ3hCLFlBQU8sU0FBUyxJQUFULEVBQVA7QUFDQSxLQWJGLEVBY0UsSUFkRixDQWNPLFVBQVMsSUFBVCxFQUFlO0FBQ3BCLGFBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxLQWhCRixFQWlCRSxLQWpCRixDQWlCUSxVQUFTLEtBQVQsRUFBZ0I7QUFDdEIsYUFBUSxLQUFSLENBQWMscUJBQXFCLEtBQW5DO0FBQ0EsS0FuQkY7QUFxQkE7Ozs7OztBQUlGLFNBQVEsbUJBQVIsR0FBOEIsVUFBVSxtQkFBeEMsQzs7Ozs7Ozs7QUNyREEsUUFBTyxPQUFQLEdBQWlCO0FBQ2hCLFlBQVc7QUFESyxFQUFqQixDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1NTFmNjFhMDU0YmZhNWJmNWU1N1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbm5lY3RvciA9IHJlcXVpcmUoJy4vY29ubmVjdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRcclxuXHRcdGxldCBzZWN0aW9uc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9ucy1idXR0b24nKTtcclxuXHRcdGxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG5cdFx0bGV0IGdpdGh1YkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXRodWItYnV0dG9uJyk7XHJcblx0XHRsZXQgc2VjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWN0aW9uLWl0ZW0nKTtcclxuXHJcblx0XHRzZWN0aW9uc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIsIGZhbHNlKTtcclxuXHRcdGdpdGh1YkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2l0aHViQnV0dG9uQ2xpY2tIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG5cdH1cclxuXHJcblx0c2VjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIlNlY3Rpb25zIGJ1dHRvbi5cIik7XHJcblx0XHRDb25uZWN0b3Iuc2VuZFJlcXVlc3RUb1NlcnZlcihcIkFydHNcIik7XHJcblx0fVxyXG5cclxuXHRnaXRodWJCdXR0b25DbGlja0hhbmRsZXIoKSB7XHJcblx0XHRsb2NhdGlvbi5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vWmFtTmljay9lcGFtLnRlc3QucHJvamVjdFwiO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblx0Y29uc3QgX2luc3RhbmNlID0gbmV3IENvbnRyb2xsZXIoKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbnRyb2xsZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy5qcycpO1xyXG5cclxuY2xhc3MgQ29ubmVjdG9yIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0c3RhdGljIHNlbmRSZXF1ZXN0VG9TZXJ2ZXIoc2VjdGlvbk5hbWUsIGNhbGxiYWNrKSB7XHJcblxyXG5cdFx0c2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZSB8fCBcImhvbWVcIjtcclxuXHJcblx0XHRzZWN0aW9uTmFtZSA9IHNlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0bGV0IHVybCA9IFwiaHR0cDovL2FwaS5ueXRpbWVzLmNvbS9zdmMvdG9wc3Rvcmllcy92MS9cIlxyXG5cdFx0XHQgICAgKyBzZWN0aW9uTmFtZSBcclxuXHRcdFx0ICAgICsgXCIuanNvbj9hcGkta2V5PVwiIFxyXG5cdFx0XHQgICAgKyBjb25maWcuQVBJa2V5O1xyXG5cclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb2RlOiAnY29ycydcclxuXHRcdH07XHJcblxyXG5cclxuXHRcdGZldGNoKHVybCwgb3B0aW9ucylcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuXHRcdFx0XHRcdGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiUmVxdWVzdCBmYWlsZWQ6IFwiICsgZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0cy5zZW5kUmVxdWVzdFRvU2VydmVyID0gQ29ubmVjdG9yLnNlbmRSZXF1ZXN0VG9TZXJ2ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25uZWN0b3IuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHQnQVBJa2V5JyA6ICdiNTE3MWMwZjY2NzZkNzRkYTZjYjk5ZjdjY2ZjNmFhYTowOjc1MDU5OTMzJ1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb25maWcuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9