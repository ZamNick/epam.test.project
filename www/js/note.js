'use strict';


/**
 * A class represent an instance of note
 * that display on user monitor and contain
 * news data from some news section.
 * @class
 * 
 * @author Nikolay Zamulov <zamulov8@gmail.com> 
 */
class Note {



	/**
	 * Function create a main note that represented on web-site
	 * like a note with big size image and this note corresponding 
	 * for more important news.
	 * 
	 * @function
	 * @param {Object} data - The news metadata.
	 * @param {Array} data.multimedia - Container of multimedia data.
	 * @param {String} data.multimedia[].url - Remote address of current one news image.
	 * @param {String} data.multimedia[].copyright - The author of current one news image.
	 * @param {String} data.url - Remote address of corresponding article on main site.
	 * @param {String} data.title - Title of current one news.
	 * @param {String} data.byline - The author of current one news.
	 * @param {String} data.abstract - Short article story of current one news.
	 * @static
	 * @returns {String} - HTML code of current one news for adding it into web-site content.
	 */
	static getMainNote(data) {

		let img = ("" !== data.multimedia) ?	`<div class="main-note-wrapper-image">
													<img src="${ "" === data.multimedia ? "" : data.multimedia[3].url }">
												</div>` : ``;

		let note = `<div class="main-note">
						<h2><a href="${ data.url }">${ data.title }</a></h2>
						<div class="byline">${ data.byline }</div>
						${ img }
						<div class="credit">${ "" === data.multimedia ? "" : data.multimedia[3].copyright }</div>
						<div class="abstract">${ data.abstract }</div>
					</div>`;

		return note;

	}



	/**
	 * Function create a list note that represented on web-site
	 * like a note with small size image and that note contains into
	 * left or right list of notes. This note corresponding
	 * for secondary news.
	 *
	 * @function
	 * @param {Object} data - The news metadata.
	 * @param {Array} data.multimedia - Container of multimedia data.
	 * @param {String} data.multimedia[].url - Remote address of current one news image.
	 * @param {String} data.url - Remote address of corresponding article on main site.
	 * @param {String} data.title - Title of current one news.
	 * @param {String} data.byline - The author of current one news.
	 * @param {String} data.abstract - Short article story of current one news.
	 * @static
	 * @returns {String} - HTML code of current one news for adding it into web-site content.
	 */
	static getListNote(data) {

		let note = `<div class="list-note">
						<img src="${ "" === data.multimedia ? "" : data.multimedia[0].url }">
						<div class="headline">
							<h3><a href="${ data.url }">${ data.title }</a></h3>
						</div>
						<div class="byline">${ data.byline }</div>
						<div class="abstract">${ data.abstract }</div>
					</div>`;

		return note;

	}



	/**
	 * Function create a search note that represented on web-site
	 * like a note with medium size image and that note contains into
	 * left or right list of notes. This note corresponding
	 * for searching news.
	 * 
	 * @function
	 * @param {Object} data - The news metadata.
	 * @param {Array} data.multimedia - Container of multimedia data.
	 * @param {String} data.multimedia[].url - Remote address of current one news image.
	 * @param {String} data.web_url - Remote address of corresponding article on main site.
	 * @param {Object} data.headline - Metadata of title of current one news.
	 * @param {String} data.headline.main - Title of current one news.
	 * @param {Object} data.byline - Metadata of author of current one news.
	 * @param {String} data.byline.original - The author of current one news.
	 * @param {String} data.snippet - Short article story of current one news.
	 * @static
	 * @returns {String} - HTML code of current one news for adding it into web-site content.
	 */
	static getSearchNote(data) {

		let img = (0 !== data.multimedia.length) ? `style="min-height: 150px;">
						<img src="${("http://static01.nyt.com/" + data.multimedia[0].url)}" style="height: 130px; width: 190px;">` : `>`;

		let note = `<div class="list-note"${ img }
						<div class="headline">
							<h3><a href="${ data.web_url }">${ data.headline.main }</a></h3>
						</div>
						<div class="byline">${ null === data.byline ? "" : data.byline.original }</div>
						<div class="abstract">${ data.snippet }</div>
					</div>`;

		return note;

	}

}

export default Note;