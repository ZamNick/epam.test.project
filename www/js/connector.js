'use strict';

import config from './config.js';

class Connector {

	constructor() { }

	static sendRequestToServer(sectionName, callback) {

		sectionName = sectionName || "home";

		sectionName = sectionName.toLowerCase();

		let url = `http://api.nytimes.com/svc/topstories/v1/${sectionName}.json?api-key=${config.APIkey}`;

		let options = {
			method: 'GET',
			headers: {
				'Content-Type': 'text/plain'
			},
			mode: 'cors'
		};


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

exports.sendRequestToServer = Connector.sendRequestToServer;