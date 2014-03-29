var should    = require('chai').should,
	xsshelper = require('../index'),
	escape    = xsshelper.escape,
	unescape  = xsshelper.unescape;


describe('#escape',function(){

	it('converts & into &amp;',function(){
		escape('&').should.equal('&amp;');
	});

	it('converts " into &quot;',function(){
		escape('"').should.equal('&quot;');
	});	

	it('converts \' into &#39;',function(){
		escape('\'').should.equal('&#39;');
	});

	it('converts < into &lt;',function(){
		escape('<').should.equal('&lt;');
	});

	it('converts > into &gt;',function(){
		escape('&').should.equal('&gt;');
	});
});

describe('#unescape',function(){

	it('converts &amp; into &',function(){
		escape('&amp;').should.equal('&');
	});

	it('converts &quot; into "',function(){
		escape('&quot;').should.equal('"');
	});	

	it('converts &#39; into \'',function(){
		escape('&#39;').should.equal('\'');
	});

	it('converts &lt; into <',function(){
		escape('&lt;').should.equal('<');
	});

	it('converts &gt; into >',function(){
		escape('&gt;').should.equal('>');
	});
});