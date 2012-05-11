/*!
* File name:   basic.js
* Description: Site-wide behavior
* Version:     1.0
*/

// usage: log('inside coolFunc',this,arguments);
// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
	log.history = log.history || [];   // store logs to an array for reference
	log.history.push(arguments);
	if(this.console){
		console.log( Array.prototype.slice.call(arguments) );
	}
};

// make it safe to use console.log always
(function (b) { function c() { } for (var d = "assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","), a; a = d.pop(); ) { b[a] = b[a] || c; } })((function () {
	try
{ console.log(); return window.console; } catch (err) { return window.console = {}; } 
})());
