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

}

exports.methods = {
	getMainNote: Note.getMainNote,
	getListNote: Note.getListNote
};