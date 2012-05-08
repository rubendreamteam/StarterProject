/*!
* File name:   module.js
* Description: Description of the module
* Version:     1.0
*/

// Rename SITE to your global namespace
var SITE = SITE || {};

// Rename "modulename" to the name of your module
SITE.modulename = (function (my, $) {
	
	var el;
	
	my.init = function(element) {
		el = element;
		
	}
	
	return my;
	
} (SITE.modulename || {}, jQuery));

jQuery(document).ready(function ($) {
	var el = $('#modulename');
	if (el.length > 0) {
		SITE.modulename.init(el);
	}
});