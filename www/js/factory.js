'use strict';

import Note from './note.js';

/**
 * A class represent an instance that create needed
 * news note using passed metadata of current one news
 * and needed type of note.
 * @class
 *
 * @requires note.js
 * @author Nikolay Zamulov <zamulov8@gmail.com> 
 */
class Factory {



	/**
	 * Function create a needed type of current one news note.
	 * Represent a simple factory pattern.
	 * 
	 * @function
	 * @param {Object} data - Metadata of current one news.
	 * @param {String} type - Needed type for current one news note.
	 * @static
	 * @returns {String | Error} - HTML code of current one news for adding it into 
	 * web-site content or error for unknow type note.
	 */
	static createNote(data, type) {
		if("main" === type) {
			return Note.getMainNote(data);
		} else if("list" === type) {
			return Note.getListNote(data);
		} else if("search" === type) {
			return Note.getSearchNote(data);
		} else {
			throw new Error("Unknow type of note.");
		}
	}

}

export default Factory;