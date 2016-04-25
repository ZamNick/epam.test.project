'use strict';

import config from './config.js';
import Connector from './connector.js';
import Factory from './factory.js';
import { DOM } from './DOMManipulator.js';

class Controller {

	constructor() {

		DOM.get("sections-button").click(this.sectionsButtonClickHandler);
		DOM.get("github-button").click(this.githubButtonClickHandler);

		for(let section of config.sections) {

			let element = DOM
							.create("li")
							.setHTML(section)
							.click(this.sectionsMenuItemClickHandler)
							.getElement();

			DOM.get("sections-menu-items").append(element);
		}

		DOM.get("preloader").show();

		Connector.sendRequestToServer("home", Controller.updateDataOnPage);

	}

	sectionsButtonClickHandler() {

		let sectionsMenu = DOM.get("sections-menu");

		if("hide" === sectionsMenu.getClass()) {
			sectionsMenu.setClass("show");
		} else {
			sectionsMenu.setClass("hide");
		}

	}

	githubButtonClickHandler() {
		location.href = config.GitHubReference;
	}


	sectionsMenuItemClickHandler() {

		DOM.get("sections-menu").setClass("hide");

		DOM.get("left-list").hide();
		DOM.get("right-list").hide();
		DOM.get("section-name").hide();
		DOM.get("preloader").show();

		Connector.sendRequestToServer(DOM.getHTML(this), Controller.updateDataOnPage);
	}

	static updateDataOnPage(data) {

		DOM.get("left-list").clear();
		DOM.get("right-list").clear();
		DOM.get("section-name").clear().setHTML(data.section.charAt(0).toUpperCase() + data.section.slice(1));

		for(let i = 0; i < data.results.length; ++i) {
			if(i % 2 === 0) {
				DOM.get("left-list").appendHTML(Factory.createNote(data.results[i], (i < 4) ? "main" : "list"));
			} else {
				DOM.get("right-list").appendHTML(Factory.createNote(data.results[i], (i < 4) ? "main" : "list"));
			}
		}

		DOM.get("preloader").hide();
		DOM.get("left-list").show();
		DOM.get("right-list").show();
		DOM.get("section-name").show();
	}

}

window.onload = () => {
	const _instance = new Controller();
};