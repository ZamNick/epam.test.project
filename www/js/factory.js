'use strict';

import Note from './note.js';

class Factory {

	static createNote(data, type) {
		if("main" === type) {
			return Note.getMainNote(data);
		} else if("list" === type) {
			return Note.getListNote(data);
		} else {
			throw new Error("Unknow type of note.");
		}
	}

}

export default Factory;