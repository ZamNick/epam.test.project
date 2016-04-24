'use strict';

import config from './config.js';

const Connector = require('./connector.js');
const Factory = require('./factory.js');

class Controller {

	constructor() {
		
		let sectionsButton = document.getElementById('sections-button');
		let githubButton = document.getElementById('github-button');

		sectionsButton.addEventListener('click', this.sectionsButtonClickHandler, false);
		githubButton.addEventListener('click', this.githubButtonClickHandler, false);

		let sectionsMenuItems = document.getElementById('sections-menu-items');

		for(let section of config.sections) {

			let li = document.createElement('li');

			li.innerHTML = section;

			li.addEventListener('click', this.sectionsMenuItemClickHandler, false);

			sectionsMenuItems.appendChild(li);
		}

	}

	sectionsButtonClickHandler() {
		
		let sectionsMenu = document.getElementById('sections-menu');

		if("block" === sectionsMenu.style.display) {
			sectionsMenu.style.display = "none";
		} else {
			sectionsMenu.style.display = "block";
		}

	}

	githubButtonClickHandler() {
		location.href = config.GitHubReference;
	}


	sectionsMenuItemClickHandler() {
		
		let section = this.innerHTML;

		let sectionsMenu = document.getElementById('sections-menu');

		sectionsMenu.style.display = "none";

		Connector.sendRequestToServer(section, Controller.updateDataOnPage);
	}

	static updateDataOnPage(data) {

		let leftList = document.getElementById('left-list');
		let rightList = document.getElementById('right-list');

		while(leftList.firstChild) {
			leftList.removeChild(leftList.firstChild);
		}

		while(rightList.firstChild) {
			rightList.removeChild(rightList.firstChild);
		}

		for(let i = 0; i < data.results.length; ++i) {
			if(i % 2 == 0) {
				leftList.innerHTML += Factory.getNote(data.results[i], (i < 4) ? "main" : "list");
			} else {
				rightList.innerHTML += Factory.getNote(data.results[i], (i < 4) ? "main" : "list");
			}
		}
	}

}

window.onload = () => {
	const _instance = new Controller();
};