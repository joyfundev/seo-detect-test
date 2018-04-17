'use strict';

const Rule = require('./Rule');


class IsTagWithAttribute extends Rule{

	constructor(tag, attr){
		super();
		this.tag = tag;
		this.atrr = attr;
	}

	check(dom){
		var count = dom(`${this.tag}[${this.attr}]`).length;
		if (count > 0){
			return `There are ${count} <${this.tag}> tag with ${this.attr} attribute.`;
		}
		else{
			return '';
		}
	}
}

module.exports = IsTagWithAttribute;