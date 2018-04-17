
'use strict';

const Rule = require('./Rule');


class IsTagWithoutAttribute extends Rule{

	constructor(tag, attr, attrValue){
		super();
		this.tag = tag;
		this.attr = attr;
	}

	check(dom){
		var count = dom(`${this.tag}:not([${this.attr}])`).length;
		if (count > 0){
			return `There are ${count} <${this.tag}> tag without ${this.attr} attribute.`;
		}else{
			return '';
		}
    }
}

module.exports = IsTagWithoutAttribute;