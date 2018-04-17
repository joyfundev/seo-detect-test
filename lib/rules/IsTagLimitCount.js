'use strict';

const Rule = require('./Rule');


class IsTagLimitCount extends Rule{

	constructor(tag, limitCount){
		super();
		this.tag = tag;
		this.limitCount = limitCount;
	}

	check(dom){
		var count = dom(`${this.tag}`).length;
		if (count > this.limitCount){
			return `This HTML have more than ${this.limitCount} <${this.tag}> tag.`;
		}else{
			return '';
		}
	}
}

module.exports = IsTagLimitCount;