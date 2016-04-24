'use strict';

import config from './config.js';

const Connector = require('./connector.js');
const Factory = require('./factory.js');

class Controller {

	constructor() {
		
		let sectionsButton = document.getElementById('sections-button');
		let githubButton = document.getElementById('github-button');
		let sectionsMenuItems = document.getElementById('sections-menu-items');
		let preloader = document.querySelector('.cssload-loader');

		sectionsButton.addEventListener('click', this.sectionsButtonClickHandler, false);
		githubButton.addEventListener('click', this.githubButtonClickHandler, false);

		for(let section of config.sections) {

			let li = document.createElement('li');

			li.innerHTML = section;

			li.addEventListener('click', this.sectionsMenuItemClickHandler, false);

			sectionsMenuItems.appendChild(li);
		}

		preloader.style.display = "block";

		Connector.sendRequestToServer("home", Controller.updateDataOnPage);

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

		let leftList = document.getElementById('left-list');
		let rightList = document.getElementById('right-list');
		let sectionName = document.getElementById('section-name');

		leftList.style.display = "none";
		rightList.style.display = "none";
		sectionName.style.display = "none";

		let preloader = document.querySelector('.cssload-loader');

		preloader.style.display = "block";

		Connector.sendRequestToServer(section, Controller.updateDataOnPage);
	}

	static updateDataOnPage(data) {

		let leftList = document.getElementById('left-list');
		let rightList = document.getElementById('right-list');
		let sectionName = document.getElementById('section-name');
		let preloader = document.querySelector('.cssload-loader');

		while(leftList.firstChild) {
			leftList.removeChild(leftList.firstChild);
		}

		while(rightList.firstChild) {
			rightList.removeChild(rightList.firstChild);
		}

		sectionName.removeChild(sectionName.firstChild);

		sectionName.innerHTML = data.section.charAt(0).toUpperCase() + data.section.slice(1);

		for(let i = 0; i < data.results.length; ++i) {
			if(i % 2 === 0) {
				leftList.innerHTML += Factory.createNote(data.results[i], (i < 4) ? "main" : "list");
			} else {
				rightList.innerHTML += Factory.createNote(data.results[i], (i < 4) ? "main" : "list");
			}
		}

		preloader.style.display = "none";
		leftList.style.display = "inline-block";
		rightList.style.display = "inline-block";
		sectionName.style.display = "block";
	}

}

window.onload = () => {
	const _instance = new Controller();
};