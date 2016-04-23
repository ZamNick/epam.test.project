'use strict';

window.EPAM = (typeof EPAM === 'undefined') ? {} : EPAM;
window.EPAM.Test = (typeof EPAM.Test === 'undefined') ? {} : EPAM.Test;
window EPAM.Test.Project = (typeof EPAM.Test.Project === 'undefined') ? {} : EPAM.Test.Project;

window.EPAM.Test.Project.namespace = (namespace) => {

	let parts = namespace.split('.'),
		parent = EPAM.Test.Project;

	if(parts.length < 3) {
		throw new Error("Wrong namespace.");
	} else if("EPAM" !== parts[0] || "Test" !== parts[1] || "Project" !== parts[2]) {
		throw new Error("Undefined namespace was found.");
	} else {
		parts.slice(3);
	}

	for(let part of parts) {
		if("undefined" === typeof parent[part]) {
			parent[part] = {};
		}
		parent = parent[part];
	}

	return parent;
};