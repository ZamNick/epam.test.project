'use strict';

class DOMManipulator {

	constructor() { }

	get(id) {
		return document.getElementById(id);
	}

	click(element, handler) {
		element.addEventListener('click', handler, false);
	}

	create(tagname) {
		return document.createElement(tagname);
	}

	clear(element) {
		while(element.firstChild) {
			element.removeChild(element.firstChild);
		}
	}

	getClass(element) {
		return element.className;
	}

	setClass(element, classname) {
		element.className = classname;
	}

	setHTML(element, html) {
		element.innerHTML = html;
	}

	appendHTML(element, html) {
		element.innerHTML += html;
	}

	show(element) {
		if("list-of-notes" === getClass(element)) {
			element.style.display = "inline-block";
		} else {
			element.style.display = "block";
		}
	}

	hide(element) {
		element.style.display = "none";
	}

	append(parent, child) {
		parent.appendChild(child);
	}
}

export default DOMManipulator;