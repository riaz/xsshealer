XSSHealer
=========

This is a npm module to escape and unescape html entities to minimise XSS attack on user-form inputs

## Installation
npm install xsshealer --save

## Usage

var xsshealer = require('xsshealer')
	escape    = xsshealer.escape
	unescape  = xsshealer.unescape

var html      = '<h1>Hello World</h1>',
	escaped   =	escape(html); 
	unescaped = unescaped(escaped);

console.log('html',html,'escaped',escaped,'unescaped',unescaped);

## Tests
npm test

## Contributing

In lieu of formal styleguide, take care to maintain the present style.
Add unit tests for any changed or new functionality

## Release History
* 0.1.0 Initial Release