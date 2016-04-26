'use strict';

import config from './config.js';

/**
 * A class represent an instance for make connection to 
 * The New York Times server for grabing necessary data.
 * @class
 *
 * @requires config.js
 * @author Nikolay Zamulov <zamulov8@gmail.com> 
 */
class Connector {



	/**
	 * Function initializing 'url' and 'options' settings variables that
	 * needed for making request to server for grabing the top stories data.
	 * 
	 * @function
	 * @param {String} [sectionName] - The name of needed section of news.
	 * @param {Function} callback - Function that will be invoked when query will be sended.
	 * @static
	 */
	static getTopStories(sectionName, callback) {

		/**
		 * @default "home"
		 */
		sectionName = sectionName || "home";

		sectionName = sectionName.toLowerCase();

		let url = `http://api.nytimes.com/svc/topstories/v1/${sectionName}.json?api-key=${config.TopStoriesAPIkey}`;

		let options = {
			method: 'GET',
			mode: 'cors'
		};

		Connector.sendRequest(url, options, callback);

	}



	/**
	 * Function initializing 'url' and 'options' settings variables that
	 * needed for making request to server for searching some data in articles
	 * and realize server paging logic.
	 *
	 * @function
	 * @param {String} query - String of search line that was typed by user.
	 * @param {Integer} page - Needed page of data.
	 * @param {Function} callback - Function that will be invoked when query will be sended.
	 * @static
	 */
	static searchQuery(query, page, callback) {

		let url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${config.ArticleSearchAPIkey}`;

		let options = {
			method: 'GET',
			mode: 'cors'
		};

		Connector.sendRequest(url, options, callback);
			
	}



	/**
	 * Send a request to remote server for needed data.
	 * 
	 * @function
	 * @param {String} url - Url of the remote server.
	 * @param {Object} options - Settings for request.
	 * @param {String} options.method - Method of HTTP request that will be sended.
	 * @param {String} options.mode - Mode of cross-domain request.
	 * @param {Function} callback - Function that will be invoked when query will be sended.
	 * @static
	 */
	static sendRequest(url, options, callback) {

		fetch(url, options)
			.then(function(response) {
				if(response.status >= 200 && response.status < 300) {
					return response;
				} else {
					
					let error = new Error(response.statusText);
					error.response = response;
					throw error;
				}
			})
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				callback(data);
			})
			.catch(function(error) {
				console.error("Request failed: " + error);
			});

	}

}

export default Connector;