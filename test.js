

var sandermatch = require( './es5/sandermatch' );



function testPattern(pattern) {
	sandermatch.lsrMatch('.', pattern).then(function(files) {
		
		console.log('This should print all files matching «' + pattern + '» :');
		
		console.log(files);
		
	});

}


testPattern('*.js');

testPattern('node_modules/*/package.*');

testPattern(['package.json', 'node_modules/*/package.*']);

testPattern('**/gobble*');

testPattern('**/minimatch/*.md');
