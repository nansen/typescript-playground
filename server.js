var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(40001, function(){
    console.log('Server running on 40001...');
});