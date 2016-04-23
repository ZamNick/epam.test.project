'use strict';

const Note = require('./note.js');

class Factory {

	static getNote(data, type, odd) {
		if("main" === type) {
			return Note.methods.getMainNote(data, odd);
		} else if("list" === type) {
			return Note.methods.getListNote(data);
		} else {
			throw new Error("Unknow type of note.");
		}
	}

}

exports.getNote = Factory.getNote;