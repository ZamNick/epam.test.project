'use strict';

class Note {

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