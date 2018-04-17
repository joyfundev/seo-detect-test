### A Node.js package scan a html content and show all of SEO defects.
---

#### Usage

```js
const detector = require('seo-detector');
detector.check('./test/test.html', output, rules);
```

### Parameter

- input: can be filePath or stream
- output: can be file output path or stream, default to console
- rules: array, default predefined rules

```js
//filePath
detector.check(__dirname+'/test.html');

//stream
var wstream = fs.createWriteStream( __dirname+'/output.log');
detector.check(__dirname+'/test.html', wstream);

```

#### Custom rules in any order

```js
const {
  check,
  Rule,
  IsTagLimitCount,
  IsTagExist,
  IsTagWithAttribute,
  IsTagWithoutAttributeValue,
  IsHeadTagWithoutAttributeValue,
  IsTagWithoutAttribute
} = require('seo-detector');

class NewRule extends Rule {
  constructor(tag, ...params) {
    super();
    this.tag = tag;
    ...
  }

  check(){
    // Write logic
    return '';
  }


var rules = [
    new IsTagLimitCount('h1', 1),
    new IsTagLimitCount('strong', 15),
    new IsTagWithoutAttribute('img', 'alt'),
    new IsTagWithoutAttribute('a', 'rel'),
    new IsTagExist('head', 'title'),
    new IsHeadTagWithoutAttributeValue('meta', 'name', 'description'),
    new IsHeadTagWithoutAttributeValue('meta', 'name', 'keywords'),
    new NewRule(...params)
];
check('/test/test.html', console, rules);
```
**Default Rules.**

```js
var defaultRules = [
    new IsTagLimitCount('h1', 1),
    new IsTagLimitCount('strong', 15),
    new IsTagWithoutAttribute('img', 'alt'),
    new IsTagWithoutAttribute('a', 'rel'),
    new IsTagExist('head', 'title'),
    new IsHeadTagWithoutAttributeValue('meta', 'name', 'description'),
    new IsHeadTagWithoutAttributeValue('meta', 'name', 'keywords')
];

```
