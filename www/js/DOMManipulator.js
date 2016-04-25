'use strict';

let DOMManipulator = (function() {

	let _currentElement;

	return {
		get: function(id) {
			_currentElement = document.getElementById(id);
			return this;
		},

		getElement: function() {
			return _currentElement;
		},

		getBody: function() {
			_currentElement = document.body;
			return this;
		},

		click: function(handler) {
			_currentElement.addEventListener('click', handler, false);
			return this;
		},

		create: function(tagname) {
			_currentElement = document.createElement(tagname);
			return this;
		},

		clear: function() {
			while(_currentElement.firstChild) {
				_currentElement.removeChild(_currentElement.firstChild);
			}
			return this;
		},

		getClass: function() {
			return _currentElement.className;
		},

		setClass: function(classname) {
			_currentElement.className = classname;
			return this;
		},

		setHTML: function(html) {
			_currentElement.innerHTML = html;
			return this;
		},

		getHTML: function(element) {
			return element.innerHTML;
		},

		appendHTML: function(html) {
			_currentElement.innerHTML += html;
			return this;
		},

		show: function() {
			if("list-of-notes" === _currentElement.className) {
				_currentElement.style.display = "inline-block";
			} else {
				_currentElement.style.display = "block";
			}
			return this;
		},

		hide: function() {
			_currentElement.style.display = "none";
			return this;
		},

		append: function(child) {
			_currentElement.appendChild(child);
			return this;
		}
	}

})();

export { DOMManipulator as DOM };