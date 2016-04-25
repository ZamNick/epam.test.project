'use strict';

const Note = require('./note.js');

class Factory {

	static createNote(data, type) {
		if("main" === type) {
			return Note.methods.getMainNote(data);
		} else if("list" === type) {
			return Note.methods.getListNote(data);
		} else {
			throw new Error("Unknow type of note.");
		}
	}

}

export default Factory;