var fs = require('fs'),
    http = require('http');


var res = JSON.parse(fs.readFileSync('packages.json').toString('utf-8'));

var libs = {};

res.packages.forEach(function(p) {

  libs[p.name] = { 
     version: p.version,
     assets: p.assets
  }

});

function install(name) {
  var l;
  if(l = libs[name]) {

    var url = "http://cdnjs.cloudflare.com/ajax/libs/" + l.name + '/' + l.version + '/' + l.filename;
    console.log(url);
    http.request(url, function(err, res) {
      console.log(err, res);
    });

  } else {
    console.log(name, 'is not available');
  }

}

install('twitter-bootstrap');
