'use strict';

import config from './config.js';
import Connector from './connector.js';
import Factory from './factory.js';
import { DOM } from './DOMManipulator.js';

class Controller {

	constructor() {

		DOM.getBody().click(this.bodyClickHandler);

		DOM.get("sections-button").click(this.sectionsButtonClickHandler);
		DOM.get("search-button").click(this.searchButtonClickHandler);
		DOM.get("github-button").click(this.githubButtonClickHandler);
		DOM.get("search-go-button").click(this.searchGoButtonClickHandler);

		DOM.get("search-line").click((event) => { event.stopPropagation(); });

		for(let section of config.sections) {

			let element = DOM
							.create("li")
							.setHTML(section)
							.click(this.sectionsMenuItemClickHandler)
							.getElement();

			DOM.get("sections-menu-items").append(element);
		}

		DOM.get("preloader").show();

		Connector.getTopStories("home", Controller.updateTopStories);

	}

	bodyClickHandler() {

		DOM.get("sections-menu").setClass("hide");
		DOM.get("search-menu").setClass("hide");

	}

	sectionsButtonClickHandler(event) {

		if("show" === DOM.get("search-menu").getClass()) {

			DOM.get("search-menu").setClass("hide");

			setTimeout(() => {

				DOM.get("sections-menu").toggle();

			}, 500);

		} else {

			DOM.get("sections-menu").toggle();

		}

		event.stopPropagation();
	}

	searchButtonClickHandler(event) {

		if("show" === DOM.get("sections-menu").getClass()) {

			DOM.get("sections-menu").setClass("hide");

			setTimeout(() => {

				DOM.get("search-menu").toggle();

			}, 500);

		} else {

			DOM.get("search-menu").toggle();

		}

		event.stopPropagation();
	}

	githubButtonClickHandler() {
		location.href = config.GitHubReference;
	}


	sectionsMenuItemClickHandler(event) {

		DOM.get("sections-menu").setClass("hide");

		DOM.get("left-list").hide();
		DOM.get("right-list").hide();
		DOM.get("section-name").hide();
		DOM.get("preloader").show();

		Connector.getTopStories(DOM.getHTML(this), Controller.updateTopStories);

		event.stopPropagation();
	}
	

	searchGoButtonClickHandler(event) {

		DOM.get("left-list").hide();
		DOM.get("right-list").hide();
		DOM.get("section-name").hide();
		DOM.get("preloader").show();

		Connector.sendQuery(DOM.get("search-line").getElement().value, Controller.updateDataOnPage);

		event.stopPropagation();
	}

	static updateTopStories(data) {

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

	static updateSearches(data) {

		DOM.get("left-list").clear();
		DOM.get("right-list").clear();

		
	}

}

window.onload = () => {
	const _instance = new Controller();
};