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

		try {
			Connector.sendRequestToServer(section, Controller.updateDataOnPage);
		} catch(error) {
			console.error("Request failed: " + error);
		}

	}

	static updateDataOnPage(data) {

		let leftList = document.getElementById('left-list');
		let rightList = document.getElementById('right-list');
		let mainNotes = document.getElementById('main-notes');

		while(leftList.firstChild) {
			leftList.removeChild(leftList.firstChild);
		}

		while(rightList.firstChild) {
			rightList.removeChild(rightList.firstChild);
		}

		while(mainNotes.firstChild) {
			mainNotes.removeChild(mainNotes.firstChild);
		}

		console.log(data);

		for(let i = 0; i < data.results.length; ++i) {
			if(i < 4) {
				mainNotes.innerHTML += Factory.getNote(data.results[i], "main", i);
			} else {
				if(i % 2 == 0) {
					leftList.innerHTML += Factory.getNote(data.results[i], "list");
				} else {
					rightList.innerHTML += Factory.getNote(data.results[i], "list");
				}
			}
		}
	}

}

window.onload = () => {
	const _instance = new Controller();
};