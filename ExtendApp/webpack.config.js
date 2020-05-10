const glob = require('glob');
const path = require('path');

var jScripts = glob.sync('./Views/**/*.js');
var entry = {}

jScripts.forEach(path => {
    var parts = path.split('/')

    var controllerName = parts[2];
    var viewName = parts[3].replace(".cshtml", "");

    entry[controllerName + "_" + viewName] = path;
})

console.log(entry)

module.exports = {
    entry,
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'wwwroot/dist/js')
    },
}