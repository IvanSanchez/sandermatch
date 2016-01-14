
var sander = require( 'sander' );


// Synchronous helper function - given an array of filenames, run the minimatch
// patterns.
function _filterPattern(filenames, patterns) {
	
	var minimatch = require( 'minimatch' ),
	    matching = new Set();
	
	if ( !Array.isArray(patterns) ) {
		patterns = [ patterns ];
	}
		
	for (var pattern of patterns) {
		for (var filename of filenames) {
			if (minimatch(filename, pattern)) {
				matching.add(filename);
			}
		}
	}
	
	return matching;
}



// @function lsr(...paths, patterns): Promise
// Returns a promise of an array of filenames: the result of doing a recursive
// file listing on the paths (like the 'lsr' function of sander.js), then 
// filtered by the minimatch patterns.
// The `patterns` argument is a minimatch expression (which can be a string or
// an array of minimatch expressions).
// A filename will appear AT MOST once, even if it matches several of the minimatch
// expressions.
export function lsrMatch() {	// Apparently babelJS chokes on `(...paths, patterns)`
	var patterns = arguments[arguments.length-1];
	var paths = arguments.slice(arguments.length-1);
	return sander.lsr.call( paths ).then( allFiles => {
		return _filterPattern(allFiles, patterns);
	});
};

// // @function lsrMatchSync(...paths, patterns): Promise
// // like `lsrMatch`, but using the 'lsrSync' function of sander.js instead.
// export function lsrMatchSync(...paths, patterns) {
// 	return sander.lsrSync.call( paths ).then( allFiles => {
// 		return _filterPattern(allFiles, patterns);
// 	});
// };
// 
// // @function lsrMatchSync(...paths, patterns): Promise
// // like `lsrMatch`, but using the 'readdir' function of sander.js instead.
// export function readdirMatch(...paths, patterns) {
// 	return sander.readdir.call( paths ).then( allFiles => {
// 		return _filterPattern(allFiles, patterns);
// 	});
// };
// 
// // @function lsrMatchSync(...paths, patterns): Promise
// // like `lsrMatch`, but using the 'readdirSync' function of sander.js instead.
// export function readdirMatchSync(...paths, patterns) {
// 	return sander.readdirSync.call( paths ).then( allFiles => {
// 		return _filterPattern(allFiles, patterns);
// 	});
// };


