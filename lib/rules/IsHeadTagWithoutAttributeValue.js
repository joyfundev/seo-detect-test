'use strict';

const Rule = require('./Rule');


class IsHeadTagWithoutAttributeValue extends Rule{

	constructor(tag, attr, attrValue){
		super();
		this.tag = tag;
		this.attr = attr;
		this.atrrValue = attrValue;
	}

	check(dom){
		let count = dom(`head ${this.tag}[${this.attr}=${this.attrValue}]`).length;
		if (count < 0){
			return `The <html> doesn't have <${this.tag} ${this.attr}="${this.attrValue}"> tag.`;
		}else{
			return '';
		}
    }
}

module.exports = IsHeadTagWithoutAttributeValue;
