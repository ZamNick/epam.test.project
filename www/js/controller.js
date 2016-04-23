'use strict';

const Connector = require('./connector.js');

class Controller {

	constructor() {
		
		let sectionsButton = document.getElementById('sections-button');
		let searchButton = document.getElementById('search-button');
		let githubButton = document.getElementById('github-button');
		let sections = document.getElementsByClassName('section-item');

		sectionsButton.addEventListener('click', this.sectionsButtonClickHandler, false);
		githubButton.addEventListener('click', this.githubButtonClickHandler, false);

	}

	sectionsButtonClickHandler() {
		console.log("Sections button.");
		Connector.sendRequestToServer("Arts");
	}

	githubButtonClickHandler() {
		location.href = "https://github.com/ZamNick/epam.test.project";
	}

}

window.onload = () => {
	const _instance = new Controller();
};