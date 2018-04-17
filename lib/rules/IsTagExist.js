'use strict';

const Rule = require('./Rule');


class IsTagExist extends Rule{

	constructor(rootTag, tag){
		super();
		this.rootTag = rootTag;
		this.tag = tag;
		
	}

	check(dom){
		var count = dom(`${this.rootTag} ${this.tag}`).length;
		if (count < 0){
			return `The <${this.rootTag}> doesn't have <${this.tag}> tag.`;
		}
		else{
			return '';
		}
	}
}

module.exports = IsTagExist;