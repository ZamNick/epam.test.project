'use strict';

import config from './config.js';

const Connector = require('./connector.js');

class Controller {

	constructor() {
		
		let sectionsButton = document.getElementById('sections-button');
		let githubButton = document.getElementById('github-button');

		sectionsButton.addEventListener('click', this.sectionsButtonClickHandler, false);
		githubButton.addEventListener('click', this.githubButtonClickHandler, false);

		let sectionsMenu = document.getElementById('sections-menu-items');

		for(let section of config.sections) {

			let li = document.createElement('li');

			li.innerHTML = section;

			li.addEventListener('click', this.sectionsMenuItemClickHandler, false);

			sectionsMenu.appendChild(li);
		}

	}

	sectionsButtonClickHandler() {
		
		let seactionsMenu = document.getElementById('sections-menu');

		if("block" === seactionsMenu.style.display) {
			seactionsMenu.style.display = "none";
		} else {
			seactionsMenu.style.display = "block";
		}

	}

	githubButtonClickHandler() {
		location.href = "https://github.com/ZamNick/epam.test.project";
	}


	sectionsMenuItemClickHandler() {
		
		let section = this.innerHTML;

		Connector.sendRequestToServer(section);

	}

}

window.onload = () => {
	const _instance = new Controller();
};