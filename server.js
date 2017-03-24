var express = require('express')
var app = express()

var skyper = require("skyper");
var virtualenv = require("virtualenv");
var packagePath = require.resolve("./package.json")
var env = virtualenv(packagePath);
 
// This is a child_process running Python using your virtualenv. You can 
// communicate with it over stdin/stdout, etc. 
//var child = env.spawnPython(["./my_python_helper.py"]);




 skyper.call(["echo123", "skype.test.user.1"], {
 // topic: "Hello world", // Note: in some cases, Skype does not modify the topic. 
  video: true
});


app.listen(3000);