'use strict';

const Rule = require('./Rule');


class IsTagWithoutAttributeValue extends Rule{

	constructor(tag, attr, attrValue){
		super();
		this.tag = tag;
		this.attr = attr;
		this.atrrValue = attrValue;
	}

	check(dom){
		var count = dom(`${this.tag}[${this.attr}=${this.atrrValue}]`).length;
		if (count < 0){
			return `There are ${count} <${this.tag}> tag without ${this.attr} attribute.`;
		}else{
			return '';
		}
    }
}

module.exports = IsTagWithoutAttributeValue;