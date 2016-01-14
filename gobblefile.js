
var gobble = require('gobble');

module.exports = gobble('src/sandermatch.js').transform('babel', {
// 	presets: ['es2015']	// gobble-babel uses babel5, not babel6
});
