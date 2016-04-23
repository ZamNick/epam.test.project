'use strict';

class Note {

	static getMainNote(data, odd) {

		let note = `<div class="main-note ${ odd % 2 ? "left-main-note" : "right-main-note"}">
						<h2><a href="${ data.url }">${ data.title }</a></h2>
						<div class="byline">${ data.byline }</div>
						<div class="main-note-wrapper-image">
							<img src="${ data.multimedia[1].url }" alt="Photo">
						</div>
						<div class="credit">${ data.multimedia[1].copyright }</div>
						<div class="abstract">${ data.abstract }</div>
					</div>`;

		return note;

	}

	static getListNote(data) {

		let note = `<div class="list-note">
						<img src="${ data.multimedia[1].url }" alt="Photo">
						<div class="headline">
							<h3><a href="${ data.url }">${ data.title }</a></h3>
						</div>
						<div class="byline">${ data.byline }</div>
						<div class="abstract">${ data.abstract }</div>
					</div>`;

		return note;

	}

}

exports = {
	getMainNote: Note.getMainNote,
	getListNote: Note.getListNote
};