'use strict';

import config from './config.js';
import Connector from './connector.js';
import Factory from './factory.js';
import { DOM } from './DOMManipulator.js';


/**
 * A class represent a main instance of application, the part
 * of the application that handles user interaction.
 * A controller is the link between a user and system. It represents
 * a main point of entry.
 * @class
 * 
 * @requires config.js
 * @requires connector.js
 * @requires factory.js
 * @requires DOMManipulator.js
 * @author Nikolay Zamulov <zamulov8@gmail.com> 
 */
class Controller {

	constructor() {

		DOM.getBody().click(this.bodyClickHandler);

		DOM.get("sections-button").click(this.sectionsButtonClickHandler);
		DOM.get("search-button").click(this.searchButtonClickHandler);
		DOM.get("github-button").click(this.githubButtonClickHandler);
		DOM.get("search-go-button").click(this.searchGoButtonClickHandler);
		DOM.get("previous-page-button").click(this.previousPageButtonClickHandler);
		DOM.get("next-page-button").click(this.nextPageButtonClickHandler);

		DOM.get("search-line").click((event) => { event.stopPropagation(); });
		DOM.get("search-line").keypress(this.searchLineKeyPressHandler);

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


	searchLineKeyPressHandler(event) {

		DOM.get("search-line").attr('pure', "false");


		/**
		 * If the Enter keyboard button was pressed.
		 */
		if(13 === event.keyCode) {

			DOM.get("left-list").hide();
			DOM.get("right-list").hide();
			DOM.get("section-name").hide();

			DOM.get("current-page").setHTML(1);
			DOM.get("previous-page-button").setClass("disabled");
			
			DOM.get("preloader").show();

			DOM.get("search-line").attr('pure', "true");

			Connector.searchQuery(DOM.get("search-line").getValue(), 0, Controller.updateSearches);

		}

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

		DOM.get("paging-menu").hide();
		DOM.get("current-page").setHTML(1);
		DOM.get("previous-page-button").setClass("disabled");

		DOM.get("preloader").show();

		Connector.getTopStories(DOM.getHTML(this), Controller.updateTopStories);

		event.stopPropagation();
	}
	

	searchGoButtonClickHandler(event) {

		DOM.get("left-list").hide();
		DOM.get("right-list").hide();
		DOM.get("section-name").hide();

		DOM.get("current-page").setHTML(1);
		DOM.get("previous-page-button").setClass("disabled");
		
		DOM.get("preloader").show();

		DOM.get("search-line").attr('pure', "true");

		Connector.searchQuery(DOM.get("search-line").getValue(), 0, Controller.updateSearches);

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

		for(let i = 0; i < data.response.docs.length; ++i) {
			if(i % 2 === 0) {
				DOM.get("left-list").appendHTML(Factory.createNote(data.response.docs[i], "search"));
			} else {
				DOM.get("right-list").appendHTML(Factory.createNote(data.response.docs[i], "search"));
			}
		}

		DOM.get("preloader").hide();
		DOM.get("left-list").show();
		DOM.get("right-list").show();

		DOM.get("paging-menu").show();
	}


	previousPageButtonClickHandler(event) {

		if("false" === DOM.get("search-line").attr("pure")) {

			DOM.get("search-line").attr("pure", "true");

			DOM.get("current-page").setHTML(1);
			DOM.get("previous-page-button").setClass("disabled");

			Connector.searchQuery(DOM.get("search-line").getValue(), 0, Controller.updateSearches);

		} else {

			let page = +DOM.get("current-page").getHTML();

			page = page - 1;

			if(1 === page) {
				DOM.get("previous-page-button").setClass("disabled");
			}

			DOM.get("current-page").setHTML(page);
			Connector.searchQuery(DOM.get("search-line").getValue(), page - 1, Controller.updateSearches);

		}

		DOM.get("left-list").hide();
		DOM.get("right-list").hide();
		DOM.get("preloader").show();

		event.stopPropagation();
	}


	nextPageButtonClickHandler(event) {

		if("false" === DOM.get("search-line").attr("pure")) {

			DOM.get("search-line").attr("pure", "true");

			DOM.get("current-page").setHTML(1);
			DOM.get("previous-page-button").setClass("disabled");

			Connector.searchQuery(DOM.get("search-line").getValue(), 0, Controller.updateSearches);

		} else {

			let page = +DOM.get("current-page").getHTML();

			page = page + 1;

			DOM.get("previous-page-button").setClass("");
			DOM.get("current-page").setHTML(page);

			Connector.searchQuery(DOM.get("search-line").getValue(), page - 1, Controller.updateSearches);

		}

		DOM.get("left-list").hide();
		DOM.get("right-list").hide();
		DOM.get("preloader").show();

		event.stopPropagation();
	}

}

window.onload = () => {
	const _instance = new Controller();
};