'use strict';

const Note = require('./note.js');

class Factory {

	static getNote(data, type) {
		if("main" === type) {
			return Note.methods.getMainNote(data);
		} else if("list" === type) {
			return Note.methods.getListNote(data);
		} else {
			throw new Error("Unknow type of note.");
		}
	}

}

exports.getNote = Factory.getNote;