
module.exports = {
	/*
	* Escape special characters in the given string of html
	*
	* @param {String} html
	* @return {String}
	*
	*/
	escape: function(html){
		return String(html)
				.replace(/&/g,'&amp;')
				.replace(/"/g,'&quot;')
				.replace(/'/g,'&#39;')
				.replace(/</g,'&lt;')
				.replace(/>/g,'&gt;');
	},
	/*
	* Unescape special characters in the given string 
	*
	* @param {String} 
	* @return {String} html
	*
	*/
	unescape: function(str){
		return String(str
			   .replace('&amp;','&')
			   .replace('&quot;','"')
			   .replace('&#39;','\'')
			   .replace('&lt;','<')
			   .replace('&gt;','>');			   		   
	}
}

