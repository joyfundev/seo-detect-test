const fs = require('fs')
const cheerio = require('cheerio')

const FileUtils = require('./utils/FileUtils')
const Rule = require('./rules/Rule')
const IsTagExist = require('./rules/IsTagExist')
const IsTagLimitCount = require('./rules/IsTagLimitCount')
const IsTagWithAttribute = require('./rules/IsTagWithAttribute')
const IsTagWithoutAttribute = require('./rules/IsTagWithoutAttribute')
const IsTagWithoutAttributeValue = require('./rules/IsTagWithoutAttributeValue')
const IsHeadTagWithoutAttributeValue = require('./rules/IsHeadTagWithoutAttributeValue')

const defaultOutput = console;
const defaultRuls = [
		    new IsTagLimitCount('h1', 1),
		    new IsTagLimitCount('strong', 15),
		    new IsTagWithoutAttribute('img', 'alt'),
		    new IsTagWithoutAttribute('a', 'rel'),
		    new IsTagExist('head', 'title'),
		    new IsHeadTagWithoutAttributeValue('meta', 'name', 'description'),
		    new IsHeadTagWithoutAttributeValue('meta', 'name', 'keywords')
		];

const fileUtils = new FileUtils();

const check = (input, ouput, checkRules) => {
	ouput = typeof ouput !== 'undefined' ? ouput : defaultOutput;
	checkRules = typeof checkRules !== 'undefined' ? checkRules : defaultRuls;

	return fileUtils.read(input).then(function(value) {
		let message = '';
		const dom = cheerio.load(value);
		
		checkRules.forEach((rule) => {
			if(rule.check(dom) !== ''){
				message += rule.check(dom)+'\n';
			}
		});
		return fileUtils.write(ouput, message);
	}).catch(function(err){
		console.log(err);
	})
}

module.exports = {
	check,
	Rule,
	IsTagLimitCount,
	IsTagExist,
	IsTagWithAttribute,
	IsTagWithoutAttributeValue,
	IsHeadTagWithoutAttributeValue,
	IsTagWithoutAttribute
};


