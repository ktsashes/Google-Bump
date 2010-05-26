// ==UserScript==
// @name			Google Bump
// @namespace		http://userscripts.org/scripts/show/33449
// @description		Adds some functionality to the Google web search. Main features include Multisearch, Video result extraction, Wikipedia definitions and links, and some clutter cleanup by. All options can be turned off.
// @version			2.0.0.0a
// @include			http://www.google.tld/
// @include			http://www.google.tld/#*
// @include			http://www.google.tld/search?*
// @include			http://www.google.tld/webhp?*
// @exclude			http://www.google.com/search?*&tbs=*
// ==/UserScript==

/*
	Author: KTaShes
	Date: May 20 2010
	
	Code can now be found on GitHub @ http://github.com/ktsashes/Google-Bump
	
	This code uses juicer to compile from several different javascript files.
	Juicer (C) Christian Johansen - http://cjohansen.no/en/ruby/juicer_a_css_and_javascript_packaging_tool
*/
var version = "1.19";