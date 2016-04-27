'use strict';


/**
 * Major functionality of this object related to
 * manipulating with DOM elements. Needed for incapsulate
 * DOM manipulation logic. Situated between View and Controller
 * into class hierarchy of current test project.
 *
 * Based on closure principle and module programming style.
 * 
 * @author Nikolay Zamulov <zamulov8@gmail.com> 
 */
let DOMManipulator = (function() {

	let _currentElement;

	return {


		/**
		 * @param {String} id - ID of current DOM element.
		 * @returns {Object} this - Needed for chaining trick.
		 */
		get: function(id) {
			_currentElement = document.getElementById(id);
			return this;
		},


		/**
		 * @returns {DOMElement} _currentElement - Working just like a get method.
		 */
		getElement: function() {
			return _currentElement;
		},


		getBody: function() {
			_currentElement = document.body;
			return this;
		},

		getValue: function() {
			return _currentElement.value;
		},


		/**
		 * @param {Function} handler - Callback function that will be triggered when event will be occured.
		 * @returns {Object} this - Needed for chaining trick.
		 */
		click: function(handler) {
			_currentElement.addEventListener('click', handler, false);
			return this;
		},


		/**
		 * @param {String} tagname - The name of needed tag that must to be created.
		 * @returns {Object} this - Needed for chaining trick.
		 */
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


		/**
		 * @param {String} classname - The name of class that must be setted to current DOM element.
		 * @returns {Object} this - Needed for chaining trick.
		 */
		setClass: function(classname) {
			_currentElement.className = classname;
			return this;
		},


		setHTML: function(html) {
			_currentElement.innerHTML = html;
			return this;
		},


		/**
		 * @param {DOMElement} [element] - Current element.
		 * @returns {String} element.innerHTML - HTML code that containing inside the current DOM element.
		 */
		getHTML: function(element) {
			element = element || _currentElement;
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


		/**
		 * @param {DOMElement} child - DOM element that must be inserted into the current element.
		 * @returns {Object} this - Needed for chaining trick.
		 */
		append: function(child) {
			_currentElement.appendChild(child);
			return this;
		},


		toggle: function() {
			if("hide" === _currentElement.className) {
				_currentElement.className = "show";
			} else {
				_currentElement.className = "hide";
			}
			return this;
		},


		/**
		 * Function works in two mode:
		 * 1) If the second argument is was not passed then return value of needed attribute.
		 * 2) If the second argument was passed then setting up passed attribute into passed value.
		 * 
		 * @function
		 * @param {String} attribute - The name of attribute that must be setted to current element.
		 * @param {String | undefined} value - Inserting value into attribute.
		 * @returns {Object | String} - Value of needed attribute or current object for chaining.
		 **/
		attr: function(attribute, value) {
			if(undefined === value) {
				return _currentElement.getAttribute(attribute);
			} else {
				_currentElement.setAttribute(attribute, value);
				return this;
			}
		},


		keypress: function(handler) {
			_currentElement.addEventListener('keypress', handler, false);
			return this;
		}
	}

})();

export { DOMManipulator as DOM };