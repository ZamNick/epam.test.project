'use strict';

const Connector = require('./connector.js');

class Controller {

	constructor() {
		
		let sectionsButton = document.getElementById('sections-button');
		let searchButton = document.getElementById('search-button');
		let githubButton = document.getElementById('github-button');

		sectionsButton.addEventListener('click', this.sectionsButtonClickHandler, false);
		githubButton.addEventListener('click', this.githubButtonClickHandler, false);

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

}

window.onload = () => {
	const _instance = new Controller();
};