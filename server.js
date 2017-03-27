var express = require('express')
var app = express()
var path = require('path');
var skyper = require("skyper");
var virtualenv = require("virtualenv");
var packagePath = require.resolve("./package.json")
var env = virtualenv(packagePath);
 
// This is a child_process running Python using your virtualenv. You can 
// communicate with it over stdin/stdout, etc. 
//var child = env.spawnPython(["./my_python_helper.py"]);



skyper.call(["echo123", "skype.test.user.1"], {}, function(err) {
  if (err) {
    console.error("Oh no! Something happenend", err);
  }
});
//app.use(express.logger());

app.get(/.js$/, function(request, response) {
  response.sendfile(path.resolve(request.url.substring(1)));
});

app.get('*', function(request, response) {
  response.sendfile(path.resolve('index.html'));
});

app.listen(3000);